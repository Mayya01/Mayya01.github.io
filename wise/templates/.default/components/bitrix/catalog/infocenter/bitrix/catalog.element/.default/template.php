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
<section class="wa-news-detail text-container content-row">
    <div class="layout-center-wrapper">
        <div class="content-col">
            <time class="wa-news-detail__date" datetime="<?=date('Y-m-d',MakeTimeStamp($arResult['ACTIVE_FROM']))?>"><?=dateHumanitized($arResult['ACTIVE_FROM'], 'd F Y')?></time>

            <h1 class="wa-news-detail__h1 module-h1"><?=$arResult['NAME']?></h1>

            <?
            if (isset($arResult['DETAIL_PICTURE']['SRC']) && !empty($arResult['DETAIL_PICTURE']['SRC'])) { ?>
                <img class="text-img text-img--right" src="<?=$arResult['DETAIL_PICTURE']['SRC']?>" alt="<?=$arResult['NAME']?>">
            <? } ?>

            <?=$arResult['DETAIL_TEXT']?>

            <div class="wa-blog-entry-links clearfix">
                <? if (count($arResult['BeforeElements'])) { ?>
                <div class="wa-blog-entry-links__item wa-blog-entry-links__item--left">
                    <a href="<?=$arResult['BeforeElements'][0]['DETAIL_PAGE_URL']?>" title="<?=$arResult['BeforeElements'][0]['NAME']?>" class="underlined-link underlined-link--red">Предыдущая статья</a>
                </div>
                <? } ?>
                <? if (count($arResult['AfterElements'])) { ?>
                <div class="wa-blog-entry-links__item wa-blog-entry-links__item--right">
                    <a href="<?=$arResult['AfterElements'][0]['DETAIL_PAGE_URL']?>" title="<?=$arResult['AfterElements'][0]['NAME']?>" class="underlined-link underlined-link--red">Следующая статья</a>
                </div>
                <? } ?>
            </div>
        </div>
    </div>
</section>
<? if (isset($arResult['Company']) && !empty($arResult['Company'])) { ?>
<aside class="wa-service-preview text-container">
    <div class="layout-center-wrapper clearfix">
        <div class="content-col">
            <div class="wa-service-preview__company">
                <div class="wa-service-preview__logo wa-service-preview__logo--gardium">
                    <img src="<?=$arResult['Company']['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arResult['Company']['NAME']?>">
                </div>

                <? if (count($arResult['Company']['PROPERTY_ADVANTAGES_VALUE'])) {?>
                    <div class="wa-service-preview__features">
                        <ul>
                            <? foreach ($arResult['Company']['PROPERTY_ADVANTAGES_VALUE'] AS $sAdvantage) {?>
                                <li><?=$sAdvantage?></li>
                            <? } ?>
                        </ul>
                    </div>
                <? } ?>
            </div>

            <div class="wa-service-preview__description">
                <h2 class="wa-service-preview__h2 module-h2"><?=$arResult['Company']['PROPERTY_TYPE_NAME_VALUE']?></h2>
                <?=$arResult['Company']['PREVIEW_TEXT']?>
                <p>Подробнее об&nbsp;услугах: <a class="underlined-link underlined-link--small underlined-link--red" target="_blank" href="<?=$arResult['Company']['PROPERTY_SITE_URL_VALUE']?>"><?=str_replace('http://','',$arResult['Company']['PROPERTY_SITE_URL_VALUE'])?></a></p>
            </div>
        </div>
    </div>
</aside>
<? } ?>