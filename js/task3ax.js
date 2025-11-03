const baseURL = 'https://reqres.in/api/';

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

getErrorDemo();
