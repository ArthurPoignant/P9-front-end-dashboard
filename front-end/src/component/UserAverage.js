import './UserAverage.css';
import { ResponsiveContainer, AreaChart, Area, XAxis } from 'recharts';

export default function UserAverage({ rawData }) {
    const data = rawData.data.sessions

    return (
        <>
            <ResponsiveContainer width={258}
                    height={263}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    className='area'
                >
                    <Area type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFFFFF"
                        fill="transparent" />
                    <XAxis
                        dataKey="day"
                        tick={{ fontSize: 12, fill: '#FFFFFF' }}
                        axisLine={{ stroke: 'transparent' }}
                        tickLine={{ stroke: 'transparent' }}
                        tickCount={7}
                        minTickGap={2} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}