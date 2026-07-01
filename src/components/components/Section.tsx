"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { MOCK_COURSES, MOCK_BOOKS } from "../../mockData.ts";

export default function Section() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    let sahifaNomi = "Yangiliklar";
    let isThreeLevel = false;
    let middleLevelName = "";
    let finalLevelName = "";
    let isProfile = false;
    let profileTabName = "Sotib olingan kurslar";

    if (pathname === "/course") {
        sahifaNomi = "Kurslar";
    } else if (pathname === "/library") {
        sahifaNomi = "Kutubxona";
    } else if (pathname === "/profile") {
        isProfile = true;
        const tab = searchParams.get("tab") || "courses";
        if (tab === "courses") profileTabName = "Sotib olingan kurslar";
        else if (tab === "orders") profileTabName = "Buyurtmalar";
        else if (tab === "saved") profileTabName = "Saqlanganlar";
        else if (tab === "settings") profileTabName = "Umumiy sozlamalar";
    } else if (pathname.startsWith("/course/") && pathname !== "/course") {
        isThreeLevel = true;
        middleLevelName = "O'rganish";
        const pathParts = pathname.split("/");
        const courseId = Number(pathParts[pathParts.length - 1]);
        const course = MOCK_COURSES.find(c => c.id === courseId);
        finalLevelName = course ? course.title : "Kurs tafsilotlari";
    } else if (pathname.startsWith("/library/") && pathname !== "/library") {
        isThreeLevel = true;
        middleLevelName = "Kutubxona";
        const pathParts = pathname.split("/");
        const bookId = Number(pathParts[pathParts.length - 1]);
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        finalLevelName = book ? book.title : "Kitob tafsilotlari";
    }

    if (isProfile) {
        return (
            <div className="flex gap-2 w-[1374px] h-[44px] items-center pl-[30px] ml-[34px]">
                <img src="/NewsImage/icon8.svg" alt="icon" className="w-5 h-5"/>
                <h4 className="text-[#6D7274] font-medium mb-1 cursor-pointer">Asosiy</h4>
                <img src="/NewsImage/icon7.svg" alt="icon" className="w-2 h-2 mt-2 mb-[2px]"/>
                <h4 className="text-[#6D7274] font-medium mb-1 cursor-pointer">Profil</h4>
                <img src="/NewsImage/icon7.svg" alt="icon" className="w-2 h-2 mt-2 mb-[2px]"/>
                <h4 className="text-white font-medium mb-1">{profileTabName}</h4>
            </div>
        );
    }

    if (isThreeLevel) {
        return (
            <div className="flex gap-2 w-[1374px] h-[44px] items-center pl-[30px] ml-[34px]">
                <img src="/NewsImage/icon8.svg" alt="icon" className="w-5 h-5"/>
                <h4 className="text-[#6D7274] font-medium mb-1 cursor-pointer">Asosiy</h4>
                <img src="/NewsImage/icon7.svg" alt="icon" className="w-2 h-2 mt-2 mb-[2px]"/>
                <h4 className="text-[#6D7274] font-medium mb-1 cursor-pointer">{middleLevelName}</h4>
                <img src="/NewsImage/icon7.svg" alt="icon" className="w-2 h-2 mt-2 mb-[2px]"/>
                <h4 className="text-white font-medium mb-1 truncate max-w-[800px]">{finalLevelName}</h4>
            </div>
        );
    }

    return (
        <div className="flex gap-2 w-[1374px] h-[44px] items-center pl-[30px] ml-[34px]">
            <img src="/NewsImage/icon8.svg" alt="icon" className="w-5 h-5"/>
            <h4 className="text-[#6D7274] font-medium mb-1">Asosiy</h4>
            <img src="/NewsImage/icon7.svg" alt="icon" className="w-2 h-2 mt-2 mb-[2px]"/>
            <h4 className="text-white font-medium mb-1">{sahifaNomi}</h4>
        </div>
    );
}
