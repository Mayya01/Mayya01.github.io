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
				"H1" => "Блог. Все о продуктах 1С"
				//	"H1_AS_DIV" => "Y"
			),
			false
		); ?>
		<div class="blog__content">
			<div class="content-center">
				<?
				global $mostPopularFilter;
				$mostPopularFilter = array(
					'!PROPERTY_FIRST_MOST_INTERESTING' => false
				);
				?>
				
					<? $APPLICATION->IncludeComponent(
						"bitrix:news.list",
						'blog2.popular3',
						ComponentsParams::blogMainList(Array(
							"IBLOCK_ID"   => EnvironmentHelper::getParam("articlesIblockID"),
							"NEWS_COUNT"  =>	3,
							"DETAIL_URL"  => $arResult["FOLDER"] . 'articles/' . $arResult["URL_TEMPLATES"]["detail"],
							"SECTION_URL" => $arResult["FOLDER"] . 'articles/',
							"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
							"SECTION"     => 'articlesPopular',
							"SORT_BY1" => "SHOW_COUNTER",
							"SORT_ORDER1" => "DESC",
							"FILTER_NAME" => "mostPopularFilter"
						)),
						false
					); ?>
				
				
				
				<?
				$APPLICATION->IncludeComponent(
					"bitrix:form.result.new",
					"blog2.subscribe",
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
				
				
				<? $APPLICATION->IncludeComponent(
					"bitrix:news.list",
					'blog2.main.allArticles',
					ComponentsParams::blogMainList(Array(
						"IBLOCK_ID"   => EnvironmentHelper::getParam("articlesIblockID"),
						"NEWS_COUNT"  =>	9,
						"DETAIL_URL"  => $arResult["FOLDER"] . 'articles/' . $arResult["URL_TEMPLATES"]["detail"],
						"SECTION_URL" => $arResult["FOLDER"] . 'articles/',
						"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
						"SECTION"     => 'allArticles',
						// "SORT_BY1" => "SHOW_COUNTER",
						// "SORT_ORDER1" => "DESC",
					)),
					false
				); ?>
			</div>
		</div>
		
		
		<? $APPLICATION->IncludeComponent(
			"bitrix:news.list",
			'blog2.videoList',
			ComponentsParams::blogMainList(Array(
				"IBLOCK_ID"   => EnvironmentHelper::getParam("videoIblockID"),
				"NEWS_COUNT"  => 5,
				"DETAIL_URL"  => $arResult["FOLDER"] . 'video/' . $arResult["URL_TEMPLATES"]["detail"],
				"SECTION_URL" => $arResult["FOLDER"] . 'video/',
				"IBLOCK_URL"  => $arResult["FOLDER"] . $arResult["URL_TEMPLATES"]["news"],
				"SECTION"     => 'video'
			)),
			false
		); ?>
		
		<?
		//Фильтр для рандомной выборки элементов
		global $courseFilter;
		$arCoursesId = array();
		$arFilter = array('IBLOCK_ID' => EnvironmentHelper::getParam("coursesIBlockID"));
		$rsSections = CIBlockSection::GetList(array('RAND' => 'ASC'), $arFilter);
		while ($arSection = $rsSections->Fetch())
		{
			$arCoursesId[] = $arSection["ID"];
		}
		$courseFilter["ID"] = array_rand($arCoursesId,3);
		
		?>
		<div class="blog__content">
			<div class="content-center">
				<?
				$APPLICATION->IncludeComponent("bitrix:catalog.section.list","blog2.coursesList",
					Array(
						"NO_SHOW_H2" => 'Y',
						"VIEW_MODE" => "TEXT",
						"SHOW_PARENT_NAME" => "Y",
						"IBLOCK_TYPE" => EnvironmentHelper::getParam("coursesIBlockCode"),
						"IBLOCK_ID" => EnvironmentHelper::getParam("coursesIBlockID"),
						"SECTION_ID" => false,
						"SECTION_CODE" => "",
						"SECTION_URL" => "",
						"COUNT_ELEMENTS" => "Y",
						"TOP_DEPTH" => "1",
						"SECTION_FIELDS" => "",
						"SECTION_USER_FIELDS" => "",
						"ADD_SECTIONS_CHAIN" => "Y",
						"CACHE_TYPE" => "A",
						"CACHE_TIME" => "36000000",
						"CACHE_NOTES" => "",
						"CACHE_GROUPS" => "Y",
						"SECTIONS_COUNT" => "3",
						"FILTER_VALUE" => $courseFilter,
						"CLASS"	=> "_gray",
						"SHOW"	=> array("top"),
						"RAND_SORT_ITEMS" => "Y" //Рандомная сортировка результатов
					)
				);?>
				
				
				
				
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => SITE_DIR . 'local/include/banners/buhgalteria-prof-instrument.php'
				));
				?>
				
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
