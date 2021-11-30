const express = require('express');
const app = express();
let { people } = require('./data')
// req=>middleware=>res

app.get('/api/people', (req, res) => {
    res.status(200).json({ data: people })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The Server has Started on PORT: ${PORT}`)
})