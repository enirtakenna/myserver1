const http = require('http');
const express = require('express');
const port=process.env.PORT || 3000;
const cool = require('cool-ascii-faces');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World by enirtakenna</h1><p>Heroku is cool! Frederikke is here too!</p>');
});

server.listen(port,() => {
	console.log('Server running at port '+port);
});


express()
	.get('/cool', (req, res) => res.send(cool()));