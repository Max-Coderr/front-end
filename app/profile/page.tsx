"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HeaderItem from "../../src/components/components/Header/Header.tsx";
import Footer from "../../src/components/components/Footer/Footer.tsx";
import Section from "../../src/components/components/Section.tsx";

export default function ProfilePage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialTab = searchParams.get("tab") || "courses";
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        const tab = searchParams.get("tab") || "courses";
        setActiveTab(tab);
    }, [searchParams]);

    const changeTab = (tabName: string) => {
        router.push(`/profile?tab=${tabName}`);
    };

    const [savedSubTab, setSavedSubTab] = useState("books");

    const purchasedCourses = [
        {
            id: 1,
            title: "Shaxmat donalari bilan tanishuv",
            desc: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o'ziga xos xususiyatlari...",
            difficulty: "Boshlangich",
            author: "Robert Fisher",
            lessons: 5,
            image: "/BookImage/image1.svg",
            icon: "/select.svg" 
        },
        {
            id: 2,
            title: "Shaxmat donalari bilan tanishuv",
            desc: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o'ziga xos xususiyatlari...",
            difficulty: "Xavaskor",
            author: "Javoxir Sindarov",
            lessons: 12,
            image: "/BookImage/image2.svg",
            icon: "/select.svg"
        },
        {
            id: 3,
            title: "Shaxmat donalari bilan tanishuv",
            desc: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o'ziga xos xususiyatlari...",
            difficulty: "Professional",
            author: "Magnus Carlsen",
            lessons: 20,
            image: "/BookImage/image3.svg",
            icon: "/select.svg"
        },
        {
            id: 4,
            title: "Shaxmat donalari bilan tanishuv",
            desc: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o'ziga xos xususiyatlari...",
            difficulty: "Boshlangich",
            author: "Robert Fisher",
            lessons: 12,
            image: "/BookImage/image4.svg",
            icon: "/select.svg"
        }
    ];

    const orders = [
        {
            id: "24542312123",
            status: "Yetkazib berildi",
            statusType: "success", 
            price: 1404240,
            description: "Kitob, brelog, shaxmat, medal",
            images: ["/BookImage/image1.svg", "/BookImage/image2.svg", "/BookImage/image3.svg", "/BookImage/image4.svg"]
        },
        {
            id: "24542312123",
            status: "Buyurtma ko'rib chiqilmoqda",
            statusType: "pending",
            price: 450120,
            description: "Kitob",
            images: ["/BookImage/image3.svg"]
        },
        {
            id: "24542312123",
            status: "Yetkazib berildi",
            statusType: "success",
            price: 2200500,
            description: "Kitob, brelog, shaxmat",
            images: ["/BookImage/image1.svg", "/BookImage/image2.svg", "/BookImage/image4.svg"]
        },
        {
            id: "24542312123",
            status: "Bekor qilingan",
            statusType: "canceled",
            price: 450120,
            description: "Kitob",
            images: ["/BookImage/image2.svg"]
        }
    ];

    const savedBooks = [
        {
            id: 1,
            title: "Shvetsiyadan keltirilgan maxsus shaxmat tilla doskasi",
            price: 64000,
            image: "/BookImage/image1.svg"
        },
        {
            id: 2,
            title: "Shvetsiyadan keltirilgan maxsus shaxmat tilla doskasi",
            price: 64000,
            image: "/BookImage/image2.svg"
        },
        {
            id: 3,
            title: "Shvetsiyadan keltirilgan maxsus shaxmat tilla doskasi",
            price: 64000,
            image: "/BookImage/image3.svg"
        },
        {
            id: 4,
            title: "Shvetsiyadan keltirilgan maxsus shaxmat tilla doskasi",
            price: 64000,
            image: "/BookImage/image4.svg"
        }
    ];

    const savedCourses = [
        {
            id: 1,
            title: "Shaxmat donalari bilan tanishuv",
            desc: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o'ziga xos...",
            price: 96000,
            oldPrice: 0,
            rating: 3.5,
            difficulty: "Boshlang'ich",
            author: "Robert Fisher",
            lessons: 5,
            image: "/BookImage/image1.svg"
        },
        {
            id: 2,
            title: "Shoxga hujum qilish",
            desc: "Raqib shohiga hujum qilish usullari va yo'l qo'yiladigan xatoliklar haqida.haqida bilib",
            price: 96000,
            oldPrice: 55000,
            rating: 3.5,
            difficulty: "Boshlang'ich",
            author: "Robert Fisher",
            lessons: 5,
            image: "/BookImage/image2.svg"
        },
        {
            id: 3,
            title: "Mot qilish",
            desc: "Ushbu dars davomida siz har bir shaxmat donasi bilan tanishib ularning o'ziga xos...",
            price: 0,
            oldPrice: 0,
            rating: 4.5,
            difficulty: "Boshlang'ich",
            author: "Robert Fisher",
            lessons: 5,
            image: "/BookImage/image3.svg"
        }
    ];

    return (
        <div className="flex flex-col bg-[#111315] text-white min-h-screen font-poppins">
            <HeaderItem />
            <Section />

            <div className="w-[1374px] flex gap-[24px] ml-[34px] mt-6">
                
                
                <div className="w-[326px] flex flex-col gap-6">
                    
                    <div className="w-full bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-6 flex items-center gap-4">
                        <img 
                            src="/profile_avatar.png" 
                            alt="profile" 
                            className="w-[70px] h-[70px] rounded-full object-cover border-2 border-[#F97316]"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-[20px] font-bold text-white leading-tight">Jasurbek</h2>
                            <h2 className="text-[20px] font-bold text-white leading-tight">Po'latov</h2>
                        </div>
                    </div>

                    {/* Navigation items card */}
                    <div className="w-full bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-4 flex flex-col gap-2">
                        <button 
                            onClick={() => changeTab("courses")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[8px] font-medium text-[15px] cursor-pointer transition-all ${
                                activeTab === "courses" 
                                    ? "bg-[#FFFFFF0F] text-white border border-[#0284C7]" 
                                    : "text-[#F7F9FA99] hover:bg-[#FFFFFF08] border border-transparent"
                            }`}
                        >
                            <img src="/graduation-cap.3 1.png" alt="icon" className="w-[18px] h-[18px] opacity-80" />
                            Sotib olingan kurslar
                        </button>
                        <button 
                            onClick={() => changeTab("orders")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[8px] font-medium text-[15px] cursor-pointer transition-all ${
                                activeTab === "orders" 
                                    ? "bg-[#FFFFFF0F] text-white border border-[#0284C7]" 
                                    : "text-[#F7F9FA99] hover:bg-[#FFFFFF08] border border-transparent"
                            }`}
                        >
                            {/* Orders icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            Buyurtmalar
                        </button>
                        <button 
                            onClick={() => changeTab("saved")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[8px] font-medium text-[15px] cursor-pointer transition-all ${
                                activeTab === "saved" 
                                    ? "bg-[#FFFFFF0F] text-white border border-[#0284C7]" 
                                    : "text-[#F7F9FA99] hover:bg-[#FFFFFF08] border border-transparent"
                            }`}
                        >
                            {/* Heart icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            Saqlanganlar
                        </button>
                        <button 
                            onClick={() => changeTab("settings")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[8px] font-medium text-[15px] cursor-pointer transition-all ${
                                activeTab === "settings" 
                                    ? "bg-[#FFFFFF0F] text-white border border-[#0284C7]" 
                                    : "text-[#F7F9FA99] hover:bg-[#FFFFFF08] border border-transparent"
                            }`}
                        >
                            {/* Settings icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                            Umumiy sozlamalar
                        </button>
                    </div>
                </div>

                {/* Right panel details */}
                <div className="w-[1024px]">
                    
                    {/* Active Tab: Sotib olingan kurslar */}
                    {activeTab === "courses" && (
                        <div className="grid grid-cols-2 gap-[24px]">
                            {purchasedCourses.map((c) => (
                                <div key={c.id} className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-5 flex gap-4 hover:border-orange-500 transition-all cursor-pointer">
                                    <div className="relative rounded-[6px] overflow-hidden w-[120px] h-[90px] bg-zinc-900 flex items-center justify-center flex-shrink-0">
                                        <img src={c.image} alt="course" className="w-full h-full object-cover opacity-80" />
                                        {/* Overlay status icons */}
                                        <div className="absolute w-[36px] h-[36px] rounded-full bg-[#111315BF] flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h3 className="font-bold text-[16px] text-white leading-[22px] line-clamp-2">{c.title}</h3>
                                        <p className="text-[#F7F9FA66] text-[12px] line-clamp-1 mt-1">{c.desc}</p>
                                        <div className="flex items-center gap-3 text-[#F7F9FA99] text-[12px] mt-2">
                                            <span className="bg-[#FFFFFF1A] px-2 py-0.5 rounded text-amber-50 text-[11px]">{c.difficulty}</span>
                                            <span>{c.author}</span>
                                            <span>{c.lessons} ta dars</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Active Tab: Buyurtmalar */}
                    {activeTab === "orders" && (
                        <div className="grid grid-cols-2 gap-[24px]">
                            {orders.map((o, idx) => (
                                <div key={idx} className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-5 flex flex-col justify-between hover:border-orange-500 transition-all">
                                    <div className="flex justify-between items-start border-b border-[#1F272A] pb-3 mb-3">
                                        <div className="flex flex-col">
                                            <span className="text-[16px] font-bold text-white">№ {o.id}</span>
                                            <span className="text-[#F7F9FA66] text-[13px] mt-1">{o.description}</span>
                                        </div>
                                        {/* Status badges */}
                                        <span className={`text-[12px] font-bold px-2.5 py-1 rounded ${
                                            o.statusType === "success" 
                                                ? "bg-[#DEF7EC] text-[#03543F]" 
                                                : o.statusType === "pending"
                                                ? "bg-[#FEF3C7] text-[#D97706]"
                                                : "bg-[#FDE8E8] text-[#9B1C1C]"
                                        }`}>
                                            {o.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            {o.images.map((img, i) => (
                                                <img key={i} src={img} alt="item" className="w-[50px] h-[50px] object-cover rounded-[4px] border border-[#1F272A]" />
                                            ))}
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-[#F7F9FA99] text-[12px]">Jami narxi:</span>
                                            <span className="text-[#82CC27] text-[18px] font-bold mt-1">{o.price.toLocaleString()} UZS</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Active Tab: Saqlanganlar */}
                    {activeTab === "saved" && (
                        <div className="flex flex-col gap-6">
                            {/* Sub-tabs selection */}
                            <div className="flex gap-3 bg-[#1A1D1F] p-1.5 rounded-[8px] border border-[#1F272A] w-fit">
                                <button 
                                    onClick={() => setSavedSubTab("courses")}
                                    className={`px-6 py-2 rounded-[6px] text-[14px] font-medium cursor-pointer transition-all ${
                                        savedSubTab === "courses" 
                                            ? "bg-[#FFFFFF0F] text-white" 
                                            : "text-[#F7F9FA99] hover:text-white"
                                    }`}
                                >
                                    Saqlangan kurslar
                                </button>
                                <button 
                                    onClick={() => setSavedSubTab("books")}
                                    className={`px-6 py-2 rounded-[6px] text-[14px] font-medium cursor-pointer transition-all ${
                                        savedSubTab === "books" 
                                            ? "bg-[#FFFFFF0F] text-white" 
                                            : "text-[#F7F9FA99] hover:text-white"
                                    }`}
                                >
                                    Saqlangan kitoblar
                                </button>
                            </div>                            {/* Sub-tab items grid */}
                            {savedSubTab === "books" ? (
                                <div className="grid grid-cols-3 gap-[24px]">
                                    {savedBooks.map((b) => (
                                        <div key={b.id} className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] overflow-hidden p-4 relative group flex flex-col justify-between hover:border-orange-500 transition-all">
                                            {/* Heart icon on top right */}
                                            <button className="absolute top-6 right-6 z-10 w-[30px] h-[30px] bg-[#111315BF] rounded-full flex items-center justify-center text-green-500 cursor-pointer">
                                                ★
                                            </button>
                                            <img src={b.image} alt="saved book" className="w-full h-[180px] object-cover rounded-[6px]" />
                                            <div className="flex flex-col mt-4">
                                                <h3 className="font-bold text-[14px] text-white leading-[20px] line-clamp-2 h-[40px]">{b.title}</h3>
                                                <span className="text-[#82CC27] text-[16px] font-bold mt-2">{b.price.toLocaleString()} UZS</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-[24px]">
                                    {savedCourses.map((c) => (
                                        <div key={c.id} className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-5 flex gap-4 hover:border-orange-500 transition-all cursor-pointer relative">
                                            
                                            {/* Rating Badge */}
                                            <div className="w-[53px] h-[29px] flex items-center justify-center gap-[3px] rounded-[6px] border-[1px] absolute border-[#F7F9FA14] bg-[#0B141899] m-2 z-10">
                                                <span className="text-yellow-500 text-sm">★</span>
                                                <span className="text-white text-[12px] font-bold">{c.rating}</span>
                                            </div>

                                            <div className="relative rounded-[6px] overflow-hidden w-[120px] h-[90px] bg-zinc-900 flex items-center justify-center flex-shrink-0">
                                                <img src={c.image} alt="saved course" className="w-full h-full object-cover opacity-80" />
                                                <div className="absolute w-[36px] h-[36px] rounded-full bg-[#111315BF] flex items-center justify-center">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-between w-full">
                                                <div>
                                                    <h3 className="font-bold text-[16px] text-white leading-[22px] line-clamp-1">{c.title}</h3>
                                                    
                                                    {/* Price with oldPrice display */}
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-[#82CC27] text-[14px] font-bold">
                                                            {c.price === 0 ? "Bepul" : `${c.price.toLocaleString()} uzs`}
                                                        </span>
                                                        {c.oldPrice > 0 && (
                                                            <span className="text-[#EF4444] line-through text-[12px] decoration-[#EF4444]">
                                                                {c.oldPrice.toLocaleString()} uzs
                                                            </span>
                                                        )}
                                                    </div>

                                                    <p className="text-[#F7F9FA66] text-[12px] line-clamp-2 mt-1 leading-[18px]">{c.desc}</p>
                                                </div>

                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="flex items-center gap-2 text-[#F7F9FA99] text-[11px]">
                                                        <span className="bg-[#FFFFFF1A] px-2 py-0.5 rounded text-amber-50 text-[10px]">{c.difficulty}</span>
                                                        <span>{c.author}</span>
                                                        <span>{c.lessons} ta dars</span>
                                                    </div>
                                                    
                                                    {/* Saved heart active state */}
                                                    <button className="text-white hover:text-red-500 transition-colors">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Active Tab: Umumiy sozlamalar */}
                    {activeTab === "settings" && (
                        <div className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-8 w-[600px] flex flex-col gap-6">
                            <h2 className="text-[22px] font-bold text-white border-b border-[#1F272A] pb-4">Shaxsiy ma'lumotlar</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] text-[#F7F9FA99] font-medium">Foydalanuvchi ismi</label>
                                    <input 
                                        type="text" 
                                        defaultValue="Jasurbek" 
                                        className="bg-[#15181A] border border-[#232627] rounded-[8px] px-4 py-3 outline-none text-white text-[15px]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] text-[#F7F9FA99] font-medium">Familiya</label>
                                    <input 
                                        type="text" 
                                        defaultValue="Po'latov" 
                                        className="bg-[#15181A] border border-[#232627] rounded-[8px] px-4 py-3 outline-none text-white text-[15px]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] text-[#F7F9FA99] font-medium">Telefon raqami</label>
                                    <input 
                                        type="text" 
                                        defaultValue="+998 90 123 45 67" 
                                        className="bg-[#15181A] border border-[#232627] rounded-[8px] px-4 py-3 outline-none text-white text-[15px]"
                                    />
                                </div>
                            </div>
                            <button className="bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold py-3 px-6 rounded-[8px] transition-colors w-fit cursor-pointer">
                                Saqlash
                            </button>
                        </div>
                    )}

                </div>

            </div>

            <Footer />
        </div>
    );
}
