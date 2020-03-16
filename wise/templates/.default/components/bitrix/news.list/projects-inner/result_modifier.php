<?
foreach ($arResult['ITEMS'] as $k => $arItem) {
	if( 'Не выбрано' == $arItem['PROPERTIES']['BASE_PROGRAMM']['VALUE'] || empty( $arItem['PROPERTIES']['BASE_PROGRAMM']['VALUE'])){
		$iCount = count($arItem['PROPERTIES']['cats3']['~VALUE']);
		if ($iCount > 1) {
			$arResult['ITEMS'][$k]['integrateProgram'] = $arItem['PROPERTIES']['cats3']['~VALUE'][rand(0,
				($iCount - 1))];
			$arResult['ITEMS'][$k]['integrateProgram'] .= ' +' . ($iCount - 1) . ' ' . CommonHelper::getNumEnding(($iCount - 1),
					array('программа 1С', 'программы 1С', 'программ 1С'));
		} else {
			$arResult['ITEMS'][$k]['integrateProgram'] = $arItem['PROPERTIES']['cats3']['~VALUE'][0];
		}
	} else {
		// кол-во выбранных значении опшонсы в селекте "На базе программ"
		$count = count($arItem['PROPERTIES']['cats3']['VALUE']);
		if ($count > 1) {
			$str = $arItem['PROPERTIES']['BASE_PROGRAMM']['VALUE'] . ' + ';
			$str .= ($count - 1) . ' ' . CommonHelper::getNumEnding(($count - 1), array('программа 1С', 'программы 1С', 'программ 1С'));
		} else {
			$str = $arItem['PROPERTIES']['BASE_PROGRAMM']['VALUE'];
		}
		$arResult['ITEMS'][ $k ]['integrateProgram'] = $str;
	}

}

// сортируем по нашему свойству
if (!empty($arParams['SORT_BY_UF_FINAL_PROJECTS'])) {
	
	$arDummy = [];

	foreach ($arResult['ITEMS'] as $arItem) {
		if (isset($arParams['SORT_BY_UF_FINAL_PROJECTS'][ $arItem['ID'] ])) {
			$arDummy[$arParams['SORT_BY_UF_FINAL_PROJECTS'][ $arItem['ID'] ]] = $arItem;
		}
	}
	
	ksort($arDummy);
	
	$arResult['ITEMS'] = $arDummy;
}
