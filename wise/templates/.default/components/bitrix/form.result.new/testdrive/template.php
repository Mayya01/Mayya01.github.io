<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> js-testdrive-form" id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

    <? if ($arResult["FORM_NOTE"] != ""): ?>
        <div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
    <? endif; ?>

    <? if ($arResult["isFormNote"] != "Y") : ?>
        <?= $arResult["FORM_HEADER"] ?>
        <input type="hidden" name="ajax" value="1"/>
        <input class="js-testdrive-ajax-path" type="hidden" value="<?= $templateFolder ?>/ajax.php"/>
        <input class="js-testdrive-ajax-delete-path" type="hidden" value="<?= $templateFolder ?>/delete.php"/>
        <input type="hidden" name="action" value="formsubmit"/>
        <input type="hidden" name="confirm" value="1"/>
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
            <? if ($arQuestion["CODE"] == "TESTDRIVE_NO_DETAILS"): ?>
                <div class="form-standart__delimiter"></div>
                <div class="form-standart__field">
                    <div class="form-standart__item">
                        <div class="form-standart__inputs _left _white-checkbox _checkbox-wrapper">
                            <?= $arQuestion["HTML_CODE"] ?>
                            <div class="form-standart__error">Неверно заполнено имя</div>
                            <div class="form-standart__none">Заполнение имени обязательно</div>
                        </div>
                    </div>
                </div>
                <?= "<div class='form-standart__toogler _show'>" ?>

            <? elseif ($arQuestion["CODE"] == "FORM_PAGE"): ?>
                <input type="hidden" class="js-form-page"
                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                       value="<?= $APPLICATION->GetCurPage() ?>"/>
            <? elseif ($arQuestion["CODE"] == "TESTDRIVE_PROGRAMM"): ?>
                <div class="js-testdriveform-programm">
                    <?= $arQuestion["HTML_CODE"] ?>
                </div>
                <div class="form-standart__field">
                    <div class="form-standart__item">
                        <div class="form-standart__inputs _left _full-width-select">
                            <b class="form-standart__inputs-title">Выберите программу 1С</b>
                            <div class="form-standart__inputs-select js-testdriveform-programm-select-wrapper"
                                 style="margin-bottom:0">
                                <select class="js-testdriveform-programm-select select2">
                                    <? foreach ($arResult["PROPGRAMM_SECTIONS"] as $programm): ?>
                                        <option value="<?= $programm ?>"><?= $programm ?></option>
                                    <? endforeach ?>
                                </select>
                            </div>
                            <? /*<a href="" class="form-standart__inputs-add-select js-testdriveform-add-select">
                                <span>Добавить ещё программу</span>
                            </a> */ ?>
                        </div>
                    </div>
                </div>

            <? elseif ($arQuestion["CODE"] == "TESTDRIVE_FILE"): ?>
                <div class="js-testdrive-file form-standart__file">
                    <span>Прикрепить файлы</span>
                    <div class="form-standart__file-wrap">
                        <input type="file" class="js-testdrive-file-input" name="TEST_DRIVE_FILE_TOUPLOAD[]" multiple/>
                    </div>
                    <div style="display: none;"><?= $arQuestion["HTML_CODE"] ?></div>

                    <div class="form-standart__file-error js-testdrive-file-error">

                    </div>
                    <div class="form-standart__file-uploaded js-testdrive-file-uploaded"
                         <? if (count($_SESSION["TEST_DRIVE_FILES"])): ?>style="display: block"<? endif ?>>
                        <div class="form-standart__file-title">
                            Прикреплены:
                        </div>
                        <div class="form-standart__file-list js-testdrive-file-list">
                            <? if (count($_SESSION["TEST_DRIVE_FILES"])): ?>
                                <? foreach ($_SESSION["TEST_DRIVE_FILES"] as $arFile): ?>
                                    <span><i><?= $arFile["FILE_STR"] ?></i>
                                        <a href="" data-id="<?= $arFile["ID"] ?>"
                                           class="form-standart__file-delete js-testdrive-file-delete">×</a></span>
                                <? endforeach ?>
                            <? endif ?>
                        </div>
                    </div>
                </div>
            <? elseif ($arQuestion["STRUCTURE"][0]["FIELD_TYPE"] == "file"): ?>
                <div style="display: none;"><?= $arQuestion["HTML_CODE"] ?></div>
            <? elseif ($arQuestion["STRUCTURE"][0]["FIELD_TYPE"] == "textarea"): ?>
                <div class="form-standart__field">
                    <div class="form-standart__item">

                        <div class="form-standart__inputs _left _small-textarea">
                            <b class="form-standart__inputs-title"><?= $arQuestion["CAPTION"] ?></b>
                            <?= $arQuestion["HTML_CODE"] ?>
                            <div class="form-standart__error">Неверно заполнено поле</div>
                            <div class="form-standart__none">Заполнение поля обязательно</div>
                        </div>
                    </div>
                </div>

            <? else: ?>
                <div class="form-standart__field">
                    <div class="form-standart__item">
                        <div class="form-standart__item-caption">
                            <?= $arQuestion["CAPTION"] ?>
                            <? if ($arQuestion["REQUIRED"] == "Y"): ?><span>*</span><? endif ?>
                        </div>
                    </div>
                    <div class="form-standart__item">
                        <div class="form-standart__inputs">
                            <?= $arQuestion["HTML_CODE"] ?>
                            <div class="form-standart__error">Неверно заполнено поле</div>
                            <div class="form-standart__none">Заполнение поля обязательно</div>
                        </div>
                    </div>
                </div>
            <? endif ?>
        <? endforeach; ?>
        <?//= "</div>" ?>
        <div class="form-standart__fields-list">
            <div class="contact-modal__submit-holder">
                <input type="submit" name="web_form_submit" value="Отправить заявку" class="button form-standart__sumbit _big"/>
            </div>
            <div class="contact-modal__field">
                <div class="contact-modal__item">
                    <div class="contact-modal__inputs">
                        <label>
                            <input type="checkbox" class="icheck" id="testdrive-privicy" checked data-necessary="data-necessary">
                            <span>
            <label for="testdrive-privicy" class="pinfo-notice"><a href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf" class="default-link" target="_blank">Соглашаюсь на обработку персональных данных</a></label>
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
            }, 100);
        });
    </script>

</div>

