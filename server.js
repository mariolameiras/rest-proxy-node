var express = require('express');
var Client = require('node-rest-client').Client;

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
var	client = new Client();


router.use(function(req, res, next) {
	console.log('%s %s', req.method, req.path);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();  
});

router.get('/bitreserve/', function(req, res, next) {
	client.get(req.query.url, function(data, response){
		res.json(JSON.parse(data));
	});
});


// Only requests to /api/ will be send to router.
app.use('/api', router);
app.listen(port);
console.log('Server listening on port ' + port);


