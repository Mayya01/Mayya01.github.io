<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

/**
* Получим массив тегов для вывода в цыкле
*/
foreach ($arResult['ITEMS'] as $key => $arItem) {
	$arResult['ITEMS'][$key]['arTags'] = explode(', ', $arItem['TAGS']);
}

/**
* Проверим строку с id видео на предмет наличия id/ссылки на видео на youtube
*/
foreach ($arResult['ITEMS'] as $key => $arItem) {
	if (substr_count($arItem['PROPERTIES']['VIDEO_ID']['VALUE'] , 'watch?v='))
	{
		$videoID = explode('=', $arItem['PROPERTIES']['VIDEO_ID']['VALUE']);
		$arResult['ITEMS'][$key]['PROPERTIES']['VIDEO_ID']['VALUE'] = $videoID[count($videoID)-1];
	}
}

//echo "<pre>";print_r($arResult);echo "</pre>";