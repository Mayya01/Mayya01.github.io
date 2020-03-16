<?
use Bitrix\Highloadblock\HighloadBlockTable as HLBT;

// id highload-блока
const CLASSIC_TARRIFS_HLB 	= 2;
const EXCLUSIVE_TARRIFS_HLB = 7;

//подключаем модуль highloadblock
CModule::IncludeModule('iblock');
CModule::IncludeModule('highloadblock');



if (isset($_POST['ajax']) && $_POST['ajax'] == '1' && isset($_POST['action']) && $_POST['action'] == 'formsubmit' && intval($_POST['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID'])) {
	if (count($arResult['FORM_ERRORS']) > 0) {
		$result = array(
			'status' => 'error',
			'errors' => $arResult['FORM_ERRORS']
		);
		
		// json response
		while (ob_get_level() > 1) {
			ob_end_clean();
		}
		header("Content-type: application/json");
		echo json_encode($result);
		die();
	}
}
if (isset($_GET['formresult']) && $_GET['formresult'] == 'addok' && !(isset($_GET['ajax']) && $_GET['ajax'] == '0' && intval($_GET['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID']))) {
	$result = array(
		'status' => 'success',
		'message' => $arResult['FORM_NOTE']
	);
	if (trim($arParams['THANKYOU_URL']) != "") {
		$result['redirect'] = $arParams['THANKYOU_URL'];
	}
	
	// json response
	while (ob_get_level() > 1) {
		ob_end_clean();
	}
	header("Content-type: application/json");
	echo json_encode($result);
	die();
}

/* Заполнение скрытых полей из параметров компонента. Плюс передаём через data-fieldname оригинальное название поля */
$arResult['QUESTIONS'] = FormHelper::rewriteQuestionFields($arResult['QUESTIONS'],$arParams);

foreach ($arResult["QUESTIONS"] as $kkey => $field) {
	$field["CODE"] = $kkey;
	if ($kkey == "FORM_TYPE") {
		$arResult["FORM_TYPE"] = $field;
	} else {
		$arResult["VISIBLE_QUESTIONS"][] = $field;
	}
}

$arSelect = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","PROPERTY_price");
$arFilter = Array("IBLOCK_ID"=>IntVal(EnvironmentHelper::getParam("tariffs1sIBlockId")), "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
$arResult["TARIFFS"] = array();

$arResult["TARIFFS"] = array_values(makeTarrifsArray($res, CLASSIC_TARRIFS_HLB, "UF_HOUR"));

$arSelect = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","PROPERTY_price");
$arFilter = Array("IBLOCK_ID"=>IntVal(EnvironmentHelper::getParam("exclusiveTariffs1sIBlockId")), "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);

$arResult["TARIFFS"] = array_merge($arResult["TARIFFS"], makeTarrifsArray($res, EXCLUSIVE_TARRIFS_HLB, "UF_PRICE"));

function makeTarrifsArray($res, $tariffsHlbId, $priceFieldName)
{
	while($ob = $res->GetNextElement())
	{
		$arFields = $ob->GetFields();
		$arFields["PROPS"] = $ob->GetProperties();
		$entity_data_class = GetEntityDataClass($tariffsHlbId);
		
		$rsData = $entity_data_class::getList(array(
			'select' => array('*'),
			"filter" =>  Array ( '=UF_XML_ID'  => $arFields["PROPS"]["price"]["VALUE"] )
		));
		
		while ( $el = $rsData->fetch() )
		{
			$arFields["PROPS"][ 'props' ] = $el;
		}
		if($priceFieldName == "UF_HOUR"){
			$arRes[] = $arFields["NAME"]." - ".$arFields["PROPS"]['props'][$priceFieldName].'/час';
		}else{
		$arRes[] = $arFields["NAME"]." - ".$arFields["PROPS"]['props'][$priceFieldName];
			}
	}
	return $arRes;
}
