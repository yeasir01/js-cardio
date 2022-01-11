const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  try {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    for (let keyValue of formData) {
      let key = keyValue[0];
      let value = keyValue[1];

      data[key] = value;
    }

    const response = await postRequest(data);

    console.log(response);

  } catch (err) {
    console.log(err)
  }
}

async function postRequest(data) {
  try {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return await request.json();

  } catch (err) {
    throw err
  }
}