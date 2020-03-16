<?php
// подключаем пространство имен класса HighloadBlockTable и даём ему псевдоним HLBT для удобной работы
use Bitrix\Highloadblock\HighloadBlockTable as HLBT;

// id highload-блока
const MY_HL_BLOCK_ID = 2;

//подключаем модуль highloadblock
CModule::IncludeModule('highloadblock');



foreach ( $arResult['ITEMS'] as &$item )
{
	/*echo '<pre>';
	var_dump($item["PROPERTIES"]["price"]);die;
	echo '</pre>';*/
	
	CModule::IncludeModule('highloadblock');

	$entity_data_class = GetEntityDataClass(MY_HL_BLOCK_ID);

	$rsData = $entity_data_class::getList(array(
	   'select' => array('*'),
	   "filter" =>  Array ( '=UF_XML_ID'  => $item["PROPERTIES"]["price"]["VALUE"] )
	));

	while ( $el = $rsData->fetch() )
	{
	    $item["PROPERTIES"]["price"][ 'props' ] = $el;
	}
}








