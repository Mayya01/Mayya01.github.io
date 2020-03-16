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
$this->setFrameMode(true); ?>
<!--js-tags-component-->
<section class="c-news js-news">
	<header class="c-news__header">
		<? if ($arParams['SECTION'] == 'novosti'){ ?>
			<h1 class="h1 c_list_h1"><?= $arResult['SECTION_NAME']; ?></h1>
		<?}else{?>
			<h2 class="h1 c_list_h1"><?= $arResult['SECTION_NAME'] ?></h2>
		<?}?>
		<div class="c-articles">
			<div class="js-tags-cloud c_list_tags_cloud">
				<div class="c_list_tags_cloud__title">
					Материалы по темам:
				</div>
				<div class="c_list_tags_cloud__wrapper">
					<? $APPLICATION->IncludeComponent(
						"bitrix:search.tags.cloud",
						"news.tags",
						array(
							"CACHE_TIME"            => "3600",
							"CACHE_TYPE"            => "N",
							"CHECK_DATES"           => "N",
							"COLOR_NEW"             => "fff",
							"COLOR_OLD"             => "ffff",
							"COLOR_TYPE"            => "Y",
							"COMPONENT_TEMPLATE"    => "news.tags",
							"FILTER_NAME"           => "",
							"FONT_MAX"              => "10",
							"FONT_MIN"              => "10",
							"PAGE_ELEMENTS"         => "",
							"PERIOD"                => "",
							"PERIOD_NEW_TAGS"       => "",
							"SHOW_CHAIN"            => "Y",
							"SORT"                  => "CNT",
							"TAGS_INHERIT"          => "Y",
							"URL_SEARCH"            => "/o-kompanii/blog/novosti/",
							"WIDTH"                 => "100%",
							"arrFILTER"             => array(
								0 => "iblock_BLOG",
							),
							"arrFILTER_iblock_BLOG" => array(
								0 => $arParams["IBLOCK_ID"],
							)
						),
						false
					); ?>
				</div>
			</div>
		</div>
	</header>
	<div class="js-tags-content">
		<div class="c-news__inner">
			<?
			if (count($arResult['ITEMS'])):?>
				<!--js-loadElements-->
				<div class="c-news__two-thirds-col js-loadElements">
					<? $realYear = date('Y'); ?>
					<? $curYear = $arResult['LAST_YEAR_PREV_PAGE']; ?>
					<ul class="c-news__list clearme js-news-list  <? if ($_REQUEST["AJAX"]): ?>js-archive-news-list-ajax<? else: ?>js-archive-news-list<? endif ?>">
						<? foreach ($arResult['TIMESTAMPS'] as $key => $value): ?>
							<? if ((int)$value['valuesInCurrentPage'] > 0): ?>
								<? $i = 0; ?>
								<? if ($curYear != $key && $realYear != $key): ?>
									<li class="h1 js-news-archive-item" data-year-target="<?= $key ?>"><span class="js-news-archive-year"><?= $key; ?></span></li>
									<? $curYear = $key; ?>
								<? elseif ($realYear == $key): ?>
									<li data-year-target="<?= $key ?>"
									    style="display:none">
										<?= $key; ?>
									</li>
								<? endif; ?>
								<? foreach ($arResult['ITEMS'] as $arItem): ?>
									<?
									$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
									$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
									?>
									<? if ($arItem['displayYear'] == $key): ?>
										<li class="c-news__item _half js-news-archive-item"
										    data-month-target="<?= $arResult['TIMESTAMPS'][$key]['months'][$arItem['month']]['monthFilter']; ?>"
										    id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
											<? if ($i == 0 && !$curYear): ?>
												<div class="c-archive _hide js-archive">
													<div class="h3">Архив новостей</div>
													<? foreach ($arResult['TIMESTAMPS'] as $archiveYear => $archiveVal): ?>
														<div class="c-archive__block">
															<button
																class="c-archive__year <? if ($archiveYear == $arResult['ITEMS'][0]['displayYear']): ?>_opened<? endif; ?> js-show-info"
																type="button" data-year="<?= $archiveYear; ?>">
																<?= $archiveYear; ?> <?/*(<?= $archiveVal['value']; ?>)*/?>
															</button>
															<ul class="c-archive__list <? if ($archiveYear == $arResult['ITEMS'][0]['displayYear']): ?>_opened<? endif; ?> js-hidden-info">
																<? foreach ($archiveVal['months'] as $archiveMonth => $archiveMonthValue): ?>
																	<li class="c-archive__item">
																		<a class="c-archive__link <? if ($archiveMonthValue['ACTIVE'] == 'Y'): ?> _active<? endif; ?>"
																		   href="javascript:void(0)"
																		   data-month="<?= $archiveMonthValue['monthFilter']; ?>"
																		><?= $archiveMonth; ?>
																			<?/*(<?= $archiveMonthValue['value'] ?>)*/?></a>
																	</li>
																<? endforeach; ?>
															</ul>
														</div>
													<? endforeach; ?>
												</div>
											<? endif; ?>
											<div class="c-post-preview _new">
												<? if ($arItem['DISPLAY_PICTURE']): ?>
													<a class="c-post-preview__img-link"
													   href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
														<img class="c-post-preview__img"
														     src="<?= $arItem['DISPLAY_PICTURE'] ?>"
														     alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
													</a>
												<? endif; ?>
												<date class="c-post-preview__date"><?= $arItem['displayDate'] ?></date>
												<div class="h3">
													<a class="default-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
														<?= $arItem['NAME'] ?>
													</a>
												</div>
												<p><?= $arItem['~PREVIEW_TEXT'] ?></p>
												<ul class="c-post-preview__tags">
													<? foreach ($arItem['arTags'] as $tag): ?>
														<li>
															<a href="?tags[0]=<?= urlencode($tag) ?>">
																<?= $tag ?>
															</a>
														</li>
													<? endforeach; ?>
												</ul>
											</div>
											<? $i++; ?>
										</li>
									<? endif; ?>
								<? endforeach; ?>
							<? endif; ?>
						<? endforeach; ?>
					</ul>
					<div class="js-loader-wrapper">
						<? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
							<div class="c-blog__loader _news js-news-loader"
							     data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
							     data-page="<?= ($arResult['NAV_RESULT']->NavPageNomer + 1) ?>"
							     data-lastYear="<?= $arResult['LAST_YEAR']; ?>"
							     data-lastPage="<?= $arResult['NAV_RESULT']->NavPageCount ?>"
							     data-count="<?= $arResult['AJAX_PAGEN_DATA']['elementOnNextPage'] ?>">
								<span><?= $arResult['AJAX_PAGEN_DATA']['formattedText'] ?></span>
                                <div class="_hide">
									<?php
									$APPLICATION->IncludeComponent('bitrix:system.pagenavigation', 'hide-pager', Array(
										'NAV_RESULT' => $arResult['NAV_RESULT']
									));
									?>
                                </div>
							</div>
						<? endif; ?>
					</div>
				</div>
				<!--js-loadElements-->
				<div class="c-news__one-third-col">
					<div class="c-archive js-archive js-sticky-scroll">
						<div class="h3">Архив новостей</div>
						<? foreach ($arResult['TIMESTAMPS'] as $archiveYear => $archiveVal): ?>
							<div class="c-archive__block">
								<button
									class="c-archive__year <? if ($archiveYear == $arResult['ITEMS'][0]['displayYear']): ?>_opened<? endif; ?> js-show-info"
									type="button" data-year="<?= $archiveYear; ?>">
									<?= $archiveYear; ?> <?/*(<?= $archiveVal['value']; ?>)*/?>
								</button>
								<ul class="c-archive__list <? if ($archiveYear == $arResult['ITEMS'][0]['displayYear']): ?>_opened<? endif; ?> js-hidden-info">
									<? foreach ($archiveVal['months'] as $archiveMonth => $archiveMonthValue): ?>
										<li class="c-archive__item">
											<a class="c-archive__link <? if ($archiveMonthValue['active'] == 'Y'): ?> _active<? endif; ?>"
											   href="javascript:void(0)"
											   data-month="<?= $archiveMonthValue['monthFilter']; ?>"><?= $archiveMonth; ?>
												<?/*(<?= $archiveMonthValue['value'] ?>)*/?></a>
										</li>
									<? endforeach; ?>
								</ul>
							</div>
						<? endforeach; ?>
					</div>
				</div>
			<? else: ?>
				<h3>Элементов не найдено</h3>
			<? endif; ?>
		</div>
	</div>
</section>
<!--js-tags-component-->
