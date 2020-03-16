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
<div class="experience-section__cols">
    <div class="experience-section__caption h2 _before-slider">
        <p>Видео-отзывы</p>
    </div>
	<div class="experience-section__left-col">
		<div class="c-video-review js-wa-youtube-video-player" data-videoid="<?= CommonHelper::getYouTubeVideoId($arResult["ITEMS"][0]["PROPERTIES"]["YOUTUBE_CODE"]["VALUE"]) ?>">
			<div class="c-video-review__frame js-wa-youtube-video-player-frame"></div>
			<button class="c-video-review__start-btn js-wa-youtube-video-player-btn" type="button">Play</button>
		</div>
	</div>
	<div class="experience-section__right-col">
		
		<div class="c-video-review js-wa-youtube-video-player" data-videoid="<?= CommonHelper::getYouTubeVideoId($arResult["ITEMS"][1]["PROPERTIES"]["YOUTUBE_CODE"]["VALUE"]) ?>">
			<div class="c-video-review__frame js-wa-youtube-video-player-frame"></div>
			<button class="c-video-review__start-btn js-wa-youtube-video-player-btn" type="button">Play</button>
		</div>
	</div>
</div>
