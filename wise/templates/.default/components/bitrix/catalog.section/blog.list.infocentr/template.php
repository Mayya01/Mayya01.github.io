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
<?
if ($arResult['ITEMS']) {
?>
<? if (!$arResult['AJAX']) { ?>
    <div class="wa-blog-list">
<? } ?>
    <? foreach ($arResult['ITEMS'] as $aItem) {?>
    <!-- начало блока wa-blog-list-item -->
    <div class="wa-blog-list-item wa-blog-list-item--main clearfix">
        <div class="wa-blog-list-item__image">
            <? if (isset($aItem['PREVIEW_PICTURE']['SRC']) && !empty($aItem['PREVIEW_PICTURE']['SRC'])) { ?>
                <a href="<?=$aItem['DETAIL_PAGE_URL']?>" title="<?=$aItem['NAME']?>">
                    <img src="<?=$aItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$aItem['NAME']?>">
                </a>
            <?  }  ?>
        </div>
        <div class="wa-blog-list-item__content">
            <div class="wa-blog-list-item__category">
                <? foreach ($aItem['Section'] as $aSection) {?>
                    <a href="<?=$aSection['SECTION_PAGE_URL']?>" title="<?=$aSection['NAME']?>" class="black-link"><?=$aSection['NAME']?></a>
                <? } ?>
            </div>
            <div class="wa-blog-list-item__link">
                <a href="<?=$aItem['DETAIL_PAGE_URL']?>" class="underlined-link underlined-link--small" title="<?=$aItem['NAME']?>"><?=$aItem['NAME']?></a>
            </div>
            <div class="wa-blog-list-item-tags clearfix">
                <? foreach ($aItem['PROPERTIES']['AUDITORY']['VALUE'] as $iKey => $sLabel) {?>
                    <div class="wa-blog-list-item-tags__item">
                        <a href="<?=EnvironmentHelper::getParam('blogBasePath').'label/'.$aItem['PROPERTIES']['AUDITORY']['VALUE_XML_ID'][$iKey].'/'?>" class="label" title="<?=$sLabel?>"><?=$sLabel?></a>
                    </div>
                <? } ?>
            </div>
        </div>
    </div>
    <? } ?>
    <!-- конец блока wa-blog-list-item -->
    <!-- конец скрытых блоков -->
    <? if (!$arResult['AJAX']) { ?>
        </div>
    <? } ?>
    <input type="hidden" class="js-blog-ajax-key" value="<?= $arResult['PARAMS_HASH'] ?>">
    <input type="hidden" data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
           data-page-total="<?= $arResult['NAV_RESULT']->NavPageCount ?>"
           data-page="<?= $arResult['NAV_RESULT']->NavPageNomer + 1 ?>" class="js-blog-pager-data-container">
    <? if (!$arResult['AJAX']) { ?>
        <? if ($arParams['SHOW_MORE_BUTTON'] != 'N' && $arResult['NAV_RESULT']->NavRecordCount > EnvironmentHelper::getParam('maxBlogItemsInfocenter')) { ?>
            <div class='content-col text-center clearfix'>
                <button type='button' class='btn btn--red btn--with-border js-show-all-blog-list-btn btn--show-more'>
                    <i class='fa js-show-more-icon'></i>
                    <span>Показать ещё</span>
                </button>
            </div>
        <? } ?>
    <? } ?>
<? } ?>