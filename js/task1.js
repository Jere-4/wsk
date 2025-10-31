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

console.log('Hello!');
