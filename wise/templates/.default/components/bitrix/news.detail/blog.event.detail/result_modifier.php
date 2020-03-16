<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); } ?>
<?php

$blogDetail = new BlogDetail($arResult);
$arResult = $blogDetail
	->resizeEventImg()
	->formatEventDate()
	->placeFreeConsultForm()
	->getElement();

$currentDate = date("d.m.Y G:i:s");
$arResult['compareDate'] = $DB->CompareDates($arResult['PROPERTIES']['EVENT_DATE']['VALUE'], $currentDate);
//date1 > date2 	1
// date1 < date2 	-1
// date1 = date2 	0
switch ($arResult['PROPERTIES']['EVENT_TYPE']['VALUE']) {
	case 'Вебинар':
		$arResult['PROPERTIES']['EVENT_TYPE']['TEXT'] = '<span>Бесплатный вебинар</span>';
		break;
	case 'Мероприятие':
	default:
		$arResult['PROPERTIES']['EVENT_TYPE']['TEXT'] = '<span>Мероприятие</span>';
		break;
}


?>
