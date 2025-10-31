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

//getUserById(1);
//getUserById(2);

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

//postUser(newUser);

const getErrorDemo = async () => {
  try {
    const response = await fetch(baseURL + 'unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error('get failed', error);
  }
};

//getErrorDemo();

// task 4
const fetchData = async (endPointUrl, options) => {
  try {
    const response = await fetch(baseURL + endPointUrl, options);
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('get failed', error);
    throw new Error();
  }
};

const user = {
  name: 'Joh Doe',
  job: 'Developer',
};
const options = {
  method: 'POST',
  headers: {
    'x-api-key': 'reqres-free-v1',
    'content type': 'application/json',
  },
  body: JSON.stringify(user),
};
try {
  const responseData = await fetchData('users', options);
  console.log('response', responseData);
} catch (error) {
  console.error('Virhe napattu kiinni', error);
}

console.log(await fetchData('users/2'));

//fetchData();

document.querySelector('button').addEventListener('click', async () => {
  try {
    const userData = await fetchData('users/3');
    console.log('user data from button click', userData);
    document.querySelector('output').textContent = userData.data.email;
  } catch (error) {
    console.error(error);
    document.querySelector('output').textContent = 'Network error';
  }
});
