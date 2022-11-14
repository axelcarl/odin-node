const path = require('path');
var http = require('http');
const fs = require('fs');

const PORT = 5000;

http.createServer((req, res) => {

  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

  let extension = path.extname(filePath);

  let contentType = 'text/html';

  switch(extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
  }

  if (contentType == "text/html" && extension == "") filePath += ".html";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code = 'ENOENT') 
      {console.log(filePath + 'page not found')}
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  }
  );
}).listen(PORT);
