<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)): ?>
    <ul class="career-nav__list clearfix">
        <?foreach ($arResult as $arItem): ?>
            <?if ($arParams['MAX_LEVEL'] == 1 && $arItem['DEPTH_LEVEL'] > 1) continue; ?>
            <li>
                <div class="career-nav__item career-nav__item--<?=$arItem['PARAMS']['sCode']?>">
                    <a class="underlined-link" href="<?=$arItem['LINK']?>"><?=$arItem['TEXT']?></a>
                </div>
            </li>
        <? endforeach; ?>
    </ul>
<?endif?>