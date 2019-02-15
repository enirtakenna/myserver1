const http = require('http');
const fs = require('fs');
const port=process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	fs.readFile('./public/index.html', null, function(error, data){
		if (error){
			response.writeHead(404);
			response.write('File not found!');
		}
		else {
			response.write(data);
		}
		response.end();
	});
	res.end('<h1>Hello World by enirtakenna</h1><p>Heroku is cool! Frederikke is here too!</p>');
});

server.listen(port,() => {
	console.log('Server running at port '+port);
});

