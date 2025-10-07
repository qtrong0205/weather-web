import { Cloudy } from "lucide-react"

const GeneralCard = () => {
    return (
        <div className="w-full max-w-xs md:max-w-sm md:h-[16rem] h-auto rounded-2xl bg-blue-300 mx-auto">
            {/* header */}
            <div className="flex justify-between items-center p-3 rounded-t-2xl text-lg md:text-xl font-medium bg-blue-400">
                <span>Friday</span>
                <span>11:45PM</span>
            </div>
            {/* content */}
            <div className="p-3 text-lg md:text-xl font-medium">
                <div className="flex justify-between items-center">
                    <span>36 độ</span>
                    <Cloudy />
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div>Real Feel</div>
                        <div>Wind</div>
                        <div>Pressure</div>
                        <div>Humidity</div>
                    </div>
                    <div>
                        <div>Sunrise</div>
                        <div>Sunset</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralCard