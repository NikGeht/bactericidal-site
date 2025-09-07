import styles from './H1.module.scss';
export const H1 = ({ children, className = styles.title, ...props }) => (
    <h1 className={className} {...props}>
        {children}
    </h1>
);
