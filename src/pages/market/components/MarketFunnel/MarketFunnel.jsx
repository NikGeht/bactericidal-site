import { ComposedChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { H3 } from '../../../../components';

const data = [
    { value: 14.033, label: 'TAM (14,0 млрд ₽)', y: 50 },
    { value: 1.052, label: 'SAM (1,05 млрд ₽)', y: 30 },
    { value: 0.214, label: 'SOM (214 млн ₽)', y: 5 },
];

// Треугольник: основание -> вершина -> основание
const triangleData = [
    { x: 0, y: 0 },
    { x: 2, y: 100 }, // вершина
    { x: 4, y: 0 },
];

// Вычисляем x координату внутри треугольника для заданного y
const getXInTriangle = (y) => {
    // Для треугольника с вершиной в (2, 100) и основанием от (0,0) до (4,0)
    // Левая сторона: x = y / 50
    // Правая сторона: x = 4 - y / 50
    // Центр: x = 2
    if (y === 100) return 2; // вершина
    const leftX = y / 50;
    const rightX = 4 - y / 50;
    return (leftX + rightX) / 2; // центр на данном уровне y
};

export const MarketFunnel = () => {
    return (
        <div style={{ position: 'relative' }}>
            <H3>Рынок</H3>
            <ComposedChart
                width={500}
                height={300}
                data={triangleData}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
                <defs>
                    <linearGradient
                        id="triangleGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stopColor="var(--primary-500)"
                            stopOpacity={1}
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--primary-500)"
                            stopOpacity={1}
                        />
                    </linearGradient>
                </defs>

                <XAxis dataKey="x" type="number" domain={[0, 4]} hide />
                <YAxis type="number" domain={[0, 100]} hide />

                <Area
                    type="linear"
                    dataKey="y"
                    stroke="none"
                    fill="url(#triangleGradient)"
                    isAnimationActive={true}
                />
            </ComposedChart>

            {/* Линии и текст - абсолютное позиционирование */}
            <svg
                width={500}
                height={300}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                }}
            >
                {data.map((item, index) => {
                    const x = getXInTriangle(item.y);
                    // Конвертируем координаты графика в пиксели
                    const chartWidth = 500 - 40 - 20; // width - right margin - left margin
                    const chartHeight = 300 - 20 - 20; // height - top margin - bottom margin
                    const pixelY = 20 + ((100 - item.y) / 100) * chartHeight; // top margin + scaled y

                    // Вычисляем координаты концов линии внутри треугольника
                    const leftX = item.y / 50;
                    const rightX = 4 - item.y / 50;
                    const pixelLeftX = 20 + (leftX / 4) * chartWidth;
                    const pixelRightX = 20 + (rightX / 4) * chartWidth;
                    const pixelCenterX = 20 + (x / 4) * chartWidth;

                    return (
                        <g key={index}>
                            {/* Разделяющая линия */}
                            {index !== 0 && (
                                <line
                                    x1={pixelLeftX}
                                    y1={pixelY}
                                    x2={pixelRightX}
                                    y2={pixelY}
                                    stroke="var(--text-inverse)"
                                    strokeWidth={1.5}
                                    strokeOpacity={0.8}
                                />
                            )}
                            {/* Текст на линии */}
                            <text
                                x={pixelCenterX}
                                y={pixelY + 20}
                                fill="var(--text-inverse)"
                                fontSize={12}
                                fontWeight={600}
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                {item.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};
