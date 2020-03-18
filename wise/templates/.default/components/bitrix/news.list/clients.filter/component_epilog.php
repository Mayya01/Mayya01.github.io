<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$ajaxRequest = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $this->arResult['PARAMS_HASH']) ? true : false;

if ($ajaxRequest && $this->arParams['CUSTOM_AJAX_MODE']) {

    $content = ob_get_contents();
    ob_end_clean();

    $APPLICATION->RestartBuffer();

    list(, $content_html) = explode('<!--clients-ajax-dynamic-filter-stack-->', $content);

    echo $content_html;

    exit();
}