<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<section class="blog js-blog">
	<? $APPLICATION->IncludeComponent(
		'wiseadvice:blog2.header',
		'',
		array(
			"H1" => "Блог. Все о продуктах 1С",
			"H1_AS_DIV" => "Y"
		),
		false
	); ?>
	<div class="blog__content">
		<div class="content-center">
<? $ElementID = $APPLICATION->IncludeComponent(
	"bitrix:news.detail",
	"blog.event.detail",
	ComponentsParams::blogDetail(
		Array(
			"IBLOCK_ID"    => $arParams["IBLOCK_ID"],
			"DETAIL_URL"   => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["detail"],
			"SECTION_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
			"ELEMENT_ID"   => $arResult["VARIABLES"]["ELEMENT_ID"],
			"ELEMENT_CODE" => $arResult["VARIABLES"]["ELEMENT_CODE"],
			"IBLOCK_URL"   => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
			"SECTION"      => 'event',//BlogHelper::getSectionFromComponentParams($arResult['URL_TEMPLATES']['section']),
			"SET_TITLE" => "Y",
			"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
			"CACHE_TYPE" => $_GET['LAZY'] == 'Y' ? 'N' : 'A',
			'ADD_SECTIONS_CHAIN'        => 'N',
			'ADD_ELEMENT_CHAIN'        => 'N',
			"SHOW_404"                        => "Y",
			"SET_STATUS_404"                  => "Y",
			'FIELD_CODE'                => array(
				0 => "TAGS",
				1 => "SHOW_COUNTER",
				2 => "PREVIEW_PICTURE",
			),
		)
	),
	false
); ?>
		
		</div>
		</div>
</section>
