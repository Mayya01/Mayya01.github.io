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
                        <input type="text" data-name="username" value="" placeholder="Ваше имя" data-necessary="data-necessary" name="form_text_1" data-fieldname="SIMPLE_QUESTION_883"/>
                        <div class="form-standart__error">Неверно заполнено имя</div>
                        <div class="form-standart__none">Заполнение имени обязательно</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__inputs">
                        <input type="text" data-name="phone" value="" placeholder="Телефон" data-necessary="data-necessary" data-mask="phone" name="form_text_2"  data-fieldname="SIMPLE_QUESTION_677" />
                        <div class="form-standart__none">Пожалуйста, укажите телефон</div>
                        <p>Мы перезвоним в течение 15 минут в рабочее время</p>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__inputs">
                        <input type="submit" name="web_form_submit" value="<?=htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]);?>" class="button"/>
                    </div>
                    <div class="footnote"><span class="_star">*</span><span>Данные конфидициальны <br/>и не могут быть переданы третьим лицам</span></div>
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

