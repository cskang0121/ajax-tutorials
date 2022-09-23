const express = require('express');

const app = express();

/* Basic GET Request */
app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 1. String response 
    response.send('GET Response from Local Server');
    

    // 2. JSON response
    // const message = {username: 'kang chin shen'};
    // const messageJSON = JSON.stringify(message);
    // response.send(messageJSON);
    
});


/* Basic POST Request 
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('POST Response from Local Server');
});
*/


/* Basic ALL Request (Enable Self-defined Request Header) */
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('POST Response from Local Server');
}); 



/* Delay Handling
app.get('/server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    setTimeout(() => {
        response.send('Delayed Response from Local Server');
    }, 3000);
});
*/

app.listen(8000, () => {
    console.log('Listening at localhost:8000...');
});