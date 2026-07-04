import Image from "next/image";

export default function AnnouncementsBanner() {
  return (
    <div className="w-[326px] h-[192px] flex flex-col items-start relative p-5 bg-gradient-to-br from-indigo-950 to-brand-surface overflow-hidden rounded-lg border border-brand-border">
      <Image className="absolute top-0 left-0 w-full h-full object-cover opacity-30" src="/bg.svg" alt="Background pattern" fill />
      <Image src="/Vector.svg" alt="Icon Vector" className="absolute top-0 right-0" width={90} height={90} />
      <div className="z-10 flex flex-col items-start h-full justify-between">
        <Image src="/Group.svg" alt="Group Icon" className="h-[22px] w-auto" width={110} height={22} />
        <h3 className="font-poppins font-bold text-[18px] text-brand-text leading-tight w-[280px] mt-2">
          Aynan <span className="text-yellow-400">siz</span> uchun qanday imtiyozlar borligini bilib oling
        </h3>
        <button className="z-10 flex items-center justify-center gap-2 px-5 py-2 font-poppins font-semibold text-[14px] text-brand-bg bg-brand-accent rounded-lg hover:bg-brand-accent-hover transition-all duration-200 shadow-lg active:scale-95 cursor-pointer mt-1">
          Batafsil
          <Image src="/Vector%20(Stroke).svg" alt="Arrow Right" width={14} height={14} />
        </button>
      </div>
    </div>
  );
}
