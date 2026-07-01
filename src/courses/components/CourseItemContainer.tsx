"use client";

import CourseItem from "./CourseItem.tsx";
import EmptyState from "./EmptyState.tsx";
import { MOCK_COURSES } from "../../mockData.ts";
import axios from 'axios'
import {useEffect, useState} from "react";

const STEP = 4;

export default function CourseItemContainer({search}: { search: string }) {
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
        sectionsCount: number,
    }[]>([])
    const [shown, setShown] = useState(STEP);

    useEffect(() => {
        async function getAllCourse() {
            try {
                const response = await axios.get(`http://localhost:3000/public/courses?search=${search}`)
                setCourse(response.data.data)
            } catch (error) {
                console.warn("Backend not running, using mock courses data:", error);
                const filtered = MOCK_COURSES.filter((item) => 
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
        {course.slice(0, shown).map((item) => <CourseItem
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
            sectionsCount={item.sectionsCount}
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
