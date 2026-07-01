"use client";

import axios from "axios";
import {useEffect, useState} from "react";
import HeaderItem from "../../src/components/components/Header/Header.tsx";
import NewsItem from "../../src/news/components/NewsItem.tsx";
import Footer from "../../src/components/components/Footer/Footer.tsx";
import Section from "../../src/components/components/Section.tsx";
import NewsItem2 from "../../src/news/components/NewsItem2.tsx";
import BookItem from "../../src/components/components/Book/BookItem.tsx";

interface NewsType {
    id: number;
    title: string;
    date: string;
    image: string;
    content: string;
}

import { MOCK_NEWS } from "../../src/mockData.ts";

const STEP = 12;

export default function NewsPage() {

    const [news, setNews] = useState<NewsType[]>([]);
    const [search, setSearch] = useState("");
    const [shown, setShown] = useState(STEP);

    useEffect(() => {
        async function getAllNews() {
            try {
                const response = await axios.get(`http://localhost:3000/public/news?search=${search}`);
                console.log(response.data)
                setNews(response.data.data);
            } catch (error) {
                console.warn("Backend not running, using mock news data:", error);
                const filtered = MOCK_NEWS.filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.content.toLowerCase().includes(search.toLowerCase())
                );
                setNews(filtered);
            }
        }

        getAllNews();
    }, [search]);

    const loadMore = () => {
        setShown((prev) => prev + STEP);
    };

    return <div className="bg-[#202020]">
        <HeaderItem/>
        <Section/>
        <NewsItem2 search={search} setSearch={setSearch}/>
        <div className="flex ml-[50px] gap-10">
            <div className="flex flex-col mt-[26px] w-[1026px]">
                <div className="flex flex-wrap gap-5">
                    {news.length > 0 ? (
                        news.slice(0, shown).map((item) => (
                            <NewsItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                date={item.date}
                                image={item.image}
                                content={item.content}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col w-[1000px] items-center justify-center py-16 bg-[#202020] rounded-[12px]">
                            <p className="text-[#F7F9FA] text-[16px] font-medium">Hech qanday ma'lumot topilmadi</p>
                        </div>
                    )}
                </div>
                {shown < news.length && (
                    <button
                        onClick={loadMore}
                        className="ml-[450px] w-[131px] h-[40px] mt-[20px] bg-[#1A1D1F] rounded-[8px] text-white"
                    >
                        Ko'proq
                    </button>
                )}
            </div>
            <BookItem/>
        </div>
        <Footer/>
    </div>
}
