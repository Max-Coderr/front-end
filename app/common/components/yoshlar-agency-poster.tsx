"use client";

import AnnouncementsBanner from "@/app/common/components/Anons";
import Image from "next/image";

export default function YouthAgencyPoster() {
  return (
    <div className="flex flex-col w-[326px] items-center gap-6 ml-[10px]">
      <AnnouncementsBanner />
      <div className="w-[326px] h-[471px] bg-brand-surface border border-brand-border rounded-[20px] flex flex-col items-center justify-between p-[36px] relative overflow-hidden shadow-lg">
        <Image src="/Subtract.svg" alt="Coats of arms watermark" className="text-white opacity-5 absolute mt-[-20px]" width={326} height={469} />
        
        <div className="w-[175px] h-[38px] flex gap-2.5 items-center z-10">
          <Image src="/image%20107.svg" alt="Agency logo" width={38} height={38} className="shrink-0" />
          <div className="flex flex-col">
            <h5 className="text-[13px] font-bold tracking-wide text-brand-text">YOSHLAR ISHLARI</h5>
            <p className="text-[10px] text-brand-muted font-medium uppercase tracking-wider">AGENTLIGI</p>
          </div>
        </div>

        <h3 className="font-poppins font-bold text-[20px] leading-tight text-center text-brand-text z-10">
          Yoshlarga oid{" "}
          <span className="underline decoration-brand-accent decoration-2">yangiliklarni</span>
          {" "}biz bilan kuzating
        </h3>

        <a
          href="https://yoshlar.gov.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-accent hover:text-brand-accent-hover font-semibold transition-colors z-10 text-[14px]"
        >
          yoshlar.gov.uz
        </a>
      </div>
    </div>
  );
}
