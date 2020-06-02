var MainNav = {
  el: '.js-main-nav',
  name: 'MainNav',

  initialize: function () {
    this.toggleBtn = this.$('.js-main-nav__toggle');
    this.innerMenu = this.$('.js-main-nav__inner-menu');
  },

  events: {
    'click .js-main-nav__toggle': 'toggleMenu'
  },


  toggleMenu: function (e) {
    e.preventDefault();
    this.toggleBtn.toggleClass('_is-open');
    this.innerMenu.toggleClass('_is-open');
    $('body').toggleClass('_is-open-menu');
  }
};

App.Control.install(MainNav);