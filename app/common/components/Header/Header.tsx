"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import AuthCenterModal from "@/app/common/components/Auth/AuthCenterModal";
import NotAuthModal from "@/app/common/components/Auth/NotAuthModal";
import UserProfileMenuBadge from "@/app/common/components/Auth/UserProfileMenuBadge";
import { SessionWizardStep } from "@/app/common/components/Auth/types";
import { AuthenticatedUserProfile, fetchProfileData, retrieveSessionToken } from "@/app/common/components/Auth/authApi";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

const NAV_NAVIGATION_LINKS = [
  { label: "Asosiy", path: "/main" },
  { label: "Yangiliklar", path: "/news" },
  { label: "Kurslar", path: "/courses" },
  { label: "Kutubxona", path: "/book" },
  { label: "Bog'lanish", path: "/contact" },
];

interface SearchDataResult {
  id: number;
  title: string;
  type: "course" | "book" | "news";
  href: string;
}

function renderHighlightedMatches(originalString: string, searchKey: string) {
  if (!searchKey) return <span>{originalString}</span>;
  const matchIndex = originalString.toLowerCase().indexOf(searchKey.toLowerCase());
  if (matchIndex === -1) return <span>{originalString}</span>;
  return (
    <>
      <span>{originalString.slice(0, matchIndex)}</span>
      <span className="bg-brand-accent/20 border border-brand-accent/40 rounded px-1 text-brand-accent">
        {originalString.slice(matchIndex, matchIndex + searchKey.length)}
      </span>
      <span>{originalString.slice(matchIndex + searchKey.length)}</span>
    </>
  );
}

