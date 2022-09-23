const express = require('express');

const app = express();



/* Retrieve Data */
let data = null;
data = [{
    username: 'kangchinshen',
    password: 'test123',
}];
const str = JSON.stringify(data);



// JSONP without jQuery
app.get('/server', (request, response) => {

    if (data) response.send(`handleData(${str})`);

    response.send('handleNoExist()');
});


// JSONP with jQuery
app.get('/jquery-server', (request, response) => {

    const callback = request.query.callback;

    response.send(`${callback}(${str})`);
});


app.listen('9001', () => {
    console.log('Listening at port 9001');
});