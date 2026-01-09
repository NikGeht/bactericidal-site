import { H1 } from '../../../../components';
import { Footer } from '../../../../components/footer/Footer.jsx';
import {
    MarketFunnel,
    GrowthChart,
    ImportPie,
    ProcurementBar,
    SimpleRadialBarChart,
} from '../index.js';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
    return (
        <>
            <div className={styles.dashboard}>
                <H1>Инфографика рынка медицинских изделий</H1>
                <div>
                    <div className={styles.row}>
                        <div className={styles.rowItem}>
                            <MarketFunnel />
                        </div>
                        <div className={styles.rowItem}>
                            <GrowthChart />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.rowItem}>
                            <ImportPie />
                        </div>
                        <div className={styles.rowItem}>
                            <ProcurementBar />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
