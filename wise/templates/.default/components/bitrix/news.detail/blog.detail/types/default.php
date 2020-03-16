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
<div class="c-post__inner">
    <div class="c-post__main content-area">
		<? include(__DIR__ . '/..' . '/partials/task.php'); ?>
		<? include(__DIR__ . '/..' . '/partials/client.php'); ?>
		<?= $arResult['~DETAIL_TEXT'] ?>
		<? include(__DIR__ . '/..' . '/partials/subscription.php'); ?>
    </div>
    <aside class="c-post__aside js-blog-post-aside">
		<? $APPLICATION->IncludeComponent("bitrix:search.tags.cloud", "news.detail.tags", array(
			"CACHE_TIME"            => "3600",
			"CACHE_TYPE"            => "A",
			"CHECK_DATES"           => "N",
			"COLOR_NEW"             => "fff",
			"COLOR_OLD"             => "ffff",
			"COLOR_TYPE"            => "Y",
			"COMPONENT_TEMPLATE"    => "news.detail.tags",
			"FILTER_NAME"           => "",
			"FONT_MAX"              => "10",
			"FONT_MIN"              => "10",
			"PAGE_ELEMENTS"         => "",
			"PERIOD"                => "",
			"PERIOD_NEW_TAGS"       => "",
			"SHOW_CHAIN"            => "Y",
			"SORT"                  => "CNT",
			"TAGS_INHERIT"          => "Y",
			"URL_SEARCH"            => "/o-kompanii/blog/{$arParams['SECTION']}/",
			"WIDTH"                 => "100%",
			"arrFILTER"             => array(
				0 => "iblock_BLOG",
			),
			"arrFILTER_iblock_BLOG" => array(
				0 => $arParams["IBLOCK_ID"],
			),
			"TITLE"                 => $arResult['TAGS_BLOCK_TITLE'],
			"BASE_URL"              => $arParams['SECTION_URL']
		), false); ?>
        <div class="c-post__aside-item">
            <div class="c-archive js-archive">
                <div class="h3">Архив новостей</div>
				<?
				$years = 0;
				foreach ($arResult['TIMESTAMPS'] as $yKey => $yValues):?>
                    <div class="c-archive__block">
                        <button
                                class="c-archive__year <? if ($years == 0): ?>_opened <? endif; ?>js-show-info"
                                type="button" data-year="<?= $yKey ?>"><?= $yKey ?><?/*(<?= $yValues['value'] ?>)*/
							?>
                        </button>
                        <ul class="c-archive__list <? if ($years == 0): ?>_opened<? endif; ?> js-hidden-info">
							<? foreach ($yValues['months'] as $mKey => $mValue): ?>
                                <li class="c-archive__item">
                                    <a class="c-archive__link <? if ($mValue['active'] ===
																	 'Y'
									): ?>_active<? endif; ?> detail-archive__link"
                                       href="<?= $arResult['LIST_PAGE_URL'] ?>?year=<?= $yKey ?>&month=<?= $mValue['monthNum'] ?>"
                                       data-month="<?= $mValue['monthFilter'] ?>">
										<?= $mKey ?><? /*(<?= $mValue['value'] ?>)*/ ?>
                                    </a>
                                </li>
							<? endforeach; ?>
                        </ul>
                    </div>
					<? $years++;
				endforeach; ?>
            </div>
        </div>
		<?
		global $arrSameFilter;
		if (count($arResult['sameArticles'])) {
			$arrSameFilter['ID'] = $arResult['sameArticles'];
		} else {
			$arrSameFilter['!=ID'] = $arResult['ID'];
		}
		/**
		 * Возможные шаблоны: sameNews, sameArticles
		 */
		$APPLICATION->IncludeComponent("bitrix:news.list", 'sameNews', Array(
			"HIDE_DESCRIPTION"                => true,
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
			"COMPONENT_TEMPLATE"              => ".default",
			"DETAIL_URL"                      => "",
			"DISPLAY_BOTTOM_PAGER"            => "Y",
			"DISPLAY_DATE"                    => "Y",
			"DISPLAY_NAME"                    => "Y",
			"DISPLAY_PICTURE"                 => "Y",
			"DISPLAY_PREVIEW_TEXT"            => "Y",
			"DISPLAY_TOP_PAGER"               => "N",
			"FIELD_CODE"                      => array("TAGS"),
			"FILTER_NAME"                     => "arrSameFilter",
			"HIDE_LINK_WHEN_NO_DETAIL"        => "N",
			"IBLOCK_ID"                       => $arParams["IBLOCK_ID"],
			"IBLOCK_TYPE"                     => "-",
			"INCLUDE_IBLOCK_INTO_CHAIN"       => "N",
			"INCLUDE_SUBSECTIONS"             => "Y",
			"MESSAGE_404"                     => "",
			"NEWS_COUNT"                      => "6",
			"PAGER_BASE_LINK_ENABLE"          => "N",
			"PAGER_DESC_NUMBERING"            => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL"                  => "N",
			"PAGER_SHOW_ALWAYS"               => "N",
			"PAGER_TEMPLATE"                  => ".default",
			"PAGER_TITLE"                     => "Новости",
			"PARENT_SECTION"                  => "",
			"PARENT_SECTION_CODE"             => "",
			"PREVIEW_TRUNCATE_LEN"            => "200",
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
			"SECTION"                         => $arParams['SECTION']
		), false); ?>
    </aside>
</div>
<footer class="c-post__footer">
    <div class="c-post__comments">
		<? $APPLICATION->IncludeComponent("cackle.comments", "", Array(
			"COMPONENT_TEMPLATE" => ".default"
		)); ?>
    </div>
</footer>
