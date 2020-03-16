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
$APPLICATION->SetPageProperty('tags', $arResult['UF_TAGS']);
if ($arResult['UF_DELTERM']) {
	include("template_delivery_termination.php");
	return;
}
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
				<div class="c-product-card__left-col">
					<div class="c-product-card__product-image">
						<div class="product-image">
							<div class="product-image__image-holder">
								<img src="<?= $arResult['DETAIL_PICTURE']['SRC'] ?>" alt="" width="279"
									 class="product-image__image" itemprop="image"/>
							</div>
							<div class="product-image__content">
								<? $currentVersion = $arResult["CURRENT_VERSION"] ?>
								<? $currentRelease = $arResult["RELEASES"][ $currentVersion["PROPS"]["RELEASE_ID"]["VALUE"] ] ?>
								<div class="product-image__title js-current-version"
									 <? if (!$currentRelease): ?>style="display:none;" <? endif ?>>
									Текущая версия<br/>
									
									<div class="js-current-version-name">
										<a href="<?= $currentRelease["LIST_PAGE_URL"] ?>?program=<?= $currentRelease["IBLOCK_SECTION_ID"] ?>&release=<?= $currentRelease["ID"] ?>"
										   class="product-image__link dotted-link">
											<?= $currentRelease["NAME"] ?>:
											<nobr><?= $currentRelease["PROPS"]["RELEASE_NUMBER"]["VALUE"] ?></nobr>
										</a>
									</div>
								</div>
								
								<ul class="product-image__links">
									<li class="product-image__link-holder first-iteration-hidden">
										<? // @todo: Привязать видеоролик ?>
										<? /*<a href="#" class="product-image__link dotted-link">Посмотреть видеоролик</a>*/ ?>
									</li>
									<? // TODO: Добавить формы?>
									<? if ($arResult['UF_SHOW_DEMO']): ?>
										<li class="product-image__link-holder">
											<a href="#demo-access-new"
											   onclick="setFormProgramm('<?= $arResult["UF_NAME_LIST"] ?>')"
											   class="product-image__link dotted-link pupop">
												Получить
												<nobr>демо-доступ</nobr>
											</a>
										</li>
									<? endif; ?>
									<li class="product-image__link-holder">
										<a href="#demonstration-new"
										   onclick="setFormProgramm('<?= $arResult["UF_NAME_LIST"] ?>')"
										   class="product-image__link dotted-link pupop">
											Заказать демонстрацию
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="c-product-card__subscribe <? /*first-iteration-hidden */ ?>">
						<? $APPLICATION->IncludeComponent("wiseadvice:subscription.input", "", Array(
							"RUB_CODE"         => EnvironmentHelper::getParam("subscribeDefaultRubricCode"),
							"IS_RELEASES_FORM" => true, //для таких форм практически уникальная логика подписки)
							"SECTION_NAME"     => $arResult["UF_NAME_LIST"],
						)); ?>
					</div>
				</div>
				<? if (count($arResult["VERSIONS"]) > 1 && !$arResult["FORCE_HIDE_TABS"]): ?>
					<ul class="simple-tabs__ui <? /*first-iteration-hidden */ ?>">
						<? foreach ($arResult["VERSIONS"] as $arVersion): ?>
							<? // @TODO: убрать $arVersion["CODE"]=="docs-prof"?"no-base":""  задача - https://rm.9958258.ru/issues/86491 ?>
							<li class="simple-tabs__ui-item
                                        <? if ($arVersion["CURRENT"]): ?>_active<? endif ?> <?= $arVersion["CODE"] ==
																								"docs-prof" ?
								"no-base" : "" ?>"
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
								<a href="#fancybox-compare-popup" class="compare-link">
									<span>Сравнить версии</span>
								</a>
							</div>
						<? endif ?>
					</ul>
				<? endif ?>
				<div class="c-product-card__middle-col">
					<div class=" simple-tabs_hash  js-p-tabs-controller">
						<div class="simple-tabs__tabs js-p-tabs-tabs">
							<? foreach ($arResult["VERSIONS"] as $arVersion): ?>
								
								<div
									class="simple-tabs__tab js-p-tabs-item <? if ($arVersion["CURRENT"]): ?>_active<? endif ?>">
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
							"PATH"           => SITE_DIR . '/local/include/banners/banner-slider-1-small.php',
						));
						?>
						<span class="c-product-card__promo-note js-c-product-card__promo-note"><sup>*</sup> Условия, размер скидок и количество бесплатных часов уточняйте у менеджеров.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?if ($arResult["ID"] == "5") { // ERP ?>
	<?$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH" => "/local/include/blocks/erp-2-0-8/features.php"
		)
	);?>
<?}?>
<section class="section c-product-card">
	<div class="content-center">
		<? CMain::IncludeFile($templateFolder . '/compareTable.php', array('sectionId' => $arResult["ID"],'NAME' => $arResult['NAME'],'currentVersion' => $arResult['CURRENT_VERSION_ID'],'SECTION_WRAP' => false)); ?>
	</div>
</section>

<section class="c-how-to _gray">
	<div class="content-center">
		<div class="c-how-to__cols">
			<div class="c-how-to__left-col">
				<h2 class="h1">Как внедрить</h2>
				<?if($arResult['ID'] == '5'){
					$arParams['VNEDRENIE_LINK'] = '/uslugi-1s/vnedrenie/1s-erp/';
				}?>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . '/local/include/vertical-menu/how-to-1.php',
					'VNEDRENIE_LINK' => $arParams['VNEDRENIE_LINK']
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
					"PATH"           => SITE_DIR . '/local/include/vertical-menu/how-to-2.php',
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
<? if($arResult['CODE'] == 'erp-2-0-8' && !isYandexBotUser()): ?>
	<section class="c-automatization">
		<div class="content-center">
			<? if ($arResult["ID"] == "12"): ?>
				<h2 class="h1 c-automatization__caption">Автоматизация торговли</h2>
			<? else: ?>
				<h2 class="h1 c-automatization__caption">Автоматизация на&nbsp;базе <?= $arResult['UF_NAME_LIST'] ?></h2>
			<? endif; ?>
			<div class="c-automatization__cols">
				<div class="c-automatization__left-col">
					<div class="content-area">
						<? if(in_array($arResult['CODE'], $arParams['AUTOMATIZATION_LAZY_LOAD'])): ?>
							<?LazyLoad::includeFile($this->GetFolder() . '/lazy_blocks/avtomatizaciya.php', ['CONTENT' => $arResult['~UF_PROG_AUTO_TMP']]);?>
						<? else: ?>
							<?= $arResult['~UF_PROG_AUTO_TMP'] ?>
						<? endif; ?>
					</div>
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
<?endif;?>

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
);
?>
