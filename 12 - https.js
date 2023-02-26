const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the home page');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }

  // If user ask pages other than home and about
  res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href="/"> Home </a>
  `);
});

server.listen(5001);
