var ShowContent = {
	el: '.js-show-content',
	name: 'ShowContent',

	initialize: function () {
		this.btn = this.$('.js-show-content__btn');
		this.hiddenContent = this.$('.js-show-content__content');
		this.hiddenBlock = this.$('.js-show-content__block');
	},

	events: {
		'click .js-show-content__btn': 'showContent'
	},


	showContent: function (e) {
		e.preventDefault();

		this.hiddenContent.slideDown().removeClass('_hidden');

		// Если скрытую информацию и кнопку-триггер невозможно разместить в общем контейнере
		// Или скрытая информация расположена не после кнопки-триггера
		if (this.$el.filter('[data-attribute]')) {
			this.dataTarget = $(e.currentTarget).attr('data-attribute');
			this.$el.find($('[data-target=' + this.dataTarget + ']')).slideToggle();
		}
	}
};

App.Control.install(ShowContent);
