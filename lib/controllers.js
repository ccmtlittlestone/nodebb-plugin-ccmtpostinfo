'use strict';
var Posts = module.parent.parent.require('./posts');
var Controllers = {};

Controllers.getPost = function(req, res, next){
	if(req.headers.host == "localhost:4567"){
		Posts.getPostData(req.params.pid,function(err,result){
			res.send(result);
		});
	}
	return;
};

module.exports = Controllers;
