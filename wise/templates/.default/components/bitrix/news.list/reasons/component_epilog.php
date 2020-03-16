<?php

/* 
 * @name LazyLoad news.list component epilog
 * @description Эпилог компонента LazyLoad - работа с буферами вывода
 * @autor Oleg Matasov
 */

// Определяем метод выполнения шаблона (Это аякс запрос?)
$isAjaxRequest = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $this->arResult['PARAMS_HASH']) ? true : false;
// Если это аякс
if ($isAjaxRequest) {
    // забираем вывод в переменную
    $content = ob_get_contents();
    // закрываем стек буфферизации
    //ob_end_clean();
    // перезапускаем буффер
    $APPLICATION->RestartBuffer();
    // забираем данные из обозначенного стека
    list(, $content_html) = explode('<!--reasons-list-ajax-stack--> ', $content);
    // отправляем данные
    echo $content_html;
    // служебный эпилог
    require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
    // выход
    exit();
}