requirejs.config({
	paths: {
		// libs
		jquery: "../../libs/jquery-1.9.1",
		bootstrap: "../../libs/bootstrap/js/bootstrap",
		localStorage: "../../libs/bootstrap/js/localStorage",
		underscore: "../../libs/underscore",
		backbone: "../../libs/backbone",
		text: "../../libs/text",
	},
	shim: {
		bootstrap: ["jquery"],
		backbone: {
			deps: ["underscore", "jquery"]
		}
	}
});

require(["view/app"], function(AppView){
	new AppView;
});