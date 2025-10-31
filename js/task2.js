const baseURL = 'https://reqres.in/api/';

const getUserById = async (id) => {
  const response = await fetch(baseURL + 'users/' + id, {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });
  const result = await response.json();
  console.log(result.data);
  return result.data;
};

getUserById(1);
getUserById(2);

const postUser = async (user) => {
  const response = await fetch(baseURL + 'users', {
    method: 'POST',
    headers: {
      'x-api-key': 'reqres-free-v1',
      'content type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const result = await response.json();
  console.log(result);
  return result;
};

const newUser = {
  username: 'Aku Ankka',
  password: 'Maalari',
  email: 'aku@example.com',
};

postUser(newUser);
