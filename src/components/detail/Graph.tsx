import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useContext, useEffect, useState } from "react";
import { getRainData } from "../../helper/getData";
import { SearchContext } from "../../context/SearchContext";

export default function RainChart() {
    const { isSearch, setIsSearch } = useContext(SearchContext);
    const [data, setData] = useState<{ time: string; pop: number | null }[]>([]);

    useEffect(() => {
        async function fetchData() {
            const rainData = await getRainData();
            setData(rainData);
            setIsSearch(false);
        }
        fetchData();
    }, [isSearch]);

    return (
        <div className="w-full h-[300px] md:h-[350px] flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="time" tick={{ fontSize: 10 }} interval={2} />
                    <YAxis unit="%" tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="pop"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-300">
                Tỷ lệ mưa (%) theo khung giờ trong ngày
            </p>
        </div>
    );
}
