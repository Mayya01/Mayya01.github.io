<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}
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
?>
<section class="c-product-card js-product-card" itemscope itemtype="http://schema.org/Product">
    <div class="content-center">
        <h1 class="c-product-card__caption" itemprop="name"><? AD_H1($arResult['NAME']) ?></h1>
        <div class="c-product-card__cols">
            <div class="c-product-card__left-holder">
                <div class="c-product-card__left-col">
                    <div class="c-product-card__product-image">
                        <div class="product-image">
                            <div class="product-image__image-holder">
                                <img src="<?= $arResult['DETAIL_PICTURE']['SRC'] ?>" alt="" width="279"
                                     class="product-image__image" itemprop="image"/>
                            </div>
                            <div class="product-image__content">
								<div class="product-image__title _bold">
									<?= $arResult["UF_NAME_LIST"] ?>
                                </div>
                                <ul class="product-image__links">
                                    <li class="product-image__link-holder">
                                        <a href="#demonstration-new" onclick="setFormProgramm('<?=$arResult["UF_NAME_LIST"]?>')" class="product-image__link dotted-link pupop">
                                            Заказать демонстрацию
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="c-product-card__subscribe <? /*first-iteration-hidden */ ?>">
						<? $APPLICATION->IncludeComponent(
							"wiseadvice:subscription.input",
							"",
							Array(
								"RUB_CODE" => array(
									"BLOG_NEWS",
									"BLOG_PRESS_RELEASE",
									"BLOG_ARTICLES",
									"BLOG_VIDEO"
								)
							)
						); ?>
                    </div>
                </div>
				<? if (count($arResult["VERSIONS"]) > 1 && !$arResult["FORCE_HIDE_TABS"]): ?>
                    <ul class="simple-tabs__ui <? /*first-iteration-hidden */ ?>">
						<? foreach ($arResult["VERSIONS"] as $arVersion): ?>
							<? // @TODO: убрать $arVersion["CODE"]=="docs-prof"?"no-base":""  задача - https://rm.9958258.ru/issues/86491 ?>
                            <li class="simple-tabs__ui-item js-p-tabs-controller-item
                                        <? if ($arVersion["CURRENT"]): ?>_active<? endif ?> <?= $arVersion["CODE"]=="docs-prof"?"no-base":"" ?>"
                                data-producttype="<?= $arVersion["ID"] ?>"
								<? if ($arResult["RELEASES"][ $arVersion["PROPS"]["RELEASE_ID"]["VALUE"] ]): ?>
									<? $curRelease = $arResult["RELEASES"][ $arVersion["PROPS"]["RELEASE_ID"]["VALUE"] ] ?>
                                    data-release-name="<?= $curRelease["NAME"] ?>"
                                    data-release-version="<?= $curRelease["PROPS"]["RELEASE_NUMBER"]["VALUE"] ?>"
                                    data-release-url="<?= $curRelease["LIST_PAGE_URL"] ?>?program=<?= $curRelease["IBLOCK_SECTION_ID"] ?>&release=<?= $curRelease["ID"] ?>"
								<? endif ?>

                            >
                                <a href="#<?= $arVersion["CODE"] ?>" class="simple-tabs__ui-link"><span
                                            class="simple-tabs__ui-text"><?= $arVersion["TAB_NAME"] ?></span></a>
                            </li>
						<? endforeach ?>
						<? if (count($arResult["VERSIONS"]) > 1): ?>
                            <div class="c-product-card__compare-link <? /*first-iteration-hidden*/ ?>">
                                <a href="#fancybox-compare-popup" class="compare-link pupop">
                                    <span>Сравнить версии</span>
                                </a>
                            </div>
						<? endif ?>
                    </ul>
				<? endif ?>
                <div class="c-product-card__middle-col">
                    <div class="<? /*simple-tabs*/ ?> simple-tabs_hash  js-p-tabs-controller">
                        <div class="simple-tabs__tabs js-p-tabs-tabs">
							<? foreach ($arResult["VERSIONS"] as $arVersion): ?>

                                <div class="simple-tabs__tab js-p-tabs-item <? if ($arVersion["CURRENT"]): ?>_active<? endif ?>">
									<? if (!$arVersion["PREVIEW_TEXT"]): ?>
										<?= $arResult['~UF_PROG_DETAIL'] ?>
										<? if ($arResult['~UF_PROG_DETAIL_MORE']): ?>
                                            <div class="more-info c-product-card__more-info">
                                                <a href="#" class="more-info__link dotted-link">Подробнее</a>

                                                <div class="more-info__container">
													<?= $arResult['~UF_PROG_DETAIL_MORE'] ?>
                                                </div>
                                            </div>
										<? endif; ?>
									<? else: ?>
										<?= $arVersion["PREVIEW_TEXT"] ?>
										<? if ($arVersion["DETAIL_TEXT"]): ?>
                                            <div class="more-info c-product-card__more-info">
                                                <a href="#" class="more-info__link dotted-link">Подробнее</a>

                                                <div class="more-info__container">
													<?= $arVersion['DETAIL_TEXT'] ?>
                                                </div>
                                            </div>
										<? endif; ?>
									<? endif ?>
                                </div>
							<? endforeach ?>

                        </div>
                    </div>
					<? if ($arResult["~UF_PROG_DETAIL_SNOS"]): ?>
                        <div class="c-product-card__remark">
							<?= $arResult['~UF_PROG_DETAIL_SNOS'] ?>
                        </div>
					<? endif; ?>
                </div>
                <div class="c-product-card__right-col">
					
					<? $APPLICATION->IncludeComponent("wiseadvice:preorder.block", "", Array(
						"SECTION_ID" => $arResult["ID"],
						"ELEMENT_ID" => $arResult["CURRENT_VERSION_ID"],
						"HIDE_BLOCK" => $arParams["HIDE_PREORDER_BLOCK"],
						"HIDE_CALC" => $arResult['HIDE_CALC']
					)); ?>

                    <div class="c-product-card__promo-holder">
                        <h3 class="c-product-card__promo-caption">А также для вас:</h3>
						<?
						$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_DIR . '/local/include/banners/banner-slider-1-small.php'
						));
						?>
                        <span class="c-product-card__promo-note js-c-product-card__promo-note"><sup>*</sup> Условия, размер скидок и количество бесплатных часов уточняйте у менеджеров.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-programm-features">
            <h3 class="c-programm-features__title">Преимущества 1С:Корпорация</h3>
            <ul class="content-list">
                <li>Комплексная информационная система, содержащая специализированные решения (PDM, EAM, PMO, ITIL,
                    CRM,
                    MDM, WMS, TMS, BSC, ECM, CPM и др.)
                </li>
                <li>Автоматизация наиболее востребованных функций управляющих компаний и бизнес-единиц холдингов
                </li>
                <li>Реализация кросс-функциональных бизнес-процессов для распределенного ИТ-ландшафта холдинга</li>
                <li>Реализация рекомендаций к функциональным требованиям по бюджетированию, казначейству, методикам
                    учета и подготовки отчетности МСФО, подготовленных международной компанией EY (Ernst & Young)
                </li>
            </ul>
            
        </div>
