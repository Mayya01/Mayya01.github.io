<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
/**
 * @var $arParams
 */
?>
<? if (!empty($arResult)): ?>
    <ul class="c-blog__nav js-blog-nav">
        <? foreach ($arResult as $arItem):
            if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                continue;
            ?>
            <? if (
            ($arItem['PARAMS']['VISIBLE'] != 'N' AND !$arItem['PARAMS']['COUNT']) OR
            ($arItem['PARAMS']['COUNT'] == 'Y' AND (bool)$arParams['COUNT'][$arItem['PARAMS']['CODE']])
        ): ?>
            <li class="c-blog__nav-item <? if ($arItem["SELECTED"]): ?>_active<? endif; ?> js-blog-nav-item">
                <a class="c-blog__nav-link"
                   href="<?= $arItem["LINK"] ?>"><span><?= $arItem["TEXT"] ?></span>
                </a>
            </li>
        <? endif; ?>
        <? endforeach ?>

    </ul>
<? endif ?>
