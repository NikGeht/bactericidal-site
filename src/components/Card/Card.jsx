import styles from './card.module.scss';
export const Card = ({ title, text, image = null }) => {
    return (
        <div className={styles.cardItem}>
            {image && (
                <img className={styles.cardItemImage} src={image} alt="" />
            )}
            {title ? <span className={styles.cardItemTitle}>{title}</span> : null}
            {text ? <span className={styles.cardItemText}>{text}</span> : null}
        </div>
    );
};
