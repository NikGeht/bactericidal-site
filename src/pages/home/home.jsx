import { Link } from 'react-router-dom';
import styles from './home.module.scss';
import { H1, H3 } from '../../components/index.js';

export const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <H1>Бактерицидные покрытия для медицинских имплантатов</H1>
                <H3>
                    Снижение риска остеомиелита без антибиотиков. Новое
                    поколение здоровья пациентов и успеха операций
                </H3>
                <Link className={styles.button} to="/product">
                    Узнать больше
                </Link>
            </div>
        </div>
    );
};
