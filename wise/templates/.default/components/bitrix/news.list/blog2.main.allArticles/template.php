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

<h2>Все статьи</h2>




<div class="js-favorites-block">
<div class="post-previews post-previews--rows post-previews--three-columns post-previews--transformed-on-mobile">

	<? foreach ($arResult["ITEMS_PART_1"] as $key => $arItem): ?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
		<article class="post-preview post-preview--transformed-on-mobile">
			<a class="post-preview__img-link" href="<?=$arItem['DETAIL_PAGE_URL']?>"><img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>"></a>
			<div class="post-preview__text">
				<a class="post-preview__title post-preview__title--sm h3" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
				<p><?= $arItem['PREVIEW_TEXT'] ?></p>
				<div class="post-preview__remark">
					<div class="post-preview__remark-info">
						<time><?=$arItem['displayDate']?></time>
						<div class="post-preview__remark-wrapper">
							<span><? if ($arItem['arTags'][0]): ?><?= $arItem['arTags'][0] ?><? endif; ?></span>
							<span class="post-preview__remark-star  js-favorites-link" data-element-id="<?=$arItem['ID']?>"></span>
						</div>
					</div>
				</div>
			</div>
		</article>

	<?endforeach;?>
</div>

<?
$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
	"AREA_FILE_SHOW" => "file",
	"PATH" => SITE_DIR . 'local/include/banners/presents_buying_its_prof.php'
));
?>

<div class="post-previews post-previews--rows post-previews--three-columns post-previews--transformed-on-mobile">

	<? foreach ($arResult["ITEMS_PART_2"] as $key => $arItem): ?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
		<article class="post-preview post-preview--transformed-on-mobile">
			<a class="post-preview__img-link" href="<?=$arItem['DETAIL_PAGE_URL']?>"><img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>"></a>
			<div class="post-preview__text">
				<a class="post-preview__title post-preview__title--sm h3"  href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
				<p><?= $arItem['PREVIEW_TEXT'] ?></p>
				<div class="post-preview__remark">
					<div class="post-preview__remark-info">
						<time><?=$arItem['displayDate']?></time>
						<div class="post-preview__remark-wrapper">
							<span><? if ($arItem['arTags'][0]): ?><?= $arItem['arTags'][0] ?><? endif; ?></span>
							<span class="post-preview__remark-star  js-favorites-link" data-element-id="<?=$arItem['ID']?>"></span>
						</div>
					</div>
				</div>
			</div>
		</article>

	<?endforeach;?>
</div>
</div>
<div class="more-link">
	<a href="/o-kompanii/blog/articles/ " class="default-link _no-border-bottom _arrowed-right">Все статьи</a>
</div>
