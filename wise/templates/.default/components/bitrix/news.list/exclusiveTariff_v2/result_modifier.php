<?php

use Bitrix\Highloadblock as HL;

$hIB_ID = 7;


foreach ($arResult['ITEMS'] as &$it) {

    if (CModule::IncludeModule('highloadblock')) {
        $hlblock = HL\HighloadBlockTable::getById($hIB_ID)->fetch();

        if (!empty($hlblock)) {
            $entity = HL\HighloadBlockTable::compileEntity($hlblock);
            $entity_data_class = $entity->getDataClass();
            $rsData = $entity_data_class::getList(array(
                'select' => array('*'),
                'filter' => Array('=UF_XML_ID' => $it["PROPERTIES"]["price"]["VALUE"])

            ));

            while ($arItem = $rsData->Fetch()) {
                $it["PROPERTIES"]["price"]['props'] = $arItem;
            }
        }
    }


}






