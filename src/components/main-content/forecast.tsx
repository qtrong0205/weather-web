import { useEffect, useState } from "react";
import type { MainInfoProps } from "../../helper/prop";
import NextDaysCard from "./NextDaysCard";
import { getForecastData, type IForecastData } from "../../helper/getData";

const ForecastCards = (props: MainInfoProps) => {
    const [forecastData, setForecastData] = useState<IForecastData[]>([]);
    const { isSearch, setIsSearch } = props;

    useEffect(() => {
        async function fetchData() {
            const data = await getForecastData();
            setForecastData(data);
            setIsSearch(false);
        }
        fetchData();
    }, [isSearch]);

    return (
        <div>
            <div className="hidden sm:flex gap-5 justify-center w-full flex-row">
                {forecastData.length > 0 ? (
                    forecastData.map((item, index) => (
                        <NextDaysCard key={index} item={item} />
                    ))
                ) : (
                    <p className="text-gray-500">Đang tải dữ liệu...</p>
                )}
            </div>
        </div>
    );
};

export default ForecastCards;
