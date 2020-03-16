<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if (!empty($arResult)):?>
<!-- Начало блока: Верхнее меню-->
<div class="top-menu">
    <nav itemscope itemtype="http://schema.org/SiteNavigationElement">
        <ul class="top-menu__level">
        <? foreach($arResult as $arItem):
            if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
                continue;
            ?>
            <?if($arItem["SELECTED"]):?>
                <li class="top-menu__item _active" itemprop="name"><a href="<?=$arItem["LINK"]?>" class="top-menu__link" itemprop="url"><?=$arItem["TEXT"]?></a></li>
            <?else:?>
                <li class="top-menu__item" itemprop="name"><a href="<?=$arItem["LINK"]?>" class="top-menu__link" itemprop="url"><?=$arItem["TEXT"]?></a></li>
            <?endif?>

        <?endforeach?>
        </ul>
    </nav>
</div>
<!-- Конец блока: Верхнее меню-->
<?endif?>