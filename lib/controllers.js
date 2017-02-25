'use strict';
var Posts = module.parent.parent.require('./posts');
var Settings = module.parent.parent.require('./settings');
var Meta = module.parent.parent.require('./meta');
var Controllers = {};

Controllers.getPost = function(req, res, next){
	Meta.settings.get('ccmtpostinfo', function(err,mySettings){
		if(err)
			console.log("err:",err);
		var allowOrigin = mySettings.origins.split(',').map(function(value){
			return value.trim();
		});
		if(allowOrigin.includes(req.headers.origin) || mySettings.onlyxhr=="off"){
			res.header("Access-Control-Allow-Origin", req.headers.origin);
			res.header("Access-Control-Allow-Headers", "X-Requested-With");
			Posts.getPostData(req.params.pid,function(err,result){
				res.send(result);
			});
		}else{
			res.send("permission denied");
		}
	});
};
Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/ccmtpostinfo', {});
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

