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
<?if($arParams['SHOW_TAGS_CLOUD'] == "Y"):?>
	<div class="js-tags2-hide-div" style="display: none"></div>
<?endif;?>


<div class="js-loadElements-hide-div" style="display: none"></div>
<!--js-loadElements-->
<?if($arParams['SHOW_TAGS_CLOUD'] == "Y"):?>
	<? if (count($arParams['FOUND_TAGS'])): ?>
	<div class="js-tags2-cloud ">
		<div class="post-tags hide-up-to-md">
			<? foreach ($arParams['FOUND_TAGS'] as $tag): ?>
				<?if($tag): ?>
					<a class="post-tags__tag <? if (in_array($tag, $arResult['SELECTED_TAGS'])): ?>is-active <? endif; ?>"
						<? if (in_array($tag, $arResult['SELECTED_TAGS'])): ?>
							href="<?= CommonHelper::nfGetCurPageParam('', array(array('tags', array_search($tag, $arResult['SELECTED_TAGS'])))) ?>"
						<? else: ?>
							href="<?= CommonHelper::nfGetCurPageParam('tags[' . ($arResult['LAST_KEY']+1) . ']=' . urlencode($tag)) ?>"
						<? endif; ?>
					   data-tags="<?= $tag; ?>">
						<?= $tag ?>
					</a>
				<? endif; ?>
			<? endforeach; ?>
		</div>
		<div class="mobile-select hide-md">
			<select name="type" id="type"  class="js-tags2-select" placeholder="Все" multiple>
				<? foreach ($arParams['FOUND_TAGS'] as $tag): ?>
					<?if($tag): ?>
						<? if (in_array($tag, $arResult['SELECTED_TAGS'])): ?>
							<option value="<?= $tag; ?>" data-href="<?= CommonHelper::nfGetCurPageParam('', array(array('tags', array_search($tag, $arResult['SELECTED_TAGS'])))) ?>" selected><?= $tag; ?></option>
						<? else: ?>
							<option value="<?= $tag; ?>" data-href="<?= CommonHelper::nfGetCurPageParam('tags[' . ($arResult['LAST_KEY']+1) . ']=' . urlencode($tag)) ?>"><?= $tag; ?></option>
						<? endif; ?>
					<? endif; ?>
				<? endforeach; ?>
			</select>
		</div>
		
	</div>
	<?endif;?>
	<div class="js-tags2-hide-div" style="display: none"></div>
<?endif;?>

<div class="js-loadElements js-tags2-content <?=$arParams['ADDITIONAL_CLASS']?>">

<div class="post-previews post-previews--rows post-previews--three-columns post-previews--transformed-on-mobile  js-favorites-block">

	<? foreach ($arResult["ITEMS_PART_1"] as $key => $arItem): ?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
		<article class="post-preview post-preview--transformed-on-mobile js-blog-articles-item">
			<a class="post-preview__img-link" href="<?=$arItem['DETAIL_PAGE_URL']?>"><img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>"></a>
			<div class="post-preview__text">
				<a class="post-preview__title post-preview__title--sm h3" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
				<p><?= $arItem['PREVIEW_TEXT'] ?></p>
				<div class="post-preview__remark">
					<div class="post-preview__remark-info">
						<time><?=$arItem['displayDate']?></time>
						<div class="post-preview__remark-wrapper">
							<? if ($arItem['arTags'][0]): ?>
								<span><?= $arItem['arTags'][0] ?></span>
							<? endif; ?>
							<span class="post-preview__remark-star  js-favorites-link" data-element-id="<?=$arItem['ID']?>"></span>
						</div>
					</div>
				</div>
			</div>
		</article>

	<?endforeach;?>
</div>

<?if($arResult["ITEMS_PART_2"]):?>
<?
$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
	"AREA_FILE_SHOW" => "file",
	"PATH" => SITE_DIR . 'local/include/banners/presents_buying_its_prof.php'
));
?>
<div class="post-previews post-previews--rows post-previews--three-columns post-previews--transformed-on-mobile js-favorites-block">
	<? foreach ($arResult["ITEMS_PART_2"] as $key => $arItem): ?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
		<article class="post-preview post-preview--transformed-on-mobile js-blog-articles-item">
			<a class="post-preview__img-link" href="<?=$arItem['DETAIL_PAGE_URL']?>"><img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>"></a>
			<div class="post-preview__text">
				<a class="post-preview__title post-preview__title--sm h3" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
				<p><?= $arItem['PREVIEW_TEXT'] ?></p>
				<div class="post-preview__remark">
					<div class="post-preview__remark-info">
						<time><?=$arItem['displayDate']?></time>
						<div class="post-preview__remark-wrapper">
							<? if ($arItem['arTags'][0]): ?>
								<span><?= $arItem['arTags'][0] ?></span>
							<? endif; ?>
							<span class="post-preview__remark-star  js-favorites-link" data-element-id="<?=$arItem['ID']?>"></span>
						</div>
					</div>
				</div>
			</div>
		</article>
	<?endforeach;?>
</div>
<?endif;?>

<? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
	<div class="js-blog__loader show-more"
		 data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
		 data-page="<?= ($arResult['NAV_RESULT']->NavPageNomer + 1) ?>"
		 data-lastYear="<?= $arResult['CURRENT_YEAR']; ?>"
		 data-lastPage="<?= $arResult['NAV_RESULT']->NavPageCount ?>"
		 data-count="<?= $arResult['AJAX_PAGEN_DATA']['elementOnNextPage'] ?>"
		 data-itemsType="articles"
	>
		<a href="javascript:void(0)" class="show-more__link">
			<span>
				<?= $arResult['AJAX_PAGEN_DATA']['formattedText'] ?>
			</span>
		</a>
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
<!--js-loadElements-->
<?if($arParams['IS_FAVORITES'] == "Y"):?>
	<?if(!$arResult["ITEMS_PART_1"] && !$arResult["ITEMS"]):?>
		<h2>У вас ещё нет избранных элементов.</h2>
	<?endif;?>
<?endif;?>
