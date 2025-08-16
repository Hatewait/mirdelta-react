import type { CategoryItem, HeaderNavItem } from '../components/Header/Header.types.ts';
import { ROUTES } from './routes.ts';

export const MAIN_NAV: HeaderNavItem[] = [
  { text: 'Продукция', isButton: true },
  { text: 'Оборудование в деле', linkTo: ROUTES.catalog },
  { text: 'Сервис',              linkTo: ROUTES.service },
  { text: 'Карта филиалов',      linkTo: ROUTES.branches },
  { text: 'О бренде',            linkTo: ROUTES.brand },
];

export const CATEGORIES: CategoryItem[] = [
  { title: 'Вибропогружатели', type: 'category', src: '#' },
  { title: 'Вибротрамбовки', type: 'category', src: '#' },
  { title: 'Гидробуры', type: 'category', src: '#' },
  { title: 'Гидромолоты', type: 'category', src: '#' },
  { title: 'Гидроножницы', type: 'category', src: '#' },
  { title: 'Гидоразводки', type: 'category', src: '#' },
  { title: 'Дорожные фрезы', type: 'category', src: '#' },
  { title: 'Квик-капплеры', type: 'category', src: '#' },
  { title: 'Ковши сортировочные', type: 'category', src: '#' },
  { title: 'Ковши дробильные', type: 'category', src: '#' },
  { title: 'Коммунальное оборудование', type: 'category', src: '#' },
  { title: 'Мульчеры', type: 'category', src: '#' },
  { title: 'Сварезки', type: 'category', src: '#' },

  // баннер
  { type: 'banner', src: '#' },
];
