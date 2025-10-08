import { useEffect, useState } from "react";
import { getGeneralData } from "../../helper/getData"
import type { MainInfoProps } from "../../helper/prop";

const GeneralCard = (props: MainInfoProps) => {
    const { isSearch, setIsSearch } = props;
    let data = getGeneralData();
    const [iconUrl, setIconUrl] = useState("");
    useEffect(() => {
        data = getGeneralData();
        setIsSearch(false);
        setIconUrl(`https://openweathermap.org/img/wn/${data.icon}@2x.png`);
    }, [isSearch]);

    return (
        <div className="group relative w-70">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-sky-500 to-indigo-500 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sky-500/25">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M20%2016.2A4.5%204.5%200%200017.5%208h-1.8A7%207%200%104%2014.9%22%2F%3E%3Cpath%20d%3D%22M12%2012v9%22%2F%3E%3Cpath%20d%3D%22M8%2017l4%204%22%2F%3E%3Cpath%20d%3D%22M16%2017l-4%204%22%2F%3E%3C%2Fsvg%3E')] bg-center opacity-5" />
                <div className="relative p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-base font-semibold text-white">{data.city}</h3>
                            <p className="text-xs text-white/80">{data.country}</p>
                        </div>
                        <span className="text-xs text-white/80">{data.time}</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-start">
                            <span className="text-4xl font-bold text-white">{data.temperature}</span>
                            <span className="mt-1 text-lg text-white/80">C</span>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-2 rounded-full bg-white/20 blur-lg transition-opacity duration-300 group-hover:opacity-75" />
                            {iconUrl !== "" && <img src={iconUrl} alt="weather icon" className="w-18 h-fit" />}
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-0.5">
                            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <span className="text-xs font-medium text-white">Humidity</span>
                            <span className="text-base font-semibold text-white">{data.humidity}</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                            </svg>
                            <span className="text-xs font-medium text-white">Wind</span>
                            <span className="text-base font-semibold text-white">{data.wind}</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <span className="text-xs font-medium text-white">UV Index</span>
                            <span className="text-base font-semibold text-white">6</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GeneralCard