</section>

<? CMain::IncludeFile($templateFolder . '/compareTable.php', array('sectionId' => $arResult["ID"],'NAME' => $arResult['NAME'],'currentVersion' => $arResult['CURRENT_VERSION_ID'],'WRAP_CLASS' => 'section _nopt')); ?>

<section class="c-how-to _gray">
	<div class="content-center">
		<div class="c-how-to__cols">
			<div class="c-how-to__left-col">
				<h2 class="h1">Как внедрить</h2>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/vertical-menu/how-to-1.php'
				));
				?>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/banners/bystroe-vnedrenie-2.php'
				));
				?>
			</div>
			<div class="c-how-to__right-col">
				<h2 class="h1">Как сопровождать</h2>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/vertical-menu/how-to-2.php'
				));
				?>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/banners/consult-1c.php'
				));
				?>
			</div>
		</div>
	</div>
</section>
<section class="c-automatization">
	<div class="content-center">
		<h2 class="h1 c-automatization__caption">Автоматизация на&nbsp;базе 1С:Корпорация</h2>
		<div class="c-automatization__cols">
			<div class="c-automatization__left-col">
				<div class="content-area">
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _counter" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu17.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-holdinga/" class="default-link">Автоматизация холдинга</a></h3>
							<p>Комплексная автоматизация холдинга. Разработка унифицированной методологии ведения учета. Технология и концепция внедрения.</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _counter" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu16.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-buhgalterskogo-ucheta/" class="default-link">Автоматизация бухгалтерского учета</a></h3>
							<p>Внедрение единых стандартов регламентированного учета для всех предприятий, входящих в состав холдинговых структур</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _calc" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu15.png" alt="" />
						<div class="c-automatization__content-wrapper ">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/frp/" class="default-link">Автоматизация финансового управления</a>
								<span>frp</span>
							</h3>
							<p>Специализированное решение для постановки полноценного управленческого учета, базирующегося на современной методологии управления финансами корпораций</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _money" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu12.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-erp/" class="default-link">Автоматизация комплексного управления ресурсами предприятия </a>
								<span>erp</span>
							</h3>
							<p>Создание единого информационного пространства для обеспечения достоверности, непрерывности, своевременности и полноты информационных потоков</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _person" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu11.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-crm/" class="default-link">Автоматизация управления взаимоотношениями с клиентами</a>
								<span>crm</span>
							</h3>
							<p>Обеспечение отделов продаж холдинговых структур всей полнотой информации о контактах с заказчиками для анализа, контроля и своевременной реакции на события</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _building" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu3.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-zadachi-po-otraslyam/avtomatizaciya-proizvodstvennyh-predpriyatii/" class="default-link">Автоматизация производственного предприятия</a>
							</h3>
							<p>Организация контроля всех бизнес-процессов в производственном секторе многоотраслевого предприятия</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _compare" src="<?=SITE_TEMPLATE_PATH?>/img/content/compare-icon-1.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/upravlenie-zarplatoi-personalom-kadrovyi-uchet/" class="default-link">Автоматизация кадрового учета, управления зарплатой<br> и персоналом </a>
								<span>hrm</span>
							</h3>
							<p>Исчерпывающее решение многоплановых задач кадровых служб, как в головном офисе холдинга, так и в дочерних организациях</p>
						</div>
					</div>
				</div>
			</div>
			<div class="c-automatization__right-col">
				<div class="c-automatization__sub-caption h2">
					<a class="default-link" title="Реализованные проекты" href="/o-kompanii/nash-opyt/projects/"
					   rel="Реализованные проекты">Реализованные проекты</a>
				</div>
				<!-- Начало блока: Слайдер плиточного контента-->
				<!-- Начало блока: Слайд плиточного контента-->
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/blocks/projects-inner.php',
					"COLOR" => "_gray"
				));
				?>
				<? if ($arResult['~UF_PROG_AUTO_TMP_2']): ?>
					<?= $arResult['~UF_PROG_AUTO_TMP_2'] ?>
				<? endif; ?>
				<!-- Конец блока: Слайд плиточного контента-->
				<!-- Конец блока: Слайдер плиточного контента-->
				<div class="content-area">
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _alert" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu8.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption _has-icon"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/upravlenie-nsi-mdm/" class="default-link">Управление НСИ</a>
								<span>mdm</span>
							</h3>
							<p>Постановка единых корпоративных стандартов и методик заполнения справочников для всех компаний холдинга с последующей автоматизацией данного процесса</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _building" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu9.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/konsolidaciya-dannyh/" class="default-link">Консолидация данных </a>
							</h3>
							<p>Автоматизация процесса сбора информации со всех предприятий холдинга для дальнейшего централизованного анализа и формирования консолидированной отчетности</p>
						</div>
					</div>
					<div class="c-automatization-with-icon">
						<img class="c-automatization__img _compare" src="<?=SITE_TEMPLATE_PATH?>/img/content/icon-menu10.png" alt="" />
						<div class="c-automatization__content-wrapper">
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-bpm/" class="default-link">Автоматизация документооборота  и бизнес-процессов </a>
								<span>docflow</span><span>bpm</span>
							</h3>
							<p>Повышение эффективности, прозрачности и управляемости бизнеса за счет автоматизации документооборота и бизнес-процессов. Снижение затрат, минимизация ошибок. </p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
