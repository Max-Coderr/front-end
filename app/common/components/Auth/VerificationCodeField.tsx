"use client";

import { useRef } from "react";

interface VerificationCodeFieldProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: boolean;
}

export default function VerificationCodeField({
  value,
  onChange,
  error = false,
}: VerificationCodeFieldProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (index: number, digit: string) => {
    const nextCode = [...value];
    nextCode[index] = digit;
    onChange(nextCode);
    if (digit && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const textData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("");
    if (textData.length) {
      e.preventDefault();
      const nextCode = Array(6).fill("");
      textData.forEach((char, i) => (nextCode[i] = char));
      onChange(nextCode);
      inputsRef.current[Math.min(textData.length, 5)]?.focus();
    }
  };

  return (
    <div className="flex items-center gap-3">
      {value.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          value={digit}
          onChange={(e) => handleDigitChange(i, e.target.value.replace(/\D/g, "").slice(-1))}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          inputMode="numeric"
          maxLength={1}
          className={`w-[52px] h-[52px] rounded-lg bg-brand-surface border text-center font-poppins font-bold text-[24px] text-brand-text outline-none transition-all duration-150 ${
            error
              ? "border-red-500 bg-red-950/20"
              : "border-brand-border focus:border-brand-accent focus:bg-brand-bg shadow-sm"
          }`}
        />
      ))}
    </div>
  );
}
