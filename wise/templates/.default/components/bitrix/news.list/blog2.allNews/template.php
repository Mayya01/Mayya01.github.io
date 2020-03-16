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

<!--js-loadElements-->
<div class="js-loadElements">

<div class="post-previews post-previews--rows post-previews--three-columns post-previews--transformed-on-mobile  js-favorites-block">

	<? foreach ($arResult["ITEMS_PART_1"] as $key => $arItem): ?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
		<article class="post-preview post-preview--transformed-on-mobile js-blog-news-item">
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
		<article class="post-preview post-preview--transformed-on-mobile js-blog-news-item">
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
		 data-itemsType="news"
	>
		<a  href="javascript:void(0)" class="show-more__link">
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
