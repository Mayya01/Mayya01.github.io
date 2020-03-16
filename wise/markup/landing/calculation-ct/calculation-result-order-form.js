(function($){

    App.Widgets = App.Widgets || {};

    App.Widgets.CTCalc = can.Control.extend(
        {
            pluginName: 'appWidgetCalcResultOrder',
            defaults: {

            }
        },
        {
            init: function () {
                this.on(this.element, 'submit', 'feedbackSuccessMessage');

                this.element.on('input', function() {
                    $(this).removeClass('calculation-ct__result-order-form--success');
                });
            },

            // Временная заглушка
            feedbackSuccessMessage: function(el, ev) {
                ev.preventDefault();
                this.element.addClass('calculation-ct__result-order-form--success');
            }
        }
    );

    $(function() {
        window.application.installController('.js-calc-result-order', 'appWidgetCalcResultOrder');
    });
}(jQuery));