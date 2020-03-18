<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); } ?>
<?

$arTranslitParams = array(
    'replace_space' => '-',
    'replace_other' => '-'
);

$iVacancyAfter = (EnvironmentHelper::getParam('vacancyAfterAtBlog') - 1); // После iVacancyAfter элемента выводить вакансию, если есть

foreach ($arResult['ITEMS'] AS $k=>$aItem) {


    /** Получаем рубрики блога */
    $aSelect = array('NAME', 'LIST_PAGE_URL', 'SECTION_PAGE_URL');
    $arSort = array('SORT' => 'ASC');
    $arFilter = array(
        'IBLOCK_ID' => $arParams['IBLOCK_ID'],
        'ID'        => $aItem['IBLOCK_SECTION_ID'],
    );
    $rsSections = CIBlockSection::GetList($arSort, $arFilter, false, $aSelect);
    while ($arSection = $rsSections->GetNext()) {
        $sListPageUrl = $arSection['LIST_PAGE_URL'];
        $arResult['ITEMS'][$k]['Section'][] = $arSection;
    }
}

/** Получаем вакансии, у которых стоит признак "публиковать в блоге" */

if (count($arResult['ITEMS'])>$iVacancyAfter) {
    $arOrder = array('RAND' => 'ASC');
    $arFilter = array('ACTIVE'=>'Y', 'IBLOCK_ID'=>EnvironmentHelper::getParam('vacanciesIBlockId'), 'PROPERTY_PUBLISH_AT_BLOG_VALUE'=>'Да');
    $arSelectFields = array('ID', 'ACTIVE', 'NAME', 'DETAIL_PAGE_URL', 'PREVIEW_TEXT', 'PROPERTY_PUBLISH_AT_BLOG');
    $rsElements = CIBlockElement::GetList($arOrder, $arFilter, FALSE, FALSE, $arSelectFields);
    while ($arElement = $rsElements->GetNext()) {
        $arResult['Vacancy'][] = $arElement;
    }
}


// Ввожу признак CUSTOM_AJAX_MODE в параметрах (можно указывать в параметрах вызова компонента, можно нет, так как без указания режим будет включен, по сути в параметрах его можно только выключить)
$arResult['CUSTOM_AJAX_MODE'] = $this->__component->arParams['CUSTOM_AJAX_MODE'] = isset($arParams['CUSTOM_AJAX_MODE']) ? $arParams['CUSTOM_AJAX_MODE'] : 'Y';

// Определяю ключ доступа к компоненту по ajax (кодирую массив параметров и название шаблона)
$arResult['PARAMS_HASH'] = md5($arParams . $this->GetName());

// Сохраняю в инстанс компонента ключ
$this->__component->arResult['PARAMS_HASH'] = $arResult['PARAMS_HASH'];

// Сохраняю ключ в кеше инстанса
$this->__component->SetResultCacheKeys(array('PARAMS_HASH'));

// Определяю текущий вызов - это ajax?
$arResult['AJAX'] = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $arResult['PARAMS_HASH']) ? true : false;

if($arResult['AJAX']) {
    $APPLICATION->RestartBuffer();
}