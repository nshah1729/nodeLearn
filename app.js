// const http = require('http'); 

// const fs = require('fs');
// const homePage = fs.readFileSync('./navbar-app/index.html')
// const homeStyles = fs.readFileSync('./navbar-app/styles.css')
// const homeImage = fs.readFileSync('./navbar-app/logo.svg')
// const homeLogic = fs.readFileSync('./navbar-app/browser-app.js')
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(homePage)
//     console.log(url);
//     res.end()
//   }
//   else if (url === '/styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' })
//     res.write(homeStyles)
//     res.end()
//   }
//   else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/javascript' })
//     res.write(homeLogic)
//     res.end()
//   }
//   else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' })
//     res.write(homeImage)
//     res.end()
//   }
// })
// server.
//   listen(3000, () => console.log(`Server Started`));

const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="api/products">Products</a>');
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image };
    })
    res.json(newProducts)
})
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;;
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).send('The product was not found!')
    }
    return res.status(200).json(sortedProducts)
})

app.listen(3000, () => {
    console.log(`The Server is listening`);
})