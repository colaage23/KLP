import {authLocalStorage} from './storage';

export const isLogin = () => {
  const isLoggedIn = authLocalStorage.get();
  return isLoggedIn;
};
