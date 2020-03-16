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
                    <input type="text" data-name="username" data-fieldname="SIMPLE_QUESTION_702" name="form_text_15" value="" placeholder="Ваше имя" data-necessary="data-necessary"/>
                    <div class="form-standart__error">Неверно заполнено имя</div>
                    <div class="form-standart__none">Заполнение имени обязательно</div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="phone" value="" data-fieldname="SIMPLE_QUESTION_264" name="form_text_16" placeholder="Телефон" data-necessary="data-necessary" data-mask="phone"/>
                    <div class="form-standart__none">Пожалуйста, укажите телефон</div>
                </div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="text" data-name="email" value="" data-fieldname="SIMPLE_QUESTION_502" name="form_text_17" placeholder="E-mail" data-mask="email"/>
                    <div class="form-standart__none">Пожалуйста, укажите E-mail</div>
                </div>
            </div>
        </div>
        <div class="tabs-block _mobile-more tabs-modal__form">
            <div class="tabs-block__changers-wrap">
                <ul class="tabs-block__tab-changers _hideable">
                    <li class="tabs-block__link-holder"><a href="#" class="dotted-link">Заполните для расчета стоимости работы</a></li>
                    <li class="tabs-block__link-holder"><a href="#" class="dotted-link">Свяжитесь со мной, объясню детали по телефону</a></li>
                </ul>
            </div>
            <div class="tabs-block__tabs">
                <div class="tabs-block__tab">
                    <div class="form-standart__field">
                        <div class="form-standart__item">
                            <div class="form-standart__label">Выберите программу</div>
                            <div class="form-standart__inputs">
                                <select type="text" data-name="programm" value="" name="form_textarea_18" data-fieldname="SIMPLE_QUESTION_983" placeholder="Выберите программу" data-necessary="data-necessary" class="select2">
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
                            <div class="form-standart__label">Краткое описание задачи</div>
                            <div class="form-standart__inputs">
                                <textarea data-fieldname="SIMPLE_QUESTION_509" name="form_textarea_19"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-standart__field">
                        <div class="form-standart__item">
                            <div class="form-standart__label">Краткое описание компании:<br/>отрасль, структура, масштаб</div>
                            <div class="form-standart__inputs">
                                <textarea data-fieldname="SIMPLE_QUESTION_310" name="form_textarea_20"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-standart__field">
                        <div class="form-standart__item">
                            <div class="form-standart__label">Используемые системы <br/>автоматизации в настоящее время</div>
                            <div class="form-standart__inputs">
                                <textarea data-fieldname="SIMPLE_QUESTION_550" name="form_textarea_21"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabs-block__tab"></div>
            </div>
        </div>
        <div class="form-standart__field">
            <div class="form-standart__item">
                <div class="form-standart__inputs">
                    <input type="submit" name="web_form_submit" value="<?=htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]);?>" class="button"/>
                </div>
            </div>
            <div class="footnote"><span class="_star">*</span><span>Данные конфидициальны и не могут быть переданы третьим лицам.</span></div>
			<?showPersonalNotice(null, htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]))?>
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

