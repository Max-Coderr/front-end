"use client";

import BookItem from "./BookItem.tsx";
import EmptyState from "../../courses/components/EmptyState.tsx";
import { MOCK_BOOKS } from "../../mockData.ts";
import axios from 'axios'
import {useEffect, useState} from "react";

const STEP = 4;

export default function BookItemContainer({search}: { search: string }) {
    const [course, setCourse] = useState<{
        id: number,
        author: { fullName: string },
        category: { title: string },
        language: { code: string },
        difficulty: { title: string, icon: string },
        title: string,
        image: string,
        price: number,
        newPrice: number,
        rating: number,
    }[]>([])
    const [shown, setShown] = useState(STEP);

    useEffect(() => {
        async function getAllCourse() {
            try {
                const response = await axios.get(`http://localhost:3000/public/book`)
                setCourse(response.data.data)
            } catch (error) {
                console.warn("Backend not running, using mock books data:", error);
                const filtered = MOCK_BOOKS.filter((item) => 
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.author.fullName.toLowerCase().includes(search.toLowerCase())
                );
                setCourse(filtered);
            }
        }

        getAllCourse()
    }, [search])

    const loadMore = () => {
        setShown((prev) => prev + STEP);
    };

    if (course.length === 0) {
        return <EmptyState />;
    }

    return <div className="w-full">
        {course.slice(0, shown).map((item) => <BookItem
            key={item.id}
            id={item.id}
            author={item.author}
            category={item.category}
            language={item.language}
            difficulty={item.difficulty}
            title={item.title}
            image={item.image}
            price={item.price}
            newPrice={item.newPrice}
            rating={item.rating}
        />)}
        {shown < course.length && (
            <button
                onClick={loadMore}
                className="ml-[280px] w-[131px] h-[40px] mt-[20px] bg-[#1A1D1F] rounded-[8px] text-white cursor-pointer hover:bg-zinc-800"
            >
                Ko'proq
            </button>
        )}

    </div>
}
