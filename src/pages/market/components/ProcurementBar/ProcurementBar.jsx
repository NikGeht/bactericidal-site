import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    LabelList,
} from 'recharts';
import { H3 } from '../../../../components';
const data = [
    { name: 'Госзакупки', percent1: 92.7 },
    { name: 'Прочие', percent2: 7.3 },
];

export const ProcurementBar = () => {
    return (
        <div>
            <H3>Доля госзакупок</H3>
            <BarChart width={400} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" color="var(--text-primary)" />
                <YAxis color="var(--text-primary)" />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--bg-primary)' }}
                />
                <Legend color="var(--text-primary)" />
                <Bar dataKey="percent1" name="%" fill="var(--primary-500)" />
                <Bar dataKey="percent2" name="%" fill="var(--warning-500)" />
            </BarChart>
        </div>
    );
};
