import { Cloudy } from "lucide-react"

const NextDaysCard = () => {
    return (
        <div className="lg:w-full w-25 max-w-xs lg:max-w-xs lg:h-[16rem] h-[12rem] rounded-2xl bg-gray-800 mx-auto">
            {/* header */}
            <div className="text-center text-white p-3 rounded-t-2xl text-lg lg:text-xl font-medium bg-gray-800">
                <span>Friday</span>
            </div>
            {/* content */}
            <div className="h-[1px] bg-white"></div>
            <div className="p-3 text-lg lg:text-xl font-medium text-white flex flex-col justify-center items-center">
                <Cloudy />
                <span>15 độ</span>
            </div>
        </div>
    )
}

export default NextDaysCard