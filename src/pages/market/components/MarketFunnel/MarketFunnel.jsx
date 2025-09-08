import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';
import { H3 } from '../../../../components';

const data = [
    { value: 14.033, name: 'TAM (14,0 млрд ₽)' },
    { value: 1.052, name: 'SAM (1,05 млрд ₽)' },
    { value: 0.214, name: 'SOM (214 млн ₽)' },
];

export const MarketFunnel = () => {
    return (
        <div>
            <H3>Рынок</H3>
            <FunnelChart width={400} height={300}>
                <Funnel
                    dataKey="value"
                    data={data}
                    isAnimationActive={true}
                    fill="var(--primary-500)"
                >
                    <LabelList
                        position="right"
                        fill="var(--text-primary)"
                        stroke="none"
                        dataKey="name"
                        fontSize={12}
                        fontWeight={500}
                        textAnchor="start"
                        offset={20}
                    />
                </Funnel>
                <Tooltip
                    wrapperClassName="recharts-tooltip-wrapper"
                    contentClassName="recharts-tooltip-content"
                />
            </FunnelChart>
        </div>
    );
};
