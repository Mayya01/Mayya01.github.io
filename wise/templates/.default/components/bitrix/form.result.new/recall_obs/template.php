<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

    <? if ($arResult["FORM_NOTE"] != ""): ?>
        <div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
    <? endif; ?>

    <? if ($arResult["isFormNote"] != "Y") : ?>
        <?= $arResult["FORM_HEADER"] ?>
        <input type="hidden" name="ajax" value="1"/>
        <input type="hidden" name="action" value="formsubmit"/>
        <input type="hidden" name="confirm" value="1"/>
        <input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
        <input type="hidden" data-fieldtype="formName" value="recall-tariff"/>
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

            <? elseif($arQuestion["CODE"] == "FORM_PAGE"): ?>
                <input type="hidden" class="js-form-page"
                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                       value="<?= $APPLICATION->GetCurPage() ?>"/>

            <? else: ?>
                <div class="order-form__field">
                    <div class="order-form__label"><?= $arQuestion["CAPTION"] ?>:</div>
                    <div class="order-form__item">
                        <div class="order-form__inputs">
                            <? if ($arQuestion["CODE"] == "FORM_TARIFF"): ?>
                                <select class="select2 js-obs-tariff-select"
                                        name="form_text_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>">
                                    <? foreach ($arResult["TARIFFS"] as $tariff): ?>
                                        <? $tariff = str_replace('&nbsp;', ' ', htmlentities($tariff, null, 'utf-8')); ?>
                                        <option value="<?= $tariff ?>"><?= $tariff ?></option>
                                    <? endforeach; ?>
                                </select>
                            <? else: ?>
                                <?= $arQuestion["HTML_CODE"] ?>
                            <? endif ?>
                            <div class="form-standart__error">Неверно заполнено поле</div>
                            <div class="form-standart__none">Заполнение поля обязательно</div>
                        </div>
                    </div>
                </div>
            <? endif ?>
        <? endforeach; ?>
        <div class="order-form__footer">
            <div class="order-form__footer-text">Мы&nbsp;перезвоним в&nbsp;течение 15 минут в&nbsp;рабочее время</div>
            <div class="contact-modal__submit-holder">
                <input type="submit" name="web_form_submit" value="Отправить заявку" class="button form-standart__sumbit _big"/>
            </div>
            <div class="contact-modal__field">
                <div class="contact-modal__item">
                    <div class="contact-modal__inputs">
                        <label>
                            <input type="checkbox" class="icheck" id="arenda-programm-privicy" checked data-necessary="data-necessary">
                            <span>
					<label for="arenda-programm-privicy" class="pinfo-notice"><a href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf" class="default-link" target="_blank">Соглашаюсь на обработку персональных данных</a></label>
				</span>
                            <span class="contact-modal__none">Для продолжения нужно согласие с условиями</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <?= $arResult["FORM_FOOTER"] ?>
    <? endif; //isFormNote ?>

    <script>
        $(function () {
            setTimeout(function () {
                $('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
                // при клике по кнопке "Подключить" в селекте выбирает нужный тариф с которого была вызвана веб-форма
                $('.c-maintenance-tariffs__buy-holder').on('click', function () {
                    var value = $('.js-callback-source').find('input').val();
                    value = value.match(/\(([^)]+)\)/)[1];  // вытаскиваем полезный текст
                    $('.js-obs-tariff-select :contains(' + value + ')').attr('selected', 'selected').trigger('change');
                });
            }, 100);
        });
    </script>

</div>

