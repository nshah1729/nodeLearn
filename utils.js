const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end(`<h1>Welcome to the Home page</h1>`)
    }
    if (req.url === '/about') {
        res.end(`<h1>Welcome to the About page</h1>`)
    }
    if (req.url === '/contact') {
        res.end(`<h1>Welcome to the Contact page</h1>`)
    }
    if (req.url === '/lulu') {
        res.end(`<h1>Welcome to the lulu page</h1>`)
    }
    res.end(
        `<h1>Oops!</h1>
    <p>Could find your page</p>
    <a href='/'>Back Home</a>`)

})
server.listen(5000);