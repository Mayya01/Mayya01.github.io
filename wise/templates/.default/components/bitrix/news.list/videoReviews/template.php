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
$isAjaxRequest = $arResult['CUSTOM_AJAX_MODE'] == 'Y' && $arResult['AJAX'] ? true : false;

?>
<? if ($arParams["SIMPLE_LIST"]): ?>
    <?= ($arParams["SHOW_COLUMNS"]) ? '<div class="video-reviews__wrapper">' : '' ?>
    <? foreach ($arResult["ITEMS"] as $arItem): ?>
        <?= ($arParams["SHOW_COLUMNS"]) ? '<div class="video-reviews__item">' : '' ?>

        <div class="c-video-review js-wa-youtube-video-player no-margin-top"
             data-videoid="<?= CommonHelper::getYouTubeVideoId($arItem["PROPERTIES"]["YOUTUBE_CODE"]["VALUE"]) ?>">
            <div class="c-video-review__frame js-wa-youtube-video-player-frame"></div>
            <button class="c-video-review__start-btn js-wa-youtube-video-player-btn" type="button">Play</button>
        </div>
        <?= ($arParams["SHOW_COLUMNS"]) ? '</div>' : '' ?>
    <? endforeach; ?>
    <?= ($arParams["SHOW_COLUMNS"]) ? '</div>' : '' ?>

<? else: ?>
    <div class="c-about__video-reviews _padding-top-section-medium clear js-video-reviews-list section-padding-bottom" id="videoReviewsBlock">
        <div class="content-center">
            <div class="video-reviews__title h1">Видео-отзывы</div>
            <!--video-reviews-ajax-stack-->
            <div class="video-reviews__wrapper">
                <? foreach ($arResult["ITEMS"] as $arItem): ?>
                    <div class="video-reviews__item">
                        <div class="c-training-video js-wa-youtube-video-player" style="margin-top:0;"
                             data-videoid="<?= CommonHelper::getYouTubeVideoId($arItem["PROPERTIES"]["YOUTUBE_CODE"]["VALUE"]) ?>">
                            <div class="c-training-video__frame js-wa-youtube-video-player-frame"></div>
                            <button class="c-training-video__start-btn js-wa-youtube-video-player-btn"
                                    type="button"></button>
                        </div>
                    </div>
                <? endforeach; ?>
           </div>
            <div class="loader js-template-name-show-more">
                <? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
                    <span class="template-name__ajax-pagen js-template-name-nav-ajax"
                          data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
                          data-page="<?= $arResult['NAV_RESULT']->NavPageNomer + 1 ?>">
					Показать ещё <?= $arResult["NEXT_PAGE_SIZE"] ?>
				</span>
                <? endif ?>
            </div>
            <!--video-reviews-ajax-stack-->
            <input type="hidden" class="js-template-name-ajax-key" value="<?= $arResult['PARAMS_HASH'] ?>">
        </div>
    </div>
<? endif ?>

