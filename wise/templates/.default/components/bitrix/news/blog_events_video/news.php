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
		<header class="c-blog__header  clearme">
			<h1 class="h1">Видеозаписи прошедших мероприятий</h1>
		
		</header>
		
		<div class="js-tags">
			<div class="js-tags-hide-div" style="display: none"></div>
			<div class="js-loadElements-hide-div" style="display: none"></div>

		
			<?
			global $arrFilter;
			$date = date( 'Y-m-d H:i:s' );
			$arrFilter = Array("<=PROPERTY_EVENT_DATE"=>$date,"!PROPERTY_VIDEO_CODE" => false);
			$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"blog.events.video",
				ComponentsParams::blogList(
					Array(
						"IBLOCK_ID"   => $arParams["IBLOCK_ID"],
						"NEWS_COUNT"  => $arParams["NEWS_COUNT"],
						"SORT_BY1" => "PROPERTY_EVENT_DATE",
						"SORT_ORDER1" => "DESC",
						"DETAIL_URL"  => "/o-kompanii/blog/events/". $arResult["URL_TEMPLATES"]["detail"],
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
