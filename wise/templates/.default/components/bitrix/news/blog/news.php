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
<section class="c-blog">
	<div class="content-center">
		<? $APPLICATION->IncludeComponent(
			'wiseadvice:blog.header',
			'',
			array(),
			false
		); ?>

		<? $APPLICATION->IncludeComponent(
			'wiseadvice:blog.most_interesting',
			'',
			array(),
			false
		); ?>
		
		<?
		$date = date( 'Y-m-d H:i:s' );
		global $arFilterEvent;
		$arFilterEvent = Array(">=PROPERTY_EVENT_DATE"=>$date);
		$APPLICATION->IncludeComponent(
			"bitrix:news.list",
			'blog.main.events',
			ComponentsParams::blogEventsList(Array(
				"IBLOCK_ID"   => EnvironmentHelper::getParam("eventsIblockID"),
				"NEWS_COUNT"  => 2,
				"SORT_BY1" => "PROPERTY_EVENT_DATE",
				"SORT_ORDER1" => "DESC",
				"DETAIL_URL"  => $arResult["FOLDER"] . 'events/' . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . 'events/',
				"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"FILTER_NAME" => "arFilterEvent"
			)),
			false
		); ?>
		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			'blog.main.list.3col',
			ComponentsParams::blogMainList(Array(
				"IBLOCK_ID"   => EnvironmentHelper::getParam("newsIblockID"),
				"NEWS_COUNT"  => 6,
				"DETAIL_URL"  => $arResult["FOLDER"] . 'novosti/' . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . 'novosti/',
				"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"SECTION"     => 'novosti'
			)),
			false
		); ?>
		
		

		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			'blog.main.list.2col',
			ComponentsParams::blogMainList(Array(
				"IBLOCK_ID"   => EnvironmentHelper::getParam("pressReleasesIblockID"),
				"NEWS_COUNT"  => 4,
				"DETAIL_URL"  => $arResult["FOLDER"] . 'press/' . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . 'press/',
				"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"SECTION"     => 'press'
			)),
			false
		); ?>

		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			'blog.main.list.2col',
			ComponentsParams::blogMainList(Array(
				"IBLOCK_ID"   => EnvironmentHelper::getParam("articlesIblockID"),
				"NEWS_COUNT"  => 6,
				"DETAIL_URL"  => $arResult["FOLDER"] . 'articles' . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . 'articles/',
				"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"SECTION"     => 'articles'
			)),
			false
		); ?>

		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			'blog.main.list.2col',
			ComponentsParams::blogMainList(Array(
				"IBLOCK_ID"   => EnvironmentHelper::getParam("videoIblockID"),
				"NEWS_COUNT"  => 4,
				"DETAIL_URL"  => $arResult["FOLDER"] . 'video/' . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . 'video/',
				"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"SECTION"     => 'video'
			)),
			false
		); ?>
	</div>
</section>
