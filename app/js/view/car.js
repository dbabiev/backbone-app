define(["jquery", "backbone", "underscore", "text!template/car.html"], function($, Backbone, _, carTemplate){
	var CarView = Backbone.View.extend({
		/* элемент представления */
		tagName: "tr",
		/* шаблон представления */
		template: _.template($(carTemplate).html()),
		/* обработка событий */
		events: {
			"click a[data-edit]": "edit",
			"click a[data-remove]": "destroy"
		},
		/* конструктор */
		initialize: function(){
			this.$linkDialog = $("#show-dialog");
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, "destroy", this.remove);
		},		
		/* обновление представления */
		render: function(){
			//this.$el.prop("model-cid", this.model.cid);
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		/* редактирование записи из коллекции */
		edit: function(/*event*/){
			//var tr = $(event.target).closest("tr");
			//var model = Cars.get(tr.prop("model-cid"));
			this.$linkDialog.trigger("click", this.model.attributes);
		},
		/* удаление записи из коллекции */
		destroy: function(){
			this.model.destroy();
		}
	});
	return CarView;
});