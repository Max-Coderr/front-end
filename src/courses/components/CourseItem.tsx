"use client";

import { useRouter } from "next/navigation";

export default function CourseItem({
                                       author,
                                       category,
                                       language,
                                       difficulty,
                                       title,
                                       image,
                                       price,
                                       newPrice,
                                       rating,
                                       sectionsCount,
                                       id,
                                   }: {
    author: any,
    category: any,
    language: any,
    difficulty: any,
    title: string,
    image: string,
    price: number,
    newPrice: number,
    rating: number,
    sectionsCount: number,
    id: number,
}) {

    let newPrice1 = Number(newPrice)
    let price1 = Number(price)
    const router = useRouter();

    const difficultyIconSrc = difficulty?.icon
        ? difficulty.icon.startsWith("http")
            ? difficulty.icon
            : difficulty.icon.startsWith("/")
                ? difficulty.icon
                : `/${difficulty.icon}`
        : "/BookImage/icon11.svg";

    return <div
        onClick={() => router.push(`/course/${id}`)}
        className="w-[676px] h-[189px] bg-[#1A1D1F] mt-[24px] flex p-[24px] gap-[20px] rounded-[8px] border-[#1F272A] border-[1px] hover:border-[#F97316] cursor-pointer">

        <div>
            <div
                className="w-[53px] h-[29px] flex items-center justify-center gap-[3px] rounded-[6px] border-[1px] absolute border-[#F7F9FA14] bg-[#0B141899] m-2">
                <img src='/Star%201.svg' alt="liked"/>
                <p>{rating}</p>
            </div>
            <p className="w-[32px] h-[22px] bg-[#1A1D1F] border-[1px] border-[#F7F9FA14] font-medium text-[12px] text-[#C9C4A6] rounded-[6px] text-center absolute mt-[110px] ml-[10px]">{language.code}</p>
            <img src={image} alt='image' className="w-[185px] h-[141px rounded-[8px]"/>
        </div>
        <div className="flex flex-col justify-between">
            <div className="w-[427px] h-[44px]">
                <h1 className="w-[427px] h-[26px] text-[20px] font-bold">{title}</h1>
                <h4 className="w-[150px] h-[18px] text-[14px] text-[#F7F9FA99]">{author.fullName}</h4>
            </div>
            <div>
                <p className="w-[88px] h-[18px] text-[12px] font-normal line-through decoration-red-500">{price1 === 0 ? '' : `${price1} uzs`}</p>
                <h1 className="w-[112px] h-[24px] font-bold text-[#82CC27]">{newPrice1 === 0 ? "Bepul kurs" : `${newPrice} uzs`}</h1>
            </div>
            <div className="w-[369px] h-[24px] flex justify-between">
                <div className="flex gap-1">
                    <img src={difficultyIconSrc} alt='img'
                         className="object-cover w-[13px] h-[17.33px]"/>
                    <p className="text-[#F7F9FA99] w-[90px] h-[18px] font-normal text-[14px] mr-[-15px]">{difficulty.title}</p>
                </div>
                <div className="h-[20px] w-[1px] bg-[white]"></div>
                <div className="flex gap-1">
                    <img src="/section.svg" alt="section icon" className="w-[22px] h-[22px]"/>
                    <p className='text-[#F7F9FA99] font-normal text-[14px]'>{sectionsCount} ta bo'lim</p>
                </div>
                <div className="h-[20px] w-[1px] bg-[white]"></div>
                <div className="flex gap-1">
                    <img src="/category.svg" alt="category icon" className="w-[22px] h-[22px]"/>
                    <p className="text-[#F7F9FA99] w-[100px] h-[18px] text-[14px] font-normal">{category.title}</p>
                </div>
            </div>
        </div>
    </div>
}
