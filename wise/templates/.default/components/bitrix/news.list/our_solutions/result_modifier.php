<?php

foreach($arResult["ITEMS"] as &$arItem) {
    if($arItem['PROPERTIES']["LIST_PICTURE"]["VALUE"]){
        $arItem['PICTURE'] = CFile::ResizeImageGet($arItem['PROPERTIES']["LIST_PICTURE"]["VALUE"],
            array('width' => 110,
                'height' => 9999),
            BX_RESIZE_IMAGE_PROPORTIONAL,
            true
        );
    }
}