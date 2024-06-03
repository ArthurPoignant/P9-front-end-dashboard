import './Score.css';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const renderCustomizedLabel = ({ viewBox, value }) => {
    const { cx, cy } = viewBox;
    const percentage = `${(value * 100).toFixed(0)}%`;

    return (
        <>
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#FF0000" fontSize={24}>
                {percentage}
            </text>
            <text x={cx} y={cy + 20} textAnchor="middle" dominantBaseline="middle" fill="#8884d8" fontSize={14}>
                de votre objectif
            </text>
        </>
    );
};

export default function Score({ rawData }) {    
    const todayScore = rawData.data.todayScore;
    const chartData = [{ name: 'todayScore', value: todayScore }];

    return (
        <>
            <ResponsiveContainer width={258} height={263}>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={chartData}
                    startAngle={90}
                    endAngle={450}
                >
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="value"
                        fill="#FF0000"
                        cornerRadius={50}
                        label={renderCustomizedLabel}
                        denominator={100}
                    />
                    <Legend />
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    )
}