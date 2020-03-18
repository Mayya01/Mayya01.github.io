<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (empty($arResult))
	return;

foreach ($arResult['ITEMS'] as &$arItem) {

	if (is_array($arItem['PREVIEW_PICTURE'])) {

		$ratio = $arItem['PREVIEW_PICTURE']['RATIO'] = round($arItem['PREVIEW_PICTURE']['WIDTH']/$arItem['PREVIEW_PICTURE']['HEIGHT'],2);

		if($ratio > 1.4) {
			$arItem['WIDE'] = true;
			$arItem['BANNER'] = CFile::ResizeImageGet($arItem['PREVIEW_PICTURE'], array('width' => '766', 'height' => '350'), BX_RESIZE_IMAGE_PROPORTIONAL, true);
		} else {
			$arItem['WIDE'] = false;
			$arItem['BANNER'] = CFile::ResizeImageGet($arItem['PREVIEW_PICTURE'], array('width' => '382', 'height' => '350'), BX_RESIZE_IMAGE_PROPORTIONAL, true);
		}

		if(isset($arItem['PROPERTIES']['EXT_URL']['VALUE'])) {
			$arItem['LINK'] = $arItem['PROPERTIES']['EXT_URL']['VALUE'];
		}

	} else
		continue;

};
