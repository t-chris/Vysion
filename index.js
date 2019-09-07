const axios = require('axios');

const getGoogleCloud = async () => (
    await axios.get('https://jsonplaceholder.typicode.com/todos/1')
);

getGoogleCloud().then(data => console.log(data.data));