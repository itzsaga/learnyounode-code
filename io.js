var fs = require('fs');

const file = fs.readFile(process.argv[2]);
const fileString = file.toString();
const fileArray = fileString.split("\n");
const numberOfNewLines = fileArray.length - 1;

console.log(numberOfNewLines);

