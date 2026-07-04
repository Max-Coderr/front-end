"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatAssetUrl } from "@/app/common/utils/imageUrl";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

interface CourseItem {
  id: number;
  title: string;
  image: string;
  rating: string;
  views?: number;
}

export default function PopularCoursesSidebar() {
  const [courses, setCourses] = useState<CourseItem[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/public/courses`)
      .then((res) => {
        const data: CourseItem[] = res.data.data ?? [];
        setCourses(data.slice(0, 4));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-[326px] rounded-lg bg-brand-surface border border-brand-border overflow-hidden shadow-md">
      <div className="flex justify-between items-center p-4 border-b border-brand-border/60">
        <h3 className="text-brand-text font-poppins font-semibold text-[15px]">Top kurslar</h3>
        <Link
          href="/courses"
          className="flex items-center gap-1 hover:text-brand-accent transition-colors select-none text-[13px] text-brand-muted font-medium"
        >
          <span>Barchasi</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col">
        {courses.map((course, idx) => (
          <div key={course.id}>
            <Link
              href={`/courses/${course.id}`}
              className="flex items-center gap-3 p-4 hover:bg-brand-bg transition-colors cursor-pointer group"
            >
              <div className="w-[80px] h-[80px] shrink-0 rounded-lg overflow-hidden bg-brand-surface relative border border-brand-border/40">
                <Image
                  src={formatAssetUrl(course.image)}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <h5 className="text-brand-text text-[14px] font-bold leading-tight line-clamp-2 mb-2 group-hover:text-brand-accent transition-colors">
                  {course.title}
                </h5>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-brand-text text-[13px] font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-muted">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-[12px] font-normal">{course.views ?? 0}</span>
                  </div>
                </div>
              </div>
            </Link>
            {idx < courses.length - 1 && (
              <div className="h-px mx-4 bg-brand-border/40" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
