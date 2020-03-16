<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> js-typical-form " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
    <? if ($arResult["FORM_NOTE"] != ""): ?>
        <div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
    <? endif; ?>

    <?= $arResult["FORM_HEADER"] ?>
        <input type="hidden" name="ajax" value="1"/>
        <input class="js-typical-ajax-path" type="hidden" value="<?= $templateFolder ?>/ajax.php"/>
        <input class="js-typical-ajax-delete-path" type="hidden" value="<?= $templateFolder ?>/delete.php"/>
        <input type="hidden" name="action" value="formsubmit"/>
        <input type="hidden" name="confirm" value="1"/>
        <input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
        <input type="hidden" data-fieldtype="formName" value="1cFresh"/>
        <div style="display: none;">
            <div class="js-feedback-form_type">
                <?= $arResult["FORM_TYPE"]["HTML_CODE"] ?>
            </div>
            <div class="js-feedback-variant_postavki">
                <?= $arResult["VARIANT_POSTAVKI"]["HTML_CODE"] ?>
            </div>
            <div class="js-feedback-tariff">
                <?= $arResult["TARIFF"]["HTML_CODE"] ?>
            </div>
            <div class="js-feedback-product_name">
                <?= $arResult["PRODUCT_NAME"]["HTML_CODE"] ?>
            </div>
        </div>
        <? if ($arResult["isFormErrors"] == "Y"): ?>
            <?= $arResult["FORM_ERRORS_TEXT"]; ?>
        <? endif; ?>
    
        <? foreach ($arResult["VISIBLE_QUESTIONS"] as $kkey => $arQuestion): ?>
            <? if ($arQuestion["CODE"] == "FORM_SOURCE"): ?>
                <div class="js-callback-source">
                    <?= $arQuestion["HTML_CODE"] ?>
                </div>
            <? elseif($arQuestion["CODE"] != "PROGRAMM"): ?>
                <div class="contact-modal__field _lined">
                    <div
                        class="contact-modal__label <? if ($arQuestion["REQUIRED"] == "Y"): ?>_necessary<? endif ?>">
                        <?= $arQuestion["CAPTION"] ?>
                    </div>
                    <div class="contact-modal__item">
						<?= $arQuestion["HTML_CODE"] ?>
                        <div class="contact-modal__inputs">
                            <div class="contact-modal__error">Неверно заполнено поле</div>
                            <div class="contact-modal__none">Заполнение поля обязательно</div>
                        </div>
                    </div>
                </div>
            <? endif ?>
        <? endforeach; ?>
	
        <div class="contact-modal__calc-section _top-line ">
            <div class="js-typicalform-programm" style="display: none">
                <?= $arQuestion["HTML_CODE"] ?>
            </div>
            <div class="contact-modal__field _lined">
                <div class="contact-modal__label">Выберите программу</div>
    
                <div class="contact-modal__item">
                    <div class="contact-modal__inputs _left _full-width-select">
                        <div
                                class="contact-modal__inputs-select contact-modal__repeat-item js-typicalform-programm-select-wrapper">
                            <select class="js-typicalform-programm-select select2">
                                <? foreach ($arResult["PROPGRAMM_SECTIONS"] as $programm): ?>
                                <option value="<?= $programm ?>"><?= $programm ?></option>
                                <? endforeach ?>
                            </select>
                        </div>
                        <a href="" class="form-standart__inputs-add-select js-typicalform-add-select">
                            <span>Добавить ещё программу</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
	<? showAcceptCheckbox('1c-fresh', 'Отправить заявку'); ?>
    
    <?= $arResult["FORM_FOOTER"] ?>
    
    <script>
        $(function () {
            setTimeout(function () {
                $('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            }, 100);
        });
    </script>

</div>