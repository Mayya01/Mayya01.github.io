<?
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

?>
