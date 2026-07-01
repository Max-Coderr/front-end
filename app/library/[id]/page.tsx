"use client";
import { useParams } from "next/navigation";
import HeaderItem from "../../../src/components/components/Header/Header.tsx";
import Footer from "../../../src/components/components/Footer/Footer.tsx";
import Section from "../../../src/components/components/Section.tsx";
import Anons from "../../../src/components/components/Anons.tsx";
import { MOCK_BOOKS } from "../../../src/mockData.ts";

export default function BookSinglePage() {
    const { id } = useParams<{ id: string }>();
    const bookId = Number(id);

    const book = MOCK_BOOKS.find(b => b.id === bookId) || MOCK_BOOKS[0];

    const recommendedBooks = [
        { title: "Bobbi Fisher shaxmatni o'ynashni o'rgatanning", author: "J.Silman", image: "/BookImage/image1.svg" },
        { title: "Mening tizimim", author: "J.Silman", image: "/BookImage/image3.svg" },
        { title: "Zurixdagi shaxmat musobaqasi", author: "J.Silman", image: "/BookImage/image2.svg" },
        { title: "Mening esdaqolarlik o'yinlarim", author: "J.Silman", image: "/BookImage/image4.svg" }
    ];

    return (
        <div className="flex flex-col bg-[#111315] text-white min-h-screen font-poppins">
            <HeaderItem />
            <Section />

            
            <div className="w-[1374px] flex gap-[24px] ml-[34px] mt-6">
                
                
                <div className="w-[1026px] flex flex-col gap-6">
                    
                    <div className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-8 flex gap-8">
                        <img src={book.image} alt="book img" className="w-[200px] h-[280px] object-cover rounded-[6px] border border-zinc-800" />
                        <div className="w-full flex flex-col gap-4">
                            <h1 className="text-[28px] font-bold text-white tracking-tight">{book.title}</h1>
                            
                            <div className="flex items-center gap-3">
                                <span className="text-[#82CC27] text-[24px] font-bold">
                                    {book.newPrice === 0 ? "Bepul" : `${book.newPrice.toLocaleString()} UZS`}
                                </span>
                                {book.price > 0 && (
                                    <span className="text-[#F7F9FA66] line-through text-[16px] decoration-red-500">
                                        {book.price.toLocaleString()} UZS
                                    </span>
                                )}
                            </div>

                            
                            <div className="grid grid-cols-4 gap-4 bg-[#15181A] border border-[#1F272A] rounded-[8px] p-4 text-[14px]">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#F7F9FA66]">Daraja</span>
                                    <span className="text-white font-bold">{book.difficulty.title}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#F7F9FA66]">Muallif</span>
                                    <span className="text-white font-bold">{book.author.fullName}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#F7F9FA66]">Sahifa soni</span>
                                    <span className="text-white font-bold">231</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#F7F9FA66]">Chop etilgan sana</span>
                                    <span className="text-white font-bold">2002</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <button className="bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] border border-[#FFFFFF1A] text-white px-8 py-3 rounded-[8px] font-bold text-[16px] flex items-center gap-2 cursor-pointer transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                                    </svg>
                                    Savatchada
                                </button>
                                <button className="bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] border border-[#FFFFFF1A] p-3.5 rounded-[8px] text-white cursor-pointer transition-colors">
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 2.5C18.2 1.2 16.2 0.5 14.2 0.5C12.2 0.5 10.2 1.2 8.9 2.5L7.9 3.5L6.9 2.5C5.6 1.2 3.6 0.5 1.6 0.5C-0.4 0.5 -2.4 1.2 -3.7 2.5C-6.5 5.3 -6.5 9.7 -3.7 12.5L7.9 24.1L19.5 12.5C22.3 9.7 22.3 5.3 19.5 2.5Z" fill="currentColor" className="text-zinc-400 hover:text-red-500" />
                                    </svg>
                                </button>
                                <button className="bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] border border-[#FFFFFF1A] p-3.5 rounded-[8px] text-white cursor-pointer transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                        <polyline points="16 6 12 2 8 6" />
                                        <line x1="12" y1="2" x2="12" y2="15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-8 flex flex-col gap-4">
                        <h2 className="text-[22px] font-bold text-white">Kitob haqida</h2>
                        <p className="text-[#F7F9FA99] text-[15px] font-normal leading-[24px]">
                            Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlbovar qilmaydigan sayohatni baham ko'radi va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.
                        </p>
                    </div>
                </div>

                
                <div className="w-[326px] flex flex-col gap-6">
                    <Anons />

                    
                    <div className="bg-[#1A1D1F] border border-[#1F272A] rounded-[8px] p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-[16px] text-white">Tavfsiya</h3>
                            <button className="text-[#9DA1A3] hover:text-white text-[14px] flex items-center gap-1 cursor-pointer">
                                Barchasi
                                <span>&gt;</span>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {recommendedBooks.map((b, idx) => (
                                <div key={idx} className="flex gap-3 items-center border-b border-[#1F272A] pb-3 last:border-0 last:pb-0 cursor-pointer hover:opacity-85">
                                    <img src={b.image} alt="rec book" className="w-[45px] h-[60px] object-cover rounded-[4px]" />
                                    <div className="flex flex-col gap-1 w-[220px]">
                                        <h4 className="font-bold text-[13px] text-white leading-tight line-clamp-2">{b.title}</h4>
                                        <span className="text-[#F7F9FA66] text-[11px]">{b.author}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}
