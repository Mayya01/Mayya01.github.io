$(document).ready(function () {
	$('.js-fancy-media').fancybox({
		padding: 15,
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
});
