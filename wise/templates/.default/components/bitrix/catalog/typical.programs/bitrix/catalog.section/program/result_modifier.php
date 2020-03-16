<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

$arProps = array();
$property_enums = CIBlockPropertyEnum::GetList(Array("DEF"=>"DESC", "SORT"=>"ASC"), Array("IBLOCK_ID"=>EnvironmentHelper::getParam('proektyIBlockId'), "CODE"=>"cats3"));
while($enum_fields = $property_enums->GetNext()) {
    $arProps[$enum_fields['XML_ID']] = $enum_fields["VALUE"];
}
$APPLICATION->SetPageProperty('PROGRAMS-1S', $arProps[$arResult['ID']]);

if (CModule::IncludeModule("iblock")) {
	$uf_name = Array(
		"UF_SUBSCRIBE_RUBRIC",
		"UF_OTHER_PROGRAMM",
		"UF_PROG_AUTO_TMP_2",
		"UF_PROG_REVIEW",
		"UF_PROG_AUTO_TMP",
		"UF_NAME_LIST",
		"UF_PRICE_BASE",
		"UF_PROG_DETAIL",
		"UF_PROG_DETAIL_MORE",
		"UF_PROG_DETAIL_SNOS",
		"UF_PROG_DETAIL_PIC",
		"UF_CUR_VERSION",
		'UF_TAGS',
		'UF_SHOW_BLOG',
		'UF_SHOW_DEMO',
		'ID',
		'IBLOCK_ID',
		'UF_FINAL_PROJECTS',
		'UF_DELTERM',
		'UF_DELTERM_DESCR',
		'UF_PRICE_LINK'
	);
	$uf_arresult = CIBlockSection::GetList(
		Array("SORT" => "ASC"),
		Array("IBLOCK_ID" => $arParams['IBLOCK_ID'], "ID" => $arResult['ID']),
		false,
		$uf_name
	);
	if ($uf_value = $uf_arresult->GetNext()):
		foreach ($uf_name as $uf) {
			$arResult[$uf] = $uf_value[$uf];
			$arResult["~" . $uf] = $uf_value["~" . $uf];
		}
	endif;

		$rsBlogElements = CUserFieldEnum::GetList(array(), array(
			"ID" => $arResult['~UF_SHOW_BLOG'],
		));
		$arResult['UF_SHOW_BLOG'] = array();
		while($arBlogElement = $rsBlogElements->GetNext())
			$arResult['UF_SHOW_BLOG'][] = $arBlogElement['XML_ID'];

	// Другие программы
	if (count($arResult['UF_OTHER_PROGRAMM']) > 0) {
		$uf_name = Array("NAME", "SECTION_PAGE_URL", "UF_NAME_LIST", 'UF_DELTERM');
		$otehr_arresult = CIBlockSection::GetList(Array("SORT" => "ASC"),
			Array("IBLOCK_ID" => $arParams['IBLOCK_ID'], "ID" => $arResult['UF_OTHER_PROGRAMM']), false, $uf_name);
		while ($other = $otehr_arresult->GetNext()):
			if (!$other['UF_DELTERM']) {
			// если у другой программы не выставлено свойство "Прекращена поставка"
				$other['NAME'] = $other['UF_NAME_LIST'];
				$arResult['OTHER_PROG'][] = $other;
			}
		endwhile;
	}
}

/*Построим данные для табов версий программы*/
$arResult["VERSIONS"] = array();
$findCurrent = false;
$isCurrentVersion = false;
$releaseIds = array();
foreach ($arResult["ITEMS"] as $arItem) {
	$arVersion = array();
	$arVersion["ID"] = $arItem["ID"];
    $arVersion["PROPS"] = $arItem["PROPERTIES"];
	$arVersion["NAME"] = $arItem["NAME"];
	$arVersion["TAB_NAME"] = $arItem["PROPERTIES"]["TAB_NAME"]["VALUE"] ? $arItem["PROPERTIES"]["TAB_NAME"]["VALUE"] : $arItem["NAME"];
	$arVersion["CODE"] = $arItem["CODE"];
	$arVersion["IS_BASE"] = $arItem["PROPERTIES"]["IS_BASE"]["VALUE"];
	$arVersion["PREVIEW_TEXT"] = $arItem["~PREVIEW_TEXT"];
	$arVersion["DETAIL_TEXT"] = $arItem["~DETAIL_TEXT"];
    $releaseIds[] = $arItem["PROPERTIES"]["RELEASE_ID"]["VALUE"];

	if ($arVersion["IS_BASE"]) {
		$arVersion["LINK"] = $APPLICATION->GetCurPageParam("", array("version"));
	} else {
		$arVersion["LINK"] = $APPLICATION->GetCurPageParam("version=" . $arVersion["CODE"], array("version"));
	}

	if ($arVersion["CODE"] == $_REQUEST["version"] ||
		empty($_REQUEST["version"]) && $arVersion["IS_BASE"]
	) {
		$arVersion["CURRENT"] = true;
		$arResult["CURRENT_VERSION_ID"] = $arVersion["ID"];
		$arResult["CURRENT_VERSION"] = $arVersion;
		$isCurrentVersion = true;
	}

	if ($arVersion["CURRENT"]) {
		$arResult["PREVIEW_TEXT"] = $arItem["~PREVIEW_TEXT"];
		$arResult["DETAIL_TEXT"] = $arItem["~DETAIL_TEXT"];
		$arResult["DESCRIPTION_NOTE"] = $arItem["PROPERTIES"]["DESCRIPTION_NOTE"]["~VALUE"]["TEXT"];
		$arResult["NAME"] = $arVersion["NAME"];

	}

	$arResult["VERSIONS"][] = $arVersion;
}
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


if (!$isCurrentVersion) {
	$arResult["VERSIONS"][0]["CURRENT"] = true;
	$arResult["CURRENT_VERSION_ID"] = $arResult["VERSIONS"][0]["ID"];
	$arResult["FORCE_HIDE_TABS"] = true;
}
$this->__component->setResultCacheKeys(array('UF_SHOW_BLOG','UF_TAGS'));

TagHelper::setPageTags(explode(', ',$arResult['UF_TAGS']));

if($arResult['UF_PRICE_LINK']){
	$APPLICATION->SetPageProperty("PRICE_LINK", $arResult['UF_PRICE_LINK']);
}


if($arResult["ID"] == "7" || $arResult["ID"] == "5" || $arResult["ID"] == "9" || $arResult["ID"] == "39"){
	$arResult['HIDE_CALC'] = "Y";
}
