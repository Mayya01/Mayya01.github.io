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
<? if (!$arResult['AJAX']) { ?>
<div class="wa-news__main-list clearfix js-news-list">
    <div class="js-items-container">
        <input type="hidden" class="js-template-name-ajax-key"
               value="<?= $arResult['PARAMS_HASH'] ?>">
        <? } ?>

        <? foreach ($arResult['ITEMS'] AS $aItem) { ?>
            <div
                class="wa-news__main-item wa-news__main-item--is-hidden js-main-news-item <? if ($arResult['AJAX']): ?>template-name-item--ajax<? endif; ?>">
                <div class="wa-news__preview wa-news__preview--blue-bg">
                    <? if (isset($aItem['PREVIEW_PICTURE']['SRC']) && !empty($aItem['PREVIEW_PICTURE']['SRC'])) { ?>
                        <a href="<?= $aItem['DETAIL_PAGE_URL'] ?>"><img
                                class="wa-news__preview-img"
                                src="<?= $aItem['PREVIEW_PICTURE']['SRC'] ?>"
                                alt="<?= $aItem['NAME'] ?>"></a>
                    <? } ?>

                    <time class="wa-news__preview-date"
                          datetime="<?= date('Y-m-d',
                              MakeTimeStamp($aItem['ACTIVE_FROM'])) ?>"><?= dateHumanitized($aItem['ACTIVE_FROM'],
                            'd F Y') ?></time>

                    <a href="<?= $aItem['DETAIL_PAGE_URL'] ?>"
                       class="wa-news__preview-link underlined-link underlined-link--small underlined-link underlined-link--small"><?= $aItem['NAME'] ?></a>
                </div>
            </div>
        <? } ?>
        <? if (!$arResult['AJAX']) { ?>
    </div>
</div>
<? } ?>
<? if ($arResult['NAV_RESULT']->bNavStart && $arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount) { ?>
    <input type="hidden" data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
           data-page-total="<?= $arResult['NAV_RESULT']->NavPageCount ?>"
           data-page="<?= $arResult['NAV_RESULT']->NavPageNomer + 1 ?>"
           class="js-pager-data-container">
    <div class="content-col text-center clearfix" style="display:none;">
        <button type="button"
                class="wa-news__btn wa-news__btn--lg-hide btn btn--red btn--with-border js-show-all-news-btn">
            <i class="fa js-show-more-icon"></i>
            <span>Показать ещё</span>
        </button>
    </div>
<? } ?>

