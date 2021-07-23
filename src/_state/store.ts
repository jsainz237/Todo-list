import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme.reducer';

// create redux store
export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

// Infer state types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;