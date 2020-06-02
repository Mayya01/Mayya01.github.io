var FeaturesPlatesSlider = {
  el: '.js-features-plates',
  name: 'FeaturesPlatesSlider',

  initialize: function () {
    this.$el.slick({
      slide: '.features-plates__slide',
      adaptiveHeight: false,
      dots: true,
      arrows: false,
    });
  },

};

 App.Control.install(FeaturesPlatesSlider);
