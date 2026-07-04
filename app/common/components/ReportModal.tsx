"use client";

import { useEffect, useState } from "react";
import { retrieveSessionToken } from "@/app/common/components/Auth/authApi";
import { getComplaintCategories, ComplaintCategory, dispatchComplaint } from "@/app/common/api/reportApi";

interface ComplaintFormModalProps {
  targetType: string;
  targetId: number;
  onClose: () => void;
}

export default function ComplaintFormModal({ targetType, targetId, onClose }: ComplaintFormModalProps) {
  const [categories, setCategories] = useState<ComplaintCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ComplaintCategory | null>(null);
  const [detailsText, setDetailsText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    getComplaintCategories().then(setCategories);
  }, []);

  const handleComplaintSubmit = async () => {
    const sessionToken = retrieveSessionToken();
    if (!sessionToken || !selectedCategory) return;
    setIsSending(true);
    const success = await dispatchComplaint(
      sessionToken,
      selectedCategory.id,
      targetType,
      targetId,
      detailsText.trim()
    );
    setIsSending(false);
    if (success) {
      setIsSent(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-0 left-[452px] w-10 h-10 rounded-lg bg-brand-surface border border-brand-border text-brand-text hover:bg-brand-border flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-[440px] bg-brand-surface rounded-xl border border-brand-border flex flex-col shadow-2xl overflow-hidden">
          <div className="h-[76px] px-6 flex items-center gap-3 border-b border-brand-border">
            {!isSent && selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-8 h-8 flex items-center justify-center text-brand-muted hover:text-brand-text -ml-1.5 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <h2 className="text-brand-text text-[22px] font-bold font-poppins">Shikoyat qilish</h2>
          </div>

          <div className="p-6 flex flex-col gap-4">
            {isSent ? (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-brand-text text-[15px] font-medium font-poppins">Shikoyatingiz muvaffaqiyatli yuborildi</p>
                <button
                  onClick={onClose}
                  className="w-full h-11 rounded-lg bg-brand-accent text-brand-bg hover:bg-brand-accent-hover font-semibold transition-colors mt-2 cursor-pointer"
                >
                  Yopish
                </button>
              </div>
            ) : !selectedCategory ? (
              <div className="flex flex-col gap-3">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c)}
                    className="w-full flex items-center justify-between px-4 py-4 rounded-lg bg-brand-bg border border-brand-border hover:bg-brand-border text-brand-text text-left transition-colors cursor-pointer group"
                  >
                    <span className="text-[14px] font-medium font-poppins group-hover:text-brand-accent">{c.title}</span>
                    <svg className="w-5 h-5 text-brand-muted group-hover:text-brand-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label className="text-brand-muted text-[14px] font-medium font-poppins">Shikoyat turi</label>
                  <div className="relative">
                    <select
                      value={selectedCategory.id}
                      onChange={(e) =>
                        setSelectedCategory(
                          categories.find((c) => c.id === Number(e.target.value)) ?? selectedCategory
                        )
                      }
                      className="w-full h-11 rounded-lg bg-brand-bg border border-brand-border text-brand-text text-[14px] font-poppins px-3 outline-none appearance-none focus:border-brand-accent"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id} className="bg-brand-surface text-brand-text">
                          {c.title}
                        </option>
                      ))}
                    </select>
                    <svg className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-brand-muted text-[14px] font-medium font-poppins">
                    Shikoyat matni (ixtiyoriy)
                  </label>
                  <textarea
                    value={detailsText}
                    onChange={(e) => setDetailsText(e.target.value)}
                    rows={4}
                    placeholder={selectedCategory.title}
                    className="w-full rounded-lg bg-brand-bg border border-brand-border text-brand-text text-[14px] font-poppins p-3 outline-none resize-none placeholder:text-[#6F767E] focus:border-brand-accent"
                  />
                </div>

                <div className="flex gap-4 mt-3">
                  <button
                    onClick={onClose}
                    className="flex-1 h-11 rounded-lg bg-brand-border hover:bg-brand-border/80 border border-brand-border text-brand-text text-[15px] font-medium transition-colors cursor-pointer"
                  >
                    Bekor qilish
                  </button>
                  <button
                    onClick={handleComplaintSubmit}
                    disabled={isSending}
                    className="flex-1 h-11 rounded-lg bg-brand-accent text-brand-bg hover:bg-brand-accent-hover font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isSending ? "Yuborilmoqda..." : "Yuborish"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
