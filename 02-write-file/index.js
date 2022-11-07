const fs = require('fs');
const path = require('path');
const regularPath = path.join(__dirname );
const readline = require('node:readline/promises');
const {stdin: input, stdout: output } = require('node:process');
const { stdin } = require('process');
const os = require('node:os');

fs.writeFile(`${regularPath}/temp.txt`, 'some string', function (er) {
  if (er) throw err;
})
let answer = '';

const main = async() => {
  const rl = readline.createInterface({input, output});
  while (true) {
    answer += `${await rl.question('When is your date of birth?\r\n')}`;
    if(answer.indexOf('exit') !== -1 || answer === 'SIGINT') {
      rl.close();
      return;
    }
    let writer = fs.createWriteStream(`${regularPath}/temp.txt`);
    writer.write(`${answer}\r\n`);
  };
}

main()
