<?

if (isset($arResult['SECTIONS']) && !empty($arResult['SECTIONS'])) {
    foreach ($arResult['SECTIONS'] AS $k=>$v) {
        
        // Сортируем теги по увеличению
        sort($v['UF_SERV_SEC_TAG'], SORT_NUMERIC );
        $arResult['SECTIONS'][$k]['UF_SERV_SEC_TAG'] = $v['UF_SERV_SEC_TAG'];
        

        // Получаем данные о компании
        $arOrder = array('SORT' => 'ASC');
        $arFilter = array('ACTIVE'=>'Y', 'ID'=>$v['UF_SERV_COMPANY']);
        $arSelectFields = array('ID', 'ACTIVE', 'NAME', 'PREVIEW_PICTURE');
        $rsElements = CIBlockElement::GetList($arOrder, $arFilter, FALSE, FALSE, $arSelectFields);
        while ($arElement = $rsElements->GetNext()) {
            $arElement['PREVIEW_PICTURE'] = CFile::GetFileArray($arElement['PREVIEW_PICTURE']);
            $arResult['SECTIONS'][$k]['CompanyInfo'] = $arElement;
        }

        // Раскидываем услуги по колонкам
        $iAmount = count($v['ITEMS']);
        $arResult['SECTIONS'][$k]['LeftItems'] = array();
        $arResult['SECTIONS'][$k]['RightItems'] = array();

        if ($iAmount>2) {
            foreach ($v['ITEMS'] AS $x => $aItem) {
                if ($x<(floor($iAmount/2))) {
                    $arResult['SECTIONS'][$k]['LeftItems'][] = $aItem;
                } else {
                    $arResult['SECTIONS'][$k]['RightItems'][] = $aItem;
                }
            }
        } else {
            $arResult['SECTIONS'][$k]['LeftItems'] = $v['ITEMS'];
        }

    }
}