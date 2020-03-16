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
	<div class="content-row slider-mmpublication-row">
		<div class="layout-center-wrapper slider-mmpublication-row__wrap">
			<div class="slider-mmpublication-col">
				<div class="content-col clearfix">
					<h2 class="module-h2 slider-mmpublication-col__h2">Наши публикации в СМИ</h2>
					<? if ($APPLICATION->GetCurPage(false) === '/'): ?>
					<a href="/o-kompanii/for-press/" class="slider-mmpublication-col__h-small-link">Сотрудничество со СМИ</a>
					<? endif; ?>
				</div>
				<div class="slider-mmpublication js-slider-mmpublication">
					<div class="slider-mmpublication__container slider-mmpublication-container js-slider-mmpublication-container">
						<div class="slider-mmpublication-container__col clearfix">
							<? foreach ($arResult['ITEMS'] as $arItem): ?>
								<? if (is_array($arItem['PREVIEW_PICTURE'])) : ?>
									<? if (!empty($arItem['LINK'])) {?>
										<a href="<?=$arItem['LINK']?>" target="_blank" class="slider-mmpublication-item <?if($arItem['WIDE']):?>slider-mmpublication-item--wide<?endif?> js-slider-mmpublication-item slider-mmpublication-item--id<?=$arItem['ID']?>" data-id="<?=$arItem['ID']?>" data-wide="<?if($arItem['WIDE']):?>1<?else:?>0<?endif?>">
									<? } else { ?>
										<span class="slider-mmpublication-item <?if($arItem['WIDE']):?>slider-mmpublication-item--wide<?endif?> js-slider-mmpublication-item slider-mmpublication-item--id<?=$arItem['ID']?>" data-id="<?=$arItem['ID']?>" data-wide="<?if($arItem['WIDE']):?>1<?else:?>0<?endif?>">
									<? } ?>
										<div class="slider-mmpublication-item__img-holder">
											<div class="slider-mmpublication-item__img-dummy"></div>
											<div class="slider-mmpublication-item__img-vertical-center">
												<img src="<?=$arItem['BANNER']['src']?>" alt="<?=$arItem['NAME']?>" class="slider-mmpublication-item__img">
												<? if (!empty($arItem['LINK'])) {?>
												<div class="slider-mmpublication-item__link">
													<div class="slider-mmpublication-item__link-vertical-center"><span><?=$arItem['PREVIEW_TEXT']?></span></div>
												</div>
												<? } ?>
											</div>
										</div>
									<? if (!empty($arItem['LINK'])) {?>
										</a>
									<? } else { ?>
										</span>
									<? } ?>
								<? endif ?>
							<? endforeach ?>
						</div>
					</div>
					<div class="slider-mmpublication__nav slider-mmpublication-nav js-nav">
						<div class="slider-mmpublication-nav__holder">
							<a href="javascript:void(0);" class="slider-mmpublication-nav__btn slider-mmpublication-nav__btn--prev js-nav-prev">
								prev
							</a>
							<a href="javascript:void(0);" class="slider-mmpublication-nav__btn slider-mmpublication-nav__btn--next js-nav-next">
								next
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<? endif ?>