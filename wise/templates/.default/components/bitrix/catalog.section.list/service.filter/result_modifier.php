<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

$arResult['TAGS'] = array();

if (0 < $arResult['SECTIONS_COUNT']) {
	foreach ($arResult['SECTIONS'] as &$section) {

		$section['TAGS'] = array();
		$section['COMPANY'] = array();

		if (empty($section['UF_SERV_SEC_TAG']) && empty($section['UF_SERV_COMPANY'])) {
			continue;
		} else {

			$oElement = new CIBlockElement;

			if (!empty($section['UF_SERV_SEC_TAG'])) {

				$rsTags = $oElement->GetList(
				  array('SORT' => 'ASC'),
				  array(
					'IBLOCK_ID' => EnvironmentHelper::getParam('servicesTagsIBlockId'),
					'ACTIVE' => 'Y',
					'ID' => $section['UF_SERV_SEC_TAG'],
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
					$section['TAGS'][$arTag['ID']] = $arTag;
					$arResult['TAGS'][$arTag['ID']] = $arTag;
				}

			}

			if (!empty($section['UF_SERV_COMPANY'])) {

				$rsCompany = $oElement->GetList(
				  array('SORT' => 'ASC'),
				  array(
					'IBLOCK_ID' => EnvironmentHelper::getParam('allCompaniesIBlockId'),
					'ACTIVE' => 'Y',
					'ID' => $section['UF_SERV_COMPANY'],
				  ),
				  false,
				  false,
				  array(
					'ID',
					'NAME',
					'ACTIVE',
					'SORT',
					'PROPERTY_MENU_CLASS'
				  )
				);

				while ($arCompany = $rsCompany->GetNext()) {
					$section['COMPANY'] = array(
					  'ID' => $arCompany['ID'],
					  'NAME' => $arCompany['~NAME'],
					  'ACTIVE' => $arCompany['ACTIVE'],
					  'SORT' => $arCompany['SORT'],
					  'MENU_CLASS' => $arCompany['PROPERTY_MENU_CLASS_VALUE'],
					);
				}

			}
		}

	}
}

if(!empty($arResult['TAGS'])) {
	$arResult['TAGS'] = ArrayHelper::sortBySubValue($arResult['TAGS'],'SORT');
}
