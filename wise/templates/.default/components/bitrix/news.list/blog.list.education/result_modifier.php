<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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

$arBlogElements = new BlogList($arResult['ITEMS']);

$arResult['ITEMS'] = $arBlogElements->formatTags()->formatDate()->resizePhoto($arParams['SECTION'])->getYouTubeVideoId()->getElements();

$arResult['CURRENT_YEAR'] = BlogHelper::getYear($arResult['ITEMS'][0]['displayYear']);
$arResult['CURRENT_MONTH'] = BlogHelper::getMonth($arResult['ITEMS'][0]['monthNum']);

$arResult['TIMESTAMPS'] = BlogHelper::getArTimeStamps(array(
	'IBLOCK_ID'          => $arParams['IBLOCK_ID'],
	'ACTIVE'             => 'Y',
	'<=DATE_ACTIVE_FROM' => array(false, ConvertTimeStamp(false, "FULL"))
),
	$arResult['CURRENT_YEAR'],
	$arResult['CURRENT_MONTH']
);

$arResult['TIMESTAMPS'] = BlogHelper::formatArTimeStamps($arResult['TIMESTAMPS']);

$arBlogElements->distributeElementsByTimeStamps($arResult['TIMESTAMPS']);

$arResult['AJAX_PAGEN_DATA'] = BlogHelper::getAjaxPaginationData($arResult, $arParams['SECTION']);

$arResult['SECTION_NAME'] = BlogHelper::getSectionName($arParams['SECTION']);