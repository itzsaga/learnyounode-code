var myModule = require("./export");

myModule(process.argv[2], process.argv[3], callbackFunc);

function callbackFunc(err, data) {
  if (err) return console.error(err);
  data.forEach(file => console.log(file));
}
