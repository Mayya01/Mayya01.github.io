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
<? if ($arResult['SECTIONS']) { ?>
    <ul class="wa-vacancies__category-list js-slide-toggle">
    <? foreach ($arResult['SECTIONS'] AS $aSection) {?>

        <? if (count($aSection['ITEMS'])) {?>
        <li class="wa-vacancies__category">
            <span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn"><?=$aSection['NAME']?></span><span class="wa-vacancies__category-label"><span class="wa-vacancies__category-label-num"><?=count($aSection['ITEMS'])?></span></span>

            <ul class="wa-vacancies__list js-slide-toggle__target">
                <? foreach ($aSection['ITEMS'] AS $aItem) {?>
                <li class="wa-vacancies__item clearfix">
                    <a href="<?=$aItem['DETAIL_PAGE_URL']?>" class="underlined-link underlined-link--small">
                    <div class="wa-vacancies__item-title">
                        <span class="underlined-link--small" href="<?=$aItem['DETAIL_PAGE_URL']?>"><?=$aItem['NAME']?></span><br>
                        <date class="wa-vacancies__item-date"><?=dateHumanitized($aItem['ACTIVE_FROM'])?></date>
                    </div>

<? /* Отключен вывод оклада
 <div class="wa-vacancies__item-salary"><?=$aItem['PROPERTIES']['PAYMENT']['~VALUE']?></div>
 */?>
                    <div class="wa-vacancies__item-location"><?=$aItem['PROPERTIES']['ADRESS']['~VALUE']?></div>
                    </a>
                </li>
                <? } ?>
            </ul>
        </li>
        <? } ?>
    <? } ?>
    </ul>
<? } ?>
