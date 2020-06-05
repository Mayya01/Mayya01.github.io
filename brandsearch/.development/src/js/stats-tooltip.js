var StatsTooltip = {
  el: '.js-stats-tooltip',
  name: 'StatsTooltip',

  initialize: function () {
    this.$el.tooltipster({
      animation: 'fade',
      delay: 200,
      maxWidth:340,
      theme: ['tooltipster-light-customized']
    });
  },

};

App.Control.install(StatsTooltip);
