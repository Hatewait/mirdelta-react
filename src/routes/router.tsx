import { type JSX, lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const CategoryPage = lazy(() => import('../pages/Category/CategoryPage'));
const Product = lazy(() => import('../pages/Product/Product'));
const NewsList = lazy(() => import('../pages/News/NewsList'));
const NewsItem = lazy(() => import('../pages/News/NewsItem'));
const Service = lazy(() => import('../pages/Service/Service'));
const Branches = lazy(() => import('../pages/Branches/Branches'));
const Brands = lazy(() => import('../pages/Brands/Brands'));


const withSuspense = (el: JSX.Element) => (
    <Suspense fallback={<div>Loading…</div>}>{el}</Suspense>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: withSuspense(<Home />) },

            // Каталог: сразу конкретная категория
            { path: 'category/:categorySlug', element: withSuspense(<CategoryPage />) },

            // Карточка товара
            { path: 'product/:productId', element: withSuspense(<Product />) },

            // Новости
            { path: 'news', element: withSuspense(<NewsList />) },
            { path: 'news/:slug', element: withSuspense(<NewsItem />) },

            // Прочее меню
            { path: 'service', element: withSuspense(<Service />) },
            { path: 'branches', element: withSuspense(<Branches />) },
            { path: 'brand', element: withSuspense(<Brands />) },
        ],
    },
]);

//Переходы из меню делаем так:
//<Link to={`/category/${cat.slug}`}>{cat.title}</Link>
