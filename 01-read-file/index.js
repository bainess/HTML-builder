const fs = require('fs');
const path = require('path');

const regularPath = path.join(__dirname,'text.txt');
const readStream = fs.createReadStream(regularPath, {encoding: 'utf-8'});
readStream.on('data', (data) => {
  console.log(data);
});