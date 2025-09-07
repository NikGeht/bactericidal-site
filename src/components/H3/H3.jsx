import styles from './H3.module.scss';
export const H3 = ({ children, className = styles.subtitle, ...props }) => (
    <h1 className={className} {...props}>
        {children}
    </h1>
);
