export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  news: '/news',
  service: '/service',
  branches: '/branches',
  brand: '/brand',
  product: (id: string | number) => `/product/${id}`,
} as const;

export type RouteKey = keyof typeof ROUTES;
