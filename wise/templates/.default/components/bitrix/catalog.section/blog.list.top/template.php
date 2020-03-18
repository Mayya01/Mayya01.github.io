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
<? if ($arResult['ITEMS']) { ?>
    <? foreach ($arResult['ITEMS'] AS $arItem) { ?>

        <!-- начало блока wa-blog-better-item -->
        <div class="wa-blog-better-item">
            <div class="wa-blog-better-item__top clearfix">
                <div class="wa-blog-better-item__img">
                    <img src="<?=$arItem['PROPERTIES']['PublishLogoFile']['SRC'] ?>"
                         alt="Опубликовано на <?=$arItem['PROPERTIES']['PUBLISHED_AT']['VALUE']?>">
                </div>
                <div class="wa-blog-better-item__published">Опубликовано на
                    <?=$arItem['PROPERTIES']['PUBLISHED_AT']['VALUE']?>
                </div>
            </div>
            <div class="wa-blog-better-item__link">
                <a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="underlined-link underlined-link--small"
                   title="<?=$arItem['NAME']?>"><?=$arItem['NAME']?></a>
            </div>
        </div>
        <!-- конец блока wa-blog-better-item -->
    <? } ?>
<? } ?>
