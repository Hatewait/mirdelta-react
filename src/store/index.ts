import { configureStore } from '@reduxjs/toolkit';
//import { counterReducer } from './slices/counter.slice';

// Если слайсов будет много — добавляй их в объект reducer
export const store = configureStore({
    reducer: {
        //counter: counterReducer,
    },
    // Включим DevTools только в дев-режиме Vite
    devTools: import.meta.env.DEV,
});

// Типы для всего приложения
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
