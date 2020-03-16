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
			<h1 class="h2">Видео</h1>
			<div class="js-loadElements-hide-div" style="display: none"></div>
			<?
			global $arrFilter;
			$arrFilter = BlogHelper::getFilterForListElements();
			?>
			<?
			$arrFilter["FAKE_FILTER_TAGS"] = $_GET["tags"];
			$APPLICATION->IncludeComponent("bitrix:news.list", "blog2.allNews", ComponentsParams::blogList(Array(
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
