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
<!--js-tags-component-->
<section class="c-articles js-articles">
	<header class="c-articles__header">
		<? if ($arParams['SECTION'] == 'video' || $arParams['SECTION'] == 'articles'){ ?>
			<h1 class="h1 c_list_h1"><?= $arResult['SECTION_NAME']; ?></h1>
		<?}else{?>
		<h2 class="h1 c_list_h1"><?= $arResult['SECTION_NAME']; ?></h2>
		<?}?>
		<div class="js-tags-cloud c_list_tags_cloud">
			<div class="c_list_tags_cloud__title">
				Материалы по темам:
			</div>
			<div class="c_list_tags_cloud__wrapper">
				<? if (count($arResult['TAGS'])): ?>
					<ul class="c-blog__tags">
						<? foreach ($arResult['TAGS'] as $tags): ?>
							<li class="c-blog__tags__li <? if (in_array($tags['NAME'], $arResult['SELECTED_TAGS'])): ?> _selected<? endif; ?>">
								<a class="c-blog__tags__link <? if (in_array($tags['NAME'], $arResult['SELECTED_TAGS'])): ?>_selected <? endif; ?>"
									<? if (in_array($tags['NAME'], $arResult['SELECTED_TAGS'])): ?>
										href="<?= CommonHelper::nfGetCurPageParam('', array(array('tags', array_search($tags['NAME'], $arResult['SELECTED_TAGS'])))) ?>"
									<? else: ?>
										href="<?= CommonHelper::nfGetCurPageParam('tags[' . ($arResult['LAST_KEY']+1) . ']=' . urlencode($tags["NAME"])) ?>"
									<? endif; ?>
								   data-tags="<?= $tags["NAME"]; ?>">
									<?= $tags["NAME"] ?>
								</a>
							</li>
						<? endforeach; ?>
					</ul>
				<?endif;?>
			</div>
		</div>
	</header>
	<!--js-loadElements-->
	<div class="js-tags-content js-loadElements">
		<? if (count($arResult['ITEMS'])): ?>
			<ul class="c-articles__list">
				<? foreach ($arResult["ITEMS"] as $arItem): ?>
					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					?>
					<li class="c-articles__item js-article" id="<?= $this->GetEditAreaId($arItem['ID']); ?>"
					    data-year-target="<?= $arItem['displayYear'] ?>">
						<div class="c-post-preview" data-month-target="<?= $arItem['dateParam']; ?>">
							<div class="h3">
								<a class="default-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
									<?= $arItem['NAME'] ?>
								</a>
							</div>
							<? if ($arParams['SECTION'] == 'video'): ?>
								<div class="c-training-video js-wa-youtube-video-player"
								     data-videoid="<?= $arItem['PROPERTIES']['VIDEO_ID']['VALUE'] ?>">
									<div class="c-training-video__frame js-wa-youtube-video-player-frame"></div>
									<button class="c-training-video__start-btn js-wa-youtube-video-player-btn"
									        type="button">Play
									</button>
								</div>
							<? elseif ($arParams['SECTION'] == 'press'): ?>
								<? if ($arItem['DISPLAY_PICTURE']): ?>
									<a class="c-post-preview__img-link _within-text"
									   href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
										<img class="c-post-preview__img" src="<?= $arItem['DISPLAY_PICTURE'] ?>"
										     alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
									</a>
								<? endif; ?>
							<? endif; ?>
							<p><?= $arItem['PREVIEW_TEXT'] ?></p>
							<ul class="c-post-preview__tags">
								<? foreach ($arItem['arTags'] as $tag): ?>
									<li><a href="?tags[0]=<?= urlencode($tag) ?>"><?= $tag ?></a></li>
								<? endforeach; ?>
							</ul>
						</div>
					</li>
				<? endforeach; ?>
			</ul>
			<? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
				<div class="c-blog__loader _news js-news-loader"
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
			<? endif; ?>
		<? else: ?>
			<h3>Элементов не найдено</h3>
		<? endif; ?>
	</div>
	<!--js-loadElements-->
</section>
<!--js-tags-component-->
