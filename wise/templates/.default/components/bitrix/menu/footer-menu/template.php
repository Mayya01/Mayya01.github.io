<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if (!empty($arResult)):?>
    <div class="footer-menu">
        <ul class="footer-menu__top-level">
        <? foreach($arResult as $arItem):
            if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                continue;
            ?>
            <li class="footer-menu__item <?=$arItem["PARAMS"]['CLASS']?>"><a href="<?=$arItem["LINK"]?>" class="footer-menu__link"><?=$arItem["TEXT"]?></a></li>

        <?endforeach?>
        </ul>
    </div>
<!-- Конец блока: Верхнее меню-->
<?endif?>