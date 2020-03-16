<?
// Определяем метод выполнения шаблона (Это аякс запрос?)
$isAjaxRequest = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $this->arResult['PARAMS_HASH']) ? true : false;


// Если это аякс
if ($isAjaxRequest) {

    // забираем вывод в переменную
    $content = ob_get_contents();

    // закрываем стек буфферизации
    ob_end_clean();

    // перезапускаем буффер
    $APPLICATION->RestartBuffer();


    echo $content;

    // выход
    exit();
}
