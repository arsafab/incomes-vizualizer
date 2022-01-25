import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import itemsReducer from './slices/items.slice';
import optionsReducer from './slices/options.slice';
import { DataMiddleware } from './middleware/data.middleware';

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    options: optionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(DataMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
