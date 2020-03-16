<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if (!empty($arResult)):?>
<!-- Начало блока: Верхнее меню-->
    <ul class="vertical-inner-menu__main-level">
        <? foreach($arResult as $arItem):
            if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                continue;
            ?>
            <li class="vertical-inner-menu__main-item"><a href="<?=$arItem["LINK"]?>" class="vertical-inner-menu__link default-link"><?=$arItem["TEXT"]?></a></li>

        <?endforeach?>
    </ul>
<!-- Конец блока: Верхнее меню-->
<?endif?>
