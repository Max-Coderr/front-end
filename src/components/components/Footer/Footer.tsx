export default function Footer(){
    return <footer className="mt-[54px] w-full h-[208px] flex flex-col gap-4 items-center justify-center bg-[#1A1D1F]">
        <img src="/icon1.svg" alt="icon chess" className="w-[112.62px] h-[28px]"/>
        <div className="w-[632px] h-[21px] flex gap-6">
            <p className="w-[97px] h-[21px] text-[14px] font-normal tracking-tight">Biz haqimizda</p>
            <p className="w-[151px] h-[21px] text-[14px] font-normal tracking-tight">Cookie fayllar siyosati</p>
            <p className="w-[151px] h-[21px] text-[14px] font-normal tracking-tight">Foydalanuvchi qoidalari</p>
            <p className="w-[151px] h-[21px] text-[14px] font-normal tracking-tight">Cookie fayllar siyosati</p>
        </div>
        <div className="w-[148px] h-[20px] flex gap-3">
            <img src="/FooterImage/instagram.svg" alt="instagram icon"/>
            <img src="/FooterImage/telegram.svg" alt="telegram icon"/>
            <img src="/FooterImage/youtube.svg" alt="youtube icon"/>
            <img src="/FooterImage/twitter.svg" alt="twitter icon"/>
            <img src="/FooterImage/facebook%2001.svg" alt="facebook icon"/>
        </div>
        <div className="flex justify-between w-full h-[50px]z rounded-t-2px border-t-[#F7F9FA1A] border-t-1 mb-[-37px] pt-[14px] px-[32px] pb-[11px]">
            <p className="w-[238px] h-[24px] font-normal text-[16px] tracking-tight">© UzChess. All rights reserved.</p>
            <img src="/FooterImage/Group%201.svg" alt="icon" className="w-[33px] h-[18px] mt-1"/>
            <p className="w-[172px] h-[24px] font-normal text-[16px] tracking-tight">Foydalanish qoidalari</p>
        </div>
    </footer>
}
