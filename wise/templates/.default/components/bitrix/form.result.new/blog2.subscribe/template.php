<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<?



?>
<!-- noindex -->
<div class="subscribe-banner <?if($arParams['INNER_BANNER'] != 'Y'):?>subscribe-banner--book<?endif;?> js-articles-subscribe-form" id="articles-subscribe2">
	<div class="subscribe-banner__text">
		<h3 class="subscribe-banner__title"><?=($arParams['CUSTOM_TEXT_1'])?$arParams['CUSTOM_TEXT_1']:"Не пропустите свежие статьи";?></h3>
		<p class="subscribe-banner__subtitle"><?=htmlspecialchars_decode( ($arParams['CUSTOM_TEXT_2'])?$arParams['CUSTOM_TEXT_2']:'Подпишитесь на рассылку и получайте самые свежые статьи <br class="hide-up-to-md"> 1 раз в неделю специально для вас');?></p>
		<?= $arResult["FORM_HEADER"] ?>
		<div class="subscribe-banner__form">
			
			<?= $arResult["FORM_HEADER"] ?>
			<input type="hidden" name="ajax" value="1"/>
			<input type="hidden" name="action" value="formsubmit"/>
			<input name="confirm" value="1" type="hidden">
			<input type="hidden" data-fieldtype="formName" value="<?=$arResult["arForm"]["SID"]?>"/>
			<input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
			<input class="js-form-page" name="form_hidden_<?= $arResult["QUESTIONS"]["FORM_SOURCE"]["STRUCTURE"][0]["ID"] ?>" type="hidden" value="<?=$APPLICATION->GetCurPage()?>">
			<input type="hidden" name="form_text_<?= $arResult["QUESTIONS"]["FORM_NAME"]["STRUCTURE"][0]["ID"] ?>" value="Default Name"/>
			
			<div class="subscribe-banner__form-wrapper">
				<input type="email" class="subscribe-banner__input field field--md field--shadow js-email js-subscribe-input" placeholder="Ваш email"
					   name="form_text_<?= $arResult["QUESTIONS"]["FORM_EMAIL"]["STRUCTURE"][0]["ID"] ?>" data-mask="email" data-necessary="" placeholder="E-mail" value=""
				>
				<input type="submit" name="web_form_submit" value="Подписаться" class="button pupop subscribe-banner__btn">
			</div>
			<div class="subscribe-banner__footer">
				<input class="subscribe-banner__checkbox" type="checkbox" id="articles-subscribe-privicy2" checked>
				<label class="subscribe-banner__checkbox-label" for="articles-subscribe-privicy2">Соглашаюсь на обработку персональных данных</label>
			</div>
			
			
			
			<?= $arResult["FORM_FOOTER"] ?>
		</div>
	</div>
</div>



<script>
	$(function () {
		
		setTimeout(function () {
			$('#articles-subscribe2 form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
		}, 100);
		$('#articles-subscribe2 form[name="<?= $arResult['arForm']['SID'] ?>"]').attr('id', 'js-articles-subscribe-form2');
		
		// определяем, что пользователь планирует уйти со страницы
		// $(document).mouseleave(function(e) {
		//
		// 	if((getCookie("conversion_action_done") != "true") && ($(document).width() > 1023)) {
		// 		$.fancybox.open("#articles-subscribe");
		//
		// 		/** Добавляем флаг-куку, о том что форма была уже открыта */
		// 		var date = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
		// 		document.cookie = "conversion_action_done=true; path=/; expires=" + date.toUTCString();
		// 	}
		// });
		//
		// setTimeout(function () {
		// 	if((getCookie("conversion_action_done") != "true") && ($(document).width() > 1023)){
		// 		$.fancybox.open("#articles-subscribe");
		//
		// 		/** Добавляем флаг-куку, о том что форма была уже открыта */
		// 		var date = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
		// 		document.cookie = "conversion_action_done=true; path=/; expires=" + date.toUTCString();
		// 	}
		// }, 120000);
	});
</script>

<!--/ noindex -->
<!-- Конец блока: Модальное окно с формой подписки на бизнес-новости -->

<div class="c-subscription-form _success" id="subscription-articles-input-success2">
    <div class="c-subscription-form__message">
        <div class="success-message-modal__caption">Спасибо!</div>
        <div class="success-message-modal__text">
            Вы успешно подписались на бизнес-новости<br> и статьи наших экспертов.
        </div>
    </div>
</div>
