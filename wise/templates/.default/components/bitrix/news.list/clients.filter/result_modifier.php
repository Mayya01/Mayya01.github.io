<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}

$arResult['CUSTOM_AJAX_MODE'] = $this->__component->arParams['CUSTOM_AJAX_MODE'] = isset($arParams['CUSTOM_AJAX_MODE']) ? $arParams['CUSTOM_AJAX_MODE'] : 'Y';
$arResult['PARAMS_HASH'] = md5($arParams.$this->GetName());
$this->__component->arResult['PARAMS_HASH'] = $arResult['PARAMS_HASH'];
$this->__component->SetResultCacheKeys(array('PARAMS_HASH'));
$arResult['AJAX'] = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $arResult['PARAMS_HASH']) ? true : false;

if (empty($arResult)) {
    return;
}

$arResult['TAGS'] = array();

$oElement = new CIBlockElement;

$rsTags = $oElement->GetList(
  array('SORT' => 'ASC'),
  array(
    'IBLOCK_ID' => EnvironmentHelper::getParam('clientsTagsIBlockId'),
    'ACTIVE' => 'Y'
  ),
  false,
  false,
  array(
    'ID',
    'NAME',
    'ACTIVE',
    'SORT'
  )
);

while ($arTag = $rsTags->GetNext()) {
    $arResult['TAGS'][$arTag['ID']] = $arTag;
}

foreach ($arResult['ITEMS'] as &$arItem) {

    $arItem['TAGS'] = array();

    if (!empty($arItem['PROPERTIES']['TAGS']['VALUE'])) {

        $rsTags = $oElement->GetList(
          array('SORT' => 'ASC'),
          array(
            'IBLOCK_ID' => EnvironmentHelper::getParam('clientsTagsIBlockId'),
            'ACTIVE' => 'Y',
            'ID' => $arItem['PROPERTIES']['TAGS']['VALUE'],
          ),
          false,
          false,
          array(
            'ID',
            'NAME',
            'ACTIVE',
            'SORT'
          )
        );

        while ($arTag = $rsTags->GetNext()) {
            $arItem['TAGS'][$arTag['ID']] = $arTag;
        }

    }

    if (is_array($arItem['PREVIEW_PICTURE'])) {

        $arItem['BANNER'] = CFile::ResizeImageGet($arItem['PREVIEW_PICTURE'],
          array('width' => '638', 'height' => '350'),
          BX_RESIZE_IMAGE_PROPORTIONAL, true);

        if (is_array($arItem['DETAIL_PICTURE'])) {
            $arItem['LETTER_IMG_SRC'] = $arItem['DETAIL_PICTURE']['SRC'];
        } else {
            $arItem['LETTER_IMG_SRC'] = false;
        }

    } else {
        continue;
    }

};

