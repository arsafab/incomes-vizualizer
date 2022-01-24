import { Item } from '../../constants';

export const DataMiddleware = (store) => (next) => (action) => {
  if (action.type.includes('items/add')) {
    const { user, items } = store.getState();
    const data = items.data && items.data.length ? [...items.data, action.payload] : [action.payload];
    localStorage.setItem(user.uid, JSON.stringify(data));
  }

  if (action.type.includes('items/remove')) {
    const { user, items } = store.getState();
    const data = items.data.filter((item: Item) => item.id !== action.payload);
    localStorage.setItem(user.uid, JSON.stringify(data));
  }

  return next(action);
};
