'use strict';
var Posts = module.parent.parent.require('./posts');
var Controllers = {};

Controllers.getPost = function(req, res, next){
	Posts.getPostData(req.params.pid,function(err,result){
		res.send(result);
	};
}

module.exports = Controllers;
