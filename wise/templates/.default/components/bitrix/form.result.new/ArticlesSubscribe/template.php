<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<!-- Начало блока: Модальное окно с формой подписки на бизнес-новости -->
<!-- noindex -->
<div class="contact-modal c-modal-subscribe subscribe-block js-form-wrapper" id="articles-subscribe">
    <!-- Начало блока: Шаблон формы подписки на бизнес-новости -->
    <div class="contact-modal__plate _gray">
        <div class="contact-modal__caption">Подпишитесь на бизнес-новости и&nbsp;статьи&nbsp;наших экспертов</div>
        <p class="c-modal-subscribe__descr">Укажите, пожалуйста, круг Ваших профессиональных интересов, и&nbsp;мы будем присылать только по-настоящему важную Вам информацию.</p>
        
		<?= $arResult["FORM_HEADER"] ?>
            <input type="hidden" name="ajax" value="1"/>
            <input type="hidden" name="action" value="formsubmit"/>
            <input name="confirm" value="1" type="hidden">
            <input type="hidden" data-fieldtype="formName" value="<?=$arResult["arForm"]["SID"]?>"/>
            <input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
            <input class="js-form-page" name="form_hidden_<?= $arResult["arQuestions"]["FORM_SOURCE"]["ID"] ?>" type="hidden" value="<?=$APPLICATION->GetCurPage()?>">
           
            <div class="contact-modal__field c-modal-subscribe__field">
                <div class="contact-modal__label">Вы</div>
            </div>
            <div class="contact-modal__field c-modal-subscribe__checkbox-section">
                <div class="contact-modal__item">
                    <div class="form-standart__inputs _small-textarea js-typicalform-checkbox-wrapper">
                        <ul class="contact-modal__inputs-list">
                            <? foreach ($arResult["QUESTIONS"] as $question): ?>
                                <? if ($question["STRUCTURE"][0]["FIELD_TYPE"] == "checkbox"): ?>
                                    <li>
                                        <label for="" class="contact-modal__checkbox">
                                        <?= $question["HTML_CODE"] ?>
                                        </label>
                                    </li>
                                <? endif; ?>
                        <? endforeach; ?>
                        </ul>
                        <div class="contact-modal__none">Выберите пункт</div>
                    </div>
                </div>
            </div>
            <div class="contact-modal__field c-modal-subscribe__field">
                <div class="contact-modal__label<?= $arResult['QUESTIONS']['FORM_NAME']['REQUIRED'] == 'Y' ? ' _necessary' : ''?>">Ваше имя</div>
                <div class="contact-modal__item">
                    <div class="contact-modal__inputs">
						<?= $arResult["QUESTIONS"]["FORM_NAME"]["HTML_CODE"] ?>
                        <div class="contact-modal__error">Неверно заполнено поле</div>
                        <div class="contact-modal__none">Заполнение поля обязательно</div>
                    </div>
                </div>
            </div>
            <div class="contact-modal__field c-modal-subscribe__field">
                <div class="contact-modal__label<?= $arResult['QUESTIONS']['FORM_EMAIL']['REQUIRED'] == 'Y' ? ' _necessary' : ''?>">E-mail</div>
                <div class="contact-modal__item">
                    <div class="contact-modal__inputs">
						<?= $arResult["QUESTIONS"]["FORM_EMAIL"]["HTML_CODE"] ?>
                        <div class="contact-modal__error">Неверно заполнено поле</div>
                        <div class="contact-modal__none">Заполнение поля обязательно</div>
                    </div>
                </div>
            </div>
            <div class="contact-modal__field c-modal-subscribe__field">
                <div class="c-modal-subscribe__text">Мы будем отправлять письма не чаще 1 раза в месяц</div>
                <div class="c-modal-subscribe__text">Вы можете отписаться от рассылки в любой момент</div>
            </div>
	
		    <? showAcceptCheckbox('articles-subscribe', 'Подписаться'); ?>
      
		<?= $arResult["FORM_FOOTER"] ?>
    </div>
    <!-- Конец блока: Шаблон формы подписки на бизнес-новости -->

    <script>
		$(function () {
			
			setTimeout(function () {
				$('#articles-subscribe form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
			}, 100);
			$('#articles-subscribe form[name="<?= $arResult['arForm']['SID'] ?>"]').attr('id', 'js-articles-subscribe-form');
   
			// определяем, что пользователь планирует уйти со страницы
			$(document).mouseleave(function(e) {
				
				if((getCookie("conversion_action_done") != "true") && ($(document).width() > 1023)) {
					$.fancybox.open("#articles-subscribe");

					/** Добавляем флаг-куку, о том что форма была уже открыта */
					var date = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
					document.cookie = "conversion_action_done=true; path=/; expires=" + date.toUTCString();
				}
			});
   
			setTimeout(function () {
				if((getCookie("conversion_action_done") != "true") && ($(document).width() > 1023)){
					$.fancybox.open("#articles-subscribe");
					
					/** Добавляем флаг-куку, о том что форма была уже открыта */
					var date = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
					document.cookie = "conversion_action_done=true; path=/; expires=" + date.toUTCString();
				}
			}, 120000);
		});
    </script>

</div>
<!--/ noindex -->
<!-- Конец блока: Модальное окно с формой подписки на бизнес-новости -->

<div class="c-subscription-form _success" id="subscription-articles-input-success">
    <div class="c-subscription-form__message">
        <div class="success-message-modal__caption">Спасибо!</div>
        <div class="success-message-modal__text">
            Вы успешно подписались на бизнес-новости<br> и статьи наших экспертов.
        </div>
    </div>
</div>
