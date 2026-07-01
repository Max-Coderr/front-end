"use client";

import {useState} from "react";
import CourseFilterItem from "./CourseFilterItem.tsx";

export default function CourseFilters(){
    const [degree, setDegree] = useState('Barchasi');
    const [category, setCategory] = useState('Barchasi');
    const [lessonLanguage, setLessonLanguage] = useState('Barchasi');
    const [rating, setRating] = useState('');

    const handleClearAll = () => {
        setDegree('Barchasi');
        setCategory('Barchasi');
        setLessonLanguage('Barchasi');
        setRating('');
    };

    return <div className="w-[334px] h-[500px] ml-[30px] rounded-[8px] bg-[#1A1D1F] border-[1px] border-[#1F272A] flex flex-col p-[20px] justify-center items-center">
        <div className="w-[294px] h-[24px] flex justify-between">
            <h1 className="w-[44px] h-[23px] font-medium">Filter</h1>
            <button
                onClick={handleClearAll}
                className="w-[71px] h-[24px] font-normal text-[#F97316] hover:text-orange-400 cursor-pointer"
            >Tozalash</button>
        </div>
        <CourseFilterItem
            degree={degree} setDegree={setDegree}
            category={category} setCategory={setCategory}
            lessonLanguage={lessonLanguage} setLessonLanguage={setLessonLanguage}
            rating={rating} setRating={setRating}
        />
    </div>
}
