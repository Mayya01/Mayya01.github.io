<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

/**
 * @global $APPLICATION CMain
 * @global $USER CUser
 */

global $USER;
\Bitrix\Main\Loader::includeModule('iblock');
\Bitrix\Main\Localization\Loc::loadLanguageFile(__FILE__);

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

$isLanding = (!defined('LANDING_PAGE') || LANDING_PAGE !== true) ? false : true;

require_once $_SERVER['DOCUMENT_ROOT'] . SITE_TEMPLATE_PATH . '/redirect_4_head.php';
?><!DOCTYPE html>
<html lang="ru" class="<?= ($_REQUEST['fullversion'] != 'y') ? 'is-adaptive' : '' ?><? $APPLICATION->AddBufferContent('additionalHtmlClass'); ?>">
<head>
	<? $APPLICATION->ShowHead() ?>
	<!-- Meta-->
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, minimal-ui">
	<meta name="imagetoolbar" content="no">
	<meta name="msthemecompatible" content="no">
	<meta name="cleartype" content="on">
	<meta name="HandheldFriendly" content="True">
	<meta name="format-detection" content="telephone=no">
	<meta name="format-detection" content="address=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <?
        // Отложенная функция для закрытия от индексации страниц через мета-тег
        $APPLICATION->AddBufferContent('customMetaRobots');
    ?>
	<title><? $APPLICATION->ShowTitle() ?></title>

	<script>
		function setCookie(name, value, expires) {
			var date = new Date(new Date().getTime() + expires * 1000);
			document.cookie = name + "=" + value + '; expires=' + date + '; path=/';
		}

		function getCookie(name) {
			var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		}
	</script>
	<?
	$arFonts = [
		SITE_TEMPLATE_PATH . '/fonts/OpenSans_Light/OpenSans_Light.woff',
		SITE_TEMPLATE_PATH . '/fonts/OpenSans_Semibold/OpenSans_Semibold.woff',
		SITE_TEMPLATE_PATH . '/fonts/Fontello/fontello.woff',
		SITE_TEMPLATE_PATH . '/fonts/OpenSans_Bold/OpenSans_Bold.woff',
		SITE_TEMPLATE_PATH . '/fonts/OpenSans_Italic/OpenSans_Italic.woff',
		SITE_TEMPLATE_PATH . '/fonts/OpenSans_Regular/OpenSans_Regular.woff'
	];
	?>
	<? foreach ($arFonts as $font): ?>
		<link rel="preload" as="font" href="<?= $font; ?>" type="font/woff" crossorigin="anonymous">
	<? endforeach; ?>
	<?
		$asset = Bitrix\Main\Page\Asset::getInstance();

		$asset->addCss(SITE_TEMPLATE_PATH . '/css/vendor.min.css');
		$asset->addCss(SITE_TEMPLATE_PATH . '/css/main.min.css');

		$asset->addJs(SITE_TEMPLATE_PATH . '/js/core.min.js');
		$asset->addJs(SITE_TEMPLATE_PATH . '/js/vendor.min.js');
		$asset->addJs(SITE_TEMPLATE_PATH . '/js/main.min.js');


		$page_url = $APPLICATION->GetCurPage(false);
	    list($hostName,)=explode(':',$_SERVER['HTTP_HOST']); // вычленяем адрес хоста без указания порта
        $asset->addString('<link rel="canonical" href="https://'.$hostName.$page_url.'" />', true);
        // $asset->addString('<meta name="robots" content="index, follow"/>');

		//CUtil::InitJSCore(array('ajax'));
	?>
</head>

<body class="<?/*=$APPLICATION->ShowProperty('BODY_CLASS')*/?>js-body" data-title="<?$APPLICATION->ShowTitle()?>">

