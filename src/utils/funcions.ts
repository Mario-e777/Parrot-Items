import { window, document } from 'browser-monads';

const getCssCustomProperty = (property: string) => {
  const ELEMENT = document.getElementsByTagName('html')[0];
  return window.getComputedStyle(ELEMENT).getPropertyValue(property);
};

const saveTokens = (responseObj: { access: string, refresh: string }) => {
  const ttl = 30;
  document.cookie = `accessToken=${responseObj.access}; max-age=${ttl * 60}`;
  document.cookie = `refreshToken=${responseObj.refresh}; max-age=${ttl * 60}`;
};

export {
  getCssCustomProperty,
  saveTokens,
};
