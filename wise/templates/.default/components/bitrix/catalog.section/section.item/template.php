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


?>
<section class="wa-services-nav">
    <div class="layout-center-wrapper">
        <div class="content-col">
            <h1 class="wa-services-nav__h2 module-h2"><?=$arResult['UF_SERV_SHORT_NAME']?></h1>

            <? if (count($arResult['ITEMS'])) {
                ?><ul class="wa-services-nav__list clearfix js-section-nav"><?
                foreach ($arResult['ITEMS'] AS $aItem) { ?>
                <li>
                    <div class="wa-services-nav__link"><a href="<?=$aItem['DETAIL_PAGE_URL']?>" class="underlined-link js-section-nav__link"><?=$aItem['NAME']?></a></div>
                </li>
                <? }
                ?></ul><?
            }
            ?>
        </div>
    </div>
</section>

<section class="wa-service-preview text-container">
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
</section>

<?$APPLICATION->IncludeComponent(
    'bitrix:main.include',
    '',
    Array(
        'AREA_FILE_SHOW' => 'file',
        'PATH' => SITE_DIR.'/local/include/ru/blocks/leader-appeal/'.$arResult['UF_APPEAL_BY'].'.php',
	'CLASS' => 'leader-appeal--border-bottom'
    )
);?>

<section class="wa-service-features">
    <div class="layout-center-wrapper">
        <div class="content-col">
            <h2 class="wa-service-features__h2 module-h2"><?=$arResult['UF_HEADER_TEXT']?></h2>

            <p class="lead"><?=$arResult['~UF_SUBHEADER_TEXT']?></p>

            <div class="wa-service-features__inner clearfix">
                <?=$arResult['~DESCRIPTION']?>
            </div>
        </div>
    </div>
</section>

<?$APPLICATION->IncludeComponent(
    'bitrix:news.list',
    'slider.clients',
    Array(
        'ACTIVE_DATE_FORMAT' => 'd.m.Y',
        'ADD_SECTIONS_CHAIN' => 'N',
        'CACHE_FILTER' => 'N',
        'CACHE_GROUPS' => 'Y',
        'CACHE_TIME' => '36000000',
        'CACHE_TYPE' => 'A',
        'CHECK_DATES' => 'Y',
        'DETAIL_URL' => '',
        'DISPLAY_BOTTOM_PAGER' => 'N',
        'DISPLAY_DATE' => 'N',
        'DISPLAY_NAME' => 'Y',
        'DISPLAY_PICTURE' => 'Y',
        'DISPLAY_PREVIEW_TEXT' => 'N',
        'DISPLAY_TOP_PAGER' => 'N',
        'FIELD_CODE' => array('NAME', 'PREVIEW_PICTURE', 'DETAIL_PICTURE', ''),
        'HIDE_LINK_WHEN_NO_DETAIL' => 'N',
        'IBLOCK_ID' => EnvironmentHelper::getParam('clientsIBlockId'),
        'IBLOCK_TYPE' => 'company',
        'INCLUDE_IBLOCK_INTO_CHAIN' => 'N',
        'INCLUDE_SUBSECTIONS' => 'Y',
        'NEWS_COUNT' => '9999',
        'PARENT_SECTION' => '',
        'PARENT_SECTION_CODE' => '',
        'PREVIEW_TRUNCATE_LEN' => '',
        'SET_BROWSER_TITLE' => 'N',
        'SET_LAST_MODIFIED' => 'N',
        'SET_META_DESCRIPTION' => 'N',
        'SET_META_KEYWORDS' => 'N',
        'SET_STATUS_404' => 'N',
        'SET_TITLE' => 'N',
        'SHOW_404' => 'N',
        'SORT_BY1' => 'SORT',
        'SORT_BY2' => 'ID',
        'SORT_ORDER1' => 'ASC',
        'SORT_ORDER2' => 'DESC'
    )
);?>


<?$APPLICATION->IncludeComponent(
    'bitrix:main.include',
    '',
    Array(
        'AREA_FILE_SHOW' => 'file',
        'PATH' => SITE_DIR.'/local/include/ru/blocks/learn-more.php',
        'arResult' => $arResult
    )
);?>

<?$APPLICATION->IncludeComponent(
    'bitrix:main.include',
    '',
    Array(
        'AREA_FILE_SHOW' => 'file',
        'PATH' => SITE_DIR.'/local/include/ru/forms/callback-form.php'
    )
);?>