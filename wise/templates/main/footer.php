<?
	if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
		die();
	}
?>

<!--noindex-->
<? global $isNoBlogBlock;
if (!$isNoBlogBlock) {
	LazyLoad::includeFile($filePath = SITE_DIR . '/local/include/blocks/blog_by_tags.php', $arParams = array(), true);
}
?>
<!--/noindex-->


</main>
</div>
<footer class="page-footer">
	<div class="page-footer__holder content-center">
		<div class="page-footer__contact-col" itemscope itemtype="http://schema.org/Organization">
			<span class="hidden" itemprop="name">ООО «Вайзэдвайс»</span>
			<!-- Начало блока: Контакты-->
			<div class="top-contacts _footer">
				<div class="top-contacts__phone" itemprop="telephone">
					<?
					$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH"           => SITE_DIR . '/local/include/phone_link.php'
					));
					?>
				</div>
				<a href="#callback-new" class="top-contacts__link pupop">Заказать обратный звонок</a>
			</div>
			<!-- Конец блока: Контакты-->
			<div class="page-footer__email" itemprop="email">
				<a href="mailto:<? include($_SERVER['DOCUMENT_ROOT'] . '/local/include/email.php') ?>"
				   class="page-footer__link">
					<?
						$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH"           => SITE_DIR . '/local/include/email.php'
						));
					?>
				</a>
			</div>
			<div class="page-footer__socials">
				<!-- Начало блока: Соц.сети-->
				<? // TODO: привязать социальные сети ?>
				<div class="social-btns first-iteration-hidden">
					<ul class="social-btns__list">
						<li class="social-btns__item"><a href="https://www.facebook.com/wiseadviceit/" target="_blank" class="social-btns__btn"><span class="fb"></span></a>
						</li>
						<li class="social-btns__item"><a href="https://www.youtube.com/channel/UCicBeZCA83kd1AbfseWAi5Q" target="_blank" class="social-btns__btn"><span class="youtube"></span></a>
						</li>
					</ul>
				</div>
				<!-- Конец блока: Соц.сети -->
			</div>
			<div class="page-footer__text" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<?
					$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH"           => SITE_DIR . '/local/include/address_full.php'
					));
				?>
			</div>
			<div class="page-footer__text">
				<?
					$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH"           => SITE_DIR . '/local/include/copyright.php'
					));
				?>
			</div>
			<div class="page-footer__text _small">
				<?
					$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
						"AREA_FILE_SHOW" => "file",
						"PATH"           => SITE_DIR . '/local/include/copyright_2.php'
					));
				?>
				<?showFooterNotice()?>
                <p class="pinfo-footer-notice"><a class="page-footer__link" href="/local/files/politika-v-oblasti-kachestva.pdf" target="_blank">Политика в области качества</a></p>
                <p class="pinfo-footer-notice"><a class="page-footer__link" href="/publichnaya-oferta/" target="_blank">Публичная оферта</a></p>
			</div>
		</div>
		<div class="page-footer__menu-col">
			<div class="page-footer__left-col">
				<!-- Начало блока: Меню в футере-->
				<? $APPLICATION->IncludeComponent(
					"bitrix:menu",
					"footer-menu",
					Array(
						"ROOT_MENU_TYPE" => "bottom1",
						"MAX_LEVEL"      => "1",
						"USE_EXT"        => "Y"
					)
				); ?>
				<!-- Конец блока: Меню в футере-->
			</div>
			<div class="page-footer__right-col">
				<!-- Начало блока: Меню в футере-->
				<? $APPLICATION->IncludeComponent(
					"bitrix:menu",
					"footer-menu",
					Array(
						"ROOT_MENU_TYPE" => "bottom2",
						"MAX_LEVEL"      => "1",
						"USE_EXT"        => "Y"
					)
				); ?>
				<!-- Конец блока: Меню в футере-->
				<div class="page-footer__dev mobile-hide">
					<!-- Начало блока: Ссылка на разрабочика-->
					<div class="dev-stamp">

						<div class="dev-stamp__text mobile-hide"><a data-ajax-url="/local/ajax/blocks/other_companies.php"
																	class="dev-stamp__link js-toggler"
																	href="#other-companies">Другие компании</a><br/>
							консалтинговой группы <a class="dev-stamp__link" href="http://wiseadvice.ru/"
													 target="_blank">WiseAdvice</a></div>
					</div>
					<!-- Начало блока: Ссылка на разрабочика-->

				</div>
			</div>
		</div>
	</div>
    <div id="other-companies" class="page-footer__other-companies">
        <div class="content-center">
            <div class="b-other-companies">
            </div>
        </div>
    </div>
</footer>
</div>
<?if($_REQUEST["open_subs"]):?>
	<script>
		$(function(){
			var params = clone($.fancybox.defaults);
			params["href"] = "#js-subscription-modal";

			$.fancybox(params);
		});
	</script>
<?endif?>
<?
if (isXmlHttpRequest()) { // Для обработки ajax-запросов - подключаем обязательно
// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/Callback.php'
	));

	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/CallbackEmail.php'
	));

// TODO Работает
	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/BuyProgram.php'
		)
	);

	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/Learning.php'
		)
	);

	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/BuyLicence.php'
		)
	);


// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/Its.php'
	));

// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/ElectronicReport.php'
	));

// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/ArendaProgram.php'
	));

// TODO Работает
	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/BuyOldProgram.php'
		)
	);

// Форма быстрого внедрения
// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/QuickInstall.php'
	));

// ФОРМЫ
// Форма авторизации
// TODO НЕ РАБОТАЕТ!
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/authorize.php'
	));

// Форма обратного звонка раздела обсулуживание
// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/recall-tariff.php'
	));

// Форма "Заказать тест-драйв"
// TODO Похоже не Работает. Не смог найти вызовы формы.
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/test-drive.php'
	));

// Форма "Заказать тест-драйв"
// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/Setting.php'
	));
// Форма "Заказать разовую консультацию"
// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/ConsultationSingle.php'
	));
// Форма "Заказать линию консультаций"
// TODO Работает
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/modal/ConsultationLine.php'
	));
// Форма "Получить демо-доступ"
// TODO Работает
	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/demo-access-new.php'
		)
	);
// Форма "Заказать демонстрацию"
// TODO Работает
	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/OrderDemo.php'
		)
	);

// Форма "Рассчитать стоимость автоматизации"
// TODO Работает
	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/automation.php'
		)
	);
// Форма "Получить демо-доступ". Похоже - старая
// TODO Похоже не работает
	$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH"           => SITE_DIR . '/local/include/modal/demo-access.php'
		)
	);
}
?>

<div class="js-form-lazy-load"></div>
<div class="contact-modal js-form-wrapper" id="no-more-forms">
    <!-- Начало блока: Стандартная форма (колбек)-->
    <div class="c-subscription-form _success">
        <div class="c-subscription-form__message">
            <div class="success-message-modal__caption">Добрый день!</div>
            <div class="success-message-modal__text">Сегодня вы уже отправляли нам заявку.<br>Мы обязательно свяжемся с вами!</div>
        </div>
    </div>
    <!-- Конец блока: Стандартная форма (колбек)-->
</div>
	<!-- html5shiv, respond.js-->
	<!--[if lte IE 8]>
        <script data-skip-moving=true type="text/javascript" src="<?=SITE_TEMPLATE_PATH?>/js/html5shiv.min.js"></script>
        <script data-skip-moving=true type="text/javascript" src="<?=SITE_TEMPLATE_PATH?>/js/respond.min.js"></script>
    <![endif]-->
</body>
</html>
