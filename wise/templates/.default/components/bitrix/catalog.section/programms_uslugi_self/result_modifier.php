<?
foreach ($arResult['ITEMS'] as $key => &$arItem) {
	$arItem['PROPERTIES']["PICTURE_LIST"]["VALUE"] = CFile::GetFileArray($arItem['PROPERTIES']["PICTURE_LIST"]["VALUE"]);
    $arItem['DETAIL_PAGE_URL'] = $arItem["PROPERTIES"]["headlink"]["VALUE"];
	
	if (false === $arItem['PROPERTIES']['PICTURE_LIST'])
		$arItem['PROPERTIES']['PICTURE_LIST'] = array(
			'SRC' => $arCurView['EMPTY_IMG'],
			'ALT' => (
			'' != $arItem['PROPERTIES']['PICTURE_LIST']['VALUE']['DESCRIPTION']
				? $arItem['PROPERTIES']['PICTURE_LIST']['VALUE']['DESCRIPTION']
				: $arItem['PROPERTIES']['NAME_LIST']['VALUE']
			),
			'TITLE' => (
			'' != $arItem['PROPERTIES']['PICTURE_LIST']['VALUE']['DESCRIPTION']
				? $arItem['PROPERTIES']['PICTURE_LIST']['VALUE']['DESCRIPTION']
				: $arItem['PROPERTIES']['NAME_LIST']['VALUE']
			)
		);
}
?>