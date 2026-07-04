"use client";

import { useState } from "react";
import AuthMethodToggleTabs from "../AuthMethodToggleTabs";
import AuthInputField from "../AuthInputField";
import AuthActionButton from "../AuthActionButton";
import AuthErrorMessage from "../AuthErrorMessage";
import { UserRegistrationPayload, AuthSelectionMethod } from "../types";

interface SignUpFormProps {
  method: AuthSelectionMethod;
  onMethodChange: (method: AuthSelectionMethod) => void;
  draft: UserRegistrationPayload;
  onDraftChange: (draft: UserRegistrationPayload) => void;
  onSubmit: () => void;
  onSwitchToSignIn: () => void;
  apiError: string | null;
  isLoading: boolean;
}

export default function SignUpForm({
  method,
  onMethodChange,
  draft,
  onDraftChange,
  onSubmit,
  onSwitchToSignIn,
  apiError,
  isLoading,
}: SignUpFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const identifierValue = method === "phone" ? draft.phone : draft.email;
  const isNameEmpty = submitted && !draft.name.trim();
  const isIdentifierEmpty = submitted && !identifierValue.trim();

  const handleSignUpSubmit = () => {
    setSubmitted(true);
    if (!draft.name.trim() || !identifierValue.trim()) return;
    onSubmit();
  };

  return (
    <div className="flex flex-col gap-6 px-8 pt-8">
      <AuthMethodToggleTabs title="Ro’yxatdan o’tish" activeMethod={method} onMethodChange={onMethodChange} />

      <div className="flex flex-col gap-4">
        <AuthInputField
          label={method === "phone" ? "Foydalanuvchi ism-sharifi" : "Ismingiz"}
          placeholder={method === "phone" ? "Ism-sharifingizni kiriting" : "Ismingizni kiriting"}
          value={draft.name}
          onChange={(v) => onDraftChange({ ...draft, name: v })}
          hasError={isNameEmpty}
        />
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
      </div>

      <p className="w-full max-w-[420px] font-poppins text-[13px] text-brand-muted leading-relaxed">
        Tugmani bosish orqali siz loyihadan foydalanish shartlari va maxfiylik kelishuvini qabul qilasiz.
      </p>

      <AuthErrorMessage message={apiError} />

      <div className="flex flex-col gap-4 mt-2">
        <AuthActionButton onClick={handleSignUpSubmit} disabled={isLoading}>
          {isLoading ? "Ro'yxatga olinmoqda..." : "Ro‘yxatdan o‘tish"}
        </AuthActionButton>
        
        <div className="flex items-center gap-3 w-full max-w-[420px]">
          <div className="flex-1 h-px bg-brand-border" />
          <span className="font-poppins font-medium text-[13px] text-brand-muted">yoki</span>
          <div className="flex-1 h-px bg-brand-border" />
        </div>
        
        <AuthActionButton variant="secondary" onClick={onSwitchToSignIn}>
          Mavjud hisobga kirish
        </AuthActionButton>
      </div>
    </div>
  );
}
