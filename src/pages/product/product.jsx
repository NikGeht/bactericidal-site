import { H1, FeatureList } from '../../components';
import styles from './product.module.scss';

const productFeatures = {
    title: 'Преимущества',
    description:
        'Бактерицидные покрытия для медицинских имплантатов имеют ряд преимуществ перед другими методами лечения остеомиелита.',
    advantages: [
        'Персонализированность',
        'Инновационность',
        'Отсутствие прямых аналогов',
        'Экологичность',
        'Повышение имиджа государственной медицины',
        'Снижение экономических потерь на реабилитацию пациентов',
    ],
    composition: [
        'Оксикарбоновые кислоты',
        'Четвертичные аммониевые соли',
        'Вода',
        'Водорастворимые полимеры',
        'Фосфаты кальция, обладающие остеоиндуктивными свойствами',
    ],
    advantagesComposition: [
        'Биосовместимость',
        'Бактерицидность в отношении основных возбудителей остеомиелита',
        'Остеоиндуктивность',
        'Длительность бактерицидного действия',
        'Адгезия',
        'Устойчивость к стерилизации покрытия',
    ],
};

export const Product = () => {
    return (
        <div className={styles.container}>
            <H1>Продукт</H1>

            <section className={styles.article}>
                <p>
                    <strong>Бактерицидные покрытия</strong> для медицинских
                    имплантатов – это новый подход к профилактике и лечению
                    остеомиелита. Это покрытия, которые наносятся на медицинские
                    имплантаты и препятствуют росту бактерий, вызывающих
                    остеомиелит.
                </p>
                <p>
                    Технология нанесения основана на свойстве органических
                    кислот, обладающих антибактериальными свойствами,
                    образовывать эвтектические смеси, применимые для создания
                    эвтекогелей, что позволяет получить покрытия с оптимальными
                    механическими и химическими свойствами.
                </p>
            </section>
            <div className={styles.featuresContainer}>
                <section className={styles.featuresSection}>
                    <h3 className={styles.featuresHeading}>
                        Ключевые преимущества
                    </h3>
                    <FeatureList
                        items={productFeatures.advantages}
                        columns={1}
                        icon="check"
                        variant="solid"
                        color="#2f8f5b"
                    />
                </section>

                <section className={styles.featuresSection}>
                    <h3 className={styles.featuresHeading}>Свойства состава</h3>
                    <FeatureList
                        items={productFeatures.advantagesComposition}
                        columns={1}
                        icon="circle-check"
                        variant="regular"
                        color="#2a6fbb"
                    />
                </section>
                <section className={styles.featuresSection}>
                    <h3 className={styles.featuresHeading}>Состав покрытия</h3>
                    <FeatureList
                        items={productFeatures.composition}
                        columns={1}
                        icon="flask-vial"
                        variant="solid"
                        color="#8a5adf"
                    />
                </section>
            </div>
        </div>
    );
};
