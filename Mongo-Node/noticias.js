const http = require('http');

let server = http.createServer((req,res) =>{
  var categoria = req.url;
  if(categoria == '/tecnologia'){
    res.end("<html><h1>Teste</h1></html>");
  }else if (categoria == '/teste') {
    res.end("<html><h1>Teste1</h1></html>")
  }else{
    res.end();
  }
}).listen(3000);
