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
                            <option>Принятие решения о приобритении</option>
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
                <div class="footnote"><span class="_star">*</span><span>Информация конфидициальна и не подлежит разглашению.</span></div>
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

