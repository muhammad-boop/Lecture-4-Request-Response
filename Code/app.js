// ! Lecture 4 Request & Response
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>This is my Home Page</h1></body>");
    res.write("/<html>");
    return res.end();
  } else if (req.url == "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Products Page</title></head>");
    res.write("<body><h1>This is my Products Page</h1></body>");
    res.write("/<html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Web</title></head>");
  res.write("<body><h1>Hello My Name is Muhammad</h1></body>");
  res.write("/<html>");
  return res.end();
});
const PORT = 3003;
server.listen(PORT, () => {
  console.log(`We are on the ${PORT}`);
});
