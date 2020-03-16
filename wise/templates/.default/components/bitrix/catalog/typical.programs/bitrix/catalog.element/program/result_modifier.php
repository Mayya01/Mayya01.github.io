<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

$rsParentSection = CIBlockSection::GetList(
	[],
	[
		'IBLOCK_ID' => $arResult['IBLOCK_ID'],
		'ID' => $arResult['IBLOCK_SECTION_ID']
	],
	false,
	[
		"UF_OTHER_PROGRAMM",
		"UF_PROG_AUTO_TMP_2",
		"UF_PROG_REVIEW",
		"UF_PROG_AUTO_TMP",
		"UF_NAME_LIST",
		"UF_PRICE_BASE",
		"UF_PROG_DETAIL",
		"UF_PROG_DETAIL_MORE",
		"UF_PROG_DETAIL_MORE",
		"UF_PROG_DETAIL_SNOS",
		"UF_PROG_DETAIL_PIC",
		"UF_CUR_VERSION",
		'UF_TAGS',
		'UF_SHOW_BLOG',
		'UF_SHOW_DEMO',
		'ID',
		'NAME',
		'SECTION_PAGE_URL',
		'IBLOCK_ID',
		'UF_FINAL_PROJECTS',
		'UF_DELTERM',
		'UF_DELTERM_DESCR',
		'UF_PRICE_LINK',
		'DETAIL_PICTURE'
	],
	[
		'nTopCount' => 1
	]
);
if($arParentSection = $rsParentSection->GetNext()) {
	$arParentSection['DETAIL_PICTURE'] = ['SRC' => CFile::GetPath($arParentSection['DETAIL_PICTURE'])];

	$arProps = [];
	$property_enums = CIBlockPropertyEnum::GetList(
		[
			"DEF"=>"DESC",
			"SORT"=>"ASC"
		],
		[
			"IBLOCK_ID"=>EnvironmentHelper::getParam('proektyIBlockId'),
			"CODE"=>"cats3"
		]
	);
	while($enum_fields = $property_enums->GetNext()) {
		$arProps[$enum_fields['XML_ID']] = $enum_fields["VALUE"];
	}
	$APPLICATION->SetPageProperty('PROGRAMS-1S', $arProps[$arParentSection['ID']]);


	$rsBlogElements = CUserFieldEnum::GetList(array(), array(
		"ID" => $arParentSection['~UF_SHOW_BLOG'],
	));
	$arParentSection['UF_SHOW_BLOG'] = array();
	while($arBlogElement = $rsBlogElements->GetNext()) {
		$arParentSection['UF_SHOW_BLOG'][] = $arBlogElement['XML_ID'];
	}

	// Другие программы
	if (count($arParentSection['UF_OTHER_PROGRAMM']) > 0) {
		$uf_name = Array("NAME", "SECTION_PAGE_URL", "UF_NAME_LIST", 'UF_DELTERM');
		$otehr_arresult = CIBlockSection::GetList(Array("SORT" => "ASC"),
			Array("IBLOCK_ID" => $arParams['IBLOCK_ID'], "ID" => $arParentSection['UF_OTHER_PROGRAMM']), false, $uf_name);
		while ($other = $otehr_arresult->GetNext()) {
			if (!$other['UF_DELTERM']) {
				// если у другой программы не выставлено свойство "Прекращена поставка"
				$other['NAME'] = $other['UF_NAME_LIST'];
				$arResult['OTHER_PROG'][] = $other;
			}
		}
	}
	$releaseIds = [];
	$releaseIds[] = $arResult["PROPERTIES"]["RELEASE_ID"]["VALUE"];
	if(!empty($releaseIds)){
		$arSelect = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","DETAIL_PAGE_URL","LIST_PAGE_URL");
		$arFilter = Array("IBLOCK_CODE"=>"", "ACTIVE"=>"Y","ID" => $releaseIds);
		$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
		while($ob = $res->GetNextElement())
		{
			$arFields = $ob->GetFields();
			$arFields["PROPS"] = $ob->GetProperties();
			$arResult["RELEASES"][$arFields["ID"]] = $arFields;
		}
	}


	$rsVersions = CIBlockElement::GetList(
		[
			'SORT' => 'ASC'
		],
		[
			'IBLOCK_ID' => $arResult['IBLOCK_ID'],
			'SECTION_ID' => $arResult['IBLOCK_SECTION_ID']
		],
		false,
		false,
		[
			'ID',
			'PROPERTY_TAB_NAME',
			'DETAIL_PAGE_URL',
			'PROPERTY_INFOBANNER',
			'PROPERTY_BASE_CONTENT'
		]
	);
	while ($arVersion = $rsVersions->GetNext()) {
		$arResult['VERSIONS'][] = $arVersion;
	}
	$arResult['PARENT_SECTION'] = $arParentSection;

	$this->__component->setResultCacheKeys(array('UF_SHOW_BLOG','UF_TAGS', 'PARENT_SECTION'));

	TagHelper::setPageTags(explode(', ',$arResult['UF_TAGS']));

	if($arResult['UF_PRICE_LINK']){
		$APPLICATION->SetPageProperty("PRICE_LINK", $arResult['UF_PRICE_LINK']);
	}
}