<? if (defined('ENVIRONMENT') && ENVIRONMENT == 'production') : ?>
	<!-- Yandex.Metrika counter -->
	<script type="text/javascript" >
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
		
		ym(186118, "init", {
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true
		});
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/186118" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- /Yandex.Metrika counter -->

    <script>
        <? $rngstCallbackOffState = $page_url !== '/rngst.php'?'true':'false'; ?>
		function disableRngstCallback(){
			if (typeof(ringostatAPI) !== 'undefined') {
				ringostatAPI.setCallbackSettings({CallbackOff: <?= $rngstCallbackOffState ?>});
			} else {
				setTimeout(disableRngstCallback,800);
			}
		}
		disableRngstCallback();
    </script>

	<!-- WA Custom Scripts -->
	<script>
		function plid() {
			/*$('[name="submitted[promo]"]').val(uid);*/
			yasend();
		}
	</script>
    <script type="text/javascript" src="https://services.wiseadvice.ru/tracker/js/v1/wa.min.js"></script>
	<!-- End WA Custom Scripts -->

	<!-- Google Tag Manager -->
	<noscript>
		<iframe src="//www.googletagmanager.com/ns.html?id=GTM-TMLNRS"
				height="0" width="0" style="display:none;visibility:hidden"></iframe>
	</noscript>
	<script>(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({
				'gtm.start': new Date().getTime(), event: 'gtm.js'
			});
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src =
				'//www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-TMLNRS');</script>
	<!-- End Google Tag Manager -->
<? endif ?>
<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>
<!-- Начало блока: Мобильное меню-->
<div class="mobile-menu">
	<? $APPLICATION->IncludeComponent(
		"bitrix:menu",
		"top-menu_mobile",
		Array(
			"ROOT_MENU_TYPE" => "top",
			"MAX_LEVEL"      => "1",
			"USE_EXT"        => "Y"
		)
	); ?>
	<?
		$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/menu/inner_mobile.php'
		));
	?>
</div>
<!-- Конец блока: Мобильное меню-->


<?

	// Здесь были формы

