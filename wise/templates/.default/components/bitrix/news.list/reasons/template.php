<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
$isAjaxRequest = $arResult['CUSTOM_AJAX_MODE'] == 'Y' && $arResult['AJAX'] ? true : false;
?>
<div class="c-prices__actual-relizes clear <?= $arParams['ADDITIONAL_CSS_CLASS'] ?><?if($arResult['CUSTOM_AJAX_MODE'] == 'Y'):?>js-lazy-load<?endif;?> <?= $arParams["CSS_WRAPPER_MODIFIER"] ?>" data-ajax--params-hash="<?=$arResult['PARAMS_HASH']?>">

    <?if (($isAjaxRequest && ($arResult['CUSTOM_AJAX_MODE'] == 'Y'))||($arResult['CUSTOM_AJAX_MODE'] == 'N')) {?>
    <!--reasons-list-ajax-stack-->
    <div class="content-center">
        <!--<h1>NEW BLOCK!</h1>-->
        <? $title = ($arParams["BLOCK_TITLE"]) ? $arParams["BLOCK_TITLE"] : "Почему с нами выгодно работать" ?>
        <? $h_class = ($arParams["BLOCK_TITLE"]) ? "h2" : "h1" ?>
        <h2 class="actual-relizes__title <?= $h_class ?>"><?= $title ?></h2>
        <div class="iconic-list _iconic-profit clear">
            <ul class="iconic-list__list">
                <? foreach ($arResult["ITEMS"] as $arItem): ?>
                    <?
                    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'],
                        CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'],
                        CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"),
                        array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                    ?>

                    <li class="iconic-list__item">
                        <img
                            src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>"
                            border="0"
                            width="<?= $arItem["PREVIEW_PICTURE"]["WIDTH"] ?>"
                            height="<?= $arItem["PREVIEW_PICTURE"]["HEIGHT"] ?>"
                            alt="<?= $arItem["PREVIEW_PICTURE"]["ALT"] ?>"
                            title="<?= $arItem["PREVIEW_PICTURE"]["TITLE"] ?>"
                            class="iconic-list__img"/>
                        <div class="iconic-list__caption">
                            <? echo $arItem["NAME"] ?>
                        </div>
                        <div class="iconic-list__description">
                            <? echo $arItem["PREVIEW_TEXT"]; ?>
                        </div>
                    </li>

                <? endforeach; ?>
            </ul>
        </div>
        <? if ($arParams["SHOW_RECALL_BLOCK"]): ?>
            <div class="c-advantages-plate__offer is-phone-contain">
                <div class="c-advantages-plate__offer-text">Не&nbsp;нашли подходящий<br/>тарифный план?</div>
                <div class="c-advantages-plate__offer-button"><a
						onclick="setCallbackFormSource('Блок Ваши выгоды при обращении к нам')"
						href="#callback-new" class="button pupop">Да,
                        перезвоните мне!</a></div>
                <div class="c-advantages-plate__phone-offer">или позвоните по телефону <span
                        class="c-advantages-plate__phone-number"><?
                        $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
                            "AREA_FILE_SHOW" => "file",
                            "PATH"           => SITE_DIR . '/local/include/phone_link.php'
                        ));
                        ?></span></div>
            </div>
        <? endif ?>
    </div>
	<? // выполнение скрипта шаблона при lazy загрузке ?>
    <script type="text/javascript" src="<?= $templateFolder ?>/script.js"></script>
    <!--reasons-list-ajax-stack-->
    <? }?>
</div>
