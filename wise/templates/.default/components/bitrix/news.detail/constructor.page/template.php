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
	<section class="section _nopb">
		<div class="content-center">
			<h1 class="c-service-description__caption"><?= $arResult['NAME'] ?></h1>
		</div>
	</section>
<?
$APPLICATION->IncludeComponent(
	"wiseadvice:blocks",
	".default",
	Array(
		"ELEMENT_ID" => $arResult["ID"],
		"IBLOCK_ID" => $arResult["IBLOCK_ID"],
		"PROPERTY_CODE" => "CONSTRUCTOR",
	),
	$component,
	Array(
		"HIDE_ICONS" => "Y"
	)
);
