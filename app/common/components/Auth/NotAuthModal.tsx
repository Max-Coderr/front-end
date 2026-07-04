"use client";

import Image from "next/image";
import AuthBrandingPanel from "./AuthBrandingPanel";

interface NotAuthModalProps {
  open: boolean;
  onClose: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
}

export default function NotAuthModal({ open, onClose, onSignIn, onSignUp }: NotAuthModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex flex-col items-center gap-5" onClick={(e) => e.stopPropagation()}>
        <Image src="/icon1.svg" alt="UzChess Logo" width={100} height={26} className="opacity-90" />

        <div className="relative flex items-start">
          <div className="w-[910px] h-[600px] rounded-xl bg-brand-surface border border-brand-border flex overflow-hidden shadow-2xl">
            <div className="w-[470px] h-full flex flex-col items-center justify-center px-8 gap-5">
              <Image
                src="/not-auth-lock.png"
                alt="Locked Access"
                width={260}
                height={200}
                className="shrink-0"
              />

              <h2 className="w-full max-w-[420px] text-brand-text text-[20px] font-semibold font-poppins text-center leading-snug">
                Portal imkoniyatlaridan to&apos;liq foydalanish uchun profilga kiring
              </h2>

              <p className="w-full max-w-[420px] text-brand-muted text-[15px] font-medium font-poppins text-center leading-relaxed">
                Kurslar, o&apos;yinlar tahlillari va reytinglarni ko&apos;rish uchun tizimda ro&apos;yxatdan o&apos;tishingiz lozim.
              </p>

              <button
                onClick={onSignIn}
                className="w-full max-w-[420px] h-12 bg-brand-accent text-brand-bg rounded-lg text-[15px] font-bold font-poppins hover:bg-brand-accent-hover transition-colors active:scale-[0.99] cursor-pointer"
              >
                Kirish
              </button>

              <button
                onClick={onSignUp}
                className="w-full max-w-[420px] h-12 bg-brand-border text-brand-text border border-brand-border/80 rounded-lg text-[15px] font-bold font-poppins hover:bg-brand-border/40 transition-colors active:scale-[0.99] cursor-pointer"
              >
                Ro&apos;yxatdan o&apos;tish
              </button>
            </div>

            <AuthBrandingPanel />
          </div>

          <button
            onClick={onClose}
            className="absolute top-1 left-[926px] w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center cursor-pointer hover:bg-brand-border transition-colors text-brand-text"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
