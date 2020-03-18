<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
<? if ($arResult['ITEMS']) : ?>
	<div class="wa-news-list-2-3-col clearfix">
		<div class="content-col clearfix">
			<h2 class="module-h2 wa-news-list-2-3-col__h2">Новости WiseAdvice</h2>
		</div>
		<div class="wa-news-list-2-3-col__grid wa-news-list-2-3-col-grid clearfix js-wa-news-list-2-3-col">
			<div class="wa-news-list-2-3-col-grid__col clearfix js-items-container">
				<? foreach ($arResult['ITEMS'] as $arItem): ?>
					<div class="wa-news-list-2-3-col__item wa-news-list-2-3-col-item js-item">
						<div class="wa-news-list-2-3-col-item__holder">
							<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="wa-news-list-2-3-col-item__link">
								<? if (is_array($arItem['PREVIEW_PICTURE'])) : ?>
									<div class="wa-news-list-2-3-col-item__img-holder">
										<? $previewThumb = CFile::ResizeImageGet($arItem['PREVIEW_PICTURE'], array('width' => '480', 'height' => '164'), BX_RESIZE_IMAGE_PROPORTIONAL, true); ?>
										<img width="<?= ($previewThumb['width']/2) ?>" height="auto" src="<?=$previewThumb['src']?>" alt="<?=$arItem['NAME']?>" class="wa-news-list-2-3-col-item__img">
									</div>
								<? endif ?>
								<div class="wa-news-list-2-3-col-item__date">
									<?=$arItem['DISPLAY_ACTIVE_FROM']?>
								</div>
								<div class="wa-news-list-2-3-col-item__name">
									<?=$arItem['NAME']?>
								</div>
							</a>
						</div>
					</div>
				<? endforeach ?>
			</div>
		</div>
	</div>
<? endif ?>
