<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

$arBlogElements = new BlogList($arResult['ITEMS']);
$arResult['FIRST_ITEM'] = $arResult['ITEMS'][0];


$arResult['ITEMS'] = $arBlogElements->formatTags()->formatDate()->resizePhoto($arParams['SECTION'])->getYouTubeVideoId()->getElements();

$arResult['CURRENT_YEAR'] = BlogHelper::getYear($arResult['ITEMS'][0]['displayYear']);
$arResult['CURRENT_MONTH'] = BlogHelper::getMonth($arResult['ITEMS'][0]['monthNum']);

$arResult['TIMESTAMPS'] = BlogHelper::getArTimeStamps(array(
	'IBLOCK_ID'          => $arParams['IBLOCK_ID'],
	'ACTIVE'             => 'Y',
	'<=DATE_ACTIVE_FROM' => array(false, ConvertTimeStamp(false, "FULL"))
),
	$arResult['CURRENT_YEAR'],
	$arResult['CURRENT_MONTH']
);

$arResult['TIMESTAMPS'] = BlogHelper::formatArTimeStamps($arResult['TIMESTAMPS']);

$arBlogElements->distributeElementsByTimeStamps($arResult['TIMESTAMPS']);





//Верхние теги для статьи
$obCache = new CPHPCache();
if( $obCache->InitCache(3600,$arParams['SECTION']."CloudTags"/*задать ttl, cacheID и cachePath*/) )// Если кэш валиден
{
	$vars = $obCache->GetVars();// Извлечение переменных из кэша
	$allTags = $vars['allTags'];
}
elseif( $obCache->StartDataCache()  )// Если кэш невалиден
{
	if($arParams['SECTION'] == 'articlesPopular') {
		$iblockId = EnvironmentHelper::getParam("articlesIblockID");
	}
	$allTags = array();
	$arSelect = Array("ID","TAGS");
	$arFilter = Array("IBLOCK_ID"=>$iblockId, "ACTIVE"=>"Y");
	$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
	while($ob = $res->GetNextElement())
	{
		$arFields = $ob->GetFields();
		$arTags = explode( ', ', $arFields['TAGS']);
		$allTags = array_merge($allTags, $arTags);
	}
	$arTags = array(); //Ключ - название элемента, значение - количество повторов
	foreach ($allTags as $tag){
		$arTags[$tag]++;
	}
	arsort($arTags); //Сортируем по количеству повторов
	$allTags = array();
	foreach ($arTags as $tagName => $value){
		$allTags[] = array("NAME" => $tagName);
	}
	/*Тяжелые вычисления*/
	$obCache->EndDataCache(array('allTags' => $allTags));// Сохраняем переменные в кэш.
}

$arResult['TAGS'] = $allTags;






//Функционал тегов для ajax
$arResult['SELECTED_TAGS'] = array();
if($_REQUEST['tags']){
	if(is_array($_REQUEST['tags']) AND !empty($_REQUEST['tags'])){
		$arResult['SELECTED_TAGS'] = $_REQUEST['tags'];
	}
	elseif ((string)$_REQUEST['tags']!==''){
		$arResult['SELECTED_TAGS'] = array($_REQUEST['tags']);
	}
}

reset($arResult['SELECTED_TAGS']);
$arResult['LAST_KEY'] = (int)key($arResult['SELECTED_TAGS']);


?>
