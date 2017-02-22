'use strict';
var Settings = module.parent.parent.require('./settings');
var Meta = module.parent.parent.require('./meta');
var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	/*
	Make sure the route matches your path to template exactly.

	If your route was:
	myforum.com/some/complex/route/
	your template should be:
	templates/some/complex/route.tpl
	and you would render it like so:
	res.render('some/complex/route');
	*/
	console.log("adminpage will rend");
	res.render('admin/plugins/ccmtpostinfo', {});
};
Controllers.renderPage = function(req, res, next){
	res.send("hello ccmtpostinfo");
};
Controllers.categoriesPage = function(req, res, next){
	var defaultSetting = {};
	var mySettings = Meta.settings.get('ccmtpostinfo', function(err,mySettings){
		if(err)
		console.log("err:",err);
		res.render('plugins/ccmtpostinfo/categories', mySettings);
	});
}

module.exports = Controllers;
