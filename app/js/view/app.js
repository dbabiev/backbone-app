define(["jquery", "backbone", "bootstrap", "collection/cars", "view/car"], function($, Backbone, Bootstrap, Cars, CarView){
	var AppView = Backbone.View.extend({
		/* элемент представления */
		el: $("#car-app"),
		/* обработка событий */
		events: {
			"click #show-dialog": "showDialog",
			"click #save": "save"
		},
		/* конструктор */
		initialize: function(){
			this.$dialog = this.$el.find("#dialog");
			this.$linkDialog = this.$el.find("#show-dialog");
			this.$inputs = this.$dialog.find("input");
			this.$list = this.$el.find("#car-list");
			this.listenTo(Cars, "add", this.add);
			Cars.fetch();
		},
		/* отображение модального окна */
		showDialog: function(event, data){
			if(data) this.$inputs.each(function(idx, input){
				$(input).val(data[input.id]);
			});
			else this.$inputs.val("");
			this.$dialog.modal();
		},
		/* закрыть окно */
		hideDialog: function(){
			this.$dialog.modal("hide");
		},
		/* сохранение записи в коллекцию */
		save: function(){
			var data = {};
			var $nonEmptyInputs = $.grep(this.$inputs, function(input){return input.value;});
			$.each($nonEmptyInputs, function(idx, input){
				data[input.id] = input.value;
			});
			if(id = data.id) Cars.get(id).save(data);
			else Cars.create(data);
			this.hideDialog();
		},
		/* добавление записи в список */
		add: function(car){
			var view = new CarView({model: car});
			this.$list.append(view.render().el);
			this.hideDialog();
		}
	});
	return AppView;
});