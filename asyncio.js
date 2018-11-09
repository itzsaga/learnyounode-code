var fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;

    const fileString = data.toString();
    const fileArray = fileString.split("\n");
    const numberOfNewLines = fileArray.length - 1;
    console.log(numberOfNewLines);
});
