import Image from "next/image";

export default function AuthBrandingPanel() {
  return (
    <div className="relative w-[440px] h-[600px] shrink-0 rounded-r-xl overflow-hidden bg-brand-surface flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/90 to-brand-surface/40 z-10" />
      <Image src="/auth-panel.png" alt="Auth Graphic" fill className="object-cover opacity-80" />
    </div>
  );
}
