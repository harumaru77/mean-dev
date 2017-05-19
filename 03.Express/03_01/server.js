// Load the 'express' module
const express = require('express');

// Create a new Express application instance
const app = express();

// Mount a new middleware function
app.use('/heroes', function(req, res) {
    // Use the 'response' object to send a respone
    //res.send('내가 좋아하는 히어로 들입니다.');
	const hero = [
		{id: 11,
		name: '히어로'}
	];

	res.send(hero);
});

app.use('/', function(req, res) {
	// Use the 'response' object to send a respone
	res.send('Hello World');
});



// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;