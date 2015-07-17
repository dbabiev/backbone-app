define(["backbone", "localStorage", "model/car"], function(Backbone, LocalStorage, Car){
	var CarCollection = Backbone.Collection.extend({
		model: Car,
		localStorage: new LocalStorage("cars")
	});
	return new CarCollection;
});