import './UserPerformance.css';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';

export default function UserPerformance({ rawData }) {
    const data = rawData.data.map(item => ({
        value: item.value,
        kind: rawData.kind[item.kind.toString()]
    }));

    return (
        <>
            <ResponsiveContainer width={258} height={263}>
                <RadarChart width="50%" height="50%" outerRadius={75}
                    innerRadius={8} data={data} >
                    <PolarGrid gridType="polygon" stroke="#FFFFFF" radialLines={false} />
                    <PolarAngleAxis  dataKey="kind" stroke="#FFFFFF" tickLine={false} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}