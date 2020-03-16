<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}
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

<? if ($arResult['BLOCKS']) : ?>
	<div class="content-row slider-service-main-row">
		<div class="layout-center-wrapper slider-service-main-row__wrap">
			<div class="slider-service-main-col">
				<div class="slider-service-main js-slider-service-main">
					<div class="slider-service-main__container slider-service-main-container js-slider-service-main-container">
						<div class="slider-service-main-container__col clearfix">
							<? foreach ($arResult['BLOCKS'] as $arItem): ?>
							  	<? if ($arItem['TYPE'] == 'ITEM') : ?>
									<a href="<?=$arItem['LINK']?>" class="slider-service-main-item slider-service-main-item--sect js-slider-service-main-item" style="background-color:#<?=$arItem['BKG_COLOR']?>;">
										<div class="slider-service-main-item__title">
											<span><?=$arItem['NAME']?></span>
										</div>
										<? if (is_array($arItem['LOGO'])) : ?>
											<div class="slider-service-main-item__logo">
												<img src="<?=$arItem['LOGO']['src']?>" alt="<?=$arItem['NAME']?>" class="slider-service-main-item__logo-img">
											</div>
										<? endif ?>
									</a>
								<? else: ?>
									<div class="slider-service-main-item slider-service-main-item--pict js-slider-service-main-item">
										<? if (is_array($arItem['PICTURE'])) : ?>
											<div class="slider-service-main-item__picture">
												<img src="<?=$arItem['SRC']?>" alt="" class="slider-service-main-item__picture-img <?if($arItem['WIDE']):?>slider-service-main-item__picture-img--wide<?endif?>">
											</div>
										<? endif ?>
									</div>
								<? endif ?>
							<? endforeach ?>
						</div>
					</div>
					<div class="slider-service-main__nav slider-service-main-nav js-nav">
						<div class="slider-service-main-nav__holder">
							<a href="javascript:void(0);" class="slider-service-main-nav__btn slider-service-main-nav__btn--prev js-nav-prev">
								prev
							</a>
							<a href="javascript:void(0);" class="slider-service-main-nav__btn slider-service-main-nav__btn--next js-nav-next">
								next
							</a>
						</div>
					</div>
				</div>
				<div class="slider-service-main-inner js-slider-service-main-inner">
					<div class="slider-service-main-inner__container slider-service-main-inner-container">
						<div class="slider-service-main-inner-container__col js-slider-service-main-inner-container">
							<div class="slider-service-main-inner-item clearfix js-slider-service-main-item">
								<span>Делаем Ваш бизнес<br>более прибыльным<br>и безопасным</span>
							</div>
							<div class="slider-service-main-inner-item clearfix js-slider-service-main-item">
								<span>Крупнейшая консалтинговая компания России, созданная после 2003 года с нуля</span>
							</div>
							<div class="slider-service-main-inner-item clearfix js-slider-service-main-item">
								<span>Более 200 услуг<br>по 10 направлениям<br>консалтинга</span>
							</div>
							<div class="slider-service-main-inner-item clearfix js-slider-service-main-item">
								<span>Более 5000 компаний<br>стали нашими клиентами</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<? endif ?>

