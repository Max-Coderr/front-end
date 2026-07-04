"use client";

import { useState } from "react";
import AuthNavigationHeader from "../AuthNavigationHeader";
import AuthInputField from "../AuthInputField";
import AuthActionButton from "../AuthActionButton";
import AuthErrorMessage from "../AuthErrorMessage";
import { SessionPipeline } from "../types";

interface CreatePasswordScreenProps {
  flow: SessionPipeline;
  onBack: () => void;
  onSubmit: (password: string) => void;
  apiError: string | null;
  isLoading: boolean;
}

const PASSWORD_CHECKS = [
  { label: "Kamida 6 ta belgidan iborat bo‘lish", test: (p: string) => p.length >= 6 },
  { label: "Kamida bitta raqam qatnashishi", test: (p: string) => /\d/.test(p) },
  { label: "Kamida bitta bosh lotin harfi (A-Z) qatnashishi", test: (p: string) => /[A-Z]/.test(p) },
  { label: "Kamida bitta maxsus belgi qatnashishi (!, @, #, $, ...)", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

const STRENGTH_BAR_COLORS = ["bg-red-500", "bg-amber-500", "bg-brand-accent", "bg-brand-accent"];

export default function CreatePasswordScreen({
  flow,
  onBack,
  onSubmit,
  apiError,
  isLoading,
}: CreatePasswordScreenProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const verifiedRulesCount = PASSWORD_CHECKS.filter((rule) => rule.test(password)).length;
  const isFormValid = verifiedRulesCount === PASSWORD_CHECKS.length && password === confirmPassword;

  return (
    <div className="flex flex-col gap-6 px-8 pt-8">
      <AuthNavigationHeader
        title={flow === "forgot" ? "Parolni tiklash" : "Parol o‘rnatish"}
        onBack={onBack}
      />

      <div className="flex flex-col gap-4">
        <AuthInputField
          label="Yangi parol"
          placeholder="Yangi parolni kiriting"
          variant="password"
          value={password}
          onChange={setPassword}
        />
        <AuthInputField
          label="Parolni takrorlash"
          placeholder="Yangi parolni qayta kiriting"
          variant="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[420px] p-4 rounded-xl bg-brand-surface border border-brand-border/60">
        <div className="flex items-center gap-2">
          {PASSWORD_CHECKS.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1.5 rounded-full transition-all duration-350 ${
                i < verifiedRulesCount
                  ? STRENGTH_BAR_COLORS[verifiedRulesCount - 1]
                  : "bg-brand-border/50"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2.5 mt-1">
          {PASSWORD_CHECKS.map((rule) => {
            const isCompleted = rule.test(password);
            return (
              <div key={rule.label} className="flex items-center gap-2.5">
                <span
                  className={`block w-2 h-2 rounded-full transition-colors ${
                    isCompleted ? "bg-brand-accent" : "bg-brand-muted/40"
                  }`}
                />
                <span className="font-poppins text-[13px] text-brand-text/90">{rule.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <AuthErrorMessage message={apiError} />

      <div className="mt-4">
        <AuthActionButton
          onClick={() => isFormValid && onSubmit(password)}
          disabled={isLoading || !isFormValid}
        >
          Tasdiqlash
        </AuthActionButton>
      </div>
    </div>
  );
}
