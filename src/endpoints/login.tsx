const logIn = (email: string, password: string) => {
  return new Promise(resolve => {
    fetch(
      'http://api-staging.parrot.rest/api/auth/token',
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
    ).then(response => resolve(response.json()))
      .catch(error => console.error(error));
  });
};

export { logIn };