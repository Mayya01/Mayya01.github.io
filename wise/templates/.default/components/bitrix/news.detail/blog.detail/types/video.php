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
?>
<div class="c-video-player">
    <div class="c-video-player__container js-wa-youtube-video-player"
         data-videoid="<?= $arResult['PROPERTIES']['VIDEO_ID']['VALUE'] ?>">
        <div class="c-video-player__video js-wa-youtube-video-player-frame"></div>
        <button class="c-video-player__start-btn js-wa-youtube-video-player-btn" type="button">Play
            <span>
                <svg class="c-video-player__start-btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135">
                    <circle stroke-miterlimit="10" cx="67.5" cy="67.5" r="63.5"/>
                    <path stroke-miterlimit="10" d="M58.333 50.833v35l31-17.5z"/>
                </svg>
            </span>
        </button>
    </div>
</div>
<div class="c-post__inner js-sticky">
    <div class="c-post__main content-area">
		<? include(__DIR__ . '/..' . '/partials/task.php'); ?>
		<? include(__DIR__ . '/..' . '/partials/client.php'); ?>
		<?= $arResult['~DETAIL_TEXT'] ?>
		<? include(__DIR__ . '/..' . '/partials/subscription.php'); ?>
    </div>
    <aside class="c-post__aside js-blog-post-aside">
        <div class="c-post__aside-inner">
			<? // Асихронная загрузка блока "Поиск статей по тегам"
			LazyLoad::includeFile(SITE_DIR . 'local/include/blocks/articles/cloud_article.php', [
				'SECTION_URL'      => $arParams['SECTION_URL'],
				'TAGS_BLOCK_TITLE' => $arResult['TAGS_BLOCK_TITLE'],
				'SECTION'          => $arParams['SECTION'],
				'IBLOCK_ID'        => $arParams['IBLOCK_ID']
			]); ?>
    </aside>
</div>
<footer class="c-post__footer">
    <div class="c-post__comments">
		<? $APPLICATION->IncludeComponent("cackle.comments", "", Array(
			"COMPONENT_TEMPLATE" => ".default"
		)); ?>
    </div>
</footer>
<section class="c-articles js-articles">
    <h2 class="h1">Другие обучающие видео</h2>
	<? $APPLICATION->IncludeComponent("bitrix:news.list", "sameVideos", array(
		"ACTIVE_DATE_FORMAT"              => "d.m.Y",
		"ADD_SECTIONS_CHAIN"              => "N",
		'ADD_ELEMENT_CHAIN'        => 'N',
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
		"COMPONENT_TEMPLATE"              => "sameVideos",
		"DETAIL_URL"                      => "",
		"DISPLAY_BOTTOM_PAGER"            => "Y",
		"DISPLAY_DATE"                    => "Y",
		"DISPLAY_NAME"                    => "Y",
		"DISPLAY_PICTURE"                 => "Y",
		"DISPLAY_PREVIEW_TEXT"            => "Y",
		"DISPLAY_TOP_PAGER"               => "N",
		"FIELD_CODE"                      => array(
			0 => "TAGS",
			1 => "",
		),
		"FILTER_NAME"                     => "arrSameFilter",
		"HIDE_LINK_WHEN_NO_DETAIL"        => "N",
		"IBLOCK_ID"                       => $arParams["IBLOCK_ID"],
		"IBLOCK_TYPE"                     => "-",
		"INCLUDE_IBLOCK_INTO_CHAIN"       => "N",
		"INCLUDE_SUBSECTIONS"             => "Y",
		"MESSAGE_404"                     => "",
		"NEWS_COUNT"                      => "4",
		"PAGER_BASE_LINK_ENABLE"          => "N",
		"PAGER_DESC_NUMBERING"            => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL"                  => "N",
		"PAGER_SHOW_ALWAYS"               => "N",
		"PAGER_TEMPLATE"                  => ".default",
		"PAGER_TITLE"                     => "Новости",
		"PARENT_SECTION"                  => "",
		"PARENT_SECTION_CODE"             => "",
		"PREVIEW_TRUNCATE_LEN"            => "",
		"PROPERTY_CODE"                   => array(
			0 => "",
			1 => "VIDEO_ID",
			2 => "",
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
		"SORT_ORDER2"                     => "ASC"
	), false); ?>
</section>