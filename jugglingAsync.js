var http = require("http");

let callbacks = 0;
let results = [];

function httpGet(i) {
  http.get(process.argv[2 + i], res => {
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", chunk => {
      rawData += chunk;
    });
    res.on("end", () => {
      results[i] = rawData;
      callbacks++;
      if (callbacks === 3) {
        printResults();
      }
    });
  });
}

printResults = () => {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
};

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
