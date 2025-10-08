import { Cloudy } from "lucide-react"
import type { IForecastData } from "../../helper/getData";

interface NextDaysCardProps {
    item: IForecastData;
}

const days = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

const NextDaysCard = (props: NextDaysCardProps) => {
    const { item } = props;
    const date = new Date(item.date);
    const dayOfWeek = days[date.getDay()];
    const iconUrl = item.icon
    return (
        <div className="w-[360px] aspect-video rounded-lg shadow flex flex-col items-center justify-center gap-2 bg-slate-50 group">
            <div className="flex flex-col items-center p-10 rounded-md w-full sm:px-4 bg-gray-900 text-gray-100">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">{dayOfWeek}</h2>
                    <p className="text-[0.72rem] text-gray-400">{`${date.getDate()}/${date.getMonth()}`}</p>
                </div>
                <div className="mb-2 text-sm font-semibold">
                    {item.maxTemp}°
                </div>
                {iconUrl ? (
                    <img src={iconUrl} alt="Weather Icon" className="w-10 h-10" />
                ) : (
                    <Cloudy className="w-10 h-10 text-gray-400" />
                )}
            </div>
        </div>
    );
}

export default NextDaysCard