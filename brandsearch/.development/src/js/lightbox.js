var LightBox = {
  el: '.js-lightbox',
  name: 'LightBox',

  initialize: function () {
  },

  events: {
    'click .js-lightbox__trigger': 'toggleLightBox'
  },


  toggleLightBox: function (e) {
    e.preventDefault();
    this.targetId = $(e.currentTarget).data('id');
    $('#' + this.targetId).addClass('_open');

  }
};

App.Control.install(LightBox);