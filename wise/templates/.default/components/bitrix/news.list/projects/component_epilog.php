<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$isAjaxRequest = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $this->arResult['PARAMS_HASH']) ? true : false;
// Если это аякс
if ($isAjaxRequest && $this->arParams['CUSTOM_AJAX_MODE']) {
	// Сбрасываем буфер и отключаем буферизацию
	//ob_end_flush();
	// забираем вывод в переменную
	$content = ob_get_contents();
	// закрываем стек буфферизации
	//ob_end_clean();
	// перезапускаем буффер
	$APPLICATION->RestartBuffer();
	// забираем данные из обозначенного стека
	list(, $content_html) = explode('<!--experience-ajax-stack-->', $content);
	// отправляем данные
	echo trim($content_html);
	// служебный эпилог
	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
	// выход
	exit();
}