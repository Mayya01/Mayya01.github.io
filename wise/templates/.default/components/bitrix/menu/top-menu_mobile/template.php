<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if (!empty($arResult)):?>
<!-- Начало блока: Верхнее меню-->
    <div class="mobile-menu__holder">
        <div class="mobile-menu__btn-bg"></div>
        <ul class="mobile-menu__main-level">
        <? foreach($arResult as $arItem):
            if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                continue;
            ?>
            <?if($arItem["SELECTED"]):?>
                <li class="mobile-menu__main-item _active"><a href="<?=$arItem["LINK"]?>" class="mobile-menu__main-link"><?=$arItem["TEXT"]?></a></li>
            <?else:?>
                <li class="mobile-menu__main-item"><a href="<?=$arItem["LINK"]?>" class="mobile-menu__main-link"><?=$arItem["TEXT"]?></a></li>
            <?endif?>

        <?endforeach?>
        </ul>
    </div>
<!-- Конец блока: Верхнее меню-->
<?endif?>