<?php

use Bitrix\Highloadblock as HL;

$hIB_ID = 12;

foreach ( $arResult['ITEMS'] as &$item )
{
    if ( CModule::IncludeModule('highloadblock') )
    {
        $hlblock = HL\HighloadBlockTable::getById($hIB_ID)->fetch();

        foreach ( $item["PROPERTIES"]['price']["VALUE"] as $value )
        {
            if (!empty($hlblock)) {
                $rsData = '';
                $entity = HL\HighloadBlockTable::compileEntity($hlblock);
                $entity_data_class = $entity->getDataClass();
                $rsData = $entity_data_class::getList(
                    array(
                        'select' => array('*'),
                        'filter' => Array ( '=UF_XML_ID'  => $value )
                    )
                );

                while ($arItem = $rsData->Fetch()) {

                    $item["PROPERTIES"]["price"]['props'][] = $arItem;
                }
            }
        }
        /*echo '<pre>';
        var_dump($item["PROPERTIES"]["price"]['props']);
        echo '</pre>';*/



    }
}