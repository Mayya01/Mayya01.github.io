<?php

use Bitrix\Highloadblock as HL;

$hIB_ID = 10;

foreach ( $arResult['ITEMS'] as &$item )
{
	if ( CModule::IncludeModule('highloadblock') )
	{
	    $hlblock = HL\HighloadBlockTable::getById($hIB_ID)->fetch();

	    if ( !empty($hlblock) )
	    {
	    	$rsData = '';
	        $entity            = HL\HighloadBlockTable::compileEntity($hlblock);
	        $entity_data_class = $entity->getDataClass();
	        $rsData            = $entity_data_class::getList(
	        	array(
                    'select' => array('*'),
                    'filter' => Array ( '=UF_XML_ID'  => $item["PROPERTIES"]["price"]["VALUE"] )
	        	)
	        );
    	
	        while ($arItem = $rsData->Fetch())
	        {
	            $item["PROPERTIES"]["price"]['props'] = $arItem;
	        }
	    }
	}
}
