import './UserActivity.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function UserActivity({ rawData }) {
    const data = rawData.sessions.map((item, index) => ({
        ...item,
        index: index + 1
    }));

    const averageKilogram = data.reduce((sum, entry) => sum + entry.kilogram, 0) / data.length;

    const customLegend = () => (
        <div className="custom-legend">
            <div>
                <span style={{ backgroundColor: '#282D30', width: '8px', height: '8px', display: 'inline-block', marginRight: '5px', borderRadius: '50px' }}></span>
                <p>Poids(kg)</p>
            </div>
            <div>
                <span style={{ backgroundColor: '#E60000', width: '8px', height: '8px', display: 'inline-block', marginRight: '5px', borderRadius: '50px' }}></span>
                <p>Calories brûlées (kCal)</p>
            </div>
        </div>
    );

    return (
        <div className="user-activity-container">
            <div className='top-text'>
                <h1>Activité quotidienne</h1>
                {customLegend()}
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} fill="#FBFBFB" barGap={8}>
                    <CartesianGrid vertical={false} strokeDasharray="3" />
                    <XAxis dataKey="index" tickCount={7} tickSize={0} />
                    <Tooltip />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
                    <YAxis
                        dataKey="kilogram"
                        tickCount={3}
                        tickSize={0}
                        orientation='right'
                        domain={[
                            Math.trunc(averageKilogram - 5),
                            Math.trunc(averageKilogram + 5)
                        ]}
                        axisLine={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
