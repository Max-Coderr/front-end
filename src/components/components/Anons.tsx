export default function Anons() {
    return <div className="ml-5 flex flex-col items-start relative w-full p-4 bg-[#7C2D12] overflow-hidden rounded-[8px]">
        <img className="absolute top-0 left-0 w-full h-full" src="/bg.svg" alt="" />
        <img src="/Vector.svg" alt="" className="absolute top-0 right-0" />
        <img src="/Group.svg" alt="" className="h-[24px]"/>
        <h1 className="font-poppins font-[700] text-[20px] w-[294px] mt-2">Aynan <span className="text-[#ffff00]">siz</span> uchun qanday imtiyozlar borligini bilib oling</h1>
        <button className="flex items-center justify-center gap-2 w-[149px] bg-[#EA580C] text-[16px] text-white py-2 px-5 font-poppins font-[500] h-[40px] cursor-pointer hover:bg-[#C2410C] transition-colors mt-2 rounded-[8px]">Batafsil<img src="/Vector%20(Stroke).svg" alt="img" /></button>
    </div>
}
