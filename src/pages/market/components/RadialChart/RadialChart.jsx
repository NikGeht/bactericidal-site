import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { H3 } from '../../../../components';

const data = [
    { value: 14.033, name: 'TAM (14,0 млрд ₽)', fill: 'var(--primary-500)' },
    { value: 1.052, name: 'SAM (1,05 млрд ₽)', fill: 'var(--secondary-500)' },
    { value: 0.214, name: 'SOM (214 млн ₽)', fill: 'var(--tertiary-500)' },
];

export const SimpleRadialBarChart = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <H3>Хуйня</H3>
            <RadialBarChart
                width={600}
                height={400}
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="60%"
                barSize={14}
                data={data}
            >
                <RadialBar
                    label={{
                        position: 'insideStart',
                        fill: '#fff',
                        fontSize: 12,
                    }}
                    background
                    dataKey="value"
                />
                <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    
                />
                <Tooltip
                    wrapperClassName="recharts-tooltip-wrapper"
                    contentClassName="recharts-tooltip-content"
                />
            </RadialBarChart>
        </div>
    );
};
