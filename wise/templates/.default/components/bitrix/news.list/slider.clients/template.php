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
	<div class="content-row slider-clients-row">
		<div class="layout-center-wrapper slider-clients-row__wrap">
			<div class="slider-clients-col">
				<div class="content-col clearfix">
					<h2 class="module-h2 slider-clients-col__h2">Наши клиенты</h2>
				</div>
				<div class="slider-clients js-slider-clients">
					<div class="slider-clients__container slider-clients-container js-slider-clients-container">
						<div class="slider-clients-container__col clearfix">
							<? foreach ($arResult['ITEMS'] as $arItem): ?>
								<? if (is_array($arItem['PREVIEW_PICTURE'])) : ?>
									<? if ($arItem['LETTER_IMG_SRC']) {?>
										<a href="<?if($arItem['LETTER_IMG_SRC']):?><?=$arItem['LETTER_IMG_SRC']?><?else:?>javascript:void(0);<?endif?>" class="slider-clients-item <?if($arItem['WIDE']):?>slider-clients-item--wide<?endif?> js-slider-clients-item slider-clients-item--id<?=$arItem['ID']?> <?if($arItem['LETTER_IMG_SRC']):?>js-fancybox-docs<?endif?>" data-id="<?=$arItem['ID']?>" data-wide="<?if($arItem['WIDE']):?>1<?else:?>0<?endif?>" data-fancybox-title="Рекомендательные письма от клиентов предоставлены на имена юридических лиц группы «ИНТЕЛИС», которые были переименованы в 2010 году в рамках перехода на бренд Wiseadvice.<br><a href='<?=$arItem['LETTER_IMG_SRC']?>' class='underlined-link--small underlined-link underlined-link--red' target=_blank>Открыть оригинал отзыва</a>">
									<? } else { ?>
										<span class="slider-clients-item <?if($arItem['WIDE']):?>slider-clients-item--wide<?endif?> js-slider-clients-item slider-clients-item--id<?=$arItem['ID']?>" data-id="<?=$arItem['ID']?>" data-wide="<?if($arItem['WIDE']):?>1<?else:?>0<?endif?>">
									<? } ?>
										<div class="slider-clients-item__img-holder">
											<div class="slider-clients-item__img-dummy"></div>
											<div class="slider-clients-item__img-vertical-center">
												<img src="<?=$arItem['BANNER']['src']?>" alt="<?=$arItem['NAME']?>" class="slider-clients-item__img">
												<? if ($arItem['LETTER_IMG_SRC']) {?>
												<div class="slider-clients-item__link">
													<span>Отзыв</span>
													<br>
													<span>клиента</span>
												</div>
												<? } ?>
											</div>
										</div>
									<? if ($arItem['LETTER_IMG_SRC']) {?>
										</a>
									<? } else { ?>
										</span>
									<? } ?>
								<? endif ?>
							<? endforeach ?>
						</div>
					</div>
					<div class="slider-clients__nav slider-clients-nav js-nav">
						<div class="slider-clients-nav__holder">
							<a href="javascript:void(0);" class="slider-clients-nav__btn slider-clients-nav__btn--prev js-nav-prev">
								prev
							</a>
							<a href="javascript:void(0);" class="slider-clients-nav__btn slider-clients-nav__btn--next js-nav-next">
								next
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<? endif ?>
