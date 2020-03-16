<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();


$arResult['AJAX_PAGEN_DATA'] = BlogHelper::getAjaxPaginationData($arResult);

foreach ($arResult['SEARCH'] as $key => $arSearch) {
	$arResult['SEARCH'][$key]['displayDate'] = FormatDate('d F Y', MakeTimeStamp($arSearch['FULL_DATE_CHANGE']));
	$arResult['SEARCH'][$key]['URL'] = str_replace("index.php", "", $arSearch['URL']);
}
