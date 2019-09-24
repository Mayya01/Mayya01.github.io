$(document).ready(function () {
	var usersNum;
	var content;
	var leftStyle;
	var tooltipText;
	$('.js-slider__users').html(0 + ' пользователей');
	$('.js-slider__sum').html('0 ₽ ');
	$('.tooltip').hide();
	$('.js-slider').draggable();


	$('.js-slider')
		.slider({
			step: 1,
			min: 1,
			max: 1000,
			marks: ['до 10', '10', '40', '100', '1000', '1000+'],
			slide: function (event, ui) {
				leftStyle= ui.handle.style.left;
				$('.tooltip').show().css('left',leftStyle);
				$('.ui-handle').draggable();
				if (ui.value <= 210) {
					var num = Math.floor(ui.value / 20);
					usersNum = getUsersNum(num);
					calcSumm(usersNum);
					$('.tooltip').html('<div class="tooltip__wrapper">Для небольших юридических отделов у нас есть решение для автоматизации судебно претензионной работы на <a href="#">платформе Битрикс24<a></div>');
				} else if (ui.value > 210 && ui.value <= 410) {
					var num = ((7 - Math.ceil((400 - ui.value) / 33.3333)) * 5) + 5;
					usersNum = getUsersNum(num);
					calcSumm(usersNum);
					$('.tooltip').html('<div class="tooltip__wrapper">Для крупных департаментов от 40 пользователей стоимость фиксированная, без ограничений числа лицензий.</div>');
					
				} else if (ui.value > 410 && ui.value <= 610) {
					var num = ((7 - Math.ceil((600 - ui.value) / 33.3333)) * 10) + 30;
					usersNum = getUsersNum(num);
					calcSumm(usersNum);
					$('.tooltip').html('<div class="tooltip__wrapper">В отличии от облачных решений, Юрайт на 1С позволяет вести десятки тысяч дел одновременно и подходит для крупного бизнеса.</div>');
					
				} else if (ui.value > 610 && ui.value <= 810) {
					var num = ((10 - Math.ceil((800 - ui.value) / 22.2222)) * 100);
					usersNum = getUsersNum(num);
					calcSumm(usersNum);
					
				} else if (ui.value > 810 && ui.value <= 1000) {
					var num = ((5 - Math.ceil((1000 - ui.value) / 50)) * 1000);
					usersNum = getUsersNum(num);
					calcSumm(usersNum);
				}
			},
			stop:function(event,ui){
					$('.tooltip').hide();
			},
		}).each(function () {

			var opt = $(this).data().uiSlider.options;

			for (var i = 0; i < opt.marks.length; i++) {

				var el = $('<div></div>').addClass('ui-slider-mark' + ' ui-slider-mark--' + (i + 1));

				var el2 = $('<label>' + opt.marks[i] + '</label>');

				el.append(el2);

				$(".js-slider").append(el);

			}

		});

	function getUsersNum(val) {
		var declension;
		if (val == 1) {
			declension = ' пользователь'
		} else if (val > 1 && val <= 4) {
			declension = ' пользователя'
		} else {
			declension = ' пользователей';
		}
		$('.js-slider__users').html(val + declension);

		return val;
	}

	function calcSumm(val) {
		var sum;

		if (val >= 1 && val <= 40) {
			sum = val * 46800;
			$('.js-slider__sum').html(sum + '₽');
		} else if (val > 40) {
			$('.js-slider__sum').html('2000000 ₽');
		}
	}

	function setTooltip(text) {
		console.log(1);
		

		/*$('.js-slider').tooltip({
			items: '.ui-slider-handle',
			content: text,
			tooltipClass: 'my_class'
		});*/
	}



});
