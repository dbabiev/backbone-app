define(["backbone"], function(Backbone){
	var Car = Backbone.Model.extend({
		defaults: {
			mark: "<empty>",
			model: "<empty>",
			year: "<empty>"
		}
	});
	return Car;
});