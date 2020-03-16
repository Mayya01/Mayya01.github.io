<?

?>
<section class="c-product-card js-product-card _nopb section" itemscope itemtype="http://schema.org/Product">
	<div class="content-center">
		<h1 class="c-product-card__caption" itemprop="name"><? AD_H1($arResult['NAME']) ?></h1>
		<div class="c-product-card__cols">
			<div class="c-product-card__left-holder">
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
								class="simple-tabs__tab  _active">
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
				</div>
			</div>
		</div>
</section>
<section class="section _nopb">

		<div class="content-center before-banner">
			<div class="h1">
				1С:ЗУП КОРП - с нами это больше, чем просто покупка программы	</div>
			<div class="section__row-md">
				<div class="section__col-1-2-md content-area _mb30">
					<div class="b-order-service _gray">
								<img src="/local/templates/main/img/svg-icons/icon-checklist.svg" alt="">
						<div class="_normal h4">
							Бесплатно: «Сбор и формализация требований к новой системе»
						</div>
						<ul class="no-margin-top">
							<li>Для кого: средний и крупный бизнес. </li>
							<li>Результат услуги: реестр требований к новой системе.</li>
							<li>Ценность для клиента: готовый структурированный документ для оценки автоматизации, возможность сравнить соответствие системы с потребностями компании.
								<br>
							</li>
							<li>Количество пользователей: от 50 и выше. </li>
							<li>Регион: Москва и МО</li>
						</ul>
						<div class="b-order-service__btn-holder">
							<a  href="#callback-new" class="pupop button _full b-order-service__btn" onclick="setCallbackFormSource('Получить бесплатную услугу'); setCallbackFormHeader('Получить бесплатную услугу');">
								Заказать
							</a>
						</div>

					</div>
				</div>
				<div class="section__col-1-2-md content-area _nopt _mb30">
					<div class="b-order-service _gray">

								<img src="/local/templates/main/img/svg-icons/icon-loop-lg.svg" alt="">

						<div class="_normal h4">
							Бесплатно: «Обследование и описание бизнес-процессов заказчика»
						</div>
						<ul class="no-margin-top">
							<li>Для кого: средний и крупный бизнес.</li>
							<li>Результат услуги: реестр текущих бизнес-процессов. </li>
							<li>Ценность для клиента: оценка поведения ключевых процессов компании, определение проблемных участков, которые следует проработать.
								<br><br></li>
							<li>Количество пользователей: от 50 и выше. </li>
							<li>Регион: Москва и МО</li>
						</ul>
						<div class="b-order-service__btn-holder">
							<a  href="#callback-new" class="pupop button _full  b-order-service__btn" onclick="setCallbackFormSource('Получить бесплатную услугу'); setCallbackFormHeader('Получить бесплатную услугу');">
								Заказать
							</a>
						</div>

					</div>
				</div>
			</div>



		</div>
</section>

<?CMain::IncludeFile(  '/local/templates/.default/components/bitrix/catalog/typical.programs/bitrix/catalog.section/program/compareTable.php',
	array('sectionId' => $arResult['PARENT_SECTION']["ID"],
		  'NAME' => $arResult['NAME'],
		  'SHOW_VARIANTI' => 'N',
		  'SHOW_COMPARE' => 'Y',
		  'SHOW_LICENSES' => 'N',
		  'SECTION_WRAP' => true,
		  'currentVersion' => $arResult['ID'])); ?>

<section class="section _gray">
	<div class="content-center">
		<h2 class="h1">Преимущества покупки программы у нас</h2>
		<div class="icon-text icon-text--five-elements">
			<div class="icon-text__element icon-text__element--building">
				<p>Доставка до офиса</p>
			</div>
			<div class="icon-text__element icon-text__element--prof">
				<p>Бесплатная установка</p>
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
	</div>
</section>

<section class="section">
	<div class="content-center">
<?CMain::IncludeFile(  '/local/templates/.default/components/bitrix/catalog/typical.programs/bitrix/catalog.section/program/compareTable.php',
	array('sectionId' => $arResult['PARENT_SECTION']["ID"],
		  'NAME' => $arResult['NAME'],
		  'SHOW_VARIANTI' => 'Y',
		  'SHOW_COMPARE' => 'N',
		  'SHOW_LICENSES' => 'Y',
		  'SECTION_WRAP' => false,
		  'currentVersion' => $arResult['ID'])); ?>
	</div>
</section>
	<!-- Начало блока: С нами уже работают-->
<?LazyLoad::includeFile($filePath = SITE_DIR.'/local/include/blocks/experience_section_lazy_include.php', $arParams = array('HIDE_BOTTOM_OFFER' => 'Y','SECTION_CLASS'=>' section'));?>
	<!-- Конец блока: С нами уже работают-->


<?LazyLoad::includeFile($filePath = SITE_DIR.'local/include/blocks/programmy-1s/zup-corp/features.php', $arParams = array());?>



<section class="section _gray">
	<div class="content-center">
		<h2 class="h1">Варианты внедрения 1С:ЗУП</h2>
		<div class="row-fl-md">
			<div class="col-fl-1-2-md">
				<ul class="check-bullet-list check-bullet-list--cols check-bullet-list--orange">
					<li>
						<a href="/uslugi-1s/vnedrenie/1s-zup/korp/">Внедрение 1С:ЗУП КОРП</a>
					</li>
				</ul>
			</div>
			<div class="col-fl-1-2-md">
				<ul class="check-bullet-list check-bullet-list--orange">
					<li>
						<a href="/uslugi-1s/vnedrenie/1s-zup/">Внедрение 1С:ЗУП</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>


<section class="c-automatization section _nopb-up-to-md">
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
							<h3 class="c-automatization__content-caption"><a href="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/avtomatizaciya-rascheta-zarabotnoi-platy-1s/">Автоматизация расчета заработной платы</a></h3>
							<p>
								Ведение регламентированного учета и отчетности в соответствии с требованиями законодательства, применение любых возможных схем расчета зарплаты, учет грейдов, льгот, показателей эффективности.
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
								Хранение кадровой информации, кадровое администрирование, ведение кадрового учета и делопроизводства, анализ и формирование отчетности о ситуации по кадровому составу, кадровое планирование.
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
								Расширенные возможности в части подбора персонала и открытия вакансий: причина открытия, сложности подбора, возможность приостановить набор по вакансии, загрузка вакансий с рекрутинговых сайтов в программу и возможность получать отклики на вакансии с сайтов. Сравнение компетенций сотрудников, формирование кадрового резерва, оценка стоимости каналов привлечения кандидатов и эффективности работы сотрудников по подбору персонала.
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
						"COLOR" => "_gray",
						"PROJECTS_WITH_SORT" => array( "1:1637", "2:56", "3:342","4:78","5:80","6:875","7:399"),
						"PATH" => SITE_DIR.'/local/include/blocks/projects-inner.php',
						"MAX_PROJECTS" => 7
					)
				);?>
			</div>
		</div>
	</div>
</section>

<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
	"AREA_FILE_SHOW"       => "file",
	"PATH"                 => "/local/include/blocks/1s-partner/question.php",
	'COLOR'                => '_gray',
	'FORM_CONTAINER_CLASS' => 'contact-modal__plate _white',
	'HEADER'               => 'Задайте вопрос консультанту по 1С:ЗУП КОРП'
)); ?>
