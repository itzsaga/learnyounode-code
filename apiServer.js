var http = require("http");
var url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const route = parsedUrl.pathname;
  const date = new Date(parsedUrl.query.iso);
  res.writeHead(200, { "Content-Type": "application/json" });
  if (route === "/api/parsetime") {
    res.end(
      JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      })
    );
  }
  if (route === "/api/unixtime") {
    res.end(JSON.stringify({ unixtime: date.getTime() }));
  }
});

server.listen(process.argv[2]);
