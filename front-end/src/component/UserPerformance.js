import './UserPerformance.css';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';

export default function UserPerformance({ rawData }) {
    const data = rawData.data.data.map(item => ({
        value: item.value,
        kind: rawData.data.kind[item.kind.toString()]
    }));

    return (
        <>
            <ResponsiveContainer width={258} height={263}>
                <RadarChart outerRadius={90} data={data} width={258} height={263}>
                    <PolarGrid gridType="polygon" stroke="#FFFFFF" />
                    <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" />

                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}