<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

/**
 * @global $APPLICATION CMain
 * @global $USER CUser
 */

?>

        </div>
    </main>
    <footer class="footer">
        <div class="layout-center-wrapper clearfix">
            <div class="footer__top clearfix">
                <div class="footer__menu-container clearfix">
                    <div class="footer__menu-lg">
                        <? $APPLICATION->IncludeComponent(
                            'bitrix:menu',
                            'footer',
                            Array(
                                'ALLOW_MULTI_SELECT' => 'N',
                                'DELAY' => 'N',
                                'MAX_LEVEL' => '1',
                                'MENU_CACHE_TIME' => '3600',
                                'MENU_CACHE_TYPE' => 'A',
                                'MENU_CACHE_USE_GROUPS' => 'Y',
                                'ROOT_MENU_TYPE' => 'footer_lg_1',
                                'USE_EXT' => 'N'
                            )
                        ); ?>
                        <? $APPLICATION->IncludeComponent(
                            'bitrix:menu',
                            'footer',
                            Array(
                                'ALLOW_MULTI_SELECT' => 'N',
                                'DELAY' => 'N',
                                'MAX_LEVEL' => '1',
                                'MENU_CACHE_TIME' => '3600',
                                'MENU_CACHE_TYPE' => 'A',
                                'MENU_CACHE_USE_GROUPS' => 'Y',
                                'ROOT_MENU_TYPE' => 'footer_lg_2',
                                'USE_EXT' => 'N'
                            )
                        ); ?>
                        <? $APPLICATION->IncludeComponent(
                            'bitrix:menu',
                            'footer',
                            Array(
                                'ALLOW_MULTI_SELECT' => 'N',
                                'DELAY' => 'N',
                                'MAX_LEVEL' => '1',
                                'MENU_CACHE_TIME' => '3600',
                                'MENU_CACHE_TYPE' => 'A',
                                'MENU_CACHE_USE_GROUPS' => 'Y',
                                'ROOT_MENU_TYPE' => 'footer_lg_3',
                                'USE_EXT' => 'N'
                            )
                        ); ?>
                    </div>
                    <div class="footer__menu-sm">
                        <? $APPLICATION->IncludeComponent(
                            'bitrix:menu',
                            'footer',
                            Array(
                                'ALLOW_MULTI_SELECT' => 'N',
                                'DELAY' => 'N',
                                'MAX_LEVEL' => '1',
                                'MENU_CACHE_TIME' => '3600',
                                'MENU_CACHE_TYPE' => 'A',
                                'MENU_CACHE_USE_GROUPS' => 'Y',
                                'ROOT_MENU_TYPE' => 'footer_sm_1',
                                'USE_EXT' => 'N'
                            )
                        ); ?>
                        <? $APPLICATION->IncludeComponent(
                            'bitrix:menu',
                            'footer',
                            Array(
                                'ALLOW_MULTI_SELECT' => 'N',
                                'DELAY' => 'N',
                                'MAX_LEVEL' => '1',
                                'MENU_CACHE_TIME' => '3600',
                                'MENU_CACHE_TYPE' => 'A',
                                'MENU_CACHE_USE_GROUPS' => 'Y',
                                'ROOT_MENU_TYPE' => 'footer_sm_2',
                                'USE_EXT' => 'N'
                            )
                        ); ?>
                    </div>
                    <? $APPLICATION->IncludeFile(INCLUDE_DIR . '/layout/footer_contacts.php') ?>
                </div>
            </div>
            <div class="footer__mid clearfix">
                <div class="footer__copyrights-container">
                    <div class="footer__copyrights">
                        © 2003&mdash;<?= date('Y'); ?> WiseAdvice Consulting Group
                    </div>
                </div>
				<?showFooterNotice()?>
                <div class="footer__before-intelis">
                    <? $APPLICATION->IncludeFile(INCLUDE_DIR . '/layout/before_intelis.php') ?>
                </div>
            </div>
            <div class="footer__sub-mid clearfix">
                <hr>
            </div>
            <div class="footer__bottom footer-spec">
                <div class="footer-spec__container clearfix">
                    <? /* убираем инфо по iso
                    <a href="<?=SITE_TEMPLATE_PATH?>/images/srt/iso.png" rel="footer_spec" class="footer-spec-item clearfix js-fancybox-docs" title="Сертификация по международному стандарту качества ISO 9001:2008">
                        <div class="footer-spec-item__img-wrapper">
                            <div class="footer-spec-item__img footer-spec-item__img--1"> </div>
                        </div>
                        <div class="footer-spec-item__text-block">
                            <div class="footer-spec-item__text">
                                Сертификация по международному стандарту качества ISO 9001:2008
                            </div>
                        </div>
                    </a>
                    */?>
                    <?/* В данный момент лицензия отсутствует
                    <a href="http://medalirus.ru/upload/medali1920/doc_300rom.jpg" rel="footer_spec" class="footer-spec-item clearfix js-fancybox-docs" title="Лицензия ФСБ и право на работу с государственной тайной">
                        <div class="footer-spec-item__img-wrapper">
                            <div class="footer-spec-item__img footer-spec-item__img--2"> </div>
                        </div>
                        <div class="footer-spec-item__text-block">
                            <div class="footer-spec-item__text">
                                Лицензия ФСБ и право на работу с государственной тайной
                            </div>
                        </div>
                    </a>*/?>
                    <a href="<?=SITE_TEMPLATE_PATH?>/images/srt/raex.jpg" rel="footer_spec" class="footer-spec-item clearfix js-fancybox-docs" title="Одна из крупнейших консалтинговых групп России по данным РА «Эксперт»">
                        <div class="footer-spec-item__img-wrapper">
                            <div class="footer-spec-item__img footer-spec-item__img--3"> </div>
                        </div>
                        <div class="footer-spec-item__text-block">
                            <div class="footer-spec-item__text">
                                Одна из крупнейших консалтинговых групп России по данным РА «Эксперт»
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div>
</body>
</html>
