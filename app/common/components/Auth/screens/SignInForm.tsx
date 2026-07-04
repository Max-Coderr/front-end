"use client";

import { useState } from "react";
import AuthMethodToggleTabs from "../AuthMethodToggleTabs";
import AuthInputField from "../AuthInputField";
import AuthActionButton from "../AuthActionButton";
import AuthErrorMessage from "../AuthErrorMessage";
import { UserRegistrationPayload, AuthSelectionMethod } from "../types";

interface SignInFormProps {
  method: AuthSelectionMethod;
  onMethodChange: (method: AuthSelectionMethod) => void;
  draft: UserRegistrationPayload;
  onDraftChange: (draft: UserRegistrationPayload) => void;
  passwordVal: string;
  onPasswordChange: (password: string) => void;
  onSubmit: () => void;
  onForgotPassword: () => void;
  onSwitchToSignUp: () => void;
  apiError: string | null;
  isLoading: boolean;
}

export default function SignInForm({
  method,
  onMethodChange,
  draft,
  onDraftChange,
  passwordVal,
  onPasswordChange,
  onSubmit,
  onForgotPassword,
  onSwitchToSignUp,
  apiError,
  isLoading,
}: SignInFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const identifierValue = method === "phone" ? draft.phone : draft.email;
  const isIdentifierEmpty = submitted && !identifierValue.trim();
  const isPasswordEmpty = submitted && !passwordVal.trim();

  const handleSignInSubmit = () => {
    setSubmitted(true);
    if (!identifierValue.trim() || !passwordVal.trim()) return;
    onSubmit();
  };

  return (
    <div className="flex flex-col gap-6 px-8 pt-8">
      <AuthMethodToggleTabs title="Tizimga kirish" activeMethod={method} onMethodChange={onMethodChange} />

      <div className="flex flex-col gap-4">
        {method === "phone" ? (
          <AuthInputField
            label="Telefon raqami"
            placeholder="__ ___ __ __"
            variant="phone"
            value={draft.phone}
            onChange={(v) => onDraftChange({ ...draft, phone: v })}
            hasError={isIdentifierEmpty}
          />
        ) : (
          <AuthInputField
            label="Elektron pochta manzili"
            placeholder="pochta@example.com"
            variant="email"
            value={draft.email}
            onChange={(v) => onDraftChange({ ...draft, email: v })}
            hasError={isIdentifierEmpty}
          />
        )}

        <AuthInputField
          label="Parol"
          placeholder="Maxfiy parolingizni kiriting"
          variant="password"
          value={passwordVal}
          onChange={onPasswordChange}
          hasError={isPasswordEmpty}
          additionalAction={
            <button
              onClick={onForgotPassword}
              className="font-poppins text-[13px] text-brand-accent hover:text-brand-accent-hover cursor-pointer transition-colors"
            >
              Parolni unutdingizmi?
            </button>
          }
        />
      </div>

      <AuthErrorMessage message={apiError} />

      <div className="flex flex-col gap-4 mt-2">
        <AuthActionButton onClick={handleSignInSubmit} disabled={isLoading}>
          {isLoading ? "Kirilmoqda..." : "Tizimga kirish"}
        </AuthActionButton>
        
        <div className="flex items-center gap-3 w-full max-w-[420px]">
          <div className="flex-1 h-px bg-brand-border" />
          <span className="font-poppins font-medium text-[13px] text-brand-muted">yoki</span>
          <div className="flex-1 h-px bg-brand-border" />
        </div>
        
        <AuthActionButton variant="secondary" onClick={onSwitchToSignUp}>
          Yangi hisob yaratish
        </AuthActionButton>
      </div>
    </div>
  );
}
