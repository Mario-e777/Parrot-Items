/* Endpoints */
import { refreshToken } from './login';

/* Utils */
import { getCurrentToken } from '../utils/funcions'

const getAllItems = () => {
  return new Promise(async (resolve, reject) => {
    fetch(
      `${process.env.BASE_URL}/api/v1/products/?store=e7f46731-1654-4ba3-be83-408ac5255838`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${getCurrentToken()}`,
          'Content-Type': 'application/json'
        },
      }
    ).then(async response => {
      const RESPONSE: any = await response.json();
      if (!RESPONSE.errors) {
        resolve(RESPONSE)
      } else {
        await refreshToken({});
        reject(RESPONSE);
      }
    })
      .catch(error => console.error(error));
  });
};

const updateItems = (status: string, itemId: string) => {
  return new Promise(async (resolve, reject) => {
    fetch(
      `${process.env.BASE_URL}/api/v1/products/${itemId}/availability`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${getCurrentToken()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ availability: status })
      }
    ).then(async response => {
      const RESPONSE: any = await response.json();
      if (!RESPONSE.errors) {
        resolve(RESPONSE)
      } else {
        await refreshToken({});
        reject(RESPONSE);
      }
    })
      .catch(error => console.error(error));
  });
};

export { getAllItems, updateItems };