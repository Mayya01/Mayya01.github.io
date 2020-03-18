<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); } ?>

<div class='wa-blog-entry'>
    <h1 class='module-h1 no-margin-top'><?=$arResult['NAME']?></h1>
    <!-- начало блока wa-blog-entry-meta -->
    <div class='wa-blog-entry-meta'>
        <div class='wa-blog-entry-meta__item wa-blog-entry-meta__item--date'>
            <time datetime='<?=$arResult['ACTIVE_FROM']?>'><?=dateHumanitized($arResult['ACTIVE_FROM'], 'd F Y');?></time>
        </div>
        <div class='wa-blog-entry-meta__item'>
            <a href='<?=$arResult['SECTION']['SECTION_PAGE_URL']?>' title='<?=$arResult['SECTION']['NAME']?>' class='label'><?=$arResult['SECTION']['NAME']?></a>
        </div>
        <? foreach ($arResult['PROPERTIES']['AUDITORY']['VALUE'] as $iKey => $sLabel) {?>
        <div class='wa-blog-entry-meta__item'>
            <a href='<?=EnvironmentHelper::getParam('blogBasePath').'label/'.$arResult['PROPERTIES']['AUDITORY']['VALUE_XML_ID'][$iKey].'/'?>' class='label' title='<?=$sLabel?>'><?=$sLabel?></a>
        </div>
        <? } ?>
    </div>
    <!-- конец блока wa-blog-entry-meta -->
    <div class='wa-blog-entry__content text-container'>
        <img src='<?=$arResult['DETAIL_PICTURE']['SRC']?>' alt=''>

        <?=$arResult['DETAIL_TEXT']?>
    </div>

    <div class='social-sharing'>
        <script src='https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js'></script>
        <script src='https://yastatic.net/share2/share.js' async='async'></script>
        <div class='social-sharing__title'>Поделиться:</div>
        <div class='ya-share2 social-sharing__list' data-services='vkontakte,facebook,odnoklassniki,twitter,linkedin,gplus' data-counter></div>
    </div>

    <div class='wa-blog-entry-links clearfix'>
        <? if (count($arResult['BeforeElements'])) { ?>
            <div class='wa-blog-entry-links__item wa-blog-entry-links__item--left'>
                <a href='<?=$arResult['BeforeElements'][0]['DETAIL_PAGE_URL']?>' title='<?=$arResult['BeforeElements'][0]['NAME']?>' class='underlined-link underlined-link--red'>Предыдущая статья</a>
            </div>
        <? } ?>
        <? if (count($arResult['AfterElements'])) { ?>
            <div class='wa-blog-entry-links__item wa-blog-entry-links__item--right'>
                <a href='<?=$arResult['AfterElements'][0]['DETAIL_PAGE_URL']?>' title='<?=$arResult['AfterElements'][0]['NAME']?>' class='underlined-link underlined-link--red'>Следующая статья</a>
            </div>
        <? } ?>
    </div>

    <div class='wa-comments'>
        <div id='mc-container'></div>
        <script type='text/javascript'>
            cackle_widget = window.cackle_widget || [];
            cackle_widget.push({widget: 'Comment', id: 47823});
            (function() {
                var mc = document.createElement('script');
                mc.type = 'text/javascript';
                mc.async = true;
                mc.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cackle.me/widget.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(mc, s.nextSibling);
            })();
        </script>
        <a id='mc-link' href='http://cackle.me'>Комментарии для сайта <b style='color:#4FA3DA'>Cackl</b><b style='color:#F65077'>e</b></a>
    </div>
</div>