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
$ajaxRequest = $arResult['CUSTOM_AJAX_MODE'] == 'Y' && $arResult['AJAX'] ? true : false;
?>

<? if (0 < $arResult['ITEMS']) : ?>
    <div class="content-row clients-ajax-dynamic-filter js-clients-ajax-dynamic-filter">
        <div class="layout-center-wrapper clients-ajax-dynamic-filter__wrap">
            <div class="clients-ajax-dynamic-filter__options content-col clearfix">
                <div class="clients-ajax-dynamic-filter__select-slick js-clients-ajax-filter-ddslick" id="clients-ajax-filter-ddslick"></div>
                <button class="clients-ajax-dynamic-filter__btn clients-ajax-dynamic-filter__btn--active js-filter-tag"
                        data-group="all"><span
                      class="clients-ajax-dynamic-filter__btn-label">Все отрасли</span>
                </button>
                <? foreach ($arResult['TAGS'] as $arTag) : ?>
                    <button class="clients-ajax-dynamic-filter__btn js-filter-tag"
                            data-group="tagid<?= $arTag['ID'] ?>" data-tagid="<?= $arTag['ID'] ?>"><span
                          class="clients-ajax-dynamic-filter__btn-label"><?= $arTag['NAME'] ?></span>
                    </button>
                <? endforeach; ?>
            </div>
            <div class="clients-ajax-dynamic-filter-grid__wrapper clearfix js-clients-grid-wrapper">
                <div class="clients-ajax-dynamic-filter__grid clients-ajax-dynamic-filter-grid content-col clearfix js-clients-grid">
                    <!--clients-ajax-dynamic-filter-stack-->
                    <? foreach ($arResult['ITEMS'] as $arItem): ?>
                        <? if (is_array($arItem['PREVIEW_PICTURE'])) : ?>
                            <? if ($arItem['LETTER_IMG_SRC']) {?>
                                <a href="<?if($arItem['LETTER_IMG_SRC']):?><?=$arItem['LETTER_IMG_SRC']?><?else:?>javascript:void(0);<?endif?>" class="clients-ajax-dynamic-filter__item clients-ajax-dynamic-filter-item js-clients-ajax-dynamic-filter-item clients-ajax-dynamic-filter-item--id<?=$arItem['ID']?> <?if($arItem['LETTER_IMG_SRC']):?>js-fancybox-docs<?endif?> <?if($ajaxRequest):?>clients-ajax-dynamic-filter-item--ajax<?endif;?>" data-id="<?=$arItem['ID']?>" data-fancybox-title="Рекомендательные письма от клиентов предоставлены на имена юридических лиц группы «ИНТЕЛИС», которые были переименованы в 2010 году в рамках перехода на бренд Wiseadvice.<br><a href='<?=$arItem['LETTER_IMG_SRC']?>' class='underlined-link--small underlined-link underlined-link--red' target=_blank>Открыть оригинал отзыва</a>">
                            <? } else {?>
                                <span class="clients-ajax-dynamic-filter__item clients-ajax-dynamic-filter-item js-clients-ajax-dynamic-filter-item clients-ajax-dynamic-filter-item--id<?=$arItem['ID']?> <?if($ajaxRequest):?>clients-ajax-dynamic-filter-item--ajax<?endif;?>" data-id="<?=$arItem['ID']?>">
                            <?} ?>
                                <div class="clients-ajax-dynamic-filter-item__img-holder">
                                    <div class="clients-ajax-dynamic-filter-item__img-dummy"></div>
                                    <div class="clients-ajax-dynamic-filter-item__img-vertical-center">
                                        <img src="<?=$arItem['BANNER']['src']?>" alt="<?=$arItem['NAME']?>" class="clients-ajax-dynamic-filter-item__img">
                                        <? if ($arItem['LETTER_IMG_SRC']) {?>
                                        <div class="clients-ajax-dynamic-filter-item__link">
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
                    <div class="clients-ajax-dynamic-filter__ajax-key hidden">
                        <input type="hidden" class="js-clients-ajax-dynamic-filter-ajax-key" value="<?=$arResult['PARAMS_HASH']?>">
                    </div>
                    <div class="clients-ajax-dynamic-filter__show-more content-col text-center js-clients-ajax-dynamic-filter-show-more clearfix">
                        <?if($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount):?>
                            <button type="button" class="btn btn--red  btn--show-more clients-ajax-dynamic-filter__ajax-pagen js-clients-ajax-dynamic-filter-nav-ajax" data-nav="<?=$arResult['NAV_RESULT']->NavNum?>" data-page="<?=$arResult['NAV_RESULT']->NavPageNomer+1?>">
                                <i class="fa js-show-more-icon"></i>
                                <span>Показать ещё</span>
                            </button>
                        <?endif?>
                    </div>
                    <!--clients-ajax-dynamic-filter-stack-->
                </div>
            </div>
        </div>
    </div>
<? endif; ?>

<? // echo'<pre>';print_r($arParams);echo'</pre>';?>
