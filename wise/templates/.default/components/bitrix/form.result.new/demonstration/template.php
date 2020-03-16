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
                    <input type="text" data-name="username" data-fieldname="SIMPLE_QUESTION_845" name="form_text_9" value="" placeholder="Ваше имя" data-necessary="data-necessary"/>
                    <div class="form-standart__error">Неверно заполнено имя</div>
                    <div class="form-standart__none">Заполнение имени обязательно</div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="phone" value="" data-fieldname="SIMPLE_QUESTION_813" name="form_text_10" placeholder="Телефон" data-necessary="data-necessary" data-mask="phone"/>
                    <div class="form-standart__none">Пожалуйста, укажите телефон</div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="email" value="" data-fieldname="SIMPLE_QUESTION_328" name="form_text_11" placeholder="E-mail" data-mask="email"/>
                    <div class="form-standart__none">Пожалуйста, укажите E-mail</div>
                </div>
            </div>
        </div>
        <div class="plate-content">
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__label">Выберите программу</div>
                    <div class="form-standart__inputs">
                        <select type="text" data-name="programm" value="" name="form_textarea_12" data-fieldname="SIMPLE_QUESTION_900" placeholder="Выберите программу" data-necessary="data-necessary" class="select2">
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
                        <textarea data-fieldname="SIMPLE_QUESTION_468" name="form_text_13"></textarea>
                        <div class="form-standart__none">Пожалуйста, выберите программу</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__label">Выберите формат демонстрации</div>
                    <div class="form-standart__inputs">
                        <label class="preorder-block__radio">
                            <input type="radio" data-name="format" data-fieldname="SIMPLE_QUESTION_233" name="form_text_14" value="В вашем офисе" checked="checked" class="icheck"/>
                            <div class="preorder-block__checkbox-label">В вашем офисе</div>
                        </label>
                        <label class="preorder-block__radio">
                            <input type="radio" data-name="format" data-fieldname="SIMPLE_QUESTION_233" name="form_text_14" value="Дистанционно"  class="icheck"/>
                            <div class="preorder-block__checkbox-label">Дистанционно</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="submit" name="web_form_submit" value="<?=htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]);?>" class="button"/>
                </div>
                <div class="footnote"><span class="_star">*</span><span>Информация конфидициальна и не подлежит разглашению.</span></div>
				<?showPersonalNotice(null, htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]))?>
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

