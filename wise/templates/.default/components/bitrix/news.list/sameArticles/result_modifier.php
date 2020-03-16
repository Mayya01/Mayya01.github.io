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


/**
 * Сресайзим фотки для списка
 */
foreach ($arResult['ITEMS'] as $key => $arItem) {
	if ((string)$arItem['PREVIEW_TEXT'] !== '') {

		$obParser = new CTextParser;
		$arResult['ITEMS'][$key]['FORMAT_PREVIEW_TEXT'] = $obParser->html_cut($arItem['~PREVIEW_TEXT'], $arParams['PREVIEW_TRUNCATE_LEN']);
	}
}