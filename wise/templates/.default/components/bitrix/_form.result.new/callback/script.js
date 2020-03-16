$.fn.initWebForm = function(){
	var form = $(this);
	var fields = $(this).find('[data-fieldname]');

	var MESS = {
		'browser': 'Браузер',
		'windowsize': 'Размер окна',
		'utm_source': 'UTM источник',
		'utm_campaign': 'UTM кампания',
		'utm_medium': 'UTM медиа',
		'utm_keyword': 'UTM ключевые слова',
		'location': 'Текущая страница',
		'message_sent': 'Сообщение отправлено'
	}

	function getFieldsData(){
		var data = {};
		form.find('[data-fieldname]').each(function(){
			data[$(this).data('fieldname')] = $(this).val();
		});
		return data;
	}

	function getCookie(name) {
	  var matches = document.cookie.match(new RegExp(
	    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	function getUtms() {
		var utm = getCookie('__utmz');
		utms = {};
		if(utm){
			eval(utm.replace(/.*?(utm.*?)=([^|]*)[|]?/g, "utms['$1'] = '$2';\n"));
		}
		return utms;
	}

	function getUserInfo(){
		var userinfo = {};
		userinfo['browser'] = navigator.userAgent;
		userinfo['windowsize'] = $(window).width() + "×" + $(window).height();
		userinfo['location'] = document.location.href;
		utms = getUtms();
		if(utms.utmcsr){
			userinfo['utm_source'] = utms.utmcsr;
		}
		if(utms.utmccn){
			userinfo['utm_campaign'] = utms.utmccn;
		}
		if(utms.utmcmd){
			userinfo['utm_medium'] = utms.utmcmd;
		}
		if(utms.utmcmd){
			userinfo['utm_keyword'] = utms.utmctr;
		}

		var stringresult = "";
		$.each(userinfo, function(key, value){
			stringresult += MESS[key] + ": " + value + "\n";
		});
		return stringresult;
	}
    var $context = $(this);
    var $form = $('form:not(.js-ajax)', $context);
    var $ajaxForm = $('form.js-ajax', $context);
    var $successMessage = $('.success-message-modal', $context);

    // Сброс error при активности
    $('input[data-necessary], textarea[data-necessary], select', $context).on('click keydown change', function() {
        $(this).closest('.form-standart__field').removeClass('_none _error');
    });

    // Устанавливаем маски ввода
    $('[data-mask="phone"]', $context).mask('+7 (999) 999-99-99', {placeholder: ' '});

    $('[data-mask="email"]', $context).change(function () {
        var regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g;
        var result = checkVal($(this), regExp);
        return true;
    });

    // Обработка формы без Ajax
    $form.on('submit', function () {
        var isValidate = true;
        var radioNames = [];

        $('input[type="text"], input[type="email"], input[type="password"], input[type="checkbox"], select, textarea', $form).each(function() {
            isValidate = inputChecker($(this)) && isValidate;
        });

        $('input[type="radio"]', $form).each(function() {
            var $this = $(this);
            if($this.data('necessary') == undefined) return true;
            var name = $this.attr('name');
            if($.inArray(name, radioNames) == -1) radioNames.push(name);
        });


        for(var i=0;i<radioNames.length; i++) {
            var isChecked = $('input:checked[name='+radioNames[i]+']', $form).length > 0;
            if(!isChecked) {
                $('input[type="radio"][name="'+radioNames[i]+'"]', $form).eq(0).closest('.form-standart__field').addClass('_none');
            } else {
                $('input[type="radio"][name="'+radioNames[i]+'"]', $form).eq(0).closest('.form-standart__field').addClass('_ok');
            }
            isValidate = isChecked && isValidate;
        }

        return isValidate;
    });

    $(this).ajaxForm({
		beforeSerialize: function(){
			form.find('input.m_placeholder').each(function(){
				if($(this).val() == $(this).attr('placeholder')){
					$(this).val('');
				}
			});
			form.find('input[name="confirm"]').remove();
			form.find('input[data-fieldname="_utm"]').val(getUserInfo());
		},
		beforeSubmit: function(){
			form.find('input[type="submit"]').prop( "disabled", true).addClass('disabled');
		},
		success: function(data){
			form.find('input[type="submit"]').prop( "disabled", false).removeClass('disabled');
			form.find('.error-text').remove();
			form.find('.error').removeClass('error');
			if(data.status == 'error'){
				$.each(data.errors, function(key, value){
					var container = form.find('[data-fieldname="' + key + '"]').parents('.field');
					if(container.length > 0){
						container.addClass('error');
					} else {
						container = form;
					}
					//container.append('<div class="error-text">' + value + '</div>');
				});
				$(document).trigger('webform.error', [form.attr('name'), data, getFieldsData()]);
			} else if(data.status == 'success'){
				$(document).trigger('webform.success', [form.attr('name'), getFieldsData()]);
                // GTM
                if (typeof gtm_magic == "function"){

                    gtm_magic(form.attr('name'));

                    console.log(form.attr('name'));

                }
                window.location = "/spasibo-za-pokupku/";

			}
		},
		error: function(){
			form.find('input[type="submit"]').prop( "disabled", false).removeClass('disabled');
			alert("Server not available");
		}
	});


}