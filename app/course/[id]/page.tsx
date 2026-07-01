"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import HeaderItem from "../../../src/components/components/Header/Header.tsx";
import Footer from "../../../src/components/components/Footer/Footer.tsx";
import Section from "../../../src/components/components/Section.tsx";
import Anons from "../../../src/components/components/Anons.tsx";
import { MOCK_COURSES } from "../../../src/mockData.ts";

export default function CourseSinglePage() {
    const { id } = useParams<{ id: string }>();
    const courseId = Number(id);

    const course = MOCK_COURSES.find(c => c.id === courseId) || MOCK_COURSES[0];

    const [expandedAccordion, setExpandedAccordion] = useState<number | null>(1);

    const toggleAccordion = (index: number) => {
        setExpandedAccordion(expandedAccordion === index ? null : index);
    };

    const reviews = [
        {
            name: "Jasurbek Narzullayev",
            date: "7 Sentyabr 2022 y. 19:52",
            rating: 4,
            text: "2018 yilda Nyu-Yorkda Karjakin va Carlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karisen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
        },
        {
            name: "Muhammadamin Domlahonov",
            date: "7 Sentyabr 2022 y. 19:52",
            rating: 3,
            text: "2018 yilda Nyu-Yorkda Karjakin va Carlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karisen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
        },
        {
            name: "Shoxruh Baxtiyorov",
            date: "7 Sentyabr 2022 y. 19:52",
            rating: 5,
            text: "2016 yilda Nyu-Yorkda Karjakin va Carlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karisen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi."
        },
        {
            name: "Jasurbek Narzullayev",
            date: "7 Sentyabr 2022 y. 19:52",
            rating: 4,
            text: "2018 yilda Nyu-Yorkda Karjakin va Carlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi. 26 noyabr kuni Karisen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.",
            hasReport: true
        }
    ];

    return (
        <div className="flex flex-col bg-[#111315] text-white min-h-screen font-poppins">
            <HeaderItem />
            <Section />
            
            
            <div className="w-[1374px] h-[190px] bg-[#1A1D1F] border-[1px] border-[#1F272A] rounded-[8px] ml-[34px] p-8 flex justify-between items-center mt-4">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[32px] font-bold text-white tracking-tight">{course.title}</h1>
                    <div className="flex items-center gap-4 text-[#F7F9FA99] text-[14px]">
                        <div className="flex text-yellow-500 text-lg">
                            {"★".repeat(Math.floor(course.rating))}
                            {"☆".repeat(5 - Math.floor(course.rating))}
                        </div>
                        <span className="text-white font-medium">{course.rating}</span>
                        <span>(234 ta izoh)</span>
                        <div className="w-[1px] h-4 bg-zinc-700"></div>
                        <span className="bg-[#FFFFFF1A] px-2.5 py-1 rounded text-amber-50 font-medium text-[12px]">{course.difficulty.title}</span>
                        <div className="w-[1px] h-4 bg-zinc-700"></div>
                        <span>{course.sectionsCount} ta bo'lim</span>
                        <div className="w-[1px] h-4 bg-zinc-700"></div>
                        <span>24 ta dars</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                        <span className="text-[#82CC27] text-[24px] font-bold">
                            {course.newPrice === 0 ? "Bepul" : `${course.newPrice.toLocaleString()} UZS`}
                        </span>
                        {course.price > 0 && (
                            <span className="text-[#F7F9FA66] line-through text-[16px] decoration-red-500">
                                {course.price.toLocaleString()} UZS
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="bg-[#0284C7] hover:bg-[#0369a1] text-white px-8 py-3.5 rounded-[8px] font-bold text-[16px] transition-colors cursor-pointer">
                        Kursni sotib olish
                    </button>
                    <button className="bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] border border-[#FFFFFF1A] p-3.5 rounded-[8px] text-white cursor-pointer transition-colors">
                        {/* Heart icon */}
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 2.5C18.2 1.2 16.2 0.5 14.2 0.5C12.2 0.5 10.2 1.2 8.9 2.5L7.9 3.5L6.9 2.5C5.6 1.2 3.6 0.5 1.6 0.5C-0.4 0.5 -2.4 1.2 -3.7 2.5C-6.5 5.3 -6.5 9.7 -3.7 12.5L7.9 24.1L19.5 12.5C22.3 9.7 22.3 5.3 19.5 2.5Z" fill="currentColor" className="text-zinc-400 hover:text-red-500" />
                        </svg>
                    </button>
                    <button className="bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] border border-[#FFFFFF1A] p-3.5 rounded-[8px] text-white cursor-pointer transition-colors">
                        {/* Share icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="w-[1374px] flex gap-[24px] ml-[34px] mt-6">
                
                {/* Left Column - Video Lessons & Reviews */}
                <div className="w-[1026px] flex flex-col gap-6">
                    
                    {/* Video Lessons Accordion */}
                    <div className="flex flex-col gap-4">
                        
                        {/* Section 1 */}
                        <div className="bg-[#1A1D1F] border-[1px] border-[#1F272A] rounded-[8px] overflow-hidden">
                            <div 
                                onClick={() => toggleAccordion(1)}
                                className="h-[60px] px-6 flex justify-between items-center cursor-pointer hover:bg-zinc-800 transition-colors select-none"
                            >
                                <h3 className="font-bold text-[18px] text-white">1. Asosiy donalar</h3>
                                <span>
                                    {expandedAccordion === 1 ? (
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 7L7 1L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    ) : (
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    )}
                                </span>
                            </div>
                            
                            {expandedAccordion === 1 && (
                                <div className="p-6 bg-[#15181A] border-t border-[#1F272A] flex gap-4">
                                    {/* Video Card 1 */}
                                    <div className="w-[286px] h-[216px] bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-3 flex flex-col justify-between hover:border-orange-500 transition-all cursor-pointer">
                                        <div className="relative rounded-[6px] overflow-hidden h-[130px] bg-zinc-950 flex items-center justify-center">
                                            <img src="/BookImage/image1.svg" alt="img" className="w-full h-full object-cover opacity-60" />
                                            {/* Play Icon */}
                                            <div className="absolute w-[44px] h-[44px] rounded-full bg-[#111315BF] border border-white flex items-center justify-center">
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M1 1L15 9L1 17V1Z"/></svg>
                                            </div>
                                            <span className="absolute bottom-2 left-2 bg-[#1A1D1FB8] text-[#F7F9FA99] text-[11px] px-2 py-0.5 rounded font-medium">07:12</span>
                                        </div>
                                        <h4 className="font-bold text-[14px] text-white mt-2">1.1 Kirish</h4>
                                    </div>

                                    {/* Video Card 2 */}
                                    <div className="w-[286px] h-[216px] bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-3 flex flex-col justify-between hover:border-orange-500 transition-all cursor-pointer">
                                        <div className="relative rounded-[6px] overflow-hidden h-[130px] bg-zinc-950 flex items-center justify-center">
                                            <img src="/BookImage/image2.svg" alt="img" className="w-full h-full object-cover opacity-60" />
                                            <div className="absolute w-[44px] h-[44px] rounded-full bg-[#111315BF] border border-white flex items-center justify-center">
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M1 1L15 9L1 17V1Z"/></svg>
                                            </div>
                                            <span className="absolute bottom-2 left-2 bg-[#1A1D1FB8] text-[#F7F9FA99] text-[11px] px-2 py-0.5 rounded font-medium">08:15</span>
                                        </div>
                                        <h4 className="font-bold text-[14px] text-white mt-2">1.2 Mot qilish</h4>
                                    </div>

                                    {/* Video Card 3 */}
                                    <div className="w-[286px] h-[216px] bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-3 flex flex-col justify-between hover:border-orange-500 transition-all cursor-pointer">
                                        <div className="relative rounded-[6px] overflow-hidden h-[130px] bg-zinc-950 flex items-center justify-center">
                                            <img src="/BookImage/image3.svg" alt="img" className="w-full h-full object-cover opacity-60" />
                                            <div className="absolute w-[44px] h-[44px] rounded-full bg-[#111315BF] border border-white flex items-center justify-center">
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M1 1L15 9L1 17V1Z"/></svg>
                                            </div>
                                            <span className="absolute bottom-2 left-2 bg-[#1A1D1FB8] text-[#F7F9FA99] text-[11px] px-2 py-0.5 rounded font-medium">05:45</span>
                                        </div>
                                        <h4 className="font-bold text-[14px] text-white mt-2">1.2 Piyoda bilan tanishuv</h4>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Section 2 */}
                        <div className="bg-[#1A1D1F] border-[1px] border-[#1F272A] rounded-[8px] overflow-hidden">
                            <div 
                                onClick={() => toggleAccordion(2)}
                                className="h-[60px] px-6 flex justify-between items-center cursor-pointer hover:bg-zinc-800 transition-colors select-none"
                            >
                                <h3 className="font-bold text-[18px] text-white">2. Eng ko'p foydalaniladigan donalar</h3>
                                <span>
                                    {expandedAccordion === 2 ? (
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 7L7 1L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    ) : (
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    )}
                                </span>
                            </div>
                            {expandedAccordion === 2 && (
                                <div className="p-6 bg-[#15181A] border-t border-[#1F272A] flex gap-4">
                                    <div className="w-[286px] h-[216px] bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-3 flex flex-col justify-between hover:border-orange-500 transition-all cursor-pointer">
                                        <div className="relative rounded-[6px] overflow-hidden h-[130px] bg-zinc-950 flex items-center justify-center">
                                            <img src="/BookImage/image4.svg" alt="img" className="w-full h-full object-cover opacity-60" />
                                            <div className="absolute w-[44px] h-[44px] rounded-full bg-[#111315BF] border border-white flex items-center justify-center">
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M1 1L15 9L1 17V1Z"/></svg>
                                            </div>
                                            <span className="absolute bottom-2 left-2 bg-[#1A1D1FB8] text-[#F7F9FA99] text-[11px] px-2 py-0.5 rounded font-medium">12:30</span>
                                        </div>
                                        <h4 className="font-bold text-[14px] text-white mt-2">2.1 Ot bilan yurishlar</h4>
                                    </div>

                                    <div className="w-[286px] h-[216px] bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-3 flex flex-col justify-between hover:border-orange-500 transition-all cursor-pointer">
                                        <div className="relative rounded-[6px] overflow-hidden h-[130px] bg-zinc-950 flex items-center justify-center">
                                            <img src="/BookImage/image1.svg" alt="img" className="w-full h-full object-cover opacity-60" />
                                            <div className="absolute w-[44px] h-[44px] rounded-full bg-[#111315BF] border border-white flex items-center justify-center">
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M1 1L15 9L1 17V1Z"/></svg>
                                            </div>
                                            <span className="absolute bottom-2 left-2 bg-[#1A1D1FB8] text-[#F7F9FA99] text-[11px] px-2 py-0.5 rounded font-medium">09:15</span>
                                        </div>
                                        <h4 className="font-bold text-[14px] text-white mt-2">2.2 Fil bilan hujum</h4>
                                    </div>
                                </div>
                            )}
                        </div>

                        
                        <div className="bg-[#1A1D1F] border-[1px] border-[#1F272A] rounded-[8px] overflow-hidden">
                            <div 
                                onClick={() => toggleAccordion(3)}
                                className="h-[60px] px-6 flex justify-between items-center cursor-pointer hover:bg-zinc-800 transition-colors select-none"
                            >
                                <h3 className="font-bold text-[18px] text-white">3. Mot qilish oson bo'lgan donalar</h3>
                                <span>
                                    {expandedAccordion === 3 ? (
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 7L7 1L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    ) : (
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    )}
                                </span>
                            </div>
                            {expandedAccordion === 3 && (
                                <div className="p-6 bg-[#15181A] border-t border-[#1F272A] flex gap-4">
                                    <div className="w-[286px] h-[216px] bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-3 flex flex-col justify-between hover:border-orange-500 transition-all cursor-pointer">
                                        <div className="relative rounded-[6px] overflow-hidden h-[130px] bg-zinc-950 flex items-center justify-center">
                                            <img src="/BookImage/image2.svg" alt="img" className="w-full h-full object-cover opacity-60" />
                                            <div className="absolute w-[44px] h-[44px] rounded-full bg-[#111315BF] border border-white flex items-center justify-center">
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="white"><path d="M1 1L15 9L1 17V1Z"/></svg>
                                            </div>
                                            <span className="absolute bottom-2 left-2 bg-[#1A1D1FB8] text-[#F7F9FA99] text-[11px] px-2 py-0.5 rounded font-medium">15:40</span>
                                        </div>
                                        <h4 className="font-bold text-[14px] text-white mt-2">3.1 Farzin bilan mot qilish</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Course Reviews (Comments) */}
                    <div className="bg-[#1A1D1F] border-[1px] border-[#1F272A] rounded-[8px] p-8 flex flex-col gap-6 mt-2">
                        <h2 className="font-bold text-[24px] text-white mb-2">Kurs haqida izohlar</h2>
                        
                        <div className="flex flex-col gap-6">
                            {reviews.map((rev, index) => (
                                <div key={index} className="border-b border-[#1F272A] pb-6 last:border-b-0 flex gap-4 relative group">
                                    {/* User Avatar */}
                                    <div className="w-[48px] h-[48px] rounded-full bg-orange-600 flex items-center justify-center font-bold text-white text-[18px]">
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col">
                                                <h4 className="font-bold text-[16px] text-white">{rev.name}</h4>
                                                <span className="text-[#F7F9FA66] text-[12px]">{rev.date}</span>
                                            </div>
                                            
                                            {/* Three dots menu / warning report */}
                                            <div className="relative">
                                                {rev.hasReport ? (
                                                    <button className="bg-[#FEF3C7] text-[#D97706] hover:bg-[#FDE68A] text-[12px] font-bold px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer">
                                                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        Shikoyat qilish
                                                    </button>
                                                ) : (
                                                    <button className="text-zinc-600 hover:text-white p-1 cursor-pointer">
                                                        •••
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex text-yellow-500 text-sm mt-0.5">
                                            {"★".repeat(rev.rating)}
                                            {"☆".repeat(5 - rev.rating)}
                                        </div>

                                        {/* Review text */}
                                        <p className="text-[#F7F9FA99] text-[15px] font-normal leading-[24px] mt-1 pr-8">
                                            {rev.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="self-center border border-[#FFFFFF1A] hover:bg-[#FFFFFF0D] text-[#F7F9FA99] px-6 py-2.5 rounded-[8px] font-medium text-[15px] cursor-pointer mt-4 transition-colors">
                            Barcha izohlar
                        </button>
                    </div>

                </div>

                {/* Right Column - Sidebar */}
                <div className="w-[326px]">
                    <Anons />
                </div>

            </div>

            <Footer />
        </div>
    );
}
