"use strict";
var controllers = require('./lib/controllers'),

plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
	hostMiddleware = params.middleware,
	hostControllers = params.controllers;

	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.
	var allowOrigin=["http://localhost:4567","http://www.supersu.com","http://su.phyer.click"];
	router.all('/*', function(req, res, next) {
		console.log("origin:",req.headers.origin);
		if(!allowOrigin.includes(req.headers.origin)){
			return;
		}else{
			res.header("Access-Control-Allow-Origin", req.headers.origin);
			res.header("Access-Control-Allow-Headers", "X-Requested-With");
		}
		next();
	});

	router.get('/api/plugins/ccmtpostinfo/getpost/:pid', controllers.getPost);

	callback();
};

module.exports = plugin;
