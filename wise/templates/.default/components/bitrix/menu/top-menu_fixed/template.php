<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if (!empty($arResult)):?>
<!-- Начало блока: Верхнее меню-->
<div class="c-fix-header__menu">
    <div class="fix-menu">
        <ul class="fix-menu__level">
        <? foreach($arResult as $arItem):
            if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                continue;
            ?>
            <?if($arItem["SELECTED"]):?>
                <li class="fix-menu__item _active"><a href="<?=$arItem["LINK"]?>" class="fix-menu__link"><?=$arItem["TEXT"]?></a></li>
            <?else:?>
                <li class="fix-menu__item"><a href="<?=$arItem["LINK"]?>" class="fix-menu__link"><?=$arItem["TEXT"]?></a></li>
            <?endif?>

        <?endforeach?>
        </ul>
    </div>
</div>
<!-- Конец блока: Верхнее меню-->
<?endif?>