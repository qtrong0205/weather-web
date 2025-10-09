interface DetailCardProps {
    cardKey: string;
    value: number;
}

const DetailCard = ({ cardKey, value }: DetailCardProps) => {
    let unit = "";
    switch (cardKey) {
        case "wind":
            unit = "m/s";
            break;
        case "visibility":
            unit = "m";
            break;
        case "pressure":
            unit = "hPa";
            break;
        default:
            unit = "%";
    }
    return (
        <div className="card text-gray-300 w-[clamp(182px,56%,210px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-2 rounded-lg overflow-hidden relative">
            <div className="px-4 py-5">
                <div className="text-gray-300 uppercase tracking-widest text-xs">
                    {cardKey} STATUS
                </div>
                <div className="text-gray-400 mt-5">
                    <p className="font-bold text-base">{value} {unit}</p>
                    {/* <p className="text-xs">Perfect everywhere</p> */}
                </div>
            </div>
            <div className="h-1.5 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-xl m-auto rounded transition-all absolute bottom-0" />
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[49%] m-auto rounded transition-all" />
        </div >
    );
}

export default DetailCard;
