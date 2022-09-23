const express = require('express')

const app = express()

const data = [
    {name: 'kangchinshen', age: 19},
    {name: 'limjhuinfhung', age: 20},
]

app.get('/students', (req, res) => {
    res.send(data);
    console.log('Request origin: ', req.get('host'))
})

app.listen('9003', () => {
    console.log('Listening at http://127.0.0.1:9003')
})