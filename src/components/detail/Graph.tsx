import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { rainMockData } from "../../helper/rainMockData"

export default function RainChart() {
    return (
        <div className="w-full h-[300px] md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rainMockData}>
                    <XAxis dataKey="time" tick={{ fontSize: 10 }} interval={2} />
                    <YAxis unit="mm" tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="rain" stroke="#3b82f6" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}
