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

$arResult['AJAX_PAGEN_DATA'] = BlogHelper::getAjaxPaginationData($arResult, $arParams['SECTION']);

$arResult['SECTION_NAME'] = BlogHelper::getSectionName($arParams['SECTION']);



//Верхние теги для статьи
$obCache = new CPHPCache();
if( $obCache->InitCache(3600,$arParams['SECTION']."CloudTags"/*задать ttl, cacheID и cachePath*/) )// Если кэш валиден
{
	$vars = $obCache->GetVars();// Извлечение переменных из кэша
	$allTags = $vars['allTags'];
}
elseif( $obCache->StartDataCache()  )// Если кэш невалиден
{
	if($arParams['SECTION'] == 'articles') {
		$iblockId = EnvironmentHelper::getParam("articlesIblockID");
	}elseif ($arParams['SECTION'] == 'video'){
		$iblockId = EnvironmentHelper::getParam("videoIblockID");
	}
	
	$arListTags = array(); //Теги из свойства list
	$property_enums = CIBlockPropertyEnum::GetList(Array("DEF"=>"DESC", "SORT"=>"ASC"), Array("IBLOCK_ID"=>$arResult['IBLOCK_ID'], "CODE"=>"ARTICLE_TAGS"));
	while($enum_fields = $property_enums->GetNext())
	{
		$arListTags[] = $enum_fields["VALUE"];
	}
	
	$allTags = array();
	$arSelect = Array("ID","IBLOCK_ID","TAGS",);
	$arFilter = Array("IBLOCK_ID"=>$iblockId, "ACTIVE"=>"Y");
	$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
	while($ob = $res->GetNextElement())
	{
		$arFields = $ob->GetFields();
		$arProps = $ob->GetProperties();
		$arAddToTags = explode( ', ', $arFields['TAGS']);
		if(is_array($arProps['ARTICLE_TAGS']['VALUE'])){
			$arAddToTags = array_merge($arAddToTags, $arProps['ARTICLE_TAGS']['VALUE']);
		}
		
		if(is_array($arAddToTags)) {
			$arAddToTags = array_unique($arAddToTags);
			$allTags = array_merge($allTags, $arAddToTags);
		}
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
	
	//Убираем теги которых нет в списке свойства
	
	if($arListTags) {
		$arFinalTags = array();
		foreach ($allTags as $tag) {
			if (in_array($tag['NAME'], $arListTags, true)) {
				$arFinalTags[] = $tag;
			}
		}
		$allTags = $arFinalTags;
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
