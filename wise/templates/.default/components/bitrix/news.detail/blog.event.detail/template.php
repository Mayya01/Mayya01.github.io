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


<section class="c-post">
	<div class="content-center">
		<header class="c-post__header _mb36">
			<h1 class="h1">
				<?=$arResult['NAME']; ?>
			</h1>
			<div class="clearme">
				<div class="c-post__header-left-col">
					<?= $arResult['PROPERTIES']['EVENT_TYPE']['TEXT'] ?>
				</div>
				<div class="c-post__header-right-col hide-up-to-md">
					<div class="c-post__share">
						Поделитесь:
						<script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js" charset="utf-8"></script>
						<script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
						<div class="ya-share2" data-services="vkontakte,facebook,gplus,twitter,linkedin"></div>
					</div>
				</div>
			</div>
		</header>
		
		<div class="c-post__inner">
			<div class="c-post__main content-area ">
				<?if($arResult['PROPERTIES']['VIDEO_CODE']['VALUE']):?>
					<div class=" c-post__video  js-wa-youtube-video-player" data-videoid="<?=$arResult['PROPERTIES']['VIDEO_CODE']['VALUE'];?>">
						<div class=" c-post__video-iframe js-wa-youtube-video-player-frame"></div>
						<button class="c-post__video-btn js-wa-youtube-video-player-btn" type="button">Play</button>
					</div>
				<?endif;?>
				<?=$arResult['~DETAIL_TEXT']?>
			
			</div>
			
			
			<aside class="c-post__aside ">
				<div class="c-post__aside-item">
					<div class="c-post-preview _new">
						<div class="c-post-preview__img-link _mb28"><img class="c-post-preview__img" src="<?=$arResult['PREVIEW_PICTURE']['RESIZED']['src']?>" alt="Планшет"></div>
						<div class="iconic-time c-post__preview-time">
							<div class="iconic-time__section _calendar">
								<time datetime="<?=$arResult['displayDateMonth']?>T<?=$arResult['displayTime']?>">
									<?=$arResult['displayDate']?> в  <?=$arResult['displayTime']?> <sup>мск</sup>
								</time>
							</div>
							<div class="iconic-time__section _sandglass">
								<time datetime="60m">
									<?=$arResult['PROPERTIES']['DURATION']['VALUE']?>
								</time>
							</div>
						</div>
						<?if($arResult['compareDate']  > 0):?>
						<a href="#event-registration" class="button c-post__aside-btn _full-width">Записаться</a>
						<?endif;?>
					</div>
				</div>
			</aside>
		</div>
		<?
		
		if($arResult['compareDate'] > 0):?>
		<div>
			

					<?
					 LazyLoad::includeFile(SITE_DIR. '/local/include/blocks/event_detail_form/index.php',  array(
					 	'EMAIL_TO' => 'vebinar@wiseadvice.ru, ordina@wiseadvice.ru, vtulkina@wiseadvice.ru',
						'EVENT_NAME' => $arResult['NAME'],
						'EVENT_DURATION' => $arResult['PROPERTIES']['DURATION']['VALUE'],
						'EVENT_DATE' => $arResult['displayDate']." в ".$arResult['displayTime']." <sup>мск</sup>",
						'EVENT_ID' => $arResult['ID'],
                        'EVENT_TYPE' => mb_strtolower($arResult['PROPERTIES']['EVENT_TYPE']['VALUE'])
					 ));
					
					?>
					
				
			
		</div>
		<?else:?>
			<div>
				<b>Регистрация на <?= mb_strtolower($arResult['PROPERTIES']['EVENT_TYPE']['VALUE']) ?> завершена.</b>
			</div>
		<?endif;?>
</section>


