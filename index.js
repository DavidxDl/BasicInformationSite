//,
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers.accept.substring(0, 9));

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  if (req.url === "/css/style.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");
    fs.readFile("./css/style.css", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});

server.listen("8080", "127.0.0.1", () => {
  console.log("server is running on host http://127.0.0.1:8080");
});
