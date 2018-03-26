const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const port = process.env.PORT || 8080;

const port = process.env.PORT || 8080;

var app = express();

app.set('view engine', hbs)
app.use(express.static(__dirname + '/public'));

app.use((request, response, next)=> {
	/* returns a maintenence page
	response.render('maintain.hbs', {
		title: 'site down',
		Maintainence: "This site is currently under maintainence"
	});
	*/
	console.log('Hello there')
	/* adds information to a log file
	var time = new Date().toString();
	var log = (`${time}: ${request.method} ${request.url}`);
	fs.appendFile("server.log", log + '\n', (error)=> {
		if (error) {
			console.log('unable to log message')
		}
	});
	*/
	next();
});

app.get('/', (request, response) => {
	// response.send('<h1>Hello Express!</h1>');
	response.send({
		name: 'Your Name',
		school: [
			'BCIT',
			'SFU',
			'UBC'
		]
	})
});

app.get('/info', (request, response) => {
	response.send('My info page');
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(port, () => {
<<<<<<< HEAD
	console.log('Server is up on the port 8080');
});
=======
	console.log(`Server is up on the port ${port}`);
});
>>>>>>> d207cbf2d640e64ebe482beff3a65adbd79e6f71
