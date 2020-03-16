<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
?>
<div class="c-prices__exclusive-tarifs clear">
    <div class="content-center">
        <div class="exclusive-tarifs__title h2">Эксклюзивные тарифные планы</div>
        <ul class="exclusive-tarifs__list">
        	<?foreach($arResult["ITEMS"] as $arItem):?>
            <li class="exclusive-tarif">
                <div class="exclusive-tarif__body">
                    <div class="exclusive-tarif__title"><?=$arItem["PROPERTIES"]["price"]['props']['UF_NAME']?></div>
                    <div class="exclusive-tarif__text content-area"><?=$arItem["PREVIEW_TEXT"]?></div>
                    <div class="exclusive-tarif__price"><?=$arItem["PROPERTIES"]["price"]['props']['UF_PRICE']?></div>
                    <a class="exclusive-tarif__order button pupop" href="#callback-new"  onclick="setCallbackFormSource('Блок Эксклюзивные тарифы')">Подключиться</a>
                </div>
            </li>
            <?endforeach;?>
        </ul>
    </div>
</div>



