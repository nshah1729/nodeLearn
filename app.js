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
