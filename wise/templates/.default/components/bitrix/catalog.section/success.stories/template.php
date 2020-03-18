<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); }

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
<? foreach ($arResult['ITEMS'] AS $iKey => $arItem) {
    $sCss = '';
    $sData = '';
    if ($iKey == 0) {
        $sCss = ' success-story--active ';
        $sData = 'true';
    }
    ?>
<section class="success-story <?=$sCss?> js-success-story" data-js-loaded="<?=$sData?>">
    <div class="success-story__preview js-success-story-preview">
        <div class="layout-center-wrapper">
            <div class="content-col">
                <h2 class="success-story__h2 module-h2">Истории успеха</h2>

                <div class="success-story__inner js-success-story-inner clearfix">
                    <div class="success-story__preview-img">
                        <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['NAME']?>">
                    </div>

                    <div class="success-story__preview-text">
                        <blockquote>
                            <cite><?=$arItem['NAME']?><br> <span><?=$arItem['PROPERTIES']['SUBHEADER']['~VALUE']?></span></cite>

                            <?=$arItem['PREVIEW_TEXT']?>
                        </blockquote>

                        <a class="success-story__more-link dotted-link js-success-story-more-link" href="#">Читать полностью <i>↓</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="success-story__full text-container js-success-story-full">
        <div class="layout-center-wrapper">
            <div class="content-col">
                <h3 class="success-story__h3 module-h2">Как пришел в&nbsp;профессию</h3>
                <?=$arItem['PROPERTIES']['PROFESSION']['~VALUE']['TEXT']?>

                <h3 class="success-story__h3 module-h2">Карьера в&nbsp;WiseAdvice</h3>
                <?=$arItem['PROPERTIES']['CAREER']['~VALUE']['TEXT']?>
            </div>
        </div>
    </div>
</section>
<? } ?>

<? if ($arParams['AJAX_MODE'] == 'N' ) {?>
    <div class="js-success-stories-nav">
			<button class="success-stories__prev-btn js-prev-btn" type="button"></button>
			<button class="success-stories__next-btn js-next-btn" type="button"></button>
		</div>
<? } ?>