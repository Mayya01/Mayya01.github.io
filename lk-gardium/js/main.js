$(document).ready(function () {
	var tasks = $('.side').find('.task');
	var taskInfo = tasks.find('.info').hide();
	var taskActive = $('.task.active').find('.info').show();
	var events = $('.main').find('.events-info');
	var maxDate = 0;
	
	var tasksDate = $('.side').find('.task').not('.closed').each(function() {
		var taskDate = parseInt($(this).data('date').replace(/-/g,""),10);
		if (taskDate > maxDate) {
			maxDate = taskDate;
			tasks.removeClass('active');
			$(this).addClass('active');
			var $taskId = $(this).data('task');
			events.removeClass('active');
			$('[data-event=' + $taskId + ']').addClass('active');
		}
		
});

	tasks.click(function (e) {
		e.preventDefault();
		if(!$(this).hasClass('active')) {
			tasks.removeClass('active').find('.info').slideUp(300);
			$(this).addClass('active').find('.info').slideDown(300);
		}

		var $taskId = $(this).data('task');
		events.removeClass('active');
		$('[data-event=' + $taskId + ']').addClass('active');

	});

});
