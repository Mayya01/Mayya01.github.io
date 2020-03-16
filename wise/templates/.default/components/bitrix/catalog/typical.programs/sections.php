<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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

$APPLICATION->AddChainItem("Типовые программы 1C");
?>

<section class="c-typical-products">
	<div class="content-center">
		<h1 class="c-typical-products__caption">Программы 1С 8</h1>
		<div class="c-typical-products__promo">
			<div class="present-banner">
				<div class="present-banner__bg"></div>
				<div class="present-banner__content">
					<div class="present-banner__caption h2">Подарки и&nbsp;бонусы</div>
					<div class="present-banner__text">Цены на все типовые продукты 1С регламентированы и одинаковые у всех франчайзи. Мы соблюдаем партнерские обязательства и заботимся о наших клиентах, поэтому обеспечиваем лучший сервис, охотно делимся опытом, а также предлагаем <a class="dotted-link" href="#profit">специальные бонусы и&nbsp;подарки</a> при покупке продуктов 1С.</div>
				</div>
			</div>
		</div>
		<div class="c-typical-products__cols">
			<div class="c-typical-products__text-col">
				<p>Для решения полного спектра задач по автоматизации предприятий различного масштаба и направлений бизнеса фирма 1С выпускает линейку собственных типовых программных продуктов. Любая программа 1С 8 создана на современной технологической платформе «1С: Предприятие 8».</p>
				<p>Являясь партнером фирмы 1С с 2003 года, мы регулярно подтверждаем статус 1С:Франчайзи. Кроме этого, свидетельством наших компетенций является статус <a href="/o-kompanii/1s-centr-erp/" class="default-link">1С:Центр ERP</a>. Это дает нам возможность предложить нашим заказчикам любые конфигурации 1С 8.3.</p>
			</div>
			<div class="c-typical-products__aside-col">
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => SITE_DIR.'/local/include/banners/compare_gray.php'
				));
				?>
			</div>
		</div>
		<?
		// Вывод программ 1С
		$APPLICATION->IncludeComponent("bitrix:catalog.section.list","programs",
			Array(
				"VIEW_MODE" => "TEXT",
				"SHOW_PARENT_NAME" => "Y",
				"IBLOCK_TYPE" => EnvironmentHelper::getParam('programmy1s'),
				"IBLOCK_ID" => EnvironmentHelper::getParam('programmy1sIBlockId'),
				"SECTION_ID" => false,
				"SECTION_CODE" => "",
				"SECTION_URL" => "",
				"COUNT_ELEMENTS" => "Y",
				"TOP_DEPTH" => "1",
				"SECTION_FIELDS" => "",
				"ADD_SECTIONS_CHAIN" => "Y",
				"CACHE_TYPE" => "A",
				"CACHE_TIME" => "36000000",
				"CACHE_NOTES" => "",
				"CACHE_GROUPS" => "Y",
				"SECTION_USER_FIELDS" => array("UF_PRICE_LIST", "UF_NAME_LIST", 'UF_DELTERM')
			),
			$component
		);?>
		<?
		$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
			"AREA_FILE_SHOW" => "file",
			"PATH" => SITE_DIR.'/local/include/banners/callback.php'
		));
		?>
	</div>
</section>
<!-- Начало блока: Почему выгодно покупать у нас-->
<?LazyLoad::includeFile($filePath = SITE_DIR.'/local/include/blocks/buy_in_our_company.php', array("ADDITIONAL_CSS_ID"=>"profit"));?>
<!-- Конец блока: Почему выгодно покупать у нас-->
<section class="c-how-to">
	<div class="content-center">
		<div class="c-how-to__cols">
			<div class="c-how-to__left-col">
				<h2 class="h1">Как внедрить</h2>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => SITE_DIR.'/local/include/vertical-menu/how-to-1.php'
				));
				?>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => SITE_DIR.'/local/include/banners/bystroe-vnedrenie-2.php'
				));
				?>
			</div>
			<div class="c-how-to__right-col">
				<h2 class="h1">Как сопровождать</h2>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => SITE_DIR.'/local/include/vertical-menu/how-to-2.php'
				));
				?>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
					"AREA_FILE_SHOW" => "file",
					"PATH" => SITE_DIR.'/local/include/banners/consult-1c.php'
				));
				?>
			</div>
		</div>
	</div>
</section>
<?
	$break = 'point';
	$APPLICATION->IncludeComponent(
	"wiseadvice:experience",
	"",
	Array(
		"ADDITIONAL_INTEGRATORS_TEXT" => $arParams['ADDITIONAL_INTEGRATORS_TEXT'],
		"BACKGROUND_COLOR" => $arParams['BACKGROUND_COLOR'],
		"CACHE_TIME" => $arParams['CACHE_TIME'],
		"CACHE_TYPE" => $arParams['CACHE_TYPE'],
		"INTEGRATORS_HEADER" => $arParams['INTEGRATORS_HEADER'],
		"INTEGRATORS_IBLOCK_ID" => $arParams['INTEGRATORS_IBLOCK_ID'],
		"LAZY_LOAD" => 'Y',
		"PARTNERS_IBLOCK_ID" => $arParams['PARTNERS_IBLOCK_ID'],
		"PROJECT_IBLOCK_TYPE" => EnvironmentHelper::getParam("proektyIBlockId"),
		"SHOW_TITLE" => 'Y',
		"TEMPLATE" => 'short',
		"TITLE" => 'Наш опыт'
	),
	false
);?>

