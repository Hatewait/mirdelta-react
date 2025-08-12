React + TS Style Guide (наш проект)

База
•	Версия: React 18, Vite, TypeScript, Redux Toolkit, React Router v6.
•	Экспорты: компоненты по умолчанию export default. Хуки/утилы — именованные.
•	Именование файлов: PascalCase.tsx для компонентов, kebab-case.module.css для стилей.
•	Папки: components/ (мелкие), features/ (кусок домена с Redux), pages/, layouts/, hooks/, utils/, store/.

Компоненты
•	Шаблон без пропсов
// components/Button/Button.tsx
type Props = { disabled?: boolean; onClick?: () => void };
const Button = ({ disabled, onClick }: Props): JSX.Element => (
<button className="btn" disabled={disabled} onClick={onClick}/>
);
export default Button;

	Когда React.FC: если нужны children или контекст, порталы, сложная композиция.
type CardProps = { title: string; children?: React.ReactNode };
const Card: React.FC<CardProps> = ({ title, children }) => (/* ... */);


•	Пропсы: всегда через type Props = { ... }; дефолты — через значение, не через = {} в сигнатуре.
•	Обработчики: handle* / on*.
const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); /* ... */ };

	•	Ключи в списках: стабильные id, не индекс.


Стили
•	CSS Modules + classnames:
import cn from 'classnames';
import s from './button.module.css';
const Button = ({ disabled }: { disabled?: boolean }) => (
<button className={cn(s.btn, disabled && s.disabled)} />
);

	•	Глобальные utility‑классы — только в app.css. Никакого :global в модулях.

Импорты
1.	React/библиотеки
2.	алиасы проекта (если будут)
3.	относительные
4.	стили в конце

Хуки
•	Пользовательские — useXxx.ts и возвращают только то, что нужно.
•	useEffect без зависимостей — только когда реально требуется. Выносить функции из эффекта вверх, чтобы не создавать заново.
•	useMemo/useCallback — по профилированию, не «на всякий случай».

Редакс (без RTK Query)
•	store.ts

export const store = configureStore({ reducer: { products, categories, news } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


	•	Хуки стора: useAppDispatch, useAppSelector.
	•	Slice: только сериализуемый стейт. Асинхронщина — в createAsyncThunk.
	•	Селекторы: мемоизируем реиспользуемые.

Роутер
•	createBrowserRouter + ленивые страницы.
•	Именование путей: /catalog, /catalog/:categorySlug, /product/:productId, /news, /news/:slug.
•	В лэйауте ScrollToTop. Для ссылок — NavLink (активный класс).
•	Длинные страницы — якоря id + <Link to="#block">.


Асинхронные данные (моки)
•	На dev читаем из /public/fake/*.json или json-server.
•	Любая загрузка — через thunk + индикатор status: 'idle'|'loading'|'error'.

Формы
•	Простые формы — controlled inputs.
•	Валидируем на submit и по blur, сообщения — семантикой (aria-invalid, aria-describedby).

Адаптив/доступность
•	Семантические теги (<nav>, <main>, <article>).
•	Кнопки — только <button>, ссылки — только <a>/<Link>.
•	Изображения с осмысленным alt.

Тестовые данные и ключи
•	Любой мок должен иметь id, slug, title. Категории и товары связаны categorySlug.

Лэйауты и страницы
•	layouts/MainLayout.tsx содержит шапку/меню/футер и <Outlet/>.
•	Страницы — только композиция компонентов и подключение данных, минимум логики.

Ошибки и загрузка
•	Отдельные компоненты: <PageLoader/>, <EmptyState/>, <ErrorBlock/>.
•	Никогда не оставляем «пустую» страницу при загрузке.

Ленивая загрузка
const ProductPage = lazy(() => import('@/pages/Catalog/ProductPage'));
const withSuspense = (el: JSX.Element) => <Suspense fallback={<PageLoader/>}>{el}</Suspense>;


Конвенции названий
•	Компоненты/типы — PascalCase
•	переменные/функции — camelCase
•	слайсы — somethingSlice, экшены глаголами: addItem, removeItem.

ESLint/Prettier
•	Запуск на коммитах (по возможности).
•	Не отключаем правила без причины. Используем // eslint-disable-next-line только локально и с комментом «почему».

Пример: два стиля типизации компонента

A. Без React.FC
type HeaderProps = { title: string; };
const Header = ({ title }: HeaderProps): JSX.Element => (
  <header className="header"><h1>{title}</h1></header>
);
export default Header;


B. С React.FC
type HeaderProps = { title: string; children?: React.ReactNode };
const Header: React.FC<HeaderProps> = ({ title, children }) => (
  <header className="header">
    <h1>{title}</h1>
    {children}
  </header>
);
export default Header;

Правило проекта:
•	По умолчанию используем вариант A.
•	Если компонент принимает children/требует композиции — вариант B.