export default function HeaderItem() {
  const currentPathname = usePathname();
  const navigationRouter = useRouter();
  
  const [unauthorizedPromptOpen, setUnauthorizedPromptOpen] = useState(false);
  const [authFormModalOpen, setAuthFormModalOpen] = useState(false);
  const [authScreenStep, setAuthScreenStep] = useState<SessionWizardStep>("signin");
  const [profileData, setProfileData] = useState<AuthenticatedUserProfile | null>(null);
  
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQueryText, setSearchQueryText] = useState("");
  const [matchedResultsList, setMatchedResultsList] = useState<SearchDataResult[]>([]);
  const [searchCompleted, setSearchCompleted] = useState(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const loadUserProfileSession = useCallback(() => {
    const token = retrieveSessionToken();
    if (token) {
      fetchProfileData(token).then(setProfileData);
    } else {
      setProfileData(null);
    }
  }, []);

  useEffect(() => {
    loadUserProfileSession();
  }, [loadUserProfileSession]);

  useEffect(() => {
    const trimmedQuery = searchQueryText.trim();
    if (!trimmedQuery) {
      setMatchedResultsList([]);
      setSearchCompleted(false);
      return;
    }
    const debounceTimer = setTimeout(async () => {
      try {
        const [cResponse, bResponse, nResponse] = await Promise.all([
          axios.get(`${BASE_API_URL}/public/courses`),
          axios.get(`${BASE_API_URL}/public/book`),
          axios.get(`${BASE_API_URL}/public/news`),
        ]);
        const lowerQuery = trimmedQuery.toLowerCase();
        
        const courses = (cResponse.data.data ?? [])
          .filter((c: { title: string }) => c.title.toLowerCase().includes(lowerQuery))
          .map((c: { id: number; title: string }) => ({
            id: c.id,
            title: c.title,
            type: "course" as const,
            href: `/courses/${c.id}`,
          }));
          
        const books = (bResponse.data.data ?? [])
          .filter((b: { title: string }) => b.title.toLowerCase().includes(lowerQuery))
          .map((b: { id: number; title: string }) => ({
            id: b.id,
            title: b.title,
            type: "book" as const,
            href: `/book/${b.id}`,
          }));
          
        const news = (nResponse.data.data ?? [])
          .filter((n: { title: string }) => n.title.toLowerCase().includes(lowerQuery))
          .map((n: { id: number; title: string }) => ({
            id: n.id,
            title: n.title,
            type: "news" as const,
            href: `/news/${n.id}`,
          }));
          
        setMatchedResultsList([...courses, ...books, ...news]);
        setSearchCompleted(true);
      } catch {
        setSearchCompleted(true);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQueryText]);

  const handleClearAndCloseSearch = () => {
    setIsSearchActive(false);
    setSearchQueryText("");
    setMatchedResultsList([]);
    setSearchCompleted(false);
  };

  return (
    <header className="w-[1460px] h-[76px] border border-brand-border bg-brand-surface rounded-[16px] flex items-center justify-between px-6 ml-[32px] mt-5 shrink-0 relative z-[41] shadow-lg">
      <div className="flex items-center gap-5">
        <Image src="/icon1.svg" alt="Grandmaster Chess Logo" width={104} height={28} className="mb-2 cursor-pointer" onClick={() => navigationRouter.push("/main")} />
        <div className="w-px h-6 bg-brand-border" />
        <div className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors cursor-pointer select-none">
          <span className="text-[14px] font-medium font-poppins">O&apos;zbekcha</span>
          <svg className="w-4 h-4 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isSearchActive && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={handleClearAndCloseSearch} />
      )}

      {isSearchActive ? (
        <div ref={searchContainerRef} className="relative z-[42]">
          <div className="w-[676px] h-[52px] bg-brand-bg border border-brand-accent rounded-[10px] flex items-center px-4 gap-3 transition-shadow shadow-md">
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              autoFocus
              value={searchQueryText}
              onChange={(e) => setSearchQueryText(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && handleClearAndCloseSearch()}
              placeholder="Kurslar, kitoblar qidirish..."
              className="flex-1 bg-transparent outline-none text-brand-text text-[15px] font-medium font-poppins placeholder-brand-muted/70 caret-brand-accent"
            />
            <button
              onClick={() => {
                setSearchQueryText("");
                setMatchedResultsList([]);
                setSearchCompleted(false);
              }}
              className="px-3 h-[36px] bg-brand-border/40 hover:bg-brand-border text-brand-text text-[13px] font-medium font-poppins rounded-lg transition-colors cursor-pointer"
            >
              Tozalash
            </button>
          </div>

          {searchCompleted && (
            <div className="absolute top-[62px] left-0 w-[676px] bg-brand-surface border border-brand-border rounded-xl shadow-2xl z-50 p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
              {matchedResultsList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 gap-4">
                  <Image src="/search-empty.png" alt="Empty state" width={180} height={120} className="object-contain opacity-70" />
                  <span className="text-brand-text text-[18px] font-semibold font-poppins">
                    Hech qanday ma&apos;lumot topilmadi
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {matchedResultsList.map((item, idx) => (
                    <div key={`${item.type}-${item.id}`}>
                      <div
                        onClick={() => {
                          navigationRouter.push(item.href);
                          handleClearAndCloseSearch();
                        }}
                        className="w-full py-2.5 flex items-center gap-3 cursor-pointer hover:bg-brand-bg rounded-lg px-2 group transition-colors"
                      >
                        <div className="w-[32px] h-[32px] shrink-0 flex items-center justify-center bg-brand-border/30 rounded-lg">
                          {item.type === "course" && (
                            <Image src="/search-course-icon.png" alt="Course" width={22} height={22} className="object-contain" />
                          )}
                          {item.type === "book" && (
                            <Image src="/search-book-icon.png" alt="Book" width={22} height={22} className="object-contain" />
                          )}
                          {item.type === "news" && (
                            <Image src="/NewsImage/icon8.svg" alt="News" width={18} height={18} className="object-contain" />
                          )}
                        </div>
                        <span className="text-brand-text text-[15px] font-medium font-poppins group-hover:text-brand-accent transition-colors flex-1 truncate">
                          {renderHighlightedMatches(item.title, searchQueryText.trim())}
                        </span>
                      </div>
                      {idx < matchedResultsList.length - 1 && (
                        <div className="h-px bg-brand-border/40 my-1" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <ul className="flex items-center gap-10">
          {NAV_NAVIGATION_LINKS.map((item) => {
            const isActive = currentPathname === item.path;
            return (
              <li
                key={item.path}
                onClick={() => navigationRouter.push(item.path)}
                className="relative cursor-pointer flex flex-col items-center gap-1 py-1 select-none group"
              >
                <span
                  className={`font-poppins text-[14px] font-semibold transition-colors ${
                    isActive ? "text-brand-text" : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {item.label}
                </span>
                <div
                  className={`absolute bottom-[-18px] w-8 h-[3px] rounded-full transition-all duration-200 ${
                    isActive ? "bg-brand-accent" : "bg-transparent group-hover:bg-brand-border"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      )}

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-6 text-brand-muted">
          {isSearchActive ? (
            <button onClick={handleClearAndCloseSearch} className="hover:text-brand-text transition-colors p-1 rounded hover:bg-brand-border">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setIsSearchActive(true)} className="hover:text-brand-text transition-colors p-1 rounded hover:bg-brand-border">
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}

          <button onClick={() => navigationRouter.push("/cart")} className="hover:text-brand-text transition-colors relative p-1 rounded hover:bg-brand-border">
            <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          
          <button className="hover:text-brand-text transition-colors p-1 rounded hover:bg-brand-border">
            <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        <div className="w-px h-6 bg-brand-border" />

        {profileData ? (
          <div onClick={() => navigationRouter.push("/profile")} className="flex items-center cursor-pointer select-none">
            <UserProfileMenuBadge profile={profileData} />
          </div>
        ) : (
          <button
            onClick={() => setUnauthorizedPromptOpen(true)}
            className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-bg text-[14px] font-poppins font-semibold px-5 h-10 rounded-lg cursor-pointer transition-colors active:scale-95 duration-150 shadow-md"
          >
            Kirish
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 01-3-3h3a3 3 0 013 3v1" />
            </svg>
          </button>
        )}
      </div>

      <NotAuthModal
        open={unauthorizedPromptOpen}
        onClose={() => setUnauthorizedPromptOpen(false)}
        onSignIn={() => {
          setUnauthorizedPromptOpen(false);
          setAuthScreenStep("signin");
          setAuthFormModalOpen(true);
        }}
        onSignUp={() => {
          setUnauthorizedPromptOpen(false);
          setAuthScreenStep("signup");
          setAuthFormModalOpen(true);
        }}
      />
      
      <AuthCenterModal
        open={authFormModalOpen}
        onClose={() => setAuthFormModalOpen(false)}
        onSuccess={loadUserProfileSession}
        initialStep={authScreenStep}
      />
    </header>
  );
}
