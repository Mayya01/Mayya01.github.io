<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
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
$APPLICATION->SetPageProperty('tags', $arResult['PARENT_SECTION']['UF_TAGS']);
if ($arResult['PARENT_SECTION']['UF_DELTERM']) {
	include("template_delivery_termination.php");

	return;
}

if ($arResult['PARENT_SECTION']["ID"] == "39") {
	include("template_1c_korporaciya.php");

	return;
}

if ($arResult['PARENT_SECTION']["ID"] == "6") {
	include("template_1c_documentooborot_8.php");

	return;
}
//Зуп КОРП
if($arResult['ID'] == '119'){
	include("template_zup_corp.php");
	return;
}

?>
<section class="c-product-card js-product-card" itemscope itemtype="http://schema.org/Product">
	<div class="content-center">
		<h1 class="c-product-card__caption" itemprop="name"><? AD_H1($arResult['NAME']) ?></h1>
		<div class="c-product-card__cols">
			<div class="c-product-card__left-holder">
				<? if (in_array($arResult['ID'], [7, 151])) : ?>
					<div class="c-product-card__warn-holder">
						<div class="warn-block">
							<div class="warn-block__caption">Внимание!</div>
							<div class="warn-block__content content-area">
								<p>Программа 1С:Управление небольшой фирмой 8 переименована.</p>
								<p>Актуальное название программы <strong>1С:Управление НАШЕЙ фирмой 8</strong>.</p>
							</div>
						</div>
					</div>
				<? endif; ?>
				<div class="c-product-card__left-col">
					<div class="c-product-card__product-image">
						<div class="product-image">
							<div class="product-image__image-holder">
								<img src="<?= $arResult['PARENT_SECTION']['DETAIL_PICTURE']['SRC'] ?>" alt="" width="279"
									 class="product-image__image" itemprop="image"/>
							</div>
							<div class="product-image__content">
								<? $currentRelease = $arResult["RELEASES"][ $arResult["PROPERTIES"]["RELEASE_ID"]["VALUE"] ] ?>
								<div class="product-image__title "
									 <? if (!$currentRelease): ?>style="display:none;" <? endif ?>>
									Текущая версия<br/>

									<div class="">
										<a href="<?= $currentRelease["LIST_PAGE_URL"] ?>?program=<?= $currentRelease["IBLOCK_SECTION_ID"] ?>&release=<?= $currentRelease["ID"] ?>"
										   class="product-image__link dotted-link">
											<?= $currentRelease["NAME"] ?>:
											<nobr><?= $currentRelease["PROPS"]["RELEASE_NUMBER"]["VALUE"] ?></nobr>
										</a>
									</div>
								</div>

								<ul class="product-image__links">
									<? if ($arResult['PARENT_SECTION']['UF_SHOW_DEMO']): ?>
										<li class="product-image__link-holder">
											<a href="#demo-access-new"
											   onclick="setFormProgramm('<?= $arResult['PARENT_SECTION']["UF_NAME_LIST"] ?>')"
											   class="product-image__link dotted-link pupop">
												Получить
												<nobr>демо-доступ</nobr>
											</a>
										</li>
									<? endif; ?>
									<? if ($arResult['PARENT_SECTION']["UF_NAME_LIST"]): ?>
									<li class="product-image__link-holder">
										<a href="#demonstration-new"
										   onclick="setFormProgramm('<?= $arResult['PARENT_SECTION']["UF_NAME_LIST"] ?>')"
										   class="product-image__link dotted-link pupop">
											Заказать демонстрацию
										</a>
									</li>
									<? endif; ?>
								</ul>
							</div>
						</div>
					</div>
					<div class="c-product-card__subscribe">
						<? $APPLICATION->IncludeComponent("wiseadvice:subscription.input", "", Array(
								"RUB_CODE"         => EnvironmentHelper::getParam("subscribeDefaultRubricCode"),
								"IS_RELEASES_FORM" => true, //для таких форм практически уникальная логика подписки)
								"SECTION_NAME"     => $arResult['PARENT_SECTION']["UF_NAME_LIST"],
							)); ?>
					</div>
				</div>
				<? if (count($arResult["VERSIONS"]) > 1 && !$arResult["FORCE_HIDE_TABS"]): ?>
					<ul class="simple-tabs__ui">
						<? foreach ($arResult["VERSIONS"] as $arVersion): ?>
							<li class="simple-tabs__ui-item js-p-tabs-controller-item <?= $arResult["CODE"]=="docs-prof"?"no-base":"" ?>
                                 <?= $arVersion["ID"] == $arResult['ID'] ? '_active' : '' ?>"
							>
								<a href="<?= $arResult['PARENT_SECTION']["SECTION_PAGE_URL"] . str_replace($arParams['CUT_ELEMENT_CODE_PART'], '', mb_strtolower($arVersion['CODE'])) . '/' ?>" class="simple-tabs__ui-link"><span
										class="simple-tabs__ui-text"><?= $arVersion["PROPERTY_TAB_NAME_VALUE"] ?></span></a>
							</li>
						<? endforeach ?>
						<? if (count($arResult["VERSIONS"]) > 1): ?>
							<div class="c-product-card__compare-link ">
								<a href="#compare-version" class="compare-link">
									<span>Сравнить версии</span>
								</a>
							</div>
						<? endif ?>
					</ul>
				<? endif ?>
				<div class="c-product-card__middle-col">
					<div class=" simple-tabs_hash">
						<div class="simple-tabs__tabs">
								<div
									class="simple-tabs__tab  _active content-area">
									<? if (!$arResult["PREVIEW_TEXT"]): ?>
										<?= $arResult['PARENT_SECTION']['~UF_PROG_DETAIL'] ?>
										<? if ($arResult['PARENT_SECTION']['~UF_PROG_DETAIL_MORE']): ?>
											<div class="more-info c-product-card__more-info">
												<a href="#" class="more-info__link dotted-link">Подробнее</a>

												<div class="more-info__container">
													<?= $arResult['PARENT_SECTION']['~UF_PROG_DETAIL_MORE'] ?>
												</div>
											</div>
										<? endif; ?>
									<? else: ?>
										<?= $arResult["PREVIEW_TEXT"] ?>
										<? if ($arResult["DETAIL_TEXT"]): ?>
											<div class="more-info c-product-card__more-info">
												<a href="#" class="more-info__link dotted-link">Подробнее</a>

												<div class="more-info__container">
													<?= $arResult['DETAIL_TEXT'] ?>
												</div>
											</div>
										<? endif; ?>
									<? endif ?>
								</div>
						</div>
					</div>
					<? if ($arResult['PARENT_SECTION']["~UF_PROG_DETAIL_SNOS"]): ?>
						<div class="c-product-card__remark">
							<?= $arResult['PARENT_SECTION']['~UF_PROG_DETAIL_SNOS'] ?>
						</div>
					<? endif; ?>
				</div>
				<div class="c-product-card__right-col">

					<? $APPLICATION->IncludeComponent("wiseadvice:preorder.block", "", Array(
						"SECTION_ID" => $arResult['PARENT_SECTION']["ID"],
						"ELEMENT_ID" => $arResult["ID"],
						"HIDE_BLOCK" => $arParams["HIDE_PREORDER_BLOCK"]
					)); ?>

                    <? if ($arResult['ID'] !== 4): ?>
                        <div class="c-product-card__promo-holder">
                            <h3 class="c-product-card__promo-caption">А также для вас:</h3>
                            <?
                            $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
                                "AREA_FILE_SHOW" => "file",
                                "PATH"           => SITE_DIR . '/local/include/banners/banner-slider-1-small.php',
                            ));
                            ?>
                            <span class="c-product-card__promo-note js-c-product-card__promo-note"><sup>*</sup> Условия, размер скидок и количество бесплатных часов уточняйте у менеджеров.</span>
                            <span class="c-product-card__promo-note js-c-product-card__promo-delivery-note"><sup>*</sup> Для поставок за исключением электронных.</span>
                        </div>
                    <? endif; ?>
					
				</div>
			</div>
		</div>
        <? if ($arResult['ID'] === 4): ?>
			<section>
				<h2 class="h1">С нами начать работу в 1С:ЗУП легко</h2>
				<div class="icon-text icon-text--five-elements">
					<div class="icon-text__element icon-text__element--building">
						<p>Доставка до офиса</p>
					</div>
					<div class="icon-text__element icon-text__element--prof">
						<p>Бесплатная установка версий ПРОФ</p>
					</div>
					<div class="icon-text__element icon-text__element--three-month">
						<p>3 месяца поддержки (ИТС) в подарок</p>
					</div>
					<div class="icon-text__element icon-text__element--clock">
						<p>Бонусные часы для решения ваших задач</p>
					</div>
					<div class="icon-text__element icon-text__element--chat">
						<p>Выделенная Линия Консультаций</p>
					</div>
				</div>
				<div class="experience-section__offer _mt40 _mb60">
                <div class="experience-section__offer-text">
                    Хотите легко и быстро начать<br>
                    работу в1С:ЗУП ПРОФ?
                </div>
                <div class="experience-section__offer-button"><a href="#callback-new" class="button pupop" onclick="setCallbackFormHeader('Получить бонусы')">Получить бонусы</a></div>
            </div>
			</section>
        <? endif; ?>
        <?
            if ($arResult['ID'] === 4) {
                $roadmap = 'ZUP';
            } else {
                $roadmap = 'N';
            }
        ?>
		<? CMain::IncludeFile(  '/local/templates/.default/components/bitrix/catalog/typical.programs/bitrix/catalog.section/program/compareTable.php',
            array(
                    'sectionId' => $arResult['PARENT_SECTION']["ID"],
                    'NAME' => $arResult['NAME'],
                    'SECTION_WRAP' => false,
                    'currentVersion' => $arResult['ID'],
                    'SHOW_ROADMAP' => $roadmap
            )); ?>
