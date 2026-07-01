export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center w-[676px] mt-16 gap-6">
            <div className="relative w-[180px] h-[110px] flex items-center justify-center">
                
                <svg width="180" height="110" viewBox="0 0 180 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M45 90C25.67 90 10 74.33 10 55C10 38.35 21.6 24.39 37.19 20.89C41.34 9.17 52.48 1 65.71 1C77.01 1 86.82 7.03 91.86 16.03C96.2 12.87 101.48 11 107.14 11C120.32 11 131 21.68 131 34.86C131 35.58 130.97 36.29 130.9 37C143.5 39.3 153 50.36 153 63.64C153 78.2 141.2 90 126.64 90H45Z" 
                        fill="#3A3F42" 
                        stroke="#4A4F52" 
                        strokeWidth="3"
                    />
                    
                    <circle cx="65" cy="50" r="3" fill="#15181A"/>
                    <circle cx="95" cy="50" r="3" fill="#15181A"/>
                    
                    <path d="M75 62C77 60 83 60 85 62" stroke="#15181A" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                
                <div className="absolute top-2 -left-8 animate-pulse">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                        <rect x="2" y="2" width="18" height="14" rx="2" fill="#5F666A" transform="rotate(-15)"/>
                    </svg>
                </div>
                <div className="absolute top-4 -right-8 animate-pulse">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                        <rect x="2" y="2" width="18" height="14" rx="2" fill="#5F666A" transform="rotate(20)"/>
                    </svg>
                </div>
            </div>
            <h2 className="text-[#FFFFFF] text-[24px] font-bold text-center mt-2 font-poppins">
                Hech qanday ma'lumot topilmadi
            </h2>
        </div>
    );
}
