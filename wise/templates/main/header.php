<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

/**
 * @global $APPLICATION CMain
 * @global $USER CUser
 */

global $USER;
\Bitrix\Main\Loader::includeModule('iblock');
\Bitrix\Main\Localization\Loc::loadLanguageFile(__FILE__);
$asset = Bitrix\Main\Page\Asset::getInstance();

$mainMenuShow = (!defined('MAIN_MENU') || MAIN_MENU == true) ? true : false;

$request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest();
$requestedPageDirectory = $request->getRequestedPageDirectory();
$asset->addString('<link rel="canonical" href="'.($request->isHttps() ? 'https' : 'http').'://'.$request->getHttpHost().$requestedPageDirectory.'/" />', true, 'BEFORE_CSS');
if(startsWith($requestedPageDirectory, '/uslugi') || startsWith($requestedPageDirectory, '/infocentr')) {
    $asset->addString('<meta name="robots" content="noindex,nofollow">', true, 'BEFORE_CSS');
}
?><!DOCTYPE html>
<html lang="ru">
<head>
    <? $APPLICATION->ShowHead() ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="yandex-verification" content="bb3b44c3d0f1c529" />
    <title><? $APPLICATION->ShowTitle() ?></title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PWN4QNR');</script>
    <!-- End Google Tag Manager -->
    
    <?

    $asset->addCss(SITE_TEMPLATE_PATH . '/css/normalize.css');
    $asset->addCss(SITE_TEMPLATE_PATH . '/css/vendor.css');
    $asset->addCss(SITE_TEMPLATE_PATH . '/css/main.css');

    $asset->addJs(SITE_TEMPLATE_PATH . '/js/core.js');
    //$asset->addJs(SITE_TEMPLATE_PATH . '/js/modernizr.js');
    $asset->addJs(SITE_TEMPLATE_PATH . '/js/vendor.js');
    //$asset->addJs(SITE_TEMPLATE_PATH . '/js/select2/ru.js');
    $asset->addJs('https://api-maps.yandex.ru/2.1/?lang=ru_RU');
    $asset->addJs(SITE_TEMPLATE_PATH . '/js/main.js');

    $page_url = $APPLICATION->GetCurPage();

	$asset->addJs(SITE_TEMPLATE_PATH . '/track.js');

    //CUtil::InitJSCore(array('ajax'));
    ?>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWN4QNR"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter6334411 = new Ya.Metrika({
                    id:6334411,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
          s = d.createElement("script"),
          f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/6334411" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<? $APPLICATION->ShowPanel() ?>
<div class="page-wrapper">
    <main class="main clearfix">
        <header class="header">
            <div class="layout-center-wrapper">
                <div class="header__content">
                    <div class="header-top header__top clearfix">
                        <a href="/" class="header-logo">
                            <strong>WiseAdvise
                                <small>Consulting group</small>
                            </strong>
                        </a>
                        <div class="header-top-slogan header__top-slogan">
                            <div class="header-top-slogan__text">
                                <strong>Интеллектуальные услуги для бизнеса</strong>
                            </div>
                            <div class="header-top-slogan__before-intelis">
                                <? $APPLICATION->IncludeFile(INCLUDE_DIR . '/layout/before_intelis.php') ?>
                            </div>
                        </div>
                        <div class="header-top-right header__top-right">
                            <div class="header-top-right__phone"><span>+7 495 995-82-58</span></div>
                            <div class="header-top-right__companies-list">
                                <? $APPLICATION->IncludeComponent(
                                    'bitrix:news.list',
                                    'companies.dd',
                                    Array(
                                        'ADD_SECTIONS_CHAIN' => 'N',
                                        'AJAX_MODE' => 'N',
                                        'CACHE_GROUPS' => 'Y',
                                        'CACHE_TIME' => '36000000',
                                        'CACHE_TYPE' => 'A',
                                        'CHECK_DATES' => 'Y',
                                        'DISPLAY_BOTTOM_PAGER' => 'N',
                                        'DISPLAY_DATE' => 'N',
                                        'DISPLAY_NAME' => 'Y',
                                        'DISPLAY_PICTURE' => 'Y',
                                        'DISPLAY_PREVIEW_TEXT' => 'N',
                                        'DISPLAY_TOP_PAGER' => 'N',
                                        'FIELD_CODE' => array('NAME', 'PREVIEW_PICTURE', ''),
                                        'IBLOCK_ID' => '2',
                                        'IBLOCK_TYPE' => 'company',
                                        'INCLUDE_IBLOCK_INTO_CHAIN' => 'N',
                                        'INCLUDE_SUBSECTIONS' => 'Y',
                                        'NEWS_COUNT' => '9999',
                                        'PROPERTY_CODE' => array('SITE_URL', 'MENU_CLASS', ''),
                                        'SET_BROWSER_TITLE' => 'N',
                                        'SET_LAST_MODIFIED' => 'N',
                                        'SET_META_DESCRIPTION' => 'N',
                                        'SET_META_KEYWORDS' => 'N',
                                        'SET_STATUS_404' => 'N',
                                        'SET_TITLE' => 'N',
                                        'SHOW_404' => 'N',
                                        'SORT_BY1' => 'SORT',
                                        'SORT_BY2' => 'ID',
                                        'SORT_ORDER1' => 'ASC',
                                        'SORT_ORDER2' => 'ASC'
                                    )
                                ); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <? if ($mainMenuShow) : ?>
            <div class="header__bottom">
                <? $APPLICATION->IncludeComponent(
                    'bitrix:menu',
                    'main',
                    Array(
                        'ALLOW_MULTI_SELECT' => 'N',
                        'DELAY' => 'N',
                        'MAX_LEVEL' => '1',
                        'MENU_CACHE_TIME' => '3600',
                        'MENU_CACHE_TYPE' => 'A',
                        'MENU_CACHE_USE_GROUPS' => 'Y',
                        'ROOT_MENU_TYPE' => 'top',
                        'USE_EXT' => 'N'
                    )
                ); ?>
            </div>
            <? endif; ?>
        </header>
        <div class="page-content clearfix">
            <? /* TODO - убрать, если не надо.
               if ($APPLICATION->GetCurPage(true) != SITE_DIR . 'index.php'): ?>
                <?$APPLICATION->IncludeComponent(
                  'bitrix:breadcrumb',
                  '',
                  Array(
                    'START_FROM' => '1',
                    'PATH' => '',
                    'SITE_ID' => 's1'
                  )
                );?>
            <? endif  */ ?>
