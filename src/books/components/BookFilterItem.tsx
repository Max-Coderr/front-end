"use client";

import {useState} from "react";

interface FilterProps {
    lessonLanguage: string;
    setLessonLanguage: (val: string) => void;
    degree: string;
    setDegree: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
    rating: string;
    setRating: (val: string) => void;
}

export default function BookFilterItem({
    lessonLanguage, setLessonLanguage,
    degree, setDegree,
    category, setCategory,
    rating, setRating
}: FilterProps) {
    const [isOpenLessonLanguage, setIsOpenLessonLanguage] = useState(false)
    const [isOpenDegree, setIsOpenDegree] = useState(false)
    const [isOpenCategory, setIsOpenCategory] = useState(false)

    return <div className="w-[286px] h-[401px] mt-[24px] z-20">
        <div className="w-[286px] h-[82px] mb-[24px]">
            <p className="font-medium text-[12px] text-[#F7F9FA99] mb-[16px]">TILNI TANLANG:</p>
            <div
                className="relative select-none bg-[#15181A] border-[#232627] border-[1px] rounded-[8px] w-[286px] h-[54px] flex justify-between items-center p-[16px] cursor-pointer"
                onClick={() => setIsOpenLessonLanguage(!isOpenLessonLanguage)}>
                <div>{lessonLanguage}</div>
                <img src="/select.svg" alt="select icon"/>
                {isOpenLessonLanguage &&
                    <div className="absolute top-[58px] left-0 w-full z-30 px-2 py-1 bg-[#15181A] border border-[#232627] rounded-md shadow-lg">
                        <div className="p-2 hover:bg-white/5" onClick={() => setLessonLanguage('Barchasi')}>Barchasi</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setLessonLanguage('English')}>English</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setLessonLanguage("O'zbek")}>O'zbek</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setLessonLanguage('Russian')}>Russian</div>
                    </div>}
            </div>
        </div>
        <div className="w-[286px] h-[82px]">
            <p className="font-medium text-[12px] text-[#F7F9FA99] mb-[16px]">Darajani tanlang:</p>
            <div
                className="relative select-none bg-[#15181A] border-[#232627] border-[1px] rounded-[8px] w-[286px] h-[54px] flex justify-between items-center p-[16px] cursor-pointer"
                onClick={() => setIsOpenDegree(!isOpenDegree)}>
                <div>{degree}</div>
                <img src="/select.svg" alt="select icon"/>
                {isOpenDegree &&
                    <div className="absolute top-[58px] left-0 w-full z-30 px-2 py-1 bg-[#15181A] border border-[#232627] rounded-md shadow-lg">
                        <div className="p-2 hover:bg-white/5" onClick={() => setDegree('Barchasi')}>Barchasi</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setDegree("Boshlang'ich")}>Boshlang'ich</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setDegree('Havaskor')}>Havaskor</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setDegree('Professional')}>Professional</div>
                    </div>}
            </div>
        </div>
        <div className="w-[286px] h-[82px] mt-[24px]">
            <p className="font-medium text-[12px] text-[#F7F9FA99] mb-[16px]">Kategoriya:</p>
            <div
                className="relative select-none bg-[#15181A] border-[#232627] border-[1px] rounded-[8px] w-[286px] h-[54px] flex justify-between items-center p-[16px] cursor-pointer"
                onClick={() => setIsOpenCategory(!isOpenCategory)}>
                <div>{category}</div>
                <img src="/select.svg" alt="select icon"/>
                {isOpenCategory &&
                    <div className="absolute top-[58px] left-0 w-full z-30 px-2 py-1 bg-[#15181A] border border-[#232627] rounded-md shadow-lg">
                        <div className="p-2 hover:bg-white/5" onClick={() => setCategory('Barchasi')}>Barchasi</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setCategory('Taktika')}>Taktika</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setCategory('Strategiya')}>Strategiya</div>
                        <div className="p-2 hover:bg-white/5" onClick={() => setCategory("O'yinlar to'plami")}>O'yinlar to'plami</div>
                    </div>}
            </div>
        </div>
        <div className="w-[286px] h-[82px] mt-[24px]">
            <div>
                <p className="font-medium text-[12px] text-[#F7F9FA99] mb-[16px]">Reyting:</p>
                <div
                    className="flex flex-row-reverse justify-around border-[#232627] border-[1px] items-center [&>input]:hidden bg-[#15181A] w-[286px] h-[56px] [&>label]:text-[45px] [&>label]:rounded-[10px] [&>label]:cursor-pointer [&>label]:text-[#1A1D1F] [&>input:checked~label]:text-yellow-400 [&>label:hover]:text-yellow-400 [&>label:hover~label]:text-yellow-400">

                    <input type="radio" id="b_s5" name="book_rating" value="5" checked={rating === "5"} onChange={(e) => setRating(e.target.value)}/>
                    <label htmlFor="b_s5">★</label>

                    <input type="radio" id="b_s4" name="book_rating" value="4" checked={rating === "4"} onChange={(e) => setRating(e.target.value)}/>
                    <label htmlFor="b_s4">★</label>

                    <input type="radio" id="b_s3" name="book_rating" value="3" checked={rating === "3"} onChange={(e) => setRating(e.target.value)}/>
                    <label htmlFor="b_s3">★</label>

                    <input type="radio" id="b_s2" name="book_rating" value="2" checked={rating === "2"} onChange={(e) => setRating(e.target.value)}/>
                    <label htmlFor="b_s2">★</label>

                    <input type="radio" id="b_s1" name="book_rating" value="1" checked={rating === "1"} onChange={(e) => setRating(e.target.value)}/>
                    <label htmlFor="b_s1">★</label>

                </div>
            </div>
        </div>
    </div>
}
