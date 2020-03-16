<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)): ?>
	<div class="main-menu-wrapper js-main-menu">
        <a href="javascript:void(0);" class="main-menu-sm-show js-main-ham">
            <div class="c-hamburger c-hamburger--htx main-menu-sm-show__ham">
                <span></span>
            </div>
            <span class="main-menu-sm-show__text">Меню</span>
        </a>
        <nav class="main-menu-holder">
            <ul class="main-menu">
                <?foreach ($arResult as $arItem): ?>
                    <?if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) continue; ?>
                    <li class="main-menu__item<?if($arItem["SELECTED"]):?> main-menu__item--selected<?endif?>">
                        <a class="main-menu__link" href="<?=$arItem["LINK"]?>">
                            <?=$arItem["TEXT"]?>
                        </a>
                    </li>
                <?endforeach?>
            </ul>
        </nav>
	</div>
<?endif?>