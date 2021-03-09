const express = require('express');
const getProducts = require('./getProducts');

const app = express()

const port = 5050;

app.get('/api/products', getProducts)


app.listen (port, () => {
    console.log(`Server is listening on port: ${port}`)
});