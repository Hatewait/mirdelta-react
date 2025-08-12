import { NavLink } from 'react-router-dom';
//import { useAppSelector } from '@/store/storeHooks';

export default function MainNav() {
    //const categories = useAppSelector(s => s.categories.list); // фейковые данные из Redux

    return (
        <header className="nav">
            <nav className="nav__row">
                {/* Пункт “Продукция” с выпадением категорий */}
                <div className="nav__item nav__item--dropdown">
                    <NavLink to="/catalog">Продукция</NavLink>
                    <div className="nav__dropdown">
                        {/*{categories.map(cat => (
                            <Link key={cat.slug} to={`/catalog/${cat.slug}`} className="nav__drop-link">
                                {cat.title}
                            </Link>
                        ))}*/}
                    </div>
                </div>

                <NavLink to="/service" className="nav__item">Сервис</NavLink>
                <NavLink to="/branches" className="nav__item">Карта филиалов</NavLink>
                <NavLink to="/brand" className="nav__item">О бренде</NavLink>
                <NavLink to="/news" className="nav__item">Новости</NavLink>
            </nav>
        </header>
    );
}

//(Активное состояние даёт NavLink — подсветится автоматически через &.active в CSS.)
