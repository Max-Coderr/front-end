"use client";

import { useEffect, useState } from "react";
import AuthNavigationHeader from "../AuthNavigationHeader";
import AuthActionButton from "../AuthActionButton";
import AuthErrorMessage from "../AuthErrorMessage";
import VerificationCodeField from "../VerificationCodeField";
import { SessionPipeline, AuthSelectionMethod } from "../types";

interface VerificationScreenProps {
  flow: SessionPipeline;
  method: AuthSelectionMethod;
  destination: string;
  code: string[];
  onCodeChange: (code: string[]) => void;
  onBack: () => void;
  onEditDestination: () => void;
  onSubmit: () => void;
  onResend: () => Promise<boolean>;
  apiError: string | null;
  hasError: boolean;
  isLoading: boolean;
}

const SMS_RESEND_DURATION = 59;

export default function VerificationScreen({
  flow,
  method,
  destination,
  code,
  onCodeChange,
  onBack,
  onEditDestination,
  onSubmit,
  onResend,
  apiError,
  hasError,
  isLoading,
}: VerificationScreenProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(SMS_RESEND_DURATION);

  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const intervalId = setTimeout(() => setSecondsRemaining((s) => s - 1), 1000);
    return () => clearTimeout(intervalId);
  }, [secondsRemaining]);

  const triggerOtpResend = async () => {
    const success = await onResend();
    if (success) {
      setSecondsRemaining(SMS_RESEND_DURATION);
    }
  };

  const windowTitle = flow === "forgot" ? "Parolni tiklash" : "Raqamni tasdiqlash";
  const statusPrompt =
    method === "phone"
      ? "Sms-xabar orqali yuborilgan tasdiqlash kodini kiriting"
      : "Elektron pochta manzilingizga yuborilgan tasdiqlash kodini kiriting";
      
  const formattedMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
  const formattedSeconds = String(secondsRemaining % 60).padStart(2, "0");

  return (
    <div className="flex flex-col gap-6 px-8 pt-8">
      <AuthNavigationHeader title={windowTitle} onBack={onBack} />

      <p className="w-full max-w-[420px] font-poppins font-medium text-[16px] text-brand-text/95">
        {statusPrompt}
      </p>

      <button
        onClick={onEditDestination}
        className="flex items-center gap-2 h-10 px-4 rounded-xl bg-brand-surface border border-brand-border w-fit cursor-pointer text-brand-text hover:bg-brand-border/60 transition-colors"
      >
        <span className="font-poppins font-medium text-[14px]">
          {method === "phone" ? `+998 ${destination}` : destination}
        </span>
        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>

      <div className="flex flex-col gap-3">
        <VerificationCodeField value={code} onChange={onCodeChange} error={hasError} />
        <span className="font-poppins font-medium text-[13px] text-brand-muted">Kodni kiriting</span>
      </div>

      <div className="flex items-center gap-2 text-[14px]">
        <span className="font-poppins text-brand-muted">Kodni qayta yuborish:</span>
        {secondsRemaining > 0 ? (
          <span className={`font-poppins font-semibold ${secondsRemaining > 20 ? "text-brand-accent" : "text-amber-500"}`}>
            {formattedMinutes}:{formattedSeconds}
          </span>
        ) : (
          <button
            onClick={triggerOtpResend}
            className="cursor-pointer text-brand-accent hover:text-brand-accent-hover p-1 rounded bg-brand-surface border border-brand-border active:scale-95 transition-all"
            title="Qayta yuborish"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
            </svg>
          </button>
        )}
      </div>

      <AuthErrorMessage message={apiError} />

      <div className="mt-4">
        <AuthActionButton onClick={onSubmit} disabled={isLoading}>
          Tasdiqlash
        </AuthActionButton>
      </div>
    </div>
  );
}
