import { Card, H1 } from '../../components/index.js';
import { Cards } from '../../components/Cards/Cards.jsx';
import styles from './team.module.scss';
import { Footer } from '../../components/footer/Footer.jsx';
export const Team = () => {
    return (
        <div className={styles.container}>
            <H1>Наша команда</H1>
            <div className={styles.cards}>
                <Card
                    title={'Бочаров Вадим Сергеевич'}
                    text={`инженер,
                    имеет опыт разработки технологии модифицирования полимерных имплантатов,
                    участник программы «Стартап как диплом»`}
                    contacts={`
                        <a href="mailto:vsb27@tpu.ru">vsb27@tpu.ru</a>
                        <a href="tel:+79135754070">+7 (913) 575-40-70</a>
                    `}
                />
                <Card
                    title={'Дубиненко Глеб Евгеньевич'}
                    text={`м.н.с., специалист в области медицинского материаловедения`}
                    contacts={`
                        <a href="mailto:dubinenko@tpu.ru">dubinenko@tpu.ru</a>
                        
                    `}
                />
                <Card
                    title={'Твердохлебов Сергей Иванович'}
                    text={`к.ф.– м.н., консультант.`}
                    contacts={`
                        <a href="mailto:tverd@tpu.ru">tverd@tpu.ru</a>
                    `}
                />
            </div>
            <Footer />
        </div>
    );
};
