/* origin: 
- protocol: http
- hostname: localhost
- port: 9000
*/

const express = require('express');

const app = express();

const filepath = '/Users/kangchinshen/Desktop/尚硅谷AJAX教程/ajax_basics/03_sop/index.html'

app.get('/', (request, response) => {
    response.sendFile(filepath);
});

app.get('/data', (request, response) => {
    response.send('RESPONSE: CUSTOMER DATA');
})

app.listen('9000', () => {
    console.log('Listening at port 9000...');
});