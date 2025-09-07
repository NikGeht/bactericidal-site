import styles from './Cards.module.scss';
export const Cards = ({ children }) => {
    return <div className={styles.cards}>{children}</div>;
};
