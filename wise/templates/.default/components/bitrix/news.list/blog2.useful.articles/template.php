<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>

<div class="post-previews post-previews--three-columns post-previews--transformed-on-mobile js-favorites-block">
	<? $ii = 0 ?>
	<? foreach($arResult["ITEMS"] as $arItem ): ?>
	<article class="post-preview post-preview--transformed-on-mobile">
		<a class="post-preview__img-link" href="<?=$arItem["DETAIL_PAGE_URL"] ?>">
			<img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
		</a>
		<div class="post-preview__text">
			<a href="<?=$arItem["DETAIL_PAGE_URL"] ?>" class="post-preview__title post-preview__title--sm h3"><?=$arItem['NAME']?></a>
			<p><?=$arItem['PREVIEW_TEXT']?></p>
			<div class="post-preview__remark">
				<div class="post-preview__remark-info ">
					<time><?=$arItem['displayDate']?></time>
					<div class="post-preview__remark-wrapper">
						<span><? if ($arItem['arTags'][0]): ?><?= $arItem['arTags'][0] ?><? endif; ?></span>
						<span class="post-preview__remark-star  js-favorites-link" data-element-id="<?=$arItem['ID']?>"></span>
					</div>
				</div>
			</div>
		</div>
	</article>
	<? endforeach; ?>

</div>
<div class="more-link">
	<a href="<?if($arParams['ALL_ITEMS_URL']):?><?=$arParams['ALL_ITEMS_URL']?><?else:?>/o-kompanii/blog/<?=$arParams['SECTION']?>/<?endif;?>"
	   class="default-link _no-border-bottom _arrowed-right"><?=$arParams['PAGER_TITLE']?></a>
</div>

