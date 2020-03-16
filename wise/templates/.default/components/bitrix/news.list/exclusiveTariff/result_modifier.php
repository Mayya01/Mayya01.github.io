<?php

use Bitrix\Highloadblock as HL;

$hIB_ID = 7;


foreach ($arResult['ITEMS'] as &$it) {
	/*echo '<pre>';
	var_dump($it["PROPERTIES"]["price"]);
	echo '</pre>';*/

	if ( CModule::IncludeModule('highloadblock') )
	{
		//var_dump($arItem);die;
	    $hlblock = HL\HighloadBlockTable::getById($hIB_ID)->fetch();

	    if ( !empty($hlblock) )
	    {
	        $entity            = HL\HighloadBlockTable::compileEntity($hlblock);
	        $entity_data_class = $entity->getDataClass();
	        $rsData            = $entity_data_class::getList(array(
	                    'select' => array('*'),
	                    'filter' => Array ( '=UF_XML_ID'  => $it["PROPERTIES"]["price"]["VALUE"] )
	                    
	        ));

	        while ($arItem = $rsData->Fetch())
	        {
	        	//$arItem;
	            $it["PROPERTIES"]["price"][ 'props' ] = $arItem;
	        	//var_dump($arItem);die;
	        }
	    }
	}

	//var_dump($arResult['ITEMS'][0]["PROPERTIES"]["stoimost"]);

}






