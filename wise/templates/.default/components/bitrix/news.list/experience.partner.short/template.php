<?
/**
 * @var array $arResult
 * @var array $arParams
 *
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>
<div class="experience-section__partners">
    <h3 class="h2">С нами уже работают</h3>
    <? if(!empty($arResult["ITEMS"])): ?>
        <div class="items-carousel"><a href="#" class="items-carousel__prev"></a><a href="#" class="items-carousel__next"></a>
            <div class="items-carousel__holder">
                <ul data-infinite="data-infinite" data-slides="4" data-slides-1024="3" class="items-carousel__slider">
                    <? foreach ($arResult["ITEMS"] as $arItem): ?>
                        <li class="items-carousel__slide"><img src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>" alt="<?= $arItem["NAME"] ?>" width="216" height="131" class="items-carousel__brand" /></li>
                    <? endforeach; ?>
                </ul>
            </div>
        </div>
    <? endif; ?>
</div>
<? if ($arParams['HIDE_FEEDBACK'] != 'Y'): ?>
<div class="experience-section__offer">
    <div class="experience-section__offer-text">Уже готовы к&nbsp;началу<br/>сотрудничества?</div>
    <div class="experience-section__offer-button"><a href="#callback-new" class="button pupop">Да, перезвоните мне!</a></div>
</div>
<? endif; ?>
