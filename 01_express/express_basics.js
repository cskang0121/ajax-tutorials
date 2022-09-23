const express = require('express');

const app = express();

const port = 8000;

app.get('/', (request, response) => {
    response.send('Hello Express')
});

app.listen(8000, () => {
    console.log('Listening...')
})