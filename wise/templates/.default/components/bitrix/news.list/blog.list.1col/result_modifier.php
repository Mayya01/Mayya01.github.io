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

// сортируем по нашему свойству
if (!empty($arParams['SORT_BY_CUSTOM_SORT'])) {
	
	$arDummy = array_fill(1, count($arParams['SORT_BY_CUSTOM_SORT']), []);
	foreach ($arResult['ITEMS'] as $arItem) {
		if (isset($arParams['SORT_BY_CUSTOM_SORT'][ $arItem['ID'] ])) {
			$arDummy[$arParams['SORT_BY_CUSTOM_SORT'][ $arItem['ID']]] = $arItem;
		}
	}
	$arResult['ITEMS'] = $arDummy;
}

$arBlogElements = new BlogList($arResult['ITEMS']);
$arResult['ITEMS'] = $arBlogElements->getYouTubeVideoId()->truncatePreviewText((int)$arParams['PREVIEW_TRUNCATE_LEN'])->getElements();
$arResult['SECTION_NAME'] = BlogHelper::getSectionName($arParams['SECTION']);
$arResult['PATH_TO_LIST_LINK_TEXT'] = BlogHelper::getPathToListLinkText1CPage($arParams['SECTION']);
