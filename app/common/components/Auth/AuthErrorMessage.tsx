interface AuthErrorMessageProps {
  message: string | null;
}

export default function AuthErrorMessage({ message }: AuthErrorMessageProps) {
  if (!message) return null;
  return (
    <p className="w-full max-w-[420px] font-poppins text-[13px] text-red-400 bg-red-950/30 border border-red-900/50 p-3 rounded-lg leading-relaxed">
      {message}
    </p>
  );
}