</section>
<? if ($arResult['ID'] === 4): ?>
<section class="experience-section">
    <div class="content-center">

        <div class="experience-section__partners">
            <div class="h2">С нами уже работают</div>
            <!-- Начало блока: Карусель-->

            <? $projectWithSortArr = array("1:904","2:60","3:234", "4:58", "5:65","6:1642","7:208");
            global $arrFilterTopValue;
            $arSort = array();
            // если свойтсво не пустое значит, у нас есть явные проекты заданые по порядку
            if(!empty($projectWithSortArr)){
                foreach ($projectWithSortArr as $item){
                    $project = explode(':',$item);
                    $arrFilterTopValue['ID'][] = $project[1];
                    $arSort[$project[1]] = $project[0];

                }
                $news_count = count($arSort);
            }

            ?>
            <? $APPLICATION->IncludeComponent("bitrix:news.list", "partnersShort", Array(
                "ACTIVE_DATE_FORMAT"              => "d.m.Y",
                "ADD_SECTIONS_CHAIN"              => "N",
                "AJAX_MODE"                       => "N",
                "AJAX_OPTION_ADDITIONAL"          => "",
                "AJAX_OPTION_HISTORY"             => "N",
                "AJAX_OPTION_JUMP"                => "N",
                "AJAX_OPTION_STYLE"               => "Y",
                "CACHE_FILTER"                    => "N",
                "CACHE_GROUPS"                    => "Y",
                "CACHE_TIME"                      => "36000000",
                "CACHE_TYPE"                      => "A",
                "CHECK_DATES"                     => "Y",
                "COMPONENT_TEMPLATE"              => "partnersShort",
                "DETAIL_URL"                      => "",
                "DISPLAY_BOTTOM_PAGER"            => "Y",
                "DISPLAY_DATE"                    => "Y",
                "DISPLAY_NAME"                    => "Y",
                "DISPLAY_PICTURE"                 => "Y",
                "DISPLAY_PREVIEW_TEXT"            => "Y",
                "DISPLAY_TOP_PAGER"               => "N",
                "FIELD_CODE"                      => array("", ""),
                "FILTER_NAME"                     => "arrFilterTopValue",
                "HIDE_LINK_WHEN_NO_DETAIL"        => "N",
                "IBLOCK_ID"                       => "20",
                "IBLOCK_TYPE"                     => "partners",
                "INCLUDE_IBLOCK_INTO_CHAIN"       => "N",
                "INCLUDE_SUBSECTIONS"             => "N",
                "MESSAGE_404"                     => "",
                "NEWS_COUNT"                      => "100",
                "PAGER_BASE_LINK_ENABLE"          => "N",
                "PAGER_DESC_NUMBERING"            => "N",
                "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
                "PAGER_SHOW_ALL"                  => "N",
                "PAGER_SHOW_ALWAYS"               => "N",
                "PAGER_TEMPLATE"                  => ".default",
                "PAGER_TITLE"                     => "Новости",
                "PARENT_SECTION"                  => "",
                "PARENT_SECTION_CODE"             => "",
                "PREVIEW_TRUNCATE_LEN"            => "",
                "PROPERTY_CODE"                   => array("", ""),
                "SET_BROWSER_TITLE"               => "Y",
                "SET_LAST_MODIFIED"               => "N",
                "SET_META_DESCRIPTION"            => "Y",
                "SET_META_KEYWORDS"               => "Y",
                "SET_STATUS_404"                  => "N",
                "SET_TITLE"                       => "N",
                "SHOW_404"                        => "N",
                "SORT_BY1"                        => "ACTIVE_FROM",
                "SORT_BY2"                        => "SORT",
                "SORT_ORDER1"                     => "DESC",
                "SORT_ORDER2"                     => "ASC",
                "SORT_BY_CUSTOM_SORT"        => $arSort,
            )); ?>
            <!-- Конец блока: Карусель-->
        </div>
    </div>
