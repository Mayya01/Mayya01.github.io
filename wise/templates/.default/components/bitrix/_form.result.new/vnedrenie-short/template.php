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
                        <input type="text" data-name="username" data-fieldname="SIMPLE_QUESTION_889" name="form_text_22" value="" placeholder="Ваше имя" data-necessary="data-necessary"/>
                        <div class="form-standart__error">Неверно заполнено имя</div>
                        <div class="form-standart__none">Заполнение имени обязательно</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__inputs">
                        <input type="text" data-name="phone" value="" name="form_text_23" data-fieldname="SIMPLE_QUESTION_762" placeholder="Телефон" data-necessary="data-necessary" data-mask="phone"/>
                        <div class="form-standart__none">Пожалуйста, укажите телефон</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__inputs">
                        <input type="text" data-name="email" name="form_text_24"  data-fieldname="SIMPLE_QUESTION_188" value="" placeholder="E-mail" data-mask="email"/>
                        <div class="form-standart__none">Пожалуйста, укажите E-mail</div>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__label">Новая организация</div>
                    <div class="form-standart__inputs">
                        <label class="preorder-block__radio">
                            <input type="radio" data-name="neworganization" value="Да" name="form_text_25" data-fieldname="SIMPLE_QUESTION_381" checked="checked" class="icheck radio-value"/>
                            <div class="preorder-block__checkbox-label">Да</div>
                        </label>
                        <label class="preorder-block__radio">
                            <input type="radio" data-name="neworganization" value="Нет" name="form_text_25" data-fieldname="SIMPLE_QUESTION_381" class="icheck radio-value"/>
                            <div class="preorder-block__checkbox-label">Нет</div>
                        </label>
                    </div>
                    <div class="content-area">
                        <p><b>Стоимость внедрения «под ключ»</b>:</p>
                        <ul>
                            <li>для новой организации — <b>29 900 р.</b></li>
                            <li>для организации с историей — <b>39 900 р.</b></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-standart__field">
                <div class="form-standart__item">
                    <div class="form-standart__inputs">
                        <input type="submit" name="web_form_submit" value="<?=htmlspecialcharsbx(strlen(trim($arResult["arForm"]["BUTTON"])) <= 0 ? GetMessage("FORM_ADD") : $arResult["arForm"]["BUTTON"]);?>" class="button"/>
                    </div>
                </div>
                <div class="footnote"><span class="_star">*</span><span>Данные конфидициальны и не могут быть переданы третьим лицам.</span></div>
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

