"use client";

import Image from "next/image";

export default function DonationsWidget() {
  return (
    <div className="w-[326px] h-[82px] flex items-center p-4 bg-brand-surface border border-brand-border rounded-lg gap-3 shadow-md hover:border-brand-accent/30 transition-all duration-200">
      <Image src="/Icon%20charity.svg" alt="Charity Icon" className="w-[42px] h-[42px] object-cover shrink-0" width={42} height={42} />
      <div className="flex-1 min-w-0">
        <h4 className="font-poppins font-medium text-[15px] text-brand-text truncate">Loyiha rivojiga hissa</h4>
        <p className="text-[12px] text-brand-muted truncate mt-0.5">Shaxmat rivojiga hissa qo&apos;shing</p>
      </div>
      <span className="self-center px-1.5 py-0.5 bg-brand-accent text-brand-bg text-[10px] font-bold uppercase rounded tracking-wider shrink-0 shadow-sm select-none">
        soon
      </span>
    </div>
  );
}
