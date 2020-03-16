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
<section class="c-blog js-blog">
	<div class="content-center">
		<? $APPLICATION->IncludeComponent(
			'wiseadvice:blog.header',
			'',
			array("H1_AS_DIV" => "Y"),
			false
		); ?>
		<div class="js-tags">
			<div class="js-tags-hide-div" style="display: none"></div>
			<div class="js-loadElements-hide-div" style="display: none"></div>
			<?
			
		
			//$date = date($DB->DateFormatToPHP(CLang::GetDateFormat("SHORT")), date());
			$date = date( 'Y-m-d H:i:s' );
			global $arrFilter;
			$arrFilter = Array(">=PROPERTY_EVENT_DATE"=>$date);
			$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"blog.events",
				ComponentsParams::blogList(
					Array(
						"IBLOCK_ID"   => $arParams["IBLOCK_ID"],
						"NEWS_COUNT"  => $arParams["NEWS_COUNT"],
						"SORT_BY1" => "PROPERTY_EVENT_DATE",
						"SORT_ORDER1" => "DESC",
						"DETAIL_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["detail"],
						"SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
						"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
						"SECTION"     => $section,
						"SET_BROWSER_TITLE" => "Y",
					)
				),
				false
			); ?><?
			$arrFilter = Array("<=PROPERTY_EVENT_DATE"=>$date,"!PROPERTY_VIDEO_CODE" => false);
			$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"blog.events.past",
				ComponentsParams::blogList(
					Array(
						"IBLOCK_ID"   => $arParams["IBLOCK_ID"],
						"NEWS_COUNT"  => "5",
						"SORT_BY1" => "PROPERTY_EVENT_DATE",
						"SORT_ORDER1" => "DESC",
						"DETAIL_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["detail"],
						"SECTION_URL" => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
						"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
						"SECTION"     => $section,
						"SET_BROWSER_TITLE" => "Y",
					)
				),
				false
			);
			?>
		</div>
	</div>
</section>
