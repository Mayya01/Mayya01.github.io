<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); } ?>
<?php
$arResult['OwnSolutionsFilter'] = array();

if (!empty($arResult["PROPERTIES"]['cats3']['VALUE_XML_ID'])) {
	foreach ($arResult["PROPERTIES"]['cats3']['VALUE_XML_ID'] AS $sCode) {
		if (!is_numeric($sCode)) {
			$iId            = 0;
			$arOrder        = array('SORT' => 'ASC');
			$arFilter       = array(
				'ACTIVE'    => 'Y',
				'IBLOCK_ID' => EnvironmentHelper::getParam('ownsolutionIBlockId'),
				'CODE'      => $sCode,
			);
			$arSelectFields = array('ID');
			$rsElements     = CIBlockElement::GetList($arOrder, $arFilter, false, false, $arSelectFields);
			if ($arElement = $rsElements->GetNext()) {
				$arResult['OwnSolutionsFilter']['ID'][] = $arElement['ID'];
			}
		}
		
	}
}

