var net = require("net");
var moment = require("moment");

const server = net.createServer(socket => {
  socket.end(moment().format("YYYY-MM-DD HH:mm[\n]"));
});

server.listen(process.argv[2]);
