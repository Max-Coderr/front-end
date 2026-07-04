import axios from "axios";
import { UserRegistrationPayload, AuthSelectionMethod } from "./types";

const BASE_AUTH_URI = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

function resolveProfileImage(rawUrl: string | null | undefined): string | null {
  if (!rawUrl) return null;
  return rawUrl.startsWith("http") ? rawUrl : `${BASE_AUTH_URI}/${rawUrl}`;
}

export type LoginChannel = "number" | "email";

export function formatLoginInput(method: AuthSelectionMethod, payload: UserRegistrationPayload): string {
  return method === "phone" ? `+998${payload.phone}` : payload.email.trim();
}

export function detectLoginMethod(method: AuthSelectionMethod): LoginChannel {
  return method === "phone" ? "number" : "email";
}

export async function registerNewUser(fullName: string, identifier: string, channel: LoginChannel): Promise<void> {
  await axios.post(`${BASE_AUTH_URI}/auth/sign-up`, { fullName, login: identifier, loginType: channel });
}

export async function authenticateUser(identifier: string, pass: string) {
  const { data } = await axios.post<{ accessToken: string }>(`${BASE_AUTH_URI}/auth/sign-in`, {
    login: identifier,
    password: pass,
  });
  return data;
}

export async function validateVerificationCode(identifier: string, token: string): Promise<void> {
  await axios.post(`${BASE_AUTH_URI}/auth/verify-otp`, { login: identifier, code: token });
}

export async function requestVerificationCodeResend(identifier: string, channel: LoginChannel): Promise<void> {
  await axios.post(`${BASE_AUTH_URI}/auth/resend-otp`, { login: identifier, loginType: channel });
}

export async function defineUserPassword(identifier: string, verificationCode: string, pass: string): Promise<void> {
  await axios.post(`${BASE_AUTH_URI}/auth/set-password`, { login: identifier, code: verificationCode, password: pass });
}

const AUTH_SESSION_TOKEN = "uzchess_token";

export function persistSessionToken(token: string): void {
  localStorage.setItem(AUTH_SESSION_TOKEN, token);
}

export function retrieveSessionToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_SESSION_TOKEN);
}

export function extractUserIdFromSession(token: string): number | null {
  return parseJwtToken(token)?.id ?? null;
}

function parseJwtToken(token: string): { id: number; login: string; role: string } | null {
  try {
    const section = token.split(".")[1];
    return JSON.parse(atob(section.replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
}

export interface AuthenticatedUserProfile {
  id: number;
  fullName: string;
  profileImageUrl: string | null;
  login: string;
  loginType: LoginChannel;
  birthDate: string | null;
}

export async function fetchProfileData(token: string): Promise<AuthenticatedUserProfile | null> {
  const decoded = parseJwtToken(token);
  if (!decoded) return null;
  try {
    const { data } = await axios.get(`${BASE_AUTH_URI}/admin/users/${decoded.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return {
      id: decoded.id,
      fullName: data.fullName,
      profileImageUrl: resolveProfileImage(data.profileImage),
      login: data.login,
      loginType: data.loginType,
      birthDate: data.birthDate,
    };
  } catch {
    return null;
  }
}

export function removeSessionToken(): void {
  localStorage.removeItem(AUTH_SESSION_TOKEN);
}

export function checkSessionExpiry(token: string): boolean {
  try {
    const section = token.split(".")[1];
    const decoded = JSON.parse(atob(section.replace(/-/g, "+").replace(/_/g, "/")));
    if (!decoded.exp) return false;
    return Date.now() >= decoded.exp * 1000;
  } catch {
    return true;
  }
}

export async function modifyProfileDetails(
  id: number,
  token: string,
  fields: {
    fullName?: string;
    birthDate?: string;
    profileImage?: File;
  }
): Promise<AuthenticatedUserProfile> {
  const payload = new FormData();
  if (fields.fullName !== undefined) payload.append("fullName", fields.fullName);
  if (fields.birthDate !== undefined) payload.append("birthDate", fields.birthDate);
  if (fields.profileImage) payload.append("profileImage", fields.profileImage);
  
  const { data } = await axios.patch(`${BASE_AUTH_URI}/admin/users/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return {
    id,
    fullName: data.fullName,
    profileImageUrl: resolveProfileImage(data.profileImage),
    login: data.login,
    loginType: data.loginType,
    birthDate: data.birthDate,
  };
}

export async function modifyLoginIdentifier(id: number, token: string, identifier: string, channel: LoginChannel): Promise<void> {
  await axios.patch(
    `${BASE_AUTH_URI}/admin/users/${id}`,
    { login: identifier, loginType: channel },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

export async function setUserAsVerified(id: number, token: string): Promise<void> {
  await axios.patch(
    `${BASE_AUTH_URI}/admin/users/${id}`,
    { isVerified: true },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

const TRANSLATED_API_ERRORS: Record<string, string> = {
  "Unauthorized": "Login yoki parol noto‘g‘ri",
  "User with given login already exists": "Bu login bilan foydalanuvchi allaqachon ro‘yxatdan o‘tgan",
  "Codes do not match": "Kod noto‘g‘ri kiritildi",
  "Code expired": "Kod muddati tugagan, qaytadan yuboring",
  "Code not expired yet": "Kod hali amal qiladi, biroz kutib turing",
  "Does not exist": "Bunday foydalanuvchi topilmadi",
  "User with given login does not exist": "Bunday foydalanuvchi topilmadi",
  "User with given login and loginType does not exist": "Bunday foydalanuvchi topilmadi",
  "Code is wrong": "Kod noto‘g‘ri",
};

export function parseAxiosExceptionMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const rawMsg = error.response?.data?.message;
    if (Array.isArray(rawMsg)) return "Ma’lumotlarni tekshirib, qaytadan urinib ko‘ring";
    if (typeof rawMsg === "string") return TRANSLATED_API_ERRORS[rawMsg] || rawMsg;
  }
  return "Xatolik yuz berdi, qaytadan urinib ko‘ring";
}