</section>

    <section class="section _white">
        <div class="content-center">
            <h2 class="h1">Возможности 1С:ЗУП версии ПРОФ
                в системе управления предприятием</h2>
            <div class="iconic-blocks iconic-blocks--only-in-section iconic-blocks--two-cols content-area">
                <div class="iconic-block iconic-block--genealogy">
                    <h3 class="iconic-block__title">Кадровая служба</h3>
                    <ul>
                        <li>Ключевые проблемы: ведение печатных форм в Word (приказы, командировки и т.д.), формирование реестров документов и отчетов в Excel, не унифицированы процессы по кадровому администрированию.</li>
                        <li>Возможности: ведение первичных документов в единой базе учетных данных, использование унифицированных шаблонов, учет кадров с учетом норм законодательства, формирование штатного расписания, контроль учета рабочего времени и т.д.</li>
                    </ul>
                </div>
                <div class="iconic-block iconic-block--pie-lg ">
                    <h3 class="iconic-block__title">Расчетный отдел</h3>
                    <ul>
                        <li>Ключевые проблемы: двойной ввод данных, необходимость дополнительных проверок и корректировки отчетов, отражение регламентированной и управленческой заработной платы в общем учете.</li>
                        <li>Возможности: отказ от ручных операций payroll, сокращение срока расчета зарплаты и KPI сотрудников, выплаты заработной платы без задержек, исключение ошибок в уплате налогов и страховых взносов, корректное отражение расходов на зарплату в учете предприятия.</li>
                    </ul>
                </div>
            </div>

            <div class="iconic-blocks iconic-blocks--only-in-section iconic-blocks--two-cols content-area _mt60">
                <div class="iconic-block iconic-block--calculator">
                    <h3 class="iconic-block__title">Бухгалтерия</h3>
                    <ul>
                        <li>Ключевые проблемы: консолидация данных, корректность ведения учета для формирования регламентированной отчетности.</li>
                        <li>Возможности: интеграция с 1С:Бухгалтерия 8, своевременная и корректная подготовка/сдача регламентированной отчетности в фонды и контролирующие органы, обновление регламентированной отчетности по мере изменения форм.</li>
                    </ul>
                </div>
                <div class="iconic-block iconic-block--diagram">
                    <h3 class="iconic-block__title">Финансовая служба</h3>
                    <ul>
                        <li>Ключевые проблемы: перерасход фонда оплаты труда, отсутствие инструментов прогнозирования, контроля и анализа расчетных процессов, прозрачность расчета регламентированной и управленческой заработной платы.</li>
                        <li>Возможности: планирование и исполнение бюджета затрат на персонал, контроль отклонений ФОТ от бюджета.</li>
                    </ul>
                </div>
            </div>
            <div class="experience-section__offer _mt40 clearfix">
                <div class="experience-section__offer-text">
                    Хотите подробнее узнать о возможностях<br>
                    1С по зарплате и кадрам?
                </div>
                <div class="experience-section__offer-button"><a href="#callback-new" onclick="setCallbackFormHeader('Заказ обратного звонка')" class="button pupop">Да, перезвоните мне</a></div>
            </div>
        </div>
    </section>

