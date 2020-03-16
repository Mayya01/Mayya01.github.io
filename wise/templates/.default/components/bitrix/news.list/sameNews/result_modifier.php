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
foreach ($arResult['ITEMS'] as $key => $arItem){
	if ($arItem['PREVIEW_PICTURE']) {
		$photo = CFile::ResizeImageGet(
			$arItem['PREVIEW_PICTURE']['ID'],
			array('height' => 220, 'width' => 220),
			BX_RESIZE_IMAGE_PROPORTIONAL,
			false
		);

		$arResult['ITEMS'][$key]['DISPLAY_PICTURE'] = $photo['src'];
	}
}