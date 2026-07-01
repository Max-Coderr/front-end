import Anons from "./Anons.tsx";

export default function YoshlarAgencyPoster() {
    return <div className="flex flex-col w-[326px] items-center gap-6">
        <Anons/>
        <div
            className="w-[326px] h-[471px] bg-[#121C26] rounded-[20px] ml-[20px] flex flex-col items-center justify-between p-[36px]">
            <img src="/Subtract.svg" alt="gerb" className="text-[#FFFFFF] opacity-10 absolute"/>
            <div className="w-[175px] h-[38px] flex gap-1">
                <img src="/image%20107.svg" alt="gerp"/>
                <div className="flex flex-col">
                    <h1 className="text-[15px] font-medium">YOSHLAR ISHLARI</h1>
                    <p className="text-[12px]">AGENTILIGI</p>
                </div>
            </div>
            <h2 className="font-poppins font-bold text-[20px] leading-[120%] tracking-[0%] text-center text-white">
                Yoshlarga oid{" "}
                <span className="underline decoration-green-500">yangiliklarni</span>
                {" "}biz bilan kuzating
            </h2>
            <a href="https://yoshlar.gov.uz" className="text-orange-400">yoshlar.gov.uz</a>
        </div>
    </div>
}
