<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$isAjaxRequest = (isset($_REQUEST['is_ajax']) ) ? true : false;
// Если это аякс
if ($isAjaxRequest) {
    // забираем вывод в переменную
    $content = ob_get_contents();
    // закрываем стек буфферизации
    ob_end_clean();
    // перезапускаем буффер
    $APPLICATION->RestartBuffer();
    // забираем данные из обозначенного стека
    if ($_REQUEST['LAST_ELEM_YEAR']) {
        list(, $content_html) = explode('<!--js-loadElements-->', $content);
    } else {
        list(, $content_html) = explode('<!--js-tags-component-->', $content);
    }
    // отправляем данные
    echo $content_html;
    // служебный эпилог
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
    // выход
    exit();
}