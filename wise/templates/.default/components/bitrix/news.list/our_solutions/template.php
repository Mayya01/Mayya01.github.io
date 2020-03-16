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

<div class="iconic-list _noimg">
    <ul class="iconic-list__list">
        <? foreach ($arResult["ITEMS"] as $arItem): ?>
            <li class="iconic-list__item">
                <? if ($arItem["PICTURE"]["src"]): ?>
                    <img src="<?=$arItem["PICTURE"]["src"]?>" width="110" alt=""
                         class="iconic-list__img"/>
                <? endif ?>
                
                <div class="iconic-list__caption"><a href="<?= $arItem["PROPERTIES"]["headlink"]["VALUE"] ?>"
                                                     class="default-link"><?= $arItem["NAME"] ?></a></div>
                <div class="iconic-list__description"><?= $arItem["PROPERTIES"]["LIST_TEXT"]["VALUE"]["TEXT"] ?>
                </div>
            </li>

        <? endforeach; ?>
    </ul>
</div>
