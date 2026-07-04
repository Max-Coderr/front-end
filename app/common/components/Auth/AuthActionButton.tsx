interface AuthActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function AuthActionButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: AuthActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-[420px] h-12 rounded-lg font-poppins font-semibold text-[15px] cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
        variant === "primary"
          ? "bg-brand-accent text-brand-bg hover:bg-brand-accent-hover active:scale-[0.99]"
          : "bg-brand-surface border border-brand-border text-brand-text hover:bg-brand-border active:scale-[0.99]"
      }`}
    >
      {children}
    </button>
  );
}
