"use client";

import Anons from "../Anons.tsx";
import { useRouter } from "next/navigation";

export default function BookItem() {
    const router = useRouter();
    return <div className="w-[326px] h-[686px] mt-[-60px] flex flex-col gap-6 items-center">
        <Anons/>
        <div className="w-[326px] h-[470px] rounded-[6px] bg-[#1A1D1F] p-[16px] ml-[22px]">
            <div className="flex justify-between items-center">
                <h1 className="text-[white] w-[108px] h-[23px] font-medium">Top kitoblar</h1>
                <div 
                    onClick={() => router.push('/library')}
                    className="flex cursor-pointer hover:opacity-80 transition-opacity select-none"
                >
                    <h1 className="w-[70px] h-[24px] text-[#9DA1A3] font-Poppins">Barchasi</h1>
                    <img src="/BookImage/icon11.svg" alt="hammasi belgisi"/>
                </div>
            </div>
            <div className="w-[310px] h-[395px] mt-[20px]">
                <div className="flex gap-[10px]">
                    <img src="/BookImage/image1.svg" alt="ot rasmi" className="rounded-[8px]"/>
                    <div>
                        <h4 className="w-[230px] h-[40px] font-bold tracking-tighter mb-[10px] text-amber-50">Shaxmatdagi
                            qobiliyatliringizga qayta baxo bering</h4>
                        <h4 className="w-[55px] h-[20px] text-[#F0F0F0B8] font-normal size-[13px]">J.Silman</h4>
                    </div>
                </div>
                <hr className="my-[12px] border-[#1F272A]"/>
                <div className="flex gap-[10px]">
                    <img src="/BookImage/image3.svg" alt="ot rasmi" className="rounded-[8px]"/>
                    <div>
                        <h4 className="w-[230px] h-[40px] font-bold tracking-tighter mb-[10px] text-amber-50">Mening
                            tizimim</h4>
                        <h4 className="w-[55px] h-[20px] font-normal text-[#F0F0F0B8] size-[13px]">A.Nimzowitsch</h4>
                    </div>
                </div>
                <hr className="my-[12px] border-[#1F272A]"/>
                <div className="flex gap-[10px]">
                    <img src="/BookImage/image2.svg" alt="ot rasmi" className="rounded-[8px]"/>
                    <div>
                        <h4 className="w-[230px] h-[40px] font-bold tracking-tighter mb-[10px] text-amber-50">Zurixdagi
                            shaxmat <br/> musobaqasi</h4>
                        <h4 className="w-[55px] h-[20px] font-normal text-[#F0F0F0B8] size-[13px]">D.Bronstein</h4>
                    </div>
                </div>
                <hr className="my-[12px] border-[#1F272A]"/>
                <div className="flex gap-[10px]">
                    <img src="/BookImage/image4.svg" alt="ot rasmi" className="rounded-[8px]"/>
                    <div>
                        <h4 className="w-[230px] h-[40px] font-bold tracking-tighter mb-[10px] text-amber-50">Mening
                            esdaqolarlik <br/> o‘yinlarim</h4>
                        <h4 className="w-[55px] h-[20px] font-normal text-[#F0F0F0B8] size-[13px]">B.Fischer</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
