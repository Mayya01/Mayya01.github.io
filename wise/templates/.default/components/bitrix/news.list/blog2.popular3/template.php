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

	<h2>Популярные статьи</h2>
	<?if($arResult['ITEMS'][0]):?>
	<?$arItem = $arResult['ITEMS'][0]; ?>
<div class="js-favorites-block">
	<article class="post-preview post-preview--inline post-preview--bordered">
		<a class="post-preview__img-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"><img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>"></a>
		<div class="post-preview__text">
			<a  href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="post-preview__title h3"><?=$arItem['NAME']?> </a>
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
	<?endif;?>
	<div class="post-previews post-previews--two-columns">

		<? foreach ($arResult["ITEMS"] as $key => $arItem): ?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
		<?if($key == 0) continue;?>
			<article class="post-preview">
				<a class="post-preview__img-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"><img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>"></a>
				<div class="post-preview__text">
					<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="post-preview__title h3"><?=$arItem['NAME']?> </a>
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
</div>
	<div class="more-link">
		<a href="/o-kompanii/blog/articles/ " class="default-link _no-border-bottom _arrowed-right">Все популярные статьи</a>
	</div>

