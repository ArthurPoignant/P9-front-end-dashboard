import './Score.css';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

const renderCustomizedLabel = ({ viewBox, value }) => {
    const { cx, cy } = viewBox;
    const percentage = `${(value)}%`;

    return (
        <>
            <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#282D30" fontSize={26} fontFamily='roboto' fontWeight={700}>
                {percentage}
            </text>
            <text x={cx} y={cy + 20} textAnchor="middle" dominantBaseline="middle" fill="#74798C" fontSize={16} fontFamily='roboto' fontWeight={500}>
                de votre objectif
            </text>
        </>
    );
};

export default function Score({ rawData }) {
    let todayScore = rawData.userData.todayScore;
    const chartData = [{ name: 'todayScore', value: todayScore * 100 }];
    console.log(chartData)

    return (
        <>
            <ResponsiveContainer width={258} height={263} className="score_container">
                <p className='score-title'>Score</p>
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
                        dataKey='value'
                        fill="#FF0000"
                        cornerRadius={50}
                        label={renderCustomizedLabel}

                    />

                </RadialBarChart>
                <Tooltip />
            </ResponsiveContainer>
        </>
    )
}