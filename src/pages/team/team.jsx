import { Card, H1 } from '../../components/index.js';
import { Cards } from '../../components/Cards/Cards.jsx';
import styles from './team.module.scss';
export const Team = () => {
    return (
        <div className={styles.container}>
            <H1>Наша команда</H1>
            <div className={styles.cards}>
                <Card
                    image={
                        'young-scientists-conducting-research-investigations-600nw-2149947783.jpg.webp'
                    }
                    title={'Бочаров Вадим Сергеевич'}
                    text={`инженер,
                    имеет опыт разработки технологии модифицирования полимерных имплантатов,
                    участник программы «Стартап как диплом»`}
                />
                <Card
                    image={
                        'young-scientists-conducting-research-investigations-600nw-2149947783.jpg.webp'
                    }
                    title={'Акимченко Игорь Олегович'}
                    text={`инженер, имеет опыт в работе в области модифицирования поверхности полимерных и металлических имплантатов`}
                />
                <Card
                    image={
                        'young-scientists-conducting-research-investigations-600nw-2149947783.jpg.webp'
                    }
                    title={'Дубиненко Глеб Евгеньевич'}
                    text={`м.н.с., специалист в области медицинского материаловедения`}
                />
                <Card
                    image={
                        'young-scientists-conducting-research-investigations-600nw-2149947783.jpg.webp'
                    }
                    title={'Твердохлебов Сергей Иванович'}
                    text={`к.ф.– м.н., консультант.`}
                />
            </div>
        </div>
    );
};
