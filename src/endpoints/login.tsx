/* React & Gatsby stuff */
import { navigate } from "gatsby";

/* Utils */
import { saveTokens, getCurrentToken } from "../utils/funcions";

const logIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${process.env.GATSBY_BASE_URL}/api/auth/token`,
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

const refreshToken = ({ to }: { to?: string }) => {
  return new Promise(() => {
    fetch(
      `${process.env.GATSBY_BASE_URL}/api/auth/token/refresh`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refresh: getCurrentToken('refresh')
        })
      }
    ).then(async response => {
      const RESPONSE: any = await response.json();
      if (!RESPONSE.errors) {
        saveTokens({ ...RESPONSE });
        to ? navigate(to) : window.location.reload();
      } else {
        navigate('/');
      }
    })
      .catch(error => console.error(error));
  });
};

export { logIn, refreshToken };