import { H1, H3 } from '../../components';
import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';
import { useEffect } from 'react';
export const NotFound = ({ setIsHeaderVisible }) => {
    useEffect(() => {
        setIsHeaderVisible(false);
    }, [setIsHeaderVisible]);
    const handleClick = () => {
        setIsHeaderVisible(true);
    };
    return (
        <div>
            <H1>404</H1>
            <H3>Страница не найдена</H3>
            <Link className={styles.button} to="/" onClick={handleClick}>
                На главную
            </Link>
        </div>
    );
};
