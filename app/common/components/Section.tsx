"use client";

import Image from "next/image";

export default function NewsBreadcrumb() {
  return (
    <div className="flex gap-2 w-full max-w-[1374px] h-[44px] items-center pl-[30px] ml-[34px]">
      <Image src="/NewsImage/icon8.svg" alt="home icon" width={20} height={20} className="w-5 h-5 opacity-80" />
      <h4 className="text-brand-muted hover:text-brand-text font-medium mb-1 transition-colors text-[14px]">Asosiy</h4>
      <Image src="/NewsImage/icon7.svg" alt="chevron" width={8} height={8} className="w-2 h-2 mt-2 mb-[2px] opacity-60" />
      <h4 className="text-brand-text font-medium mb-1 text-[14px]">Yangiliklar</h4>
    </div>
  );
}
