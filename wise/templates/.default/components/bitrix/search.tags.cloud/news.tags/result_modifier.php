<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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