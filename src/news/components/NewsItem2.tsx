export default function NewsItem2({search, setSearch}: {search: string, setSearch: (val: string) => void}) {
    return <div className="w-[1030px] h-[52px] flex items-center mt-5 justify-between ml-[30px]">
        <h1 className="w-[180px] h-[42px] font-bold text-[32px] text-white">Yangiliklar</h1>
        <input
            type="text"
            placeholder="⌕ Izlash"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#15181A] w-[326px] h-[52px] text-white rounded-[8px] px-[16px] py-[4px] outline-none border-[#232627] border-[1px]"
        />
    </div>
}
