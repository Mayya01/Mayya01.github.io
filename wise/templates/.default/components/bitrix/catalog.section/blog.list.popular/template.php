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
    <div class="wa-blog-similar">
        <div class="layout-center-wrapper">
            <div class="content-col clearfix">
                <div class="wa-blog-similar__title module-h1">
                    Популярные статьи
                </div>

                <? foreach ($arResult['ITEMS'] AS $arItem) { ?>
                    <!-- начало блока wa-blog-list-item -->
                    <div
                        class="wa-blog-list-item clearfix wa-blog-list-item--similar">
                        <div class="wa-blog-list-item__image">
                            <a href="<?=$arItem['DETAIL_PAGE_URL']?>"
                               title="<?=$arItem['NAME']?>">
                                <img
                                    src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>"
                                    alt="<?=$arItem['NAME']?>">
                            </a>
                        </div>
                        <div class="wa-blog-list-item__content">
                            <div class="wa-blog-list-item__category">
                                <? foreach ($arItem['Section'] AS $aSection) {?>
                                    <a href="<?=$aSection['SECTION_PAGE_URL']?>" title="<?=$aSection['NAME']?>" class="black-link"><?=$aSection['NAME']?></a>
                                <? } ?>
                            </div>
                            <div class="wa-blog-list-item__link">
                                <a href="<?=$arItem['DETAIL_PAGE_URL']?>"
                                   class="underlined-link underlined-link--small"
                                   title="<?=$arItem['NAME']?>"><?=$arItem['NAME']?></a>
                            </div>
                            <div class="wa-blog-list-item-tags clearfix">
                                <? foreach ($arItem['Label'] AS $aLabel) {?>
                                    <div class="wa-blog-list-item-tags__item">
                                        <a href="<?=$aLabel['URL']?>" class="label label--white" title="<?=$aLabel['NAME']?>"><?=$aLabel['NAME']?></a>
                                    </div>
                                <? } ?>
                            </div>
                        </div>
                    </div>
                    <!-- конец блока wa-blog-list-item -->
                <? } ?>
            </div>
        </div>
    </div>
<? } ?>

