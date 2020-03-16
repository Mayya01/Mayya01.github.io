<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}
/** @var array $arParams  */
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

					<? if ($arResult['ID'] == 10) : ?>
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
					<!--<div class="c-product-card__middle-col">-->
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
					<!--</div>-->

				</div>
	</section>
<? CMain::IncludeFile($templateFolder . '/compareTable.php', array('sectionId' => $arResult["ID"],'NAME' => $arResult['NAME'],'currentVersion' => $arResult['CURRENT_VERSION_ID'],'SECTION_WRAP' => true)); ?>
<?= $arResult['~UF_DELTERM_DESCR'] ?>
<div class="_white">
	<div class="content-center _hr-gray-before no-padding">
	</div>
</div>
<? if ($arResult['ID'] != '8'): ?>

	<section class="c-automation-accounting">
		<div class="content-center">
			<? $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
				"AREA_FILE_SHOW" => "file",
				"PATH"           => SITE_DIR . '/local/include/blocks/free-audit.php'
			)); ?>
		</div>
	</section>

<? endif; ?>

	<!-- Подгружаем таблицу сравнений (compare) -->
<? CMain::IncludeFile($templateFolder . '/compareTable.php', array('sectionId' => $arResult["ID"])); ?>

	<section class="c-automatization">
		<div class="content-center">
			<h2 class="h1 c-automatization__caption">Автоматизация на&nbsp;базе <?= $arResult['UF_NAME_LIST'] ?></h2>

			<div class="c-automatization__cols">
				<div class="c-automatization__left-col">

					<? // TODO: Временное решение, пока не заполнены услуги по автоматизации?>
					<? if ($arResult['~UF_PROG_AUTO_TMP']): ?>
						<div class="content-area">
							<?= $arResult['~UF_PROG_AUTO_TMP'] ?>
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
						"AREA_FILE_SHOW" => "file",
						"PATH"           => SITE_DIR . '/local/include/blocks/projects-inner.php',
						'PROJECTS_WITH_SORT' => $arResult['UF_FINAL_PROJECTS'],
						"COLOR" => "_gray"
					));
					?>
					<? if ($arResult['~UF_PROG_AUTO_TMP_2']): ?>
						<?= $arResult['~UF_PROG_AUTO_TMP_2'] ?>
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
				с&nbsp;функционалом<br/><?= $arResult['UF_NAME_LIST'] ?></h2>

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
<? if ($arResult['~UF_PROG_REVIEW']): ?>
	<section class="c-person-speech <? if ($arResult['OTHER_PROG'] == null): ?>_gray-separator<? endif; ?>">
		<div class="content-center">
			<div class="person-speech c-person-speech__speech">
				<div class="person-speech__img-holder">
					<img src="<?= SITE_TEMPLATE_PATH ?>/img/content/speech-img.png" alt="" width="156"
						 class="person-speech__photo"/></div>
				<div class="person-speech__content">
					<div class="person-speech__speech">
						<?= $arResult['~UF_PROG_REVIEW'] ?>
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
);?>
