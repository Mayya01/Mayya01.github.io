<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
<!-- noindex -->
<div class="c-about__partners">
	<div class="content-center">
		<div class="partners__title h1">С нами уже работают</div>
		<ul class="partners clear">
		<?foreach($arResult["ITEMS"] as $arItem):?>
			<li class="partners__item hide"><img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" title="" alt=""></li>
		<?endforeach;?>
		</ul>
		<div class="loader"><span>Показать еще 8 проектов</span></div>
	</div>
</div>
<!--/ noindex -->