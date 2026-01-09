import styles from './Footer.module.scss';

export const Footer = () => {
    const logoSrc = 'logofond1.jpg';

    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                Работа выполнена при поддержке гранта Фонда содействия
                инновациям, предоставленного в рамках программы «Студенческий
                стартап» федерального проекта «Платформа университетского
                технологического предпринимательства».
            </p>
            <img src={logoSrc} alt="logo" className={styles.footerLogo} />
        </footer>
    );
};