?>
<div class="page-wrapper">
	<div class="wrap-for-footer">
		<header class="page-header">
			<div class="page-header__top-section js-main-nav-scroll">
				<div class="content-center">
					<div class="page-header__btn-holder">
						<!-- Начало блока: Кнопка мобильного меню--><a href="#" class="burger-btn page-header__btn <?if($APPLICATION->GetCurPage()!=SITE_DIR):?>_orange<?endif?>"><span
								class="burger-btn__line"></span></a>
						<!-- Конец блока: Кнопка мобильного меню-->
					</div>
					<div class="page-header__menu js-show-search-form">
						<div class="page-header__menu-wrapper clear js-show-search-form__hidden">
							<? $APPLICATION->IncludeComponent(
								"bitrix:menu",
								"top-menu",
								Array(
									"ROOT_MENU_TYPE" => "top",
									"MAX_LEVEL"      => "1",
									"USE_EXT"        => "Y"
								)
							); ?>

							<!--<button class="page-header__show-search js-show-search-form__btn" type="submit" type="button">Показать форму поиска</button>-->
						</div>

						<form class="page-header__search-form _none js-show-search-form__form" action="/search/" method="GET">
							<input class="page-header__search-input" name="q" type="search" placeholder="Поиск по сайту">
							<input type="hidden" name="how" value="r">
							<input class="page-header__search-btn" type="submit" value="Найти">
						</form>
					</div>

					<!--noindex-->
					<!--<div class="page-header__enter">
						<div class="enter-link"><a href="#auth" data-action="pupop" class="enter-link__item">Вход для
								клиентов</a></div>
					</div>-->
					<!--<div class="page-header__full"><a href="?fullversion=y" class="page-header__full-link">Полная версия
							сайта</a></div>-->
					<!-- Начало блока: контакты https://rm.9958258.ru/issues/126867 -->
					<div class="page-header__mobile-logo">
						<a href="/" title="На главную"><img src="<?=SITE_TEMPLATE_PATH?>/img/logos/logo-wiseadvice-mobile.png" alt="Логотип" width="96" height="33"></a>
					</div>
					<div class="page-header__mobile-contacts">
							<span class="phone"><?
								$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
									"AREA_FILE_SHOW" => "file",
									"PATH"           => SITE_DIR . '/local/include/phone_link.php'
								));
								?></span>

						<!--<a class="pupop contacts-block__callback-link" href="#callback-new">Заказать обратный звонок</a>-->

					</div>
					<!--/noindex-->
				</div>
			</div>
			<div class="page-header__bottom-section <?if($APPLICATION->GetCurPage()==SITE_DIR):?>page-header__bottom-section--gray _no-border<?endif;?> <? if ($APPLICATION->GetCurPage() == SITE_DIR."landing/1c/" ): ?>_bordered<? endif;?>">
				<div class="content-center">
					<div class="page-header__logo">
							<a href="/" title="На главную"><img src="<?=SITE_TEMPLATE_PATH?>/img/logo_franchisee.png" alt="Логотип" width="218" height="72"></a>
							<span class="page-header__logo-text">Настоящие эксперты<br />в автоматизации финансов</span>
					</div>
					<div class="page-header__holder">
						<div class="page-header__status">
							<!-- Начало блока: Статус 1с-->
							<?
								$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
									"AREA_FILE_SHOW" => "file",
									"PATH"           => SITE_DIR . '/local/include/statuses.php'
								));
							?>
							<!-- Конец блока: Статус 1с-->
						</div>
						<div class="page-header__addresses">
							<ul class="nostyle">
								<li>
									<a href="mailto:<? include($_SERVER['DOCUMENT_ROOT'] . '/local/include/email.php') ?>"
									   class="email-link"><?
											$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
												"AREA_FILE_SHOW" => "file",
												"PATH"           => SITE_DIR . '/local/include/email.php'
											));
										?></a>
								</li>
								<li>
									<a href="/kontakty/" class="metro-link">
										<?
											$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
												"AREA_FILE_SHOW" => "file",
												"PATH"           => SITE_DIR . '/local/include/address.php'
											));
										?>
									</a>
								</li>
							</ul>
						</div>
						<div class="page-header__contacts">
							<!-- Начало блока: Контакты-->
							<div class="top-contacts">
								<div class="top-contacts__phone">
										<?
											$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
												"AREA_FILE_SHOW" => "file",
												"PATH"           => SITE_DIR . '/local/include/phone_link.php'
											));
										?>
								</div>
								<a href="#callback-new" onclick="setCallbackFormSource('Шапка сайта')"
								   class="top-contacts__link pupop">Заказать обратный звонок</a>
							</div>
							<!-- Конец блока: Контакты-->
						</div>
					</div>
					<div class="page-header__email  page-header__email--desktop-hidden">
						<a href="mailto:<? include($_SERVER['DOCUMENT_ROOT'] . '/local/include/email.php') ?>" class="email-link">
							<?
							$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
								"AREA_FILE_SHOW" => "file",
								"PATH"           => SITE_DIR . '/local/include/email.php'
							));
							?>
                        </a>
					</div>
				</div>
			</div>

			<?if(!LandingHelper::checkPartial('c-fix-header')){
			    LazyLoad::includeFile(SITE_DIR.'local/include/menu/fix_menu.php');
			}?>

			<? if ($APPLICATION->GetCurPage() != SITE_DIR && !defined('HIDE_SUBMENU')): ?>
				<div class="page-header__sub-menu">
					<div class="content-center">
						<!-- Начало блока: Внутреннее меню-->
						<div class="inner-menu _pp">
							<?
								$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
									"AREA_FILE_SHOW" => "file",
									"PATH"           => SITE_DIR . '/local/include/menu/inner.php'
								));
							?>
						</div>
						<!-- Конец блока: Внутреннее меню-->
					</div>
				</div>
				<? if ($APPLICATION->GetCurPage() != '/spasibo-za-pokupku/' && !defined('HIDE_BREADCRUMBS')): ?>
					<? $APPLICATION->IncludeComponent("bitrix:breadcrumb", ".default", array(
						"START_FROM" => "0",
						"PATH"       => "",
						"SITE_ID"    => SITE_ID
					),
						false
					); ?>
				<? endif; ?>
			<? endif; ?>
		</header>
		<main>
