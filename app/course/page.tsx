"use client";

import HeaderItem from "../../src/components/components/Header/Header.tsx";
import Footer from "../../src/components/components/Footer/Footer.tsx";
import Section from "../../src/components/components/Section.tsx";
import CourseFilters from "../../src/courses/components/CourseFilters.tsx";
import CourseItemContainer from "../../src/courses/components/CourseItemContainer.tsx";
import {useState} from "react";
import DonationsBanner from "../../src/components/components/donationsBanner.tsx";

export default function CoursesPage() {
    const [search, setSearch] = useState("")
    return <div className="flex flex-col">
        <HeaderItem/>
        <Section/>
        <div className="flex w-full h-full gap-[24px] mt-5">
            <div className="flex flex-col gap-[24px]">
                <div
                    className="ml-[32px] w-[326px] h-[100px] flex justify-center gap-3 items-center bg-[#1A1D1F] rounded-lg border-[#232627] border-[2px]">
                    <img src="/Vector1.svg" alt="eduIcon" className="object-cover w-[70px] h-[44px]"/>
                    <h1 className="w-[121px] h-[42px] text-[32px] font-bold mb-[12px]">Kurslar</h1>
                </div>
                <CourseFilters/>
            </div>
            <div className="ml-[10px]">
                <input type="text"
                       placeholder="🔎︎ Izlash"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       className="w-[676px] h-[52px] py-[14px] px-[16px] bg-[#15181A] rounded-[8px] border-[#232627] border-[2px] outline-none"/>
                <CourseItemContainer search={search}/>
            </div>
            <DonationsBanner/>
        </div>
        <Footer/>
    </div>
}
