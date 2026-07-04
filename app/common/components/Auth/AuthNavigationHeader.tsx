interface AuthNavigationHeaderProps {
  title: string;
  onBack: () => void;
}

export default function AuthNavigationHeader({ title, onBack }: AuthNavigationHeaderProps) {
  return (
    <div className="flex items-center gap-4 w-full max-w-[420px]">
      <button
        onClick={onBack}
        className="cursor-pointer shrink-0 text-brand-muted hover:text-brand-text p-1.5 rounded-lg bg-brand-surface border border-brand-border active:scale-95 transition-all"
        aria-label="Orqaga"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <h2 className="font-poppins font-semibold text-[20px] text-brand-text tracking-tight">{title}</h2>
    </div>
  );
}
