import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { H3 } from '../../../../components';

const data = [
    { year: 2015, value: 12.0 },
    { year: 2016, value: 14.2 },
    { year: 2017, value: 16.8 },
    { year: 2018, value: 23.8 },
];

export const GrowthChart = () => {
    return (
        <div>
            <H3>Рост рынка</H3>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" color="var(--text-primary)" />
                <YAxis color="var(--text-primary)" />
                <Tooltip
                    contentStyle={{ backgroundColor: 'var(--bg-primary)' }}
                />
                <Legend color="var(--text-primary)" />
                <Line
                    type="linear"
                    dataKey="value"
                    stroke="var(--primary-500)"
                    name="млрд ₽"
                />
            </LineChart>
        </div>
    );
};
