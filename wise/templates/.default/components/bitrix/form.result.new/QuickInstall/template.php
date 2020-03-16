<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> js-typical-form " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
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
        <input type="hidden" data-fieldtype="formName" value="QuickInstall"/>
		<?= $arResult["FORM_AUTOCALL"]["HTML_CODE"] ?>
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
            <? elseif ($arQuestion["CODE"] == "IS_NEW_ORGANIZATION"): ?>
                <div class="contact-modal__field">
                    <div class="contact-modal__label"></div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">
                            <label>
                                <input data-fieldtype="tocomment" data-fieldlabel="Это новая организация"
                                       class="icheck js-new-organization" type="checkbox" checked
                                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                                       value="Да" data-new-cost="29900" data-old-cost="39900">
                                <span>Новая организация</span>
                            </label>
                        </div>
                    </div>
                </div>

            <? elseif ($arQuestion["CODE"] == "FORM_PAGE"): ?>
                <input type="hidden" class="js-form-page"
                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                       value="<?= $APPLICATION->GetCurPage() ?>"/>
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
        <div class="contact-modal__footer _top-line">
            <div class="contact-modal__message">Стоимость внедрения «под ключ»
                <b class="js-new-organization__text">для новой организации</b></div>
            <div class="contact-modal__cost _quick js-new-organization__cost">29&nbsp;900 руб</div>
            <div class="contact-modal__submit-holder">
                <input type="submit" name="web_form_submit" value="Отправить заявку"
                       class="button form-standart__sumbit _big"/>
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
				initContactModal(); // переинициализация форм. @todo в дальнейшем необходим плотный рефакторинг форм
            }, 100);
        });
    </script>

</div>