<!--/noindex-->
    <!--noindex-->
    <section class="section _nopb _gray">
        <div class="content-center">
            <h2 class="h1 c-automatization__caption">Автоматизация на базе 1С:ЗУП</h2>
            <div class="c-automatization__cols">
                <div class="c-automatization__left-col">
                    <div class="content-area">
                        <div class="c-automatization-with-icon">
                            <div class="c-automatization__img _counter">
                                <img src="/local/templates/main/img/svg-icons/icon-wallet--sm.svg"  width="26" height="24" alt="">
                            </div>
                            <div class="c-automatization__content-wrapper">
                                <h3 class="c-automatization__content-caption">
                                    <a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-rascheta-zarabotnoi-platy-1s/">Автоматизация расчета заработной платы</a></h3>
                                <p>
                                    Расчет заработной платы по схемам любой сложности, регламентированная и управленческая отчетность, оценка фонда оплаты труда, подача отчетности в фонды, ИФНС и контролирующие органы непосредственно из системы.
                                </p>
                            </div>
                        </div>
                        <div class="c-automatization-with-icon">
                            <div class="c-automatization__img _counter">
                                <img src="/local/templates/main/img/svg-icons/icon-connections.svg"  width="28" height="24" alt="">
                            </div>
                            <div class="c-automatization__content-wrapper ">
                                <h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/kadrovyi-uchet/" class="default-link">Автоматизация кадрового учета</a>
                                </h3>
                                <p>
                                    Планирование необходимости в кадрах, кадровое делопроизводство, учет и регистрация кадровых процессов, ведение штатного расписания, учет рабочего времени, планирование занятости сотрудников.
                                </p>
                            </div>
                        </div>
                        <div class="c-automatization-with-icon">
                            <div class="c-automatization__img _counter">
                                <img src="/local/templates/main/img/svg-icons/icon-loop--sm.svg"  width="27" height="27" alt="">
                            </div>
                            <div class="c-automatization__content-wrapper">
                                <h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-hrm/" class="default-link">Автоматизация управления <br class="hide-up-to-lg"> персоналом</a>
                                    <span>HRM</span> </h3>
                                <p>
                                    Подбор персонала, формирование кадрового резерва, развитие, мотивация, анализ, обучение и аттестация кадрового состава в одной системе. Разработка схемы KPI. Оценка эффективности работы службы персонала.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-automatization__right-col">
                    <div class="c-automatization__sub-caption h2">
                        <a href="/o-kompanii/nash-opyt/projects/" class="default-link">Реализованные проекты</a>
                    </div>
                    <?$APPLICATION->IncludeComponent(
                        "bitrix:main.include",
                        "",
                        Array(
                            "AREA_FILE_SHOW" => "file",
                            "COLOR" => "_white",
                            "PROJECTS_WITH_SORT" => array( "1:1637", "2:56", "3:342","4:78","5:80","6:875","7:399"),
                            "PATH" => SITE_DIR.'/local/include/blocks/projects-inner.php',
                            "MAX_PROJECTS" => 7
                        )
                    );?>
                </div>
            </div>
        </div>
    </section>
    <!--/noindex-->