<section class="c-person-speech _gray">
	<div class="content-center">
		<div class="person-speech c-person-speech__speech">
			<div class="person-speech__img-holder">
                <img src="<?= SITE_TEMPLATE_PATH ?>/img/content/speech-img.png"
					 alt="" width="156" class="person-speech__photo"/>
            </div>
			<div class="person-speech__content">
				<div class="person-speech__speech">
					<?= $arResult["~UF_PROG_REVIEW"] ?>
				</div>
				<div class="person-speech__person">
					<div class="person-speech__name">Александр Прямоносов,</div>
					<div class="person-speech__job">генеральный директор<br/>
						<nobr>ООО &laquo;Автоматизация &mdash; услуги и проекты&raquo;</nobr>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="c-accounting-consultant _white">
	<?
    $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/blocks/vnedrenie-promo.php'
	));
	?>
</section>
<?$APPLICATION->IncludeComponent(
	"wiseadvice:experience",
	"",
	Array(
		"ADDITIONAL_INTEGRATORS_TEXT" => $arParams['ADDITIONAL_INTEGRATORS_TEXT'],
		"BACKGROUND_COLOR" => $arParams['BACKGROUND_COLOR'],
		"CACHE_TIME" => $arParams['CACHE_TIME'],
		"CACHE_TYPE" => $arParams['CACHE_TYPE'],
		"INTEGRATORS_HEADER" => $arParams['INTEGRATORS_HEADER'],
		"INTEGRATORS_IBLOCK_ID" => $arParams['INTEGRATORS_IBLOCK_ID'],
		"LAZY_LOAD" => $arParams['LAZY_LOAD'],
		"PARTNERS_IBLOCK_ID" => $arParams['PARTNERS_IBLOCK_ID'],
		"PROJECT_IBLOCK_TYPE" => EnvironmentHelper::getParam("proektyIBlockId"),
		"SHOW_TITLE" => 'Y',
		"TEMPLATE" => 'large',
		"TITLE" => 'Наш опыт'
	),
	false
);?>
<?
/** Для вывода блоков статей и видео ниже (обрабатывается эпилогом) */
$arResult["UF_SHOW_BLOG"] = ["ARTICLES", "VIDEO"];
$APPLICATION->SetPageProperty('BLOG_BY_TAGS_CLASS', '_white');
