export type AuthSelectionMethod = "phone" | "email";
export type SessionPipeline = "signup" | "forgot";
export type SessionWizardStep = "signin" | "signup" | "verify" | "create-password";

export interface UserRegistrationPayload {
  name: string;
  phone: string;
  email: string;
}
