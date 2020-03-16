<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>

<h2 class="light">Другие обучающие видео</h2>
<div class="video-previews video-previews--four-columns">
	
	<? foreach($arResult["ITEMS"] as $arItem ): ?>
	<div class="video-preview">
		<a href="<?=$arItem["DETAIL_PAGE_URL"] ?>" class="video-preview__video-link">
			<img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
		</a>
		<div class="video-preview__text">
			<h3 class="video-preview__title video-preview__title--black"><?=$arItem['NAME']?></h3>
		</div>
	</div>
	<? endforeach; ?>


</div>
<div class="more-link">
	<a href="/o-kompanii/blog/video/" class="default-link _no-border-bottom _arrowed-right">Все видео</a>
</div>


