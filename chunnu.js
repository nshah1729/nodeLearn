const fs = require('fs').promises;

const start = async () => {
    try {
        const first = await fs.readFile('./content/first.txt', 'utf-8');
        const second = await fs.readFile('./content/second.txt', 'utf-8');
        await fs.writeFile('./content/third.txt', 'utf');

        console.log(first);
        console.log(second);

    } catch (error) {
        console.log(error);
    }
}

start()
