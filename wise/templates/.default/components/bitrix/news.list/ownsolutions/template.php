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
<!-- Начало блока: Решения -->
<div class="c-prices__solutions clear">
    <div class="content-center">
        <div class="h2">Собственные тиражные решения</div>
        <div class="solutions-list">
    	<?foreach($arResult["ITEMS"] as $arItem):?>
            <div class="solution clear">
                <div class="solution__thumb"><img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>"/></div>
                <div class="solution__content clear">
                    <div class="solution__title"><a href="<?=$arItem["PROPERTIES"]['headlink']['VALUE']?>"><?=$arItem['NAME']?></a></div>
                    <div class="solution__text"><?=$arItem['PREVIEW_TEXT']?></div>
                    <div class="solution__modules">

                	<?foreach($arItem["PROPERTIES"]["price"]['props'] as $prop):?>
                		
                        <div class="module">
                            <div class="first"><?=$prop['UF_NAME']?></div>
                            <div class="t"></div>
                            <div class="price">
                                <span><?=$prop['UF_PRICE']?></span>
                                <a target="_blank" href="<?=$prop['UF_LINK']?>"><?= ($arItem['CODE'] == 'zashchita-konfiguratsiy' || $arItem['CODE'] == 'finansist') ? 'Стоимость' : 'Калькулятор' ?></a>
                            </div>
                        </div>
                    <?endforeach;?>

                    </div>
                    <div class="solution__more">Подробнее на <a target="_blank" href="http://<?=$arItem["PROPERTIES"]['link']['VALUE']?>" target="_blank" rel="nofollow"><?=$arItem["PROPERTIES"]['link']['VALUE']?></a></div>
                </div>
            </div>
		<?endforeach;?>
        </div>
    </div>
</div>
<!-- Начало блока: Решения-->
