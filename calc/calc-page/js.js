$(document).ready(function () {
	var newStep;
	var sliderValue = [10,20,30,40,60,80,100,400,700,1000];
	$('.js-slider')
		.slider({
			step: 1,
			min: 0,
			max: sliderValue.length-1,
			marks: ['до 10','10', '40', '100', '1000', '1000+'],
			slide: function (event, ui) {
				calcSumm(ui.value);
				if (ui.value <= 6) {
					newStep = 1;
					$(this).slider('option', 'step', newStep);
					//calcSumm(ui.value);
				}/* else if (ui.value > 10 && ui.value <= 60) {
					newStep = 10;
					$(this).slider('option', 'step', newStep);
					calcSumm(ui.value);
				 else if (ui.value > 40 && ui.value <= 60) {
					newStep = 3.2;
					$(this).slider('option', 'step', newStep);
					calcSumm(ui.value);
				} else if (ui.value > 60 && ui.value <= 80) {
					newStep = 2.22222;
					$(this).slider('option', 'step', newStep);
					calcSumm(ui.value);
				} else if (ui.value > 80 && ui.value <= 100) {
					newStep = 5;
					$(this).slider('option', 'step', newStep);
					calcSumm(ui.value);
				}*/
			}
		}).each(function () {

			var opt = $(this).data().uiSlider.options;

			for (var i = 0; i < opt.marks.length; i++) {

				var el = $('<div></div>').addClass('ui-slider-mark' + ' ui-slider-mark--' + (i + 1));

				var el2 = $('<label>' + opt.marks[i] + '</label>');

				el.append(el2);

				$(".js-slider").append(el);

			}

		});

	function calcSumm(val) {
		var usersNum = Math.ceil(val);
		$('.js-slider__users').html(sliderValue[val] + ' пользователей');
	}

});
