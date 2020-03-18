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
	<div class="actual-news-list-1-3-col clearfix">
		<div class="content-col clearfix">
			<h2 class="module-h2 actual-news-list-1-3-col__h2">Актуально</h2>
		</div>
		<div class="actual-news-list-1-3-col__grid actual-news-list-1-3-col-grid clearfix">
			<div class="actual-news-list-1-3-col-grid__col clearfix">
				<? $i = 0; ?>
				<? foreach ($arResult['ITEMS'] as $arItem): ?>
					<? $addClass = ' actual-news-list-1-3-col-item--md-hide '; $i++; ?>
				  	<? if ($i < 4) $addClass = ' '; elseif ($i < 5) $addClass = ' actual-news-list-1-3-col-item--xs-hide '; ?>
					<div class="actual-news-list-1-3-col__item<?= $addClass ?>actual-news-list-1-3-col-item">
						<div class="actual-news-list-1-3-col-item__holder">
							<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="actual-news-list-1-3-col-item__link">
								<div class="actual-news-list-1-3-col-item__date">
									<?=$arItem['DISPLAY_ACTIVE_FROM']?>
								</div>
								<div class="actual-news-list-1-3-col-item__name">
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
