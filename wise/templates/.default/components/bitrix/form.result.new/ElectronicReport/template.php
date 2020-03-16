<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> js-typical-form js-widget-electronic-report-calc"
     id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
    <? if ($arResult["FORM_NOTE"] != ""): ?>
        <div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
    <? endif; ?>

    <? if ($arResult["isFormNote"] != "Y") : ?>
        <?= $arResult["FORM_HEADER"] ?>
        <input type="hidden" name="ajax" value="1"/>
        <input class="js-typical-ajax-path" type="hidden" value="<?= $templateFolder ?>/ajax.php"/>
        <input class="js-typical-ajax-delete-path" type="hidden" value="<?= $templateFolder ?>/delete.php"/>
        <input type="hidden" name="action" value="formsubmit"/>
        <input type="hidden" name="confirm" value="1"/>
        <input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
        <input type="hidden" data-fieldtype="formName" value="ElectronicReport"/>
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
            <? elseif ($arQuestion["CODE"] == "FORM_PAGE"): ?>
                <input type="hidden" class="js-form-page"
                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                       value="<?= $APPLICATION->GetCurPage() ?>"/>

            <? elseif ($arQuestion["CODE"] == "REGION"): ?>
                <?= '<div class="contact-modal__calc-section _top-line ">' ?>

                <div class="contact-modal__field _lined" style="display: none;">
                    <div class="contact-modal__label">Регион</div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">
                            <select class="select2 js-region-select" data-fieldtype="tocomment" data-fieldlabel="Регион"
                                    name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>">
                                <? foreach ($arResult["REGIONS"] as $level): ?>
                                    <option value="<?= $level["TYPE"] ?>" <?if($level["CURRENT"])echo 'selected'?>><?= $level["NAME"] ?></option>
                                <? endforeach ?>
                            </select>
                        </div>
                    </div>
                </div>

            <? elseif ($arQuestion["CODE"] == "ORG_COUNT"): ?>
                <div class="contact-modal__field _lined">
                    <div class="contact-modal__label">Количество организаций</div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">
                            <select class="select2 js-count-select" data-fieldtype="tocomment"
                                    data-fieldlabel="Количество организаций"
                                    name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>">
                                <? foreach ($arResult["ORG_COUNT"] as $key => $level): ?>
                                    <option value="<?= $key ?>"><?= $level ?></option>
                                <? endforeach ?>
                            </select>
                        </div>
                    </div>
                </div>

            <? elseif ($arQuestion["CODE"] == "FORM_NAME" || $arQuestion["CODE"] == "FORM_PHONE" || $arQuestion["CODE"] == "FORM_EMAIL"): ?>
                <div class="contact-modal__field">
                    <div
                        class="contact-modal__label <? if ($arQuestion["REQUIRED"] == "Y"): ?>_necessary<? endif ?>">
                        <?= $arQuestion["CAPTION"] ?>
                    </div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">

                            <?= $arQuestion["HTML_CODE"] ?>
                            <div class="contact-modal__error">Неверно заполнено поле</div>
                            <div class="contact-modal__none">Заполнение поля обязательно</div>
                        </div>
                    </div>
                </div>
            <? else: ?>
                <div class="contact-modal__field _lined">
                    <div class="contact-modal__label"><?= $arQuestion["CAPTION"] ?></div>
                    <div class="contact-modal__item">

                        <div class="contact-modal__inputs">
                            <?= $arQuestion["HTML_CODE"] ?>
                            <div class="contact-modal__error">Неверно заполнено поле</div>
                            <div class="contact-modal__none">Заполнение поля обязательно</div>
                        </div>
                    </div>
                </div>
            <? endif ?>
        <? endforeach; ?>
        <div class="contact-modal__field _inline js-calc-result-unavailable" style="display: none">
            <div class="contact-modal__label">Комбинация недоступна</div>
        </div>
        <div class="contact-modal__field _inline js-calc-result">
            <div class="contact-modal__label">Стоимость в месяц</div>
            <div class="contact-modal__item">
                <div class="contact-modal__inputs">
                    <div class="contact-modal__cost js-month-price">2&nbsp;472&nbsp;руб</div>
                </div>
            </div>
        </div>
        <div class="contact-modal__field _inline js-calc-result">
            <div class="contact-modal__label">Общая стоимость договора</div>
            <div class="contact-modal__item">
                <div class="contact-modal__inputs">
                    <div class="contact-modal__cost js-total-price">
                        29&nbsp;664&nbsp;руб
                    </div>
                </div>
            </div>
        </div>
        <?= "</div>" ?>
	
		<? showAcceptCheckbox('electronic-report', 'Отправить заявку'); ?>
    
        <?= $arResult["FORM_FOOTER"] ?>
    <? endif; //isFormNote ?>

    <script>
        $(function () {
            setTimeout(function () {
                $('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            }, 100);
        });
    </script>

</div>

