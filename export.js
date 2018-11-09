var fs = require("fs");
var path = require("path");

module.exports = function(dirName, extension, callback) {
  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err);

    const data = list.filter(file => path.extname(file) === "." + extension);
    return callback(null, data);
  });
};