<? endif; ?>

<?if($arResult['ID'] == '3'):?>
<?
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/blocks/programmy-1s/zup-base/vnedrenie.php'
	));
	?>
<?elseif ($arResult['ID'] == '4'): ?>
	<?
	$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
		"AREA_FILE_SHOW" => "file",
		"PATH"           => SITE_DIR . '/local/include/blocks/programmy-1s/zup-prof/vnedrenie.php'
	));
	?>

<?else:?>
<section class="c-how-to _gray">
	<div class="content-center">
		<div class="c-how-to__cols">
			<div class="c-how-to__left-col">
				<h2 class="h1">Как внедрить</h2>
                <?$arParams['VNEDRENIE_TEXT'] = 'Внедрение'; ?>
                <?if($arResult['ID'] == '119'){
                    $arParams['VNEDRENIE_LINK'] = "/uslugi-1s/vnedrenie/1s-zup/";
                }?>
				<?$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/vertical-menu/how-to-1.php',
					"VNEDRENIE_LINK" => $arParams['VNEDRENIE_LINK'],
                    'VNEDRENIE_TEXT' => $arParams['VNEDRENIE_TEXT']
				));
				?><?$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
                        "AREA_FILE_SHOW" => "file",
                        "PATH"           => SITE_DIR . '/local/include/banners/bystroe-vnedrenie-2.php'
                    ));
				?>
			</div>
			<div class="c-how-to__right-col">
				<h2 class="h1">Как сопровождать</h2>
				<?$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/vertical-menu/how-to-2.php'
				));
				?><?$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
                        "AREA_FILE_SHOW" => "file",
                        "PATH"           => SITE_DIR . '/local/include/banners/consult-1c.php'
                    ));
				?>
			</div>
		</div>
	</div>
