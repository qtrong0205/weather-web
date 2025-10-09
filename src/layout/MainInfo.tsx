import { useEffect } from "react"
import DetailCard from "../components/detail/DetailCard"
import RainChart from "../components/detail/Graph"
import ForecastCards from "../components/main-content/forecast"
import GeneralCard from "../components/main-content/GeneralCard"
import type { MainInfoProps } from "../helper/prop"
import { getDetailData, type IDetailData } from "../helper/getData"

const MainInfo = (props: MainInfoProps) => {
    const { isSearch, setIsSearch } = props;

    let detailData = getDetailData();
    useEffect(() => {
        detailData = getDetailData();
    }, [isSearch])
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-7 lg:gap-15 mx-auto p-4 lg:p-5 max-w-full lg:max-w-5xl">
                <div className="w-full lg:w-1/3 mb-7 lg:mb-0 flex justify-center">
                    <GeneralCard
                        isSearch={isSearch}
                        setIsSearch={setIsSearch}
                    />
                </div>
                <div className="w-full lg:w-2/3">
                    <ForecastCards
                        isSearch={isSearch}
                        setIsSearch={setIsSearch}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center">
                <div className="grid sm:grid-cols-2 grid-cols-1 p-4 lg:w-[40vw] w-[60vw] gap-y-0 gap-x-10 place-items-center">
                    {/* <DetailCard />
                    <DetailCard />
                    <DetailCard />
                    <DetailCard /> */}
                    {Object.keys(detailData).map((key) => (
                        <DetailCard cardKey={key} value={detailData[key as keyof IDetailData]} />
                    ))}
                </div>
                <div className="p-4 w-[40vw]">
                    <RainChart
                        isSearch={isSearch}
                        setIsSearch={setIsSearch}
                    />
                </div>

            </div>
        </>
    )
}

export default MainInfo