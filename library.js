"use strict";
var controllers = require('./lib/controllers');
var Settings = module.parent.require('./settings');
var Meta = module.parent.require('./meta');
var plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
	hostMiddleware = params.middleware,
	hostControllers = params.controllers;

	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/api/plugins/ccmtpostinfo/getpost/:pid', controllers.getPost);
	router.get('/api/plugins/ccmtpostinfo/categories', controllers.categoriesPage);
	router.get('/admin/plugins/ccmtpostinfo', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/ccmtpostinfo', controllers.renderAdminPage);
	callback();
};


plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/ccmtpostinfo',
		icon: 'fa-tint',
		name: 'ccmtpostinfo'
	});

	callback(null, header);
};
module.exports = plugin;
