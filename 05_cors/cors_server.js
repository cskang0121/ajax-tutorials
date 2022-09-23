const express = require('express');

const app = express();

/* Retrieve Data */
let data = null;
data = [{
    username: 'kangchinshen',
    password: 'test123',
}];
const str = JSON.stringify(data);

app.get('/cors-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(data);
});

app.listen('9002', () => {
  console.log('Listening at port 9002...')
});