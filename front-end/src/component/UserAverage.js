import './UserAverage.css';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <div className="tooltip-content">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            </div>
        );
    }

    return null;
};

export default function UserAverage({ rawData }) {
    const data = rawData.data.sessions;

    return (
        <> 
            <ResponsiveContainer width={258} height={263}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 100,
                        right: 20,
                        left: 20,
                        bottom: 0,
                    }}
                    className='area'
                >
                    <defs>
                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2} />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="url(#strokeGradient)"
                        strokeWidth={2}
                        fill="transparent"
                    />
                    <XAxis
                        dataKey="day"
                        tick={{ fontSize: 12, fill: '#FFFFFF' }}
                        axisLine={{ stroke: 'transparent' }}
                        tickLine={{ stroke: 'transparent' }}
                        tickCount={7}
                        minTickGap={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}