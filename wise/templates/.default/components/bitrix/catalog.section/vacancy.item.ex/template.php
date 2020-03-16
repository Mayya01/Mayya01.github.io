<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
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
<? if (count($arResult['ITEMS'])) { ?>
    <div class="wa-blog-widget sm-hide">

        <? foreach ($arResult['ITEMS'] as $aItem) { ?>
            <!-- начало блока wa-vacancy-plate -->
            <div class="wa-vacancy-plate">
                <div class="wa-vacancy-plate__title">
                    <a href="<?= $aItem['DETAIL_PAGE_URL'] ?>"
                       class="underlined-link underlined-link--small"
                       title="<?= $aItem['NAME'] ?>"><?= $aItem['NAME'] ?></a>
                </div>
                <div class="wa-vacancy-plate__text">
                    <p><?= $aItem['PREVIEW_TEXT'] ?></p>
                </div>
                <div class="wa-vacancy-plate__bottom-link">
                    <a href="/karera/vakansii/" title="Все вакансии"
                       class="underlined-link underlined-link--red">Все
                        вакансии</a>
                </div>
            </div>
            <!-- конец блока wa-vacancy-plate -->
        <? } ?>
    </div>
<? } ?>