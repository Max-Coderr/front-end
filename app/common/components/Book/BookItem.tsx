"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatAssetUrl } from "@/app/common/utils/imageUrl";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

interface BookData {
  id: number;
  title: string;
  image: string;
  author: { fullName: string };
}

export default function TopBookList() {
  const [topBooks, setTopBooks] = useState<BookData[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/public/book`)
      .then((res) => {
        const data: BookData[] = res.data.data ?? [];
        setTopBooks(data.slice(0, 4));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="w-[326px] rounded-lg bg-brand-surface border border-brand-border p-4 shadow-md">
      <div className="flex justify-between items-center pb-3 border-b border-brand-border/60">
        <h3 className="text-brand-text font-poppins font-semibold text-[15px]">Top kitoblar</h3>
        <Link
          href="/book"
          className="flex items-center gap-1 hover:text-brand-accent transition-colors select-none text-[13px] text-brand-muted font-medium"
        >
          <span>Barchasi</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {topBooks.map((book, idx) => (
          <div key={book.id}>
            <Link
              href={`/book/${book.id}`}
              className="flex gap-3 items-center group cursor-pointer"
            >
              <div className="relative w-[60px] h-[80px] shrink-0 rounded-md overflow-hidden bg-brand-bg border border-brand-border/40">
                <Image
                  src={formatAssetUrl(book.image)}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h5 className="font-poppins font-bold text-[14px] leading-tight text-brand-text group-hover:text-brand-accent transition-colors line-clamp-2">
                  {book.title}
                </h5>
                <span className="text-[12px] text-brand-muted mt-1 truncate">
                  {book.author?.fullName}
                </span>
              </div>
            </Link>
            {idx < topBooks.length - 1 && (
              <div className="h-px bg-brand-border/40 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
