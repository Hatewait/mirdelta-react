import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MainNav.module.css';
//import { useAppSelector } from '@/store/storeHooks';

export default function MainNav() {
    //const categories = useAppSelector(s => s.categories.list); // фейковые данные из Redux

    return (
        <header className={styles.nav}>
            <nav className={classNames(styles.nav__inner, 'container')}>
                <ul className={classNames(styles.nav__list, 'd-flex', 'list-unstyled', 'mb-0')}>
                    {/* Пункт "Продукция" с выпадением категорий */}
                    <li className={classNames(styles.nav__item, 'position-relative')}>
                        <NavLink to="/catalog" className={({ isActive }) => 
                            classNames(styles.nav__link, { [styles.active]: isActive })
                        }>
                            Продукция
                        </NavLink>
                        <div className={styles.nav__dropdown}>
                            {/*{categories.map(cat => (
                                <div key={cat.slug} className={styles.nav__dropdownItem}>
                                    <Link to={`/catalog/${cat.slug}`} className={styles.nav__dropdownLink}>
                                        {cat.title}
                                    </Link>
                                </div>
                            ))}*/}
                        </div>
                    </li>

                    <li className={styles.nav__item}>
                        <NavLink to="/service" className={({ isActive }) => 
                            classNames(styles.nav__link, { [styles.active]: isActive })
                        }>
                            Сервис
                        </NavLink>
                    </li>
                    <li className={styles.nav__item}>
                        <NavLink to="/branches" className={({ isActive }) => 
                            classNames(styles.nav__link, { [styles.active]: isActive })
                        }>
                            Карта филиалов
                        </NavLink>
                    </li>
                    <li className={styles.nav__item}>
                        <NavLink to="/brand" className={({ isActive }) => 
                            classNames(styles.nav__link, { [styles.active]: isActive })
                        }>
                            О бренде
                        </NavLink>
                    </li>
                    <li className={styles.nav__item}>
                        <NavLink to="/news" className={({ isActive }) => 
                            classNames(styles.nav__link, { [styles.active]: isActive })
                        }>
                            Новости
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
