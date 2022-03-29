import { navigate } from "gatsby";
import Cookies from "js-cookie";
import { saveTokens } from "../utils/funcions";

const logIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.BASE_URL}/api/auth/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password
        })
      }
    ).then(async response => {
      const RESPONSE: any = await response.json();
      !RESPONSE.errors
        ? resolve(RESPONSE)
        : reject(RESPONSE);
    })
      .catch(error => console.error(error));
  });
};

const refreshToken = (to) => {
  return new Promise(() => {
    fetch(
      `${process.env.BASE_URL}/api/auth/token/refresh`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh: sessionStorage.getItem('refreshToken') ? sessionStorage.getItem('refreshToken') : Cookies.get('refreshToken') })
      }
    ).then(async response => {
      const RESPONSE: any = await response.json();
      console.log(to);
      if (!RESPONSE.errors) {
        saveTokens({ ...RESPONSE, remember: sessionStorage.getItem('refreshToken') ? false : true });
        to ? navigate(to.to) : window.location.reload();
      } else {
        navigate('/');
      }
    })
      .catch(error => console.error(error));
  });
};

export { logIn, refreshToken };