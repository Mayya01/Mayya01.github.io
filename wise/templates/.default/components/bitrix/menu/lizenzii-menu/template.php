<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
$this->setFrameMode(true);
?>

<? if (!empty($arResult)): ?>
    <ul class="c-license-nav__list">
        <? foreach ($arResult as $arItem): ?>

            <li>
                <? if ($arItem["SELECTED"]): ?>
                    <span href="<?= $arItem["LINK"] ?>" class="default-link _active"
                    ><?= $arItem["TEXT"] ?></span>
                <? else: ?>
                    <a href="<?= $arItem["LINK"] ?>" class="default-link"
                    ><?= $arItem["TEXT"] ?></a>
                <? endif ?>

            </li>

        <? endforeach ?>
    </ul>
    <!-- Конец блока: Верхнее меню-->
<? endif ?>