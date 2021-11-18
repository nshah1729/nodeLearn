const fs = require('fs');

const getText = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('ee');
    } else {
      resolve(data);
    }
  });
});
getText('./content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finished!'));
