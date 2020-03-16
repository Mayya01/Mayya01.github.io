var successMessage = [];

function implode( glue, pieces ) {

	return ( ( pieces instanceof Array ) ? pieces.join ( glue ) : pieces );
}


function getSuccessMessage(selector) {
	var subscriptionItemLabel = $(selector).attr('data-label');
    var subscriptionID = $(selector).attr('id');

    if($(selector).is(':checked')) {
        
        successMessage[subscriptionItemLabel] = 'checked';
    }
    else
    {
    	successMessage[subscriptionItemLabel] = 'notChecked';
    }
}

BX.addCustomEvent('onAjaxSuccess', function(){
	var on = $('.fancybox-inner');

	$('#subForm input[type=checkbox]').each(function(){
        getSuccessMessage($(this));            
	});
	
	var rubs = [];

	var email = $('#subForm input[type=email]').val();

	for (var i in successMessage)
	{
		if (successMessage[i] == 'checked')
			rubs.push(i);
	}

	successMessage = implode(', ', rubs);
	
	console.log(successMessage);

	if (successMessage != '')
		on.html('<div class="c-subscription-form js-subscriprion-form appWidgetsSubscriptionForm _success" style="display: block"><div class="c-subscription-form__message">Вы успешно подписались на <span>'+successMessage+'</span> на почту '+email+'</div></div>');
});



