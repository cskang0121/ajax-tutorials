const express = require('express')

const app = express()

const data = [
    {brand: 'honda', number: 'AAA1234'},
    {brand: 'mercedez', number: 'DDD4536'},
]

app.get('/cars', (req, res) => {
    res.json(data)
    console.log('Request origin: ', req.get('host'));
})

app.listen('9004', () => {
    console.log('Listening at http://localhost:9004')
})