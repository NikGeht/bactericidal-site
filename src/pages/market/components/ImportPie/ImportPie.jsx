import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { H3 } from '../../../../components';

const data = [
    { name: 'Импорт', value: 86 },
    { name: 'Отечественное производство', value: 14 },
];

const COLORS = ['var(--primary-500)', 'var(--warning-500)'];

export const ImportPie = () => {
    return (
        <div>
            <H3>Импорт и отечественное производство</H3>
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="var(--primary-500)"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={entry.name}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'var(--bg-primary)',
                    }}
                />
                <Legend />
            </PieChart>
        </div>
    );
};
