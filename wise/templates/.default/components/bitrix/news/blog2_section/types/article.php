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
		<div class="content-center js-articles">
			<h1 class="h2">Полезные статьи</h1>
			<div class="js-loadElements-hide-div" style="display: none"></div>
			<?
			global $arrFilter;
			$arrFilter = BlogHelper::getFilterForListElements();
			?>
			<?
			$arrFilter["FAKE_FILTER_TAGS"] = $_GET["tags"];
			$APPLICATION->IncludeComponent("bitrix:news.list", "blog2.allArticles", ComponentsParams::blogList(Array(
				"IBLOCK_ID"         => $arParams["IBLOCK_ID"],
				"NEWS_COUNT"        => $arParams["NEWS_COUNT"],
				"DETAIL_URL"        => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL"       => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["section"],
				"IBLOCK_URL"        => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"SECTION"           => "allArticles",
				"SET_BROWSER_TITLE" => "Y",
				"SHOW_BANNER" => "Y"
			)), false); ?>
		
		</div>
	</div>
</section>
<div style="display: none;">
	<?
	$APPLICATION->IncludeComponent(
		"bitrix:form.result.new",
		"ArticlesSubscribe",
		array(
			"WEB_FORM_ID" => "ARTICLES_SUBSCRIBE",
			"ZATO_DIRECTION" => FormHelper::getDefaultZatoDirection(),
			"IGNORE_CUSTOM_TEMPLATE" => "N",
			"USE_EXTENDED_ERRORS" => "Y",
			"SEF_MODE" => "N",
			"CACHE_TYPE" => "A",
			"CACHE_TIME" => "3600",
			"LIST_URL" => "",
			"EDIT_URL" => "",
			"SUCCESS_URL" => "",
			"CHAIN_ITEM_TEXT" => "",
			"CHAIN_ITEM_LINK" => "",
			"SEF_FOLDER" => "",
			"WEB_FORM_ID2" => "N",
			"ITEM_TITLE_VALUE" => "",
			"ITEM_URL_VALUE" => "",
			"FORM_CONTAINER_CLASS" => "js-ajax", // yeah, i know. It's SEO, baby.
			"FORM_CONTAINER_ID" => "callback-modal",
			"VARIABLE_ALIASES" => array(
				"WEB_FORM_CLASS" => "js-ajax",
				"WEB_FORM_ID" => "ARTICLES_SUBSCRIBE",
				"RESULT_ID" => "RESULT_ID",
			)
		),
		false
	);
	?>
</div>
