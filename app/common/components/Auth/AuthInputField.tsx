"use client";

import { useState } from "react";

function formatUzbekPhoneNumber(inputVal: string) {
  const digits = inputVal.replace(/\D/g, "").slice(0, 9);
  const groups = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean);
  return groups.join(" ");
}

interface AuthInputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  variant?: "text" | "email" | "phone" | "password";
  additionalAction?: React.ReactNode;
  hasError?: boolean;
}

export default function AuthInputField({
  label,
  placeholder,
  value,
  onChange,
  variant = "text",
  additionalAction,
  hasError,
}: AuthInputFieldProps) {
  const [revealPassword, setRevealPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-[420px]">
      <div className="flex items-center justify-between text-[14px]">
        <span className="font-poppins font-medium text-brand-muted">{label}</span>
        {additionalAction}
      </div>
      <div
        className={`h-12 w-full rounded-lg bg-brand-bg border ${
          hasError ? "border-red-500" : "border-brand-border hover:border-brand-accent/50"
        } flex items-center px-4 gap-2.5 transition-all duration-200`}
      >
        {variant === "phone" && (
          <span className="font-poppins font-semibold text-[14px] text-brand-text/90 border-r border-brand-border pr-2.5">+998</span>
        )}
        <input
          type={variant === "password" && !revealPassword ? "password" : "text"}
          inputMode={variant === "phone" ? "numeric" : undefined}
          value={variant === "phone" ? formatUzbekPhoneNumber(value) : value}
          onChange={(e) =>
            onChange(variant === "phone" ? e.target.value.replace(/\D/g, "").slice(0, 9) : e.target.value)
          }
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none font-poppins font-medium text-[15px] text-brand-text placeholder:text-[#4d555a]"
        />
        {variant === "password" && (
          <button
            type="button"
            onClick={() => setRevealPassword((prev) => !prev)}
            className="cursor-pointer shrink-0 text-brand-muted hover:text-brand-text"
          >
            {revealPassword ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {hasError && (
        <span className="text-red-500 text-[12px] font-medium font-poppins mt-0.5">Hamma maydonlarni to&apos;ldiring</span>
      )}
    </div>
  );
}
