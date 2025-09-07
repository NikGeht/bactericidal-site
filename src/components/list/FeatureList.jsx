import styles from './feature-list.module.scss';

export const FeatureList = ({
    items = [],
    columns = 2,
    icon = 'check',
    variant = 'solid',
    color,
}) => {
    const style = {
        gridTemplateColumns: `repeat(${columns}, minmax(200px, 1fr))`,
        ...(color ? { ['--feature-icon-color']: color } : {}),
    };

    const faPrefix =
        variant === 'regular'
            ? 'far'
            : variant === 'brands'
              ? 'fab'
              : 'fa-solid';
    const iconClassName = `${faPrefix} fa-${icon}`;

    return (
        <ul className={styles.featureList} style={style}>
            {items.map((item) => (
                <li key={item} className={styles.featureItem}>
                    <span className={styles.featureIcon} aria-hidden="true">
                        <i className={iconClassName} />
                    </span>
                    <span className={styles.featureText}>{item}</span>
                </li>
            ))}
        </ul>
    );
};
