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

	if(mb_stripos($arItem['NAME'], 'Машиностроительный') !== false) {
		$arResult['ITEMS'][ $k ]['NAME'] = 'Машино&#173;строительный холдинг';
	} elseif(mb_stripos($arItem['NAME'], 'Агропромышленная') !== false) {
		$arResult['ITEMS'][ $k ]['NAME'] = 'Агропро&#173;мышленная компания';
	} elseif(mb_stripos($arItem['NAME'], 'полиграфическое') !== false) {
		$arResult['ITEMS'][ $k ]['NAME'] = 'Полигра&#173;фическое предприятие';
	} elseif(mb_stripos($arItem['NAME'], 'СПЕЦТЕХКОМПЛЕКТ') !== false) {
		$arResult['ITEMS'][ $k ]['NAME'] = 'СПЕЦТЕХК&#173;ОМПЛЕКТ';
	} elseif(mb_stripos($arItem['NAME'], 'Самолетостроительное') !== false) {
		$arResult['ITEMS'][ $k ]['NAME'] = 'Самолето&#173;строительное';
	} elseif(mb_stripos($arItem['NAME'], 'Газораспределительное') !== false) {
		$arResult['ITEMS'][ $k ]['NAME'] = 'Газораспре&#173;делительное предприятие';
	}

}

// сортируем по нашему свойству
if (!empty($arParams['SORT_BY_UF_FINAL_PROJECTS'])) {

	$arDummy = array_fill(1, count($arParams['SORT_BY_UF_FINAL_PROJECTS']), []);
	foreach ($arResult['ITEMS'] as $arItem) {
		if (isset($arParams['SORT_BY_UF_FINAL_PROJECTS'][ $arItem['ID'] ])) {
			$arDummy[$arParams['SORT_BY_UF_FINAL_PROJECTS'][ $arItem['ID']]] = $arItem;
		}
	}
	$arResult['ITEMS'] = $arDummy;
}
