var TabsControl = {
  el: '.js-tabs',
  name: 'Tabs',
  initialize: function () {
    this.tab = this.$('.js-tabs__tab');
    this.tabsOpened = this.$('.js-tabs__tab.is-open');
    this.tabsList = this.$('.js-tabs__list');
    this.tabContent = this.$('.js-tabs__content');
  },

  events: {
    'click .js-tabs__tab': 'switchTabOnClick'
  },

  switchTabOnClick: function (e) {
    this.tab.removeClass('_active');
    $(e.currentTarget).addClass('_active');

    this.targetId = $(e.currentTarget).data('id');

    this.tabContent.removeClass('_active');
    $('#' + this.targetId).addClass('_active');
  },

};

App.Control.install(TabsControl);
