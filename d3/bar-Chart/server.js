var http = require('http');
var fs = require('fs');

function onRequest(request,response){
  if(request.method == 'GET' && request.url == '/') {
		  response.writeHead(200,{"Content-Type":"text/html"});
		  fs.createReadStream("./index.html").pipe(response);
  } else if(request.method == 'GET' && request.url == '/style.css') {
  	      response.writeHead(200,{"Content-Type":"text/css"});
  		  fs.createReadStream("./style.css").pipe(response);
    } else if(request.method == 'GET' && request.url == '/jquery-3.2.0.min.js') {
	      response.writeHead(200,{"Content-Type":"text/javascript"});
		  fs.createReadStream("./jquery-3.2.0.min.js").pipe(response);
  } else if(request.method == 'GET' && request.url == '/d3.min.js') {
	      response.writeHead(200,{"Content-Type":"text/javascript"});
		  fs.createReadStream("./d3.min.js").pipe(response);
  }
   else if(request.method == 'GET' && request.url == '/main.js') {
	      response.writeHead(200,{"Content-Type":"text/javascript"});
		  fs.createReadStream("./main.js").pipe(response);
  }
  else if(request.method == 'GET' && request.url == '/data.json') {
	      response.writeHead(200,{"Content-Type":"text/json"});
		  fs.createReadStream("./data.json").pipe(response);
  }

}

http.createServer(onRequest).listen(1337);
console.log("Server is running ....");
