import './UserActivity.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function UserActivity({ rawData }) {
    const data = rawData.data.sessions
    const averageKilogram = data.reduce((sum, entry) => sum + entry.kilogram, 0) / data.length;

    return (
        <>
            <ResponsiveContainer width="90%" height="80%">
                <BarChart width={702} height={145} data={data} fill="#FBFBFB">
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="data" />

                    <Tooltip />
                    <Legend verticalAlign="top" align="right" />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" maxBarSize={1} fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
                    <YAxis dataKey="kilogram" tickCount={3} orientation='right' domain={[
                        Math.trunc(averageKilogram - 5),
                        Math.trunc(averageKilogram + 5)
                    ]} />
                </BarChart>
            </ResponsiveContainer>

        </>
    )
}