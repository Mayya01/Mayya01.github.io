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


<? /* Функционал для тегов
			
			<header class="c-articles__header">
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
								"URL_SEARCH"            => "/o-kompanii/blog/events/video/",
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
			
			
			</header>
			
			*/ ?>


<!--js-tags-component-->
<? $arrFilter["FAKE_FILTER_TAGS"] = $_GET["tags"]; ?>

<section class="c-articles js-articles">
	
	
	<div class="b-event-previews">
	<!--js-loadElements-->
	<div class="js-loadElements js-tags-content ">
		<? if (count($arResult['ITEMS'])): ?>
			
				
				
				<? foreach ($arResult['ITEMS'] as $arItem): ?>
					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'],
						CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'],
						CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"),
						array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					?>
					<div class="b-event-preview  js-event" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
						<div class="b-event-preview__wrapper">
							<div class="b-event-preview__col">
								<a class="b-event-preview__video" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"><img
										class="b-event-preview__img" src="<?= $arItem['DISPLAY_PICTURE'] ?>"
										alt="Планшет"></a>
							</div>
							<div class="b-event-preview__info-col">
								<div class="b-event-preview__activity-type">Вебинар</div>
								<div class="b-event-preview__title"><a href="<?= $arItem['DETAIL_PAGE_URL'] ?>"
																	   class="default-link"><?= $arItem['NAME'] ?></a>
								</div>
								<div class="b-event-preview__row-inline">
									<div class="b-event-preview__iconic-time">
										<div class="iconic-time ">
											<div class="iconic-time__section _calendar">
												<time
													datetime="<?= $arItem['displayDateMonth'] ?>T<?= $arItem['displayTime'] ?>"><?= $arItem['displayDate'] ?>
													в <?= $arItem['displayTime'] ?> <sup>мск</sup></time>
											</div>
											<div class="iconic-time__section _sandglass">
												<time
													datetime="60m"><?= $arItem['PROPERTIES']['DURATION']['VALUE']; ?></time>
											</div>
										</div>
									</div>
									
								</div>
							
							</div>
						</div>
					</div>
				<? endforeach; ?>
			
			
			
			<? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
				<div class="c-blog__loader _webinar-video js-news-loader"
					 data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
					 data-page="<?= ($arResult['NAV_RESULT']->NavPageNomer + 1) ?>"
					 data-lastYear="<?= $arResult['CURRENT_YEAR']; ?>"
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
			<?else:?>
			<div class="_webinar-video"></div>
			<? endif; ?>
		
		
		
		
		<? endif; ?>
	</div>
	<!--js-loadElements-->
	</div>

</section>

<!--js-tags-component-->
