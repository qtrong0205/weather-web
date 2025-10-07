import NextDaysCard from "./NextDaysCard"

const ForecastCards = () => {
    return (
        // flex flex-col lg:flex-row flex-wrap gap-5 justify-center items-stretch w-full
        <div>
            <div className="hidden sm:flex gap-5 justify-center w-full flex-row">
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
            </div>

            {/* <div className="flex flex-col sm:hidden gap-5 justify-center w-full">
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
                <NextDaysCard />
            </div> */}
        </div>
    )
}

export default ForecastCards