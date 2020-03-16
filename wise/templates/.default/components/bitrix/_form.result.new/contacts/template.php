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

    <div class="c-contacts__cols">
        <div class="c-contacts__left-col">
            <div class="form-standart__fields-list">
                <div class="form-standart__field">
                    <div class="form-standart__label">Ваше имя:</div>
                    <div class="form-standart__item">
                        <div class="form-standart__inputs">
                            <input type="text" data-name="username" data-fieldname="SIMPLE_QUESTION_893" name="form_text_26" value="" data-necessary>
                            <div class="form-standart__error">Неверно заполнено имя</div>
                            <div class="form-standart__none">Заполнение имени обязательно</div>
                        </div>
                    </div>
                </div>
                <div class="form-standart__field">
                    <div class="form-standart__label">Телефон:</div>
                    <div class="form-standart__item">
                        <div class="form-standart__inputs">
                            <input type="text" data-name="username" data-fieldname="SIMPLE_QUESTION_734" name="form_text_27" value="" data-necessary data-mask="phone">
                            <div class="form-standart__none">Укажите телефон</div>
                        </div>
                    </div>
                </div>
                <div class="form-standart__field">
                    <div class="form-standart__label"><nobr>E-mail</nobr>:</div>
                    <div class="form-standart__item">
                        <div class="form-standart__inputs">
                            <input type="text" data-name="username" data-fieldname="SIMPLE_QUESTION_534" name="form_text_28" value="" data-necessary data-mask="email">
                            <div class="form-standart__error">Неверный email</div>
                            <div class="form-standart__none">Заполнение email обязательно</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-contacts__right-col">
            <div class="form-standart__fields-list">
                <div class="form-standart__field">
                    <div class="form-standart__label">Сообщение:</div>
                    <div class="form-standart__item">
                        <div class="form-standart__inputs">
                            <textarea data-name="comment" data-fieldname="SIMPLE_QUESTION_142" name="form_textarea_29" value="" data-necessary></textarea>
                            <div class="form-standart__none">Пожалуйста, укажите комментарий</div>
                        </div>
                    </div>
                </div>
                <div class="b-captcha c-contacts__captcha">
                    <div class="b-captcha__label-holder">
                        <div class="b-captcha__label">Введите код</div>
                    </div>
                    <div class="b-captcha__right-wrap">
                        <div class="b-captcha__table">
                            <?if($arResult["isUseCaptcha"] == "Y"): ?>
                                <div class="b-captcha__input-holder">
                                    <input type="text" name="captcha_word" value="" class="b-captcha__input" />
                                </div>
                                <div class="b-captcha__img-holder">
                                    <input type="hidden" name="captcha_sid" value="<?=htmlspecialcharsbx($arResult["CAPTCHACode"]);?>" />
                                    <img src="/bitrix/tools/captcha.php?captcha_sid=<?=htmlspecialcharsbx($arResult["CAPTCHACode"]);?>" />
                                </div>
                            <? endif; ?>
                        </div>
                    </div>
                </div>
                <div class="form-standart__field">
                    <div class="form-standart__label">&nbsp;</div>
                    <div class="form-standart__item">
                        <div class="form-standart__inputs">
                            <input type="submit" name="web_form_submit" value="<?=htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]);?>" class="button"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

		<?=$arResult["FORM_FOOTER"]?>
	<? endif; //isFormNote ?>

	<script>
		$(function(){
            setTimeout(function() {
                $('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            },100);
		});
	</script>

</div>