</section>
<?endif;?>
<? if ($arResult['ID'] === 4): ?>
    <? global $isNoBlogBlock;
    $isNoBlogBlock = true;
    ?>
    <? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
        "AREA_FILE_SHOW"       => "file",
        "PATH"                 => "/local/include/blocks/1s-partner/question.php",
        'COLOR'                => '_gray',
        'FORM_CONTAINER_CLASS' => 'contact-modal__plate _white',
        'HEADER'               => 'Задайте вопрос консультанту по ЗУП 3.0'
    )); ?>
<? else: ?>
    <section class="c-automatization">
        <div class="content-center">
            <? if ($arResult['PARENT_SECTION']["ID"] == "12"): ?>
                <h2 class="h1 c-automatization__caption">Автоматизация торговли</h2>
            <? else: ?>
                <h2 class="h1 c-automatization__caption">Автоматизация на&nbsp;базе <?= $arResult['PARENT_SECTION']['UF_NAME_LIST'] ?></h2>
            <? endif; ?>
            <div class="c-automatization__cols">
                <div class="c-automatization__left-col">

                    <? if ($arResult['PARENT_SECTION']['~UF_PROG_AUTO_TMP']): ?>
                        <div class="content-area">
                            <?= $arResult['PARENT_SECTION']['~UF_PROG_AUTO_TMP'] ?>
                        </div>
                    <? else: ?>
                        <div class="content-area">
                            <h3 class="c-automatization__content-caption">Автоматизация бухгалтерского учета</h3>
                            <p>Его экзистенциальная тоска выступает как побудительный мотив творчества, однако теория
                                вчувствования многопланово начинает эпитет, так Г.&nbsp;Корф формулирует собственную
                                антитезу.</p>
                        </div>
                        <!-- Начало блока: Список с пояснениями-->
                        <ul class="definition-list">
                            <li class="definition-list__item">
                                <div class="definition-list__caption">Бухгалтерский учет по&nbsp;РСБУ</div>
                                <div class="definition-list__definition">Природа эстетического, в&nbsp;том числе,
                                    диссонирует конструктивный комплекс агрессивности, именно об&nbsp;этом комплексе
                                    движущих сил писал.
                                </div>
                            </li>
                            <li class="definition-list__item">
                                <div class="definition-list__caption">Бухгалтерский учет по&nbsp;МСФО</div>
                                <div class="definition-list__definition">Фрейд в&nbsp;теории сублимации. Статус художника
                                    иллюстрирует текст.
                                </div>
                            </li>
                        </ul>
                    <? endif; ?>
                </div>
                <div class="c-automatization__right-col">
                    <div class="c-automatization__sub-caption h2">
                        <a class="default-link" title="Реализованные проекты" href="/o-kompanii/nash-opyt/projects/"
                           rel="Реализованные проекты">Реализованные проекты</a>
                    </div>
                    <!-- Начало блока: Слайдер плиточного контента-->
                        <?
                        $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
                            "AREA_FILE_SHOW"     => "file",
                            "PATH"               => SITE_DIR . '/local/include/blocks/projects-inner.php',
                            'PROJECTS_WITH_SORT' => $arResult['PARENT_SECTION']['UF_FINAL_PROJECTS'],
                            "COLOR" => "_gray"
                        ));
                        ?>
                    <? if ($arResult['PARENT_SECTION']['~UF_PROG_AUTO_TMP_2']): ?>
                        <div class="content-area"><?= $arResult['PARENT_SECTION']['~UF_PROG_AUTO_TMP_2'] ?></div>
                    <? endif; ?>
                    <!-- Конец блока: Слайдер плиточного контента-->
                </div>
            </div>
        </div>
    </section>

    <? if (count($arResult['OTHER_PROG']) > 0): ?>
        <section class="c-additional-products">
            <div class="content-center">
                <h2 class="h1 c-additional-products__caption">Другие программы
                    с&nbsp;функционалом<br/><?= $arResult['PARENT_SECTION']['UF_NAME_LIST'] ?></h2>

                <div class="c-additional-products__cols">
                    <div class="c-additional-products__left-col">
                        <!-- Начало блока: Список с иконками-->
                        <div class="iconic-list">
                            <ul class="iconic-list__list">
                                <? foreach ($arResult['OTHER_PROG'] as $otherProg): ?>
                                    <li class="iconic-list__item">
                                        <img src="<?= SITE_TEMPLATE_PATH ?>/img/content/icon10.png" width="33" alt=""
                                             class="iconic-list__img"/>

                                        <div class="iconic-list__caption">
                                            <a href="<?= $otherProg['SECTION_PAGE_URL'] ?>"
                                               class="default-link"><?= $otherProg['NAME'] ?></a>
                                        </div>
                                    </li>
                                <? endforeach; ?>
                            </ul>
                        </div>
                        <!-- Конец блока: Список с иконками-->
                    </div>
                    <div class="c-additional-products__right-col">
                        <?
                        $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
                            "AREA_FILE_SHOW" => "file",
                            "PATH"           => SITE_DIR . '/local/include/banners/compare-small.php'
                        ));
                        ?>
                    </div>
                </div>
            </div>
        </section>
    <? endif; ?>
    <? if ($arResult['PARENT_SECTION']['~UF_PROG_REVIEW']): ?>
        <section class="c-person-speech <? if ($arResult['OTHER_PROG'] == null): ?>_gray-separator<? endif; ?>">
            <div class="content-center">
                <div class="person-speech c-person-speech__speech">
                    <div class="person-speech__img-holder">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/img/content/speech-img.png" alt="" width="156"
                             class="person-speech__photo"/></div>
                    <div class="person-speech__content">
                        <div class="person-speech__speech">
                            <?= $arResult['PARENT_SECTION']['~UF_PROG_REVIEW'] ?>
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
    <? endif; ?>
    <?
    $arParams['LAZY_LOAD'] = 'Y';
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
            "LAZY_LOAD" => $arParams['LAZY_LOAD'],
            "PARTNERS_IBLOCK_ID" => $arParams['PARTNERS_IBLOCK_ID'],
            "PROJECT_IBLOCK_TYPE" => EnvironmentHelper::getParam("proektyIBlockId"),
            "SHOW_TITLE" => 'Y',
            "TEMPLATE" => 'large',
            "TITLE" => 'Наш опыт'
        ),
        false
    );
    ?>
<? endif; ?>
