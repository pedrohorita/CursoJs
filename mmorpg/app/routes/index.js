module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.home(application, req, res)
	});


	application.post('/auth', function(req, res){
		application.app.controllers.index.auth(application, req, res)
	});

}