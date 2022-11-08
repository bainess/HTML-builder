const fs = require('fs/promises');
const path = require('path');
const regularPath = path.join(__dirname);
let stat = require('node:fs');

function getFileSize (file) {
 (async () => {
  try{
    const stats = await fsPromises.stat(`${file}`);
    console.log(stats)
    return stats.size;
  } catch (er) {
    throw er;
  }
 })
}

fs.readdir(`${regularPath}/secret-folder`, (er, files) => {
  if (er) throw er;
  files.forEach( file => {
    let size = getFileSize(file);

    console.log(size);
  })
} )