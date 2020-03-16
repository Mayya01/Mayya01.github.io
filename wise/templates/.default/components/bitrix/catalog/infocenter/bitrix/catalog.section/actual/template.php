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
<ul class="wa-news__list">
    <input type="hidden" class="js-actual-ajax-key"
           value="<?= $arResult['PARAMS_HASH'] ?>">
    <? } ?>
    <? foreach ($arResult['ITEMS'] AS $aItem) { ?>
        <li class="wa-news__item wa-news__item--is-hidden js-news-item">
            <div class="wa-news__preview">
                <time class="wa-news__preview-date" datetime="<?= date('Y-m-d',
                    MakeTimeStamp($aItem['ACTIVE_FROM'])) ?>"><?= dateHumanitized($aItem['ACTIVE_FROM'],
                        'd F Y') ?></time>

                <a href="<?= $aItem['DETAIL_PAGE_URL'] ?>"
                   class="wa-news__preview-link underlined-link underlined-link--small"><?= $aItem['NAME'] ?></a>
            </div>
        </li>
    <? } ?>
    <? if (!$arResult['AJAX']) { ?>
</ul>
<? } ?>

<? if ($arResult['NAV_RESULT']->bNavStart && $arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount) { ?>
    <input type="hidden" data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
           data-page-total="<?= $arResult['NAV_RESULT']->NavPageCount ?>"
           data-page="<?= $arResult['NAV_RESULT']->NavPageNomer + 1 ?>"
           class="js-pager-data-container-actual">
    <div class="content-col text-center clearfix">
        <button type="button"
                class="wa-news__btn wa-news__btn--lg-hide btn btn--red btn--with-border js-show-actual-news-btn">
            <i class="fa js-show-more-icon"></i>
            <span>Показать ещё</span>
        </button>
    </div>
<? } ?>
