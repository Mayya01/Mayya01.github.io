var FeaturesPlatesSlider = {
  el: '.js-features-plates',
  name: 'FeaturesPlatesSlider',

  initialize: function () {
    this.$el.slick({
      slide: '.features-plates__slide',
      //adaptiveHeight: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  },

};

 App.Control.install(FeaturesPlatesSlider);
