<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> js-needupdate-form js-typical-form"
     id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

    <? if ($arResult["FORM_NOTE"] != ""): ?>
        <div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
    <? endif; ?>

    <? if ($arResult["isFormNote"] != "Y") : ?>
        <?= $arResult["FORM_HEADER"] ?>
        <input type="hidden" name="ajax" value="1"/>
        <input class="js-needupdate-ajax-path" type="hidden" value="<?= $templateFolder ?>/ajax.php"/>
        <input class="js-needupdate-ajax-delete-path" type="hidden" value="<?= $templateFolder ?>/delete.php"/>
        <input type="hidden" name="action" value="formsubmit"/>
        <input type="hidden" name="confirm" value="1"/>
        <input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
        <input type="hidden" data-fieldtype="formName" value="Setting"/>
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
            <?elseif ($arQuestion["CODE"] == "TESTDRIVE_NO_DETAILS"): ?>
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

                <?= "<div class='form-standart__toogler _show contact-modal__calc-data'>" ?>

            <? elseif ($arQuestion["CODE"] == "FORM_PAGE"): ?>
                <input type="hidden" class="js-form-page"
                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                       value="<?= $APPLICATION->GetCurPage() ?>"/>

            <? elseif ($arQuestion["CODE"] == "TESTDRIVE_PROGRAMM"): ?>
                <div class="js-typicalform-programm" style="display: none">
                    <?= $arQuestion["HTML_CODE"] ?>
                </div>
                <div class="contact-modal__field _lined">
                    <div class="contact-modal__label">Программа 1С</div>

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
            <? elseif ($arQuestion["CODE"] == "FORM_TESTDRIVE_CUSTOM_LEVEL"): ?>
                <div class="js-needupdateform-custom">
                    <?= $arQuestion["HTML_CODE"] ?>
                </div>
                <div class="contact-modal__field _lined">
                    <div class="contact-modal__label">Степень кастомизации</div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">
                            <div class="form-standart__inputs-select">
                                <select class="js-needupdateform-custom-select select2" data-fieldtype="tocomment"
                                        data-fieldlabel="Степень катомизации">
                                    <option value="Типовая">Типовая</option>
                                    <option value="С незначительными доработками (обновляется регулярно)">С
                                        незначительными доработками (обновляется регулярно)
                                    </option>
                                    <option value="Со значительными доработками (обновляется редко или «точечно»)">Со
                                        значительными доработками (обновляется редко или «точечно»)
                                    </option>
                                    <option value="Не типовая (не может обновляться)">Не типовая (не может
                                        обновляться)
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            <? elseif ($arQuestion["CODE"] == "NEEDUPDATE_FILE"): ?>
                <? /* <div class="js-needupdate-file form-standart__file">
                    <span>Прикрепить файлы</span>
                    <div class="form-standart__file-wrap">
                        <input type="file" class="js-needupdate-file-input" name="NEED_UPDATE_FILE_TOUPLOAD[]"
                               multiple/>
                    </div>
                    <div style="display: none;"><?= $arQuestion["HTML_CODE"] ?></div>

                    <div class="form-standart__file-error js-needupdate-file-error">

                    </div>
                    <div class="form-standart__file-uploaded js-needupdate-file-uploaded"
                         <? if (!empty($_SESSION["NEED_UPDATE_FILES"])): ?>style="display: block"<? endif ?>>
                        <div class="form-standart__file-title">
                            Прикреплены:
                        </div>
                        <div class="form-standart__file-list js-needupdate-file-list">
                            <? if (count($_SESSION["NEED_UPDATE_FILES"])): ?>
                                <? foreach ($_SESSION["NEED_UPDATE_FILES"] as $arFile): ?>
                                    <span ><i><?=$arFile["FILE_STR"]?></i>
                                        <a data-id="<?=$arFile["ID"]?>" href="" class="form-standart__file-delete js-needupdate-file-delete">×</a></span>
                                <? endforeach ?>
                            <? endif ?>
                        </div>
                    </div>
                </div> */ ?>
            <? elseif ($arQuestion["STRUCTURE"][0]["FIELD_TYPE"] == "file"): ?>
                <div style="display: none;"><?= $arQuestion["HTML_CODE"] ?></div>
            <? elseif ($arQuestion["STRUCTURE"][0]["FIELD_TYPE"] == "textarea"): ?>
                <div class="contact-modal__field _lined">
                    <div class="contact-modal__label">
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

            <? elseif ($arQuestion["CODE"] == "FORM_TESTDRIVE_CONFIG"): ?>
                <?= '<div class="contact-modal__cols">' ?>
                <div class="contact-modal__field _lined _half">
                    <div class="contact-modal__label"><?= $arQuestion["CAPTION"] ?></div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">
                            <?= $arQuestion["HTML_CODE"] ?>
                        </div>
                    </div>
                </div>


            <? elseif ($arQuestion["CODE"] == "FORM_TESTDRIVE_RELEASE"): ?>
                <div class="contact-modal__field _lined _half">
                    <div class="contact-modal__label"><?= $arQuestion["CAPTION"] ?></div>
                    <div class="contact-modal__item">
                        <div class="contact-modal__inputs">
                            <?= $arQuestion["HTML_CODE"] ?>
                        </div>
                    </div>
                </div>
                <?= '</div>' ?>
            <? elseif ($arQuestion["CODE"] == "FORM_TESTDRIVE_NAME" || $arQuestion["CODE"] == "FORM_TESTDRIVE_PHONE" || $arQuestion["CODE"] == "FORM_TESTDRIVE_EMAIL"): ?>
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
            <? endif ?>
        <? endforeach; ?>
        <?//= "</div>" ?>
	
		<? showAcceptCheckbox('setting', 'Заказать <span class="hide-up-to-md">обновление</span>',null,null,null,'button'); ?>
    
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

