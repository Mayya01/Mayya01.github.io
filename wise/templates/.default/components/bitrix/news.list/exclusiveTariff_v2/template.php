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
<? if (!$arParams["NO_WRAPPER"]): ?>
<div class="c-maintenance-tariffs <?= $arParams["ADD_CLASS"] ?>"><? endif ?>
    <? if (!$arParams["NO_CONTENT_WRAPPER"]): ?><div class="content-center"><?endif?>
        <? if (!$arParams["SHOW_BOLD_TITLE"]): ?>
            <div class="c-maintenance-tariffs__caption h1">Тарифные планы</div>
        <? endif ?>
        <? if (!$arParams["NO_SECTIONS"]): ?><div class="c-maintenance-tariffs__sections"><?endif?>
            <div class="c-maintenance-tariffs__section">
                <? if ($arParams["SHOW_BOLD_TITLE"]): ?>
                    <div class="c-maintenance-tariffs__section-title"><?= $arParams["SHOW_BOLD_TITLE"] ?></div>
                <? endif ?>
                <? if ($arParams["SHOW_UNDERTITLE"]): ?>
                    <div class="c-maintenance-tariffs__section-description content-area">
                        <p><?= $arParams["SHOW_UNDERTITLE"] ?></p>
                    </div>
                <? endif ?>
                <div class="c-maintenance-tariffs__plates">
                    <?php // для случаи когда два элемента одна верстка для случаи когда три блока другая
                    if(2 === count(($arResult["ITEMS"]))) :?>
                    <div class="c-maintenance-tariffs__cols js-equalize-scope">
                        <? $leftCol = true ?>
                        <? foreach ($arResult["ITEMS"] as $arItem): ?>
                            <div
                                class="<? if ($leftCol): ?>c-maintenance-tariffs__left-col<? else: ?>c-maintenance-tariffs__right-col<? endif ?>">
                                <div class="c-maintenance-tariffs__plate js-equalize-scope__elem">
                                    <div class="c-maintenance-tariffs__plate-caption">
                                        <?= $arItem["PROPERTIES"]["price"]['props']['UF_NAME'] ?></div>
                                    <div class="c-maintenance-tariffs__plate-content content-area">
                                        <?= $arItem["PREVIEW_TEXT"] ?>
                                    </div>
                                    <div class="c-maintenance-tariffs__plate-footer">
                                        <div class="c-maintenance-tariffs__price-holder"><span
                                                class="c-maintenance-tariffs__price"><?= $arItem["PROPERTIES"]["price"]['props']['UF_PRICE'] ?></span>
                                        </div>
                                        <?$callPopup = $arParams["FORM_BLOCK"]?:"callback"?>
                                        <?$actionStr = "";
                                        if($arParams["FORM_BLOCK"]){
                                            $actionStr = "onclick=\"setCallbackFormSource('Блок экс. тарифов ({$arItem["NAME"]})')\"";
                                        }?>
                                        <div class="c-maintenance-tariffs__buy-holder"><a href="#<?=$callPopup?>" <?=$actionStr?>
                                                                                          class="c-maintenance-tariffs__buy pupop button">Подключиться</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <? $leftCol = !$leftCol ?>
                        <? endforeach; ?>
                    </div>
					<?php elseif (3 === count(($arResult["ITEMS"]))) : ?>
                        <div class="c-maintenance-tariffs__cols _three-cols js-equalize-scope">
							<?php foreach ($arResult["ITEMS"] as $arItem): ?>
                                <div class="c-maintenance-tariffs__one-third-col <?= stristr($arItem["PROPERTIES"]["price"]['props']['UF_PRICE'],'человеко-месяц') === false ?: '_two-line-price' ?>">
                                    <div class="c-maintenance-tariffs__plate js-equalize-scope__elem">
                                        <div class="c-maintenance-tariffs__plate-caption"><?= $arItem["PROPERTIES"]["price"]['props']['UF_NAME'] ?></div>

                                        <div class="c-maintenance-tariffs__plate-content content-area">
											<?php if ('html' === $arItem['PREVIEW_TEXT_TYPE']): ?>
												<?= $arItem['PREVIEW_TEXT'] ?>
											<?php else: ?>
                                                <p><?= $arItem['PREVIEW_TEXT'] ?></p>
											<?php endif; ?>
                                        </div>

                                        <div class="c-maintenance-tariffs__plate-footer">
                                            <div class="c-maintenance-tariffs__price-holder">
                                                <span class="c-maintenance-tariffs__price">
                                                    <?= str_replace('человеко-месяц','<br/>человеко-месяц',$arItem["PROPERTIES"]["price"]['props']['UF_PRICE']) ?>
                                                </span>
                                            </div>
                                            
											<?
                                            $tariff = str_replace('&nbsp;', ' ', htmlentities($arItem['PROPERTIES']['price']['props']['UF_NAME'], null, 'utf-8'));
                                            $price = str_replace('&nbsp;', ' ', htmlentities($arItem['PROPERTIES']['price']['props']['UF_PRICE'], null, 'utf-8'));
											?>

                                            <div class="c-maintenance-tariffs__buy-holder">
                                                <a href="#recall-tariff" data-val="<?= $tariff ?> - <?= $price ?>" class="c-maintenance-tariffs__buy pupop button js-set-classic-ratiff">Подключиться</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
							<?php endforeach; ?>
                        </div>
					<?php endif; ?>
                </div>
            </div>
        <? if (!$arParams["NO_SECTIONS"]): ?></div><?endif?>
    <? if (!$arParams["NO_CONTENT_WRAPPER"]): ?></div><?endif?>
<? if (!$arParams["NO_WRAPPER"]): ?></div><? endif ?>



