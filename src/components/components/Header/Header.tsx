"use client";

import { usePathname, useRouter } from "next/navigation";

const menuItems = [
    { label: "Asosiy", path: "/" },
    { label: "Yangiliklar", path: "/news" },
    { label: "Kurslar", path: "/course" },
    { label: "Kutubxona", path: "/library" },
    { label: "Bog'lanish", path: "/contact" },
];

function NavItem({ label, path, index, activeIndex }: {
    label: string;
    path: string;
    index: number;
    activeIndex: number;
}) {
    const router = useRouter();
    const isActive = activeIndex === index;

    return (
        <li
            onClick={() => { (index); router.push(path); }}
            className="relative cursor-pointer py-2 group"
        >
            <span className={`font-poppins text-sm transition-all duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
            }`}>
                {label}
            </span>
            
            {isActive && <div className="left-0 w-full h-[2px] bg-[#F97316]"></div>}
        </li>
    );
}

export default function HeaderItem() {
    const pathname = usePathname();
    const router = useRouter();

    const activeIndex = menuItems.findIndex(item => item.path === pathname);

    return (
        <header className="w-[1473px] h-[76px] border-[#232627] border-[1px] bg-[#1A1D1F] rounded-2xl flex items-center justify-between ml-[34px]">
            
            <div className="flex items-center my-[26px] ml-[24px]">
                <img src='/icon1.svg' alt="shaxmat icon" className="w-[103.61px] h-[28px] mb-[4px]"/>
                <div className="h-[24px] w-px bg-gray-500"></div>
                <div className="flex w-[112px] h-[24px] gap-14">
                    <span className="text-white text-sm font-medium size-4 font-poppins mb-1 ml-4">O'zbekcha</span>
                    <img src="/HeaderImage/icon2.svg" alt="select icon"/>
                </div>
            </div>

            <ul className="flex items-center gap-10">
                {menuItems.map((item, index) => (
                    <NavItem
                        key={index}
                        label={item.label}
                        path={item.path}
                        index={index}
                        activeIndex={activeIndex}
                    />
                ))}
            </ul>

            {/* Kirish qismi o'rniga foydalanuvchi profili */}
            <div className="flex items-center gap-4 mr-[24px]">
                <div className="flex gap-4 items-center">
                    <img src="/HeaderImage/icon5.svg" alt="icon" className="w-[24px] h-[24px] cursor-pointer"/>
                    <img src="/HeaderImage/icon3.svg" alt="icon" className="w-[24px] h-[24px] cursor-pointer"/>
                    <img src="/HeaderImage/icon4.svg" alt="icon" className="w-[24px] h-[24px] cursor-pointer"/>
                </div>
                <div className="h-[24px] w-px bg-gray-600"></div>
                <div 
                    onClick={() => router.push("/profile")}
                    className="flex items-center gap-3 cursor-pointer hover:opacity-80 select-none"
                >
                    <span className="text-white text-sm font-medium font-poppins">Jasurbek Pulatov</span>
                    <img src="/profile_avatar.png" alt="avatar" className="w-[36px] h-[36px] rounded-full object-cover border border-[#F97316]"/>
                </div>
            </div>
        </header>
    );
}
