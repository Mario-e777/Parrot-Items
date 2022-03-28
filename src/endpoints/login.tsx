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

export { logIn };