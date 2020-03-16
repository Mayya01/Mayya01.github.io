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
$component->SetResultCacheKeys(array('TAGS')); // чтобы в эпилоге были доступны теги
$tplType = $arParams['SECTION'];
?>




<section class="post-page js-blog">
	<div class="post-page__main post-block">
		<header class="post-block__header post-banner js-blog-header">
			<div class="content-center">
				<? $APPLICATION->IncludeComponent("bitrix:breadcrumb", "breadcrumb_blog", array(
					"START_FROM" => "0",
					"PATH"       => "",
					"SITE_ID"    => SITE_ID
				), false); ?>
				<div class="post-banner__labels">
					<time class="post-banner__date"><?= $arResult['displayDate'];?></time>
					<span class="post-banner__views"><?= $arResult['showCounter'] ?></span>
					<span class="post-banner__selected  js-favorites-link" data-element-id="<?=$arResult['ID']?>"></span>
					<span class="post-banner__search-icon js-blog-header__search-btn"></span>
				</div>
				<h1><? AD_H1($arResult['NAME']) ?></h1>


				<div class="video-preview video-preview--lg">
					<div class="video-preview__video video-preview__video--lg js-wa-youtube-video-player" data-videoid="<?=$arResult['PROPERTIES']['VIDEO_ID']['VALUE']?>">
						<div class="video-preview__player-btn js-wa-youtube-video-player-btn">
							<?if($arResult['RESIZED_PICTURE']['src']):?>
							<img src="<?=$arResult['RESIZED_PICTURE']['src']?>" alt="Лемур Roistat">
							<?endif;?>
						</div>
						<div class="video-preview__frame js-wa-youtube-video-player-frame"></div>
					</div>
				</div>
			</div>
			<div class="search-overlay search-overlay--no-full-height js-blog-header__overlay">
				<div class="search-overlay__overlay"></div>
				<div class="content-center">
					<? $APPLICATION->IncludeComponent(
						"bitrix:search.form",
						"blog2.searchForm",
						array(
							"COMPONENT_TEMPLATE" => "blog.searchForm",
							"PAGE"               => "#SITE_DIR#o-kompanii/blog/search/",
							"USE_SUGGEST"        => "N"
						),
						false
					); ?>
					<? $APPLICATION->IncludeComponent("bitrix:menu", "blog2Menu", Array(
						"ALLOW_MULTI_SELECT"    => "N",
						"CHILD_MENU_TYPE"       => "left",
						"COMPONENT_TEMPLATE"    => ".default",
						"DELAY"                 => "N",
						"MAX_LEVEL"             => "1",
						"MENU_CACHE_GET_VARS"   => "",
						"MENU_CACHE_TIME"       => "3600",
						"MENU_CACHE_TYPE"       => "N",
						"MENU_CACHE_USE_GROUPS" => "Y",
						"ROOT_MENU_TYPE"        => "left",
						"USE_EXT"               => "N",
						//'COUNT'                 => $arParams['PARAMS']
					),
						false
					);?>
					<span class="search-overlay__close-btn js-blog-header__overlay-close-btn"></span>
				</div>
			</div>
		</header>
		<div class="post-block__main">
			<div class="content-center">
				<?= $arResult['~DETAIL_TEXT'] ?>
			</div>
		</div>
		<footer class="post-block__footer">
			<div class="content-center">
				<div class="social-networks post-block__social post-block__social--lg">
					<span class="social-networks__label">Рассказать друзьям</span>
					<script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js" charset="utf-8"></script>
					<script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
					<div class="ya-share2" data-services="vkontakte,facebook,twitter,telegram,whatsapp"></div>
				</div>
				<? if ($arResult["arTags"]) : ?>
					<??>
						<div class="post-tags post-block__tags">
							<? foreach ($arResult['arTags'] as $tag): ?>
								<a href="/o-kompanii/blog/search/themes/<?='?tags[1]=' . urlencode($tag).'&q='.urlencode($tag) ?>"
								   class="post-tags__tag">  <?= $tag ?></a>
							<? endforeach; ?>
						</div>

				<? endif; ?>
			</div>
		</footer>
	</div>
	<div class="post-page__remark">
		<div class="content-center">

			<?
			global $arrSameFilter;
			if (count($arResult['sameArticles'])) {
				$arrSameFilter['ID'] = $arResult['sameArticles'];
			} else {
				$arrSameFilter['!=ID'] = $arResult['ID'];
			}

			$template = 'sameArticles';

			$APPLICATION->IncludeComponent("bitrix:news.list", "blog2.videos.footer", Array(
				"HIDE_DESCRIPTION"                => true,
				"ACTIVE_DATE_FORMAT"              => "d.m.Y",
				"ADD_SECTIONS_CHAIN"              => "N",
				'ADD_ELEMENT_CHAIN'               => 'N',
				"INCLUDE_IBLOCK_INTO_CHAIN"       => "N",
				"AJAX_MODE"                       => "N",
				"AJAX_OPTION_ADDITIONAL"          => "",
				"AJAX_OPTION_HISTORY"             => "N",
				"AJAX_OPTION_JUMP"                => "N",
				"AJAX_OPTION_STYLE"               => "Y",
				"CACHE_FILTER"                    => "N",
				"CACHE_GROUPS"                    => "Y",
				"CACHE_TIME"                      => "36000000",
				"CACHE_TYPE"                      => "A",
				"CHECK_DATES"                     => "Y",
				"COMPONENT_TEMPLATE"              => ".default",
				"DETAIL_URL"                      => "",
				"DISPLAY_BOTTOM_PAGER"            => "Y",
				"DISPLAY_DATE"                    => "Y",
				"DISPLAY_NAME"                    => "Y",
				"DISPLAY_PICTURE"                 => "N",
				"DISPLAY_PREVIEW_TEXT"            => "Y",
				"DISPLAY_TOP_PAGER"               => "N",
				"FIELD_CODE"                      => array("TAGS"),
				"FILTER_NAME"                     => "arrSameFilter",
				"HIDE_LINK_WHEN_NO_DETAIL"        => "N",
				"IBLOCK_ID"                       => $arParams["IBLOCK_ID"],
				"NEWS_COUNT"                      => "4",
				"NEWS_COUNT_MOBILE"               => "2",
				"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
				"PAGER_SHOW_ALL"                  => "Y",
				"PAGER_SHOW_ALWAYS"               => "N",
				"PAGER_TEMPLATE"                  => ".default",
				"PAGER_TITLE"                     => "Новости",
				"PREVIEW_TRUNCATE_LEN"            => "200",
				'FIELD_CODE'                   => array(
					0 => "PREVIEW_PICTURE",
				),
				'PROPERTY_CODE'                   => array(
					0 => "",
					1 => "VIDEO_ID",
					2 => "CLIENT_NAME",
					3 => "CLIENT_LOGO",
					4 => "TASK",
					5 => 'CLIENT_DESCRIPTION',
					6 => 'CLIENT_REVIEW_LINK',
					7 => 'PROJECT_LINK'
				),
				"SET_BROWSER_TITLE"               => "N",
				"SET_LAST_MODIFIED"               => "N",
				"SET_META_DESCRIPTION"            => "N",
				"SET_META_KEYWORDS"               => "N",
				"SET_STATUS_404"                  => "N",
				"SET_TITLE"                       => "N",
				"SHOW_404"                        => "N",
				"SORT_BY1"                        => "ACTIVE_FROM",
				"SORT_BY2"                        => "SORT",
				"SORT_ORDER1"                     => "DESC",
				"SORT_ORDER2"                     => "ASC",
				"SECTION"                         => $arParams['SECTION'],
				"SECTION_URL"                     => $arParams['SECTION_URL'],
			),
				false
			);
			?>

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
					"CUSTOM_TEXT_1" 			 => "Не пропустите свежие видео",
					"CUSTOM_TEXT_2"          => 'Подпишитесь на рассылку и получайте самые свежые видео
																<br class="hide-up-to-md">  1 раз в неделю специально для вас',

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
	</div>
</section>
