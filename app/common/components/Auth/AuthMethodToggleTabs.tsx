import { AuthSelectionMethod } from "./types";

interface AuthMethodToggleTabsProps {
  title: string;
  activeMethod: AuthSelectionMethod;
  onMethodChange: (method: AuthSelectionMethod) => void;
}

export default function AuthMethodToggleTabs({ title, activeMethod, onMethodChange }: AuthMethodToggleTabsProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[420px]">
      <h2 className="font-poppins font-semibold text-[22px] text-brand-text tracking-tight">{title}</h2>
      <div className="flex p-1 gap-1.5 rounded-lg bg-brand-bg w-full h-[46px] border border-brand-border/60">
        <button
          onClick={() => onMethodChange("phone")}
          className={`flex-1 rounded font-poppins font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            activeMethod === "phone" ? "bg-brand-border text-brand-accent shadow-sm" : "text-brand-muted hover:text-brand-text"
          }`}
        >
          Telefon raqami
        </button>
        <button
          onClick={() => onMethodChange("email")}
          className={`flex-1 rounded font-poppins font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            activeMethod === "email" ? "bg-brand-border text-brand-accent shadow-sm" : "text-brand-muted hover:text-brand-text"
          }`}
        >
          Elektron pochta
        </button>
      </div>
    </div>
  );
}
