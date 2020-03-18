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
    <? foreach ($arResult['SECTIONS'] AS $aSection) {?>
        <? $aCompanyInfo = $aSection['CompanyInfo']; ?>
        <section class="wa-service-promo js-service-section" data-groups='["all","tagid<?=implode('","tagid',$aSection['UF_SERV_SEC_TAG'])?>"]'>
            <h2 class="wa-service-promo__h2 module-h2"><a href="<?=$aSection['SECTION_PAGE_URL']?>" class="underlined-link "><?=$aSection['UF_SERV_SHORT_NAME']?></a></h2>

            <div class="wa-service-promo__inner clearfix">
                <div class="wa-service-promo__left">
                    <img class="wa-service-promo__logo" src="<?=$aCompanyInfo['PREVIEW_PICTURE']['SRC']?>" alt="<?=$aCompanyInfo['NAME']?>?>">

                    <p><?=$aSection['~UF_SERV_PROVIDED_BY']?></p>
                </div>

                <div class="wa-service-promo__right">
                    <div class="wa-service-promo__links-inner clearfix">
                        <div class="wa-service-promo__center-links text-container">
                            <? if (count($aSection['LeftItems'])) { ?>
                            <ul class="wa-service-promo__links">
                                <? foreach ($aSection['LeftItems'] AS $aItem) {?>
                                <li data-groups='["all","tagid<?=implode('","tagid',$aItem['PROPERTIES']['TAGS']['VALUE'])?>"]'><a class="underlined-link underlined-link--small" href="<?=$aItem['DETAIL_PAGE_URL']?>"><?=$aItem['NAME']?></a></li>
                                <? } ?>
                            </ul>
                            <? } ?>
                        </div>

                        <div class="wa-service-promo__right-links text-container">
                            <? if (count($aSection['RightItems'])) { ?>
                                <ul class="wa-service-promo__links">
                                    <? foreach ($aSection['RightItems'] AS $aItem) {?>
                                        <li data-groups='["all","tagid<?=implode('","tagid',$aItem['PROPERTIES']['TAGS']['VALUE'])?>"]'><a class="underlined-link underlined-link--small" href="<?=$aItem['DETAIL_PAGE_URL']?>"><?=$aItem['NAME']?></a></li>
                                    <? } ?>
                                </ul>
                            <? } ?>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    <? } ?>
<? } ?>
