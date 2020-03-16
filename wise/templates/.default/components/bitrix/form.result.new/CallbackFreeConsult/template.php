<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="contact-modal _outside-of-modal _within-text js-form-wrapper <?= $arParams['FORM_CONTAINER_CLASS'] ?>" id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
    <div class="contact-modal__plate _full-width _pb31">
        <div class="contact-modal__caption">Бесплатная консультация <span class="hide-up-to-sm">эксперта</span></div>
        
        <? if ($arResult["FORM_NOTE"] != ""): ?>
            <div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
        <? endif; ?>
        <? if ($arResult["isFormNote"] != "Y") : ?>
            <?= $arResult["FORM_HEADER"] ?>
            <input type="hidden" name="ajax" value="1"/>
            <input type="hidden" name="action" value="formsubmit"/>
            <input type="hidden" name="confirm" value="1"/>
            <input type="hidden" name="confirm" value="1"/>
            <input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
            <input type="hidden" data-fieldtype="formName" value="CallbackFreeConsult"/>
			<?= $arResult["FORM_AUTOCALL"]["HTML_CODE"] ?>
            
            <? if ($arResult["isFormErrors"] == "Y"): ?>
                <?= $arResult["FORM_ERRORS_TEXT"]; ?>
            <? endif; ?>

            <div class="contact-modal__cols">
                <div class="contact-modal__img">
                    <img src="<?=SITE_TEMPLATE_PATH?>/img/img-free-expert-advice.jpg" alt="Эксперт, который проконсультирует бесплатно по интересующим вопросам">
                </div>
                <div class="contact-modal__col-next-to-img">
                <? foreach ($arResult["VISIBLE_QUESTIONS"] as  $arQuestion): ?>
                    <?if (($arQuestion["CODE"] != "FORM_SOURCE") && ($arQuestion["CODE"] != "FORM_PAGE_SOURCE") && ($arQuestion["CODE"] != "FORM_PAGE") && ($arQuestion["CODE"] != "FORM_AUTOCALL")):?>
                        <div class="contact-modal__field _lined <?= ($arQuestion['CODE'] == 'FORM_EMAIL') ? 'hide-up-to-sm' : '_mb9'?>">
                            <div class="contact-modal__label <?= ($arQuestion['REQUIRED'] == 'Y') ? '_necessary': '' ?>"><?= $arQuestion["CAPTION"] ?></div>
                                <div class="contact-modal__item">
                                <div class="contact-modal__inputs">
                                    <?= $arQuestion["HTML_CODE"] ?>
                                    <div class="contact-modal__error">Неверно заполнено поле</div>
                                    <div class="contact-modal__none">Заполнение поля обязательно</div>
                                </div>
                            </div>
                        </div>
					<? elseif ($arQuestion["CODE"] == "FORM_PAGE_SOURCE"): ?>
                        <div class="js-callback-source">
                            <?= $arQuestion["HTML_CODE"] ?>
                        </div>
					<? elseif($arQuestion["CODE"] == "FORM_PAGE"): ?>
                        <input type="hidden" class="js-form-page"
                               name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                               value="<?= $APPLICATION->GetCurPage() ?>"/>
                    <?endif;?>
                <? endforeach; ?>
                </div>
                <? foreach ($arResult["VISIBLE_QUESTIONS"] as  $arQuestion): ?>
                    <?if($arQuestion["CODE"] == "FORM_SOURCE"): ?>
                        </div>
                        <div class="contact-modal__field _lined _top-line _mb25">
                            <div class="contact-modal__label"><?= $arQuestion["CAPTION"] ?></div>
            
                            <div class="contact-modal__item">
                                <div class="contact-modal__inputs">
                                    <?= $arQuestion["HTML_CODE"] ?>
                                    <div class="contact-modal__error">Неверно заполнено поле</div>
                                    <div class="contact-modal__none">Заполнение поля обязательно</div>
                                </div>
                            </div>
                        </div>
                    <?endif;?>
                <? endforeach; ?>
        
			    <? showAcceptCheckbox('callbackFreeConsult', 'Задать вопрос'); ?>
        
            <?= $arResult["FORM_FOOTER"] ?>
        <? endif; //isFormNote ?>

        <script>
            $(function () {
				gtm_magic_filling('#<?= $arParams['FORM_CONTAINER_ID'] ?>');
				$('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            });
        </script>
    </div>
</div>

<div class="success-message-modal">
    <div class="success-message-modal__caption">Спасибо за Ваше обращение!</div>
    <div class="success-message-modal__text">Специалист 1С свяжется с вами в течение 15 минут.</div>
</div>
