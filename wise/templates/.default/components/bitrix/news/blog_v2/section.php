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
<?
global $arrFilter;
$arrFilter = BlogHelper::getFilterForListElements();
?>
<?
$section = BlogHelper::getSectionFromComponentParams($arResult['URL_TEMPLATES']['section']);
if ($section == 'novosti') {
	$template = 'blog.list.3col';
} else {
	$template = 'blog.list.2col';
}
?>
<section class="c-blog js-blog">
	<div class="content-center">
		<? $APPLICATION->IncludeComponent(
			'wiseadvice:blog.header',
			'',
			array(),
			false
		); ?>
		<div class="js-tags">
			<div class="js-tags-hide-div" style="display: none"></div>
			<div class="js-loadElements-hide-div" style="display: none"></div>
			<?
			$arrFilter["FAKE_FILTER_TAGS"] = $_GET["tags"];
			$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				$template,
				ComponentsParams::blogList(
					Array(
						"IBLOCK_ID"   => $arParams["IBLOCK_ID"],
						"NEWS_COUNT"  => $arParams["NEWS_COUNT"],
						"DETAIL_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["detail"],
						"SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
						"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
						"SECTION"     => $section,
						"SET_BROWSER_TITLE" => "Y",
					)
				),
				false
			); ?>
		</div>
	</div>
</section>