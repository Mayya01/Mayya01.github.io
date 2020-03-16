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
if (count($arResult['ITEMS'])) {?>
	<section class="hr-specialist js-slider-career">
		<div class="layout-center-wrapper">
			<div class="content-col">
				<h2 class="hr-specialist__h2 module-h2">Будем рады знакомству</h2>

				<div class="js-slider-career-bx">
                    <? foreach($arResult['ITEMS'] as $aItem) {
                    ?>
                        <div class="hr-specialist-block clearfix">
                            <div class="hr-specialist-block__left">
                                <img src="<?=$aItem['PREVIEW_PICTURE']['SRC']?>" alt="">
                            </div>
                            <div class="hr-specialist-block__right">
                                <blockquote>
                                    <?=$aItem['~PREVIEW_TEXT']?>
                                </blockquote>

                                <div class="hr-specialist-block__info hr-specialist-block__info--name"><?=$aItem['NAME']?></div>
                                <? if (isset($aItem['PROPERTIES']['HR_POSITION']['VALUE']) && !empty($aItem['PROPERTIES']['HR_POSITION']['VALUE'])) { ?>
                                    <div class="hr-specialist-block__info hr-specialist-block__info--pro"><?=$aItem['PROPERTIES']['HR_POSITION']['VALUE']?></div>
                                <? } ?>
                                <? if (isset($aItem['PROPERTIES']['HR_PHONE']['VALUE']) && !empty($aItem['PROPERTIES']['HR_PHONE']['VALUE'])) { ?>
                                    <div class="hr-specialist-block__info hr-specialist-block__info--phone"><?=$aItem['PROPERTIES']['HR_PHONE']['VALUE']?></div>
                                <? } ?>
                                <? if (isset($aItem['PROPERTIES']['HR_MOBILE']['VALUE']) && !empty($aItem['PROPERTIES']['HR_MOBILE']['VALUE'])) { ?>
                                    <div class="hr-specialist-block__info hr-specialist-block__info--phone"><?=$aItem['PROPERTIES']['HR_MOBILE']['VALUE']?></div>
                                <? } ?>
                                <? if (isset($aItem['PROPERTIES']['HR_EMAIL']['VALUE']) && !empty($aItem['PROPERTIES']['HR_EMAIL']['VALUE'])) { ?>
                                    <a href = "mailto:<?=$aItem['PROPERTIES']['HR_EMAIL']['VALUE']?>" title = "" class="hr-specialist-block__info hr-specialist-block__info--email underlined-link black-link" ><?=$aItem['PROPERTIES']['HR_EMAIL']['VALUE']?></a >
                                <? } ?>
                                <div class="hr-specialist-block-vcard">
                                    <? if (count($aItem['PROPERTIES']['HR_SOCIAL']['VALUE'])) { ?>
                                        <? foreach ($aItem['PROPERTIES']['HR_SOCIAL']['VALUE'] as $iKey => $sLink) {?>
                                        <a href="<?=$sLink?>" title="" target="_blank" class="hr-specialist-block-vcard__link hr-specialist-block-vcard__link--<?=$aItem['PROPERTIES']['HR_SOCIAL']['DESCRIPTION'][$iKey]?>"><?=$aItem['PROPERTIES']['HR_SOCIAL']['DESCRIPTION'][$iKey]?></a>
                                        <? } ?>
                                    <? } ?>
                                </div>
                            </div>
                        </div>
                    <? } ?>
				</div>

				<div class="slider-service-main__nav slider-service-main-nav js-nav">
					<div class="slider-service-main-nav__holder">
						<a href="javascript:void(0);" class="slider-clients-nav__btn slider-clients-nav__btn--prev slider-career-nav__btn js-slider-career-bx-prev">
							prev
						</a>
						<a href="javascript:void(0);" class="slider-clients-nav__btn slider-clients-nav__btn--next slider-career-nav__btn js-slider-career-bx-next">
							next
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
<? } ?>
