App.Control.install({
  el: '.js-fancy-media',
  name: 'FancyMedia',
  initialize: function () {
    var self = this;

    var fitToView = this.$el.data('fullsize') ? false : true;
    this.$el.fancybox({
      wrapCSS: 'fancy-media',
      margin: ($(window).width() > 937) ? 20 : 5,
      fitToView: fitToView,
      autoResize: true,
      maxWidth: '100%',
      helpers: {
        overlay: {
          css: {
            'background': 'rgba(27, 71, 105, 0.7)'
          }
        }
      }
    });
  }
});

App.Control.install({
  el: '.js-fancy-lightbox',
  name: 'FancyMedia',
  initialize: function () {
    var self = this;

    this.$el.fancybox({
      autoResize: true,
      wrapCSS: 'fancy-lightbox',
      maxWidth: '100%',
      padding:0,
      width: "100%",
      height:'100%',
      helpers: {
        overlay: {
          css: {
            'background': 'rgba(27, 71, 105, 0.7)'
          }
        }
      }
    });
  }
});