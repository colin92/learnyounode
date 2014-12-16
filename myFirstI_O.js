var fs = require('fs');

function printFileLines(fileName) {
  var fileBuffer = fs.readFileSync(fileName);
  var fileString = fileBuffer.toString();
  var fileArray = fileString.split('\n');
  return fileArray.length - 1;
}
console.log(printFileLines(process.argv[2]));

