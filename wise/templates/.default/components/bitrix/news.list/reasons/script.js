$(document).ready(function () {

	$('.iconic-list').each(function () {
		var $context = $(this);
		var adaptParams = {
			920: '_w-920',
			650: '_w-650'
		};

		$context.adaptBlock(adaptParams);
	});
});