/* Modules */
import { window, document } from 'browser-monads';
import Cookies from 'js-cookie';

const getCssCustomProperty = (property: string) => {
  const ELEMENT = document.getElementsByTagName('html')[0];
  return window.getComputedStyle(ELEMENT).getPropertyValue(property);
};

const saveTokens = (responseObj: { access: string, refresh: string, remember: boolean }) => {
  const ttl = responseObj.remember && 30;
  if (ttl) {
    document.cookie = `accessToken=${responseObj.access}; max-age=${ttl * 60}`;
    document.cookie = `refreshToken=${responseObj.refresh}; max-age=${ttl * 60}`;
  } else {
    sessionStorage.setItem('accessToken', responseObj.access);
    sessionStorage.setItem('refreshToken', responseObj.refresh);
  }
};

const getCurrentToken = (type?: string) => {
  if (type === 'refresh') sessionStorage.getItem('refreshToken') ? sessionStorage.getItem('refreshToken') : Cookies.get('refreshToken');
  return sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : Cookies.get('accessToken');
};

export {
  getCssCustomProperty,
  saveTokens,
  getCurrentToken
};
