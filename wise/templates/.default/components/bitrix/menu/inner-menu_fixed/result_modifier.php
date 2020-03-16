<?
foreach ($arResult as $key => $arItem) {
	if ($arItem['DEPTH_LEVEL'] == 1) {
		$last_item = $key;
	} elseif ($arItem['DEPTH_LEVEL'] == 2) {
		unset($arResult[ $key ]);
		$arResult[ $last_item ]['CHILDS'][] = $arItem;
	}
} ?>
