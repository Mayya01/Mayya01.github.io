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
$this->setFrameMode(true);

$arBlogElements = new BlogList($arResult['ITEMS']);

$arResult['ITEMS'] = $arBlogElements
	//->formatTags()
	->formatEventDate()
	->resizePhoto($arParams['SECTION'])
	//->getYouTubeVideoId()
	->getElements();

/*
$arResult['SECTION_NAME'] = BlogHelper::getSectionName($arParams['SECTION']);
*/
