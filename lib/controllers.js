'use strict';
var Posts = module.parent.parent.require('./posts');
var Settings = module.parent.parent.require('./settings');
var Meta = module.parent.parent.require('./meta');
var Controllers = {};

Controllers.getPost = function(req, res, next){
	var allowOrigin=["http://localhost:3000","http://www.supersu.com","http://su.phyer.click"];
	console.log("origin:",req.headers.origin);
	var origins = Meta.settings.get('ccmtpostinfo', function(err,mySettings){
		if(err)
			console.log("err:",err);
		console.log("origins:",mySettings);
	});
	if(allowOrigin.includes(req.headers.origin)){
		res.header("Access-Control-Allow-Origin", req.headers.origin);
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		Posts.getPostData(req.params.pid,function(err,result){
			res.send(result);
		});
	}else{
		console.log("not allow");
		res.send("not allow");
	}
};
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
module.exports = Controllers;
