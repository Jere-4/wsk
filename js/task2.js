const baseURL = 'https://reqres.in/api/';

const postUser = async (user) => {
  const response = await fetch(baseURL + 'users', {
    method: 'POST',
    headers: {
      'x-api-key': 'reqres-free-v1',
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const result = await response.json();
  console.log(result);
  return result;
};
const newUser = {
  username: 'akuankka',
  password: 'Maalari',
  email: 'aku@example.com',
};

postUser(newUser);
