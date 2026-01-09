import styles from './header.module.scss';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.pageHeader}>
            <header>
                <nav>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <Link to="/">АНТИБАКТЕРИУМ</Link>
                        </div>
                        <div className={styles.navbar}>
                            <ul className={styles.navButtons}>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to="/problems"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Проблема
                                    </NavLink>
                                </li>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to="/product"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Продукт
                                    </NavLink>
                                </li>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to="/market"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Рынок
                                    </NavLink>
                                </li>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Команда
                                    </NavLink>
                                </li>
                                <li className={styles.navItem}>
                                    <NavLink
                                        to="/partners"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Партнеры
                                    </NavLink>
                                </li>
                                {/* <li className={styles.navItem}>
                                    <NavLink
                                        to="/acknowledgments"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Благодарность
                                    </NavLink>
                                </li> */}
                                <li className={styles.navItem}>
                                    <NavLink
                                        to="/contacts"
                                        className={({ isActive }) =>
                                            [
                                                styles.link,
                                                isActive && styles.active,
                                            ]
                                                .filter(Boolean)
                                                .join(' ')
                                        }
                                        end
                                    >
                                        Контакты
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};
