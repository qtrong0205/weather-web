import DetailCard from "../components/detail/DetailCard"
import RainChart from "../components/detail/Graph"
import ForecastCards from "../components/main-content/forecast"
import GeneralCard from "../components/main-content/GeneralCard"

const MainInfo = () => {
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-7 lg:gap-15 mx-auto p-4 lg:p-5 max-w-full lg:max-w-5xl">
                <div className="w-full lg:w-1/3 mb-7 lg:mb-0">
                    <GeneralCard />
                </div>
                <div className="w-full lg:w-2/3">
                    <ForecastCards />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center">
                <div className="grid sm:grid-cols-2 grid-cols-1 p-4 lg:w-[40vw] w-[60vw] gap-y-0 gap-x-10 place-items-center">
                    <DetailCard />
                    <DetailCard />
                    <DetailCard />
                    <DetailCard />
                </div>
                <div className="p-4 w-[40vw]">
                    <RainChart />
                </div>

            </div>
        </>
    )
}

export default MainInfo