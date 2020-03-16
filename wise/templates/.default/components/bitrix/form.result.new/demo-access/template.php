<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?>" id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

	<? if($arResult["FORM_NOTE"] != ""): ?>
		<div class="form-note"><?=$arResult["FORM_NOTE"]?></div>
	<? endif; ?>

	<?if ($arResult["isFormNote"] != "Y") : ?>
		<?=$arResult["FORM_HEADER"]?>
		<input type="hidden" name="ajax" value="1" />
		<input type="hidden" name="action" value="formsubmit" />
		<input type="hidden" name="confirm" value="1" />
		<?if ($arResult["isFormErrors"] == "Y"):?>
			<?=$arResult["FORM_ERRORS_TEXT"];?>
		<?endif;?>

    <div class="form-standart__fields-list">
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="username" name="form_text_3" value="" data-fieldname="SIMPLE_QUESTION_348" placeholder="Ваше имя" data-necessary="data-necessary"/>
                    <div class="form-standart__error">Неверно заполнено имя</div>
                    <div class="form-standart__none">Заполнение имени обязательно</div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="phone" name="form_text_4" value="" data-fieldname="SIMPLE_QUESTION_185" placeholder="Телефон" data-necessary="data-necessary" data-mask="phone"/>
                    <div class="form-standart__none">Пожалуйста, укажите телефон</div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="email" name="form_text_5" value="" data-fieldname="SIMPLE_QUESTION_323" placeholder="E-mail" data-mask="email"/>
                    <div class="form-standart__none">Пожалуйста, укажите E-mail</div>
                </div>
            </div>
        </div>
        <div class="plate-content">
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__label">Выберите программу</div>
                    <div class="form-standart__inputs">
                        <select type="text" data-name="programm" name="form_textarea_6" data-fieldname="SIMPLE_QUESTION_877" placeholder="Выберите программу" data-necessary="data-necessary" class="select2">
                            <option>Бухгалтерия</option>
                            <option>Зарплата и Управление Персоналом</option>
                            <option>Управление торговлей</option>
                            <option>Управление производственным предприятием</option>
                            <option>Управление предприятием ERP</option>
                            <option>Документооборот</option>
                            <option>Управление холдингом</option>
                            <option>Консолидация</option>
                            <option>Комплексная автоматизация</option>
                            <option>Управление нашей фирмой</option>
                            <option>CRM</option>
                            <option>Розница</option>
                        </select>
                        <div class="form-standart__none">Пожалуйста, выберите программу</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__label">Сообщение</div>
                    <div class="form-standart__inputs">
                        <textarea name="form_textarea_7" data-fieldname="SIMPLE_QUESTION_120"></textarea>
                        <div class="form-standart__none">Пожалуйста, выберите программу</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__label">Ваша цель получения демо-доступа</div>
                    <div class="form-standart__inputs">
                        <select type="text" data-name="goal" name="form_text_8" data-fieldname="SIMPLE_QUESTION_828" value="" placeholder="Ваша цель получения демо-доступа" data-necessary="data-necessary" class="select2">
                            <option>Принятие решения о приобретении</option>
                            <option>Обучающие цели (студенты)</option>
                            <option>Ознакомительные цели (разобраться)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="submit" name="web_form_submit" value="<?=htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]);?>" class="button"/>
                </div>
                <div class="footnote">
                    <span class="_star">*</span><span>Информация конфидициальна и не подлежит разглашению.</span>
                    <br>
                    <span class="_star">**</span><span>Демо-доступ предоставляется аффилированной компанией группы «WiseAdvice» – ООО «Аутсорсинг для бизнеса» (ИНН 7721643480) по договору «1С:Аренда ПО» № 010415-49225-45 от «01» апреля 2015 г.</span>
					<?showPersonalNotice(null, htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]))?>
                </div>
            </div>
        </div>
    </div>

		<?=$arResult["FORM_FOOTER"]?>
	<? endif; //isFormNote ?>

	<script>
    // Обработка стандартной формы
    $(function () {
        // Функция проверки соответствия значения инпута регулярке
            var checkVal = function($input, regExp) {
                var result = regExp.test($input.val());
                if(result) {
                    $input.closest('.form-standart__field').removeClass('_error');
                } else {
                    $input.closest('.form-standart__field').addClass('_error');
                }

                return result;
            }

        // Функция проверки обязательных полей формы
            function inputChecker($input) {
                var $field = $input.closest('.form-standart__field');

            if($field.hasClass('_error, _none')) return false;
            if($input.data('necessary') == undefined) return true;

            var type = $input.attr('type');

            switch (type) {
                case 'checkbox':
                if(!$input.prop('checked')) {
                    $field.addClass('_none');
                    return false;
                }
                break;

                default:
                    if($input.val() == '' || $input.hasClass('ui-placeholder')) {
                $field.addClass('_none');
                return false;
                }
                return true;
                break;
            }

            return true;
        }

        $('.form-standart').each(function () {
            var $context = $(this);
            var $form = $('form:not(.js-ajax)', $context);
            var $ajaxForm = $('form.js-ajax', $context);
            var $successMessage = $('.success-message-modal', $context);

            // Сброс error при активности
                $('input[data-necessary], textarea[data-necessary], select', $context).on('click keydown change', function() {
                $(this).closest('.form-standart__field').removeClass('_none _error');
            });

            // Устанавливаем маски ввода
                $('[data-mask="phone"]', $context).mask('+7 (999) 999-99-99', {placeholder: '+7 (___) ___-__-__'});

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

            // Обработка формы с Ajax
                $ajaxForm.ajaxForm({
                    beforeSubmit: function (arr, $form, options) {
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
                            }
                            isValidate = isChecked && isValidate;
                        }

                        if(isValidate) $ajaxForm.trigger('success');

                        return isValidate;
                    },

                    success: function () {
                        $.fancybox($successMessage, {
                            wrapCSS: 'modal-theme',
                            autoCenter: false,
                            padding: 0,
                            fitToView: false
                        });
                    },

                    error: function () {
                        $.fancybox($successMessage, {
                            wrapCSS: 'modal-theme',
                            autoCenter: false,
                            padding: 0,
                            fitToView: false
                        });
                    }
                });

            // Появление полей для смены пароля
            $('.js-pass-link', $context).on('click', function () {
                $('.js-pass-change', $context).css({
                    display: 'table-row'
                });

                $(this).closest('.form-standart__field').hide();
                return false;
            });

            $('.js-pass-cancel', $context).on('click', function () {
                $('.js-pass-change', $context).removeAttr('style');
                $('.js-pass-link', $context)
                    .closest('.form-standart__field')
                    .css({
                        display: 'table-row'
                    });
                return false;
            });
        });
    });
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
		$(function(){
            setTimeout(function() {
                $('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            },100);
		});
	</script>

</div>

