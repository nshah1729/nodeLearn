// const fs = require('fs').promises;

// const start = async () => {
//     try {
//         const first = await fs.readFile('./content/first.txt', 'utf-8');
//         const second = await fs.readFile('./content/second.txt', 'utf-8');
//         await fs.writeFile('./content/third.txt', 'utf');

//         console.log(first);
//         console.log(second);

//     } catch (error) {
//         console.log(error);
//     }
//     finally{
//         console.log("DOne");
//     }
// }

// start()

// const EventEmitter= require('events')
// const customEmitter=new EventEmitter();
// customEmitter.on('response',()=>{
//     console.log(`Data Recieved!!!`);
// })
// customEmitter.emit('response')



const fs = require('fs');
const http = require('http');

// for (let i = 0; i < 1000; i++) {
//     fs.writeFileSync('./content/bigFile.txt', `hello world ${i}\n`, { flag: 'a' })

// }
http.createServer((req, res) => {
    const textStream = fs.createReadStream('./content/bigFile.txt', 'utf8')
    textStream.on('open', () => {
        textStream.pipe(res)
    })
})
    .listen(3000)