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
?>
<section class="c-product-card js-product-card _pb0" itemscope itemtype="http://schema.org/Product">
	<div class="content-center">
		<h1 class="c-product-card__caption" itemprop="name"><? AD_H1($arResult['NAME']) ?></h1>
		<div class="c-product-card__cols">
			<div class="c-product-card__left-holder">
				<? if ($arResult['PARENT_SECTION']['ID'] == 10) : ?>
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
								<ul class="product-image__links">
									<li class="product-image__link-holder first-iteration-hidden">
									</li>
									<?if($arResult['PARENT_SECTION']['UF_SHOW_DEMO']):?>
										<li class="product-image__link-holder">
											<a href="#demo-access-new" onclick="setFormProgramm('<?=$arResult['PARENT_SECTION']["UF_NAME_LIST"]?>')" class="product-image__link dotted-link pupop">
												Получить <nobr>демо-доступ</nobr>
											</a>
										</li>
									<?endif;?>
									<li class="product-image__link-holder">
										<a href="#demonstration-new" onclick="setFormProgramm('<?=$arResult['PARENT_SECTION']["UF_NAME_LIST"]?>')" class="product-image__link dotted-link pupop">
											Заказать демонстрацию
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<? if (count($arResult["VERSIONS"]) > 1 && !$arResult["FORCE_HIDE_TABS"]): ?>
					<ul class="simple-tabs__ui <? /*first-iteration-hidden */ ?>">
						<? foreach ($arResult["VERSIONS"] as $arVersion): ?>
							<li class="simple-tabs__ui-item <?= $arResult["CODE"]=="docs-prof"?"no-base":"" ?>
                                        <?= $arVersion["ID"] == $arResult['ID'] ? '_active' : '' ?>"
							>
								<a href="<?= $arResult['PARENT_SECTION']["SECTION_PAGE_URL"] . str_replace(['docs-', 'doc-'], '', mb_strtolower($arVersion['CODE'])) . '/' ?>" class="simple-tabs__ui-link"><span
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
					<div class=" simple-tabs_hash ">
						<div class="simple-tabs__tabs">
							<div class="simple-tabs__tab  _active">
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
									<?= $arResult["~PREVIEW_TEXT"] ?>
									<? if ($arResult["DETAIL_TEXT"]): ?>
										<div class="more-info c-product-card__more-info">
											<a href="#" class="more-info__link dotted-link">Подробнее</a>

											<div class="more-info__container">
												<?= $arResult['~DETAIL_TEXT'] ?>
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
						"HIDE_BLOCK" => $arParams["HIDE_PREORDER_BLOCK"],
						"ELEMENT_ID" => $arResult["ID"],
					)); ?>
					
					<div class="c-product-card__promo-holder">
						<h3 class="c-product-card__promo-caption">А также для вас:</h3>
						<?
						$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_DIR . '/local/include/banners/banner-slider-1-small.php',
						));
						?>
					</div>
				</div>
			</div>
        </div>
        <? CMain::IncludeFile( '/local/templates/.default/components/bitrix/catalog/typical.programs/bitrix/catalog.section/program/compareTable.php', array('sectionId' => $arResult['PARENT_SECTION']["ID"],'NAME' => $arResult['NAME'], 'SECTION_WRAP' => false,'currentVersion' => $arResult['ID'])); ?>
</section>

<div class="c-product-card_additional">
	
	<div class="<? /*simple-tabs*/ ?> simple-tabs_hash">
		<div class="simple-tabs__tabs">
			<div class="simple-tabs__tab _active" id="additional_<?= $arResult["CODE"] ?>">
				<?= $arResult['PROPERTIES']['INFOBANNER']['~VALUE']['TEXT']; ?>
				<?= $arResult['PROPERTIES']['BASE_CONTENT']['~VALUE']['TEXT']; ?>
			</div>
		</div>
	</div>

</div>


<section class="c-workflow _top-border">
	<div class="content-center">
		<h2 class="h1">Преимущества 1С:Документооборот</h2>
		
		<div class="c-workflow__row">
			<div class="c-workflow__one-half-col content-area">
				<div class="c-workflow__numbered-list">
					<ol>
						<li>Гибкость и&nbsp;настраиваемость</li>
						<li>Широкая масштабируемость</li>
						<li>Многоплатформенность, работа с&nbsp;различными СУБД</li>
						<li>Бесшовная интеграция с&nbsp;1С:Управление производством ERP, 1С:Упровление торговлей в&nbsp;1&nbsp;клик, возможность интеграции с&nbsp;другими системами </li>
						<li>Безопасность и&nbsp;права доступа</li>
						<li>Единая корпоративная среда</li>
						<li>Соответствие национальным стандартам и&nbsp;требованиям законодательства РФ</li>
					</ol>
				</div>
			</div>
			
			<div class="c-workflow__one-half-col">
				<h3 class="h2"><a class="default-link" href="/o-kompanii/nash-opyt/projects/">Реализованные проекты</a></h3>
     
					
					<?
					$projectsWithSort = $arResult['PARENT_SECTION']['UF_FINAL_PROJECTS'];
					?>
					<?$APPLICATION->IncludeComponent(
						"bitrix:main.include",
						"",
						Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_DIR.'/local/include/blocks/projects-inner.php',
							"COLOR" => "_gray",
							"PROJECTS_WITH_SORT" => $projectsWithSort
						)
					);?>
			</div>
		</div>
		
		<div class="c-workflow__callback _mt40">
			<div class="c-workflow__callback-text-col">
				<div class="c-workflow__callback-text">Появились вопросы по покупке и&nbsp;внедрению программы?</div>
			</div>
			
			<div class="c-workflow__callback-btn-col"><a href="#callback-new" class="button pupop">Да, перезвоните мне!</a></div>
		</div>
	</div>
</section>

<section class="c-workflow _gray">
	<div class="content-center">
		<h2 class="h1">Дополнительные лицензии 1С:Документооборот</h2>
		
		<p>Если в&nbsp;программе 1С:Документооборот будет работать более одного пользователя одновременно, необходимо приобрести дополнительные лицензии на&nbsp;каждое рабочее место. Стоимость дополнительных лицензий определяется фирмой 1С и&nbsp;одинаковая у&nbsp;всех компаний-франчайзи, имеющих право на&nbsp;продажу лицензий. Мы&nbsp;предлагаем дополнительные бонусы&nbsp;- бесплатные часы работы наших специалистов, которые Вы&nbsp;можете использовать по&nbsp;своему усмотрению (консультации по&nbsp;работе с&nbsp;программой, настройка в&nbsp;соответствии со&nbsp;спецификой Вашей организации и&nbsp;решаемых задач, доработка базового функционала).</p>
		
		<div class="more-info-wrapper">
			<div class="more-info _centered">
				<a class="more-info__link  dotted-link h3" href="#">Стоимость дополнительных лицензий и бесплатные часы в подарок</a>
				
				<div class="more-info__container">
					<div class="content-area">
						<div class="table-block _orange-head _workflow _mobile-change">
							<table>
								<thead>
								<tr>
									<th>Название</th>
									<th>Стоимость с&nbsp;программной защитой, руб.</th>
									<th>Стоимость с&nbsp;USB защитой, руб.</th>
									<th>Бесплатные часы</th>
									<th></th>
								</tr>
								</thead>
								
								<tbody>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;1 р.м.<span class="_star">*</span></td>
									<td>6&nbsp;300</td>
									<td>—</td>
									<td>1</td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;5&nbsp;р.м.<span class="_star">*</span></td>
									<td>21&nbsp;600</td>
									<td>—</td>
									<td>4</td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;10&nbsp;р.м.<span class="_star">*</span></td>
									<td>41&nbsp;400</td>
									<td>—</td>
									<td>8</td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;20&nbsp;р.м.<span class="_star">*</span></td>
									<td>78&nbsp;000</td>
									<td>—</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;50&nbsp;р.м.<span class="_star">*</span></td>
									<td>187&nbsp;200</td>
									<td>—</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;100&nbsp;р.м.<span class="_star">*</span></td>
									<td>360&nbsp;000</td>
									<td>—</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;300&nbsp;р.м.<span class="_star">*</span></td>
									<td>1&nbsp;068&nbsp;000</td>
									<td>—</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие&nbsp;8. Клиентская лицензия на&nbsp;500&nbsp;р.м.<span class="_star">*</span></td>
									<td>1&nbsp;776&nbsp;000</td>
									<td>—</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;1&nbsp;р.м.<span class="_star">*</span></td>
									<td>10&nbsp;400</td>
									<td>13&nbsp;600</td>
									<td>1</td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;5&nbsp;р.м.<span class="_star">*</span></td>
									<td>36&nbsp;000</td>
									<td>46&nbsp;800</td>
									<td>4</td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;10&nbsp;р.м.<span class="_star">*</span></td>
									<td>69&nbsp;000</td>
									<td>86&nbsp;300</td>
									<td>8</td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;20&nbsp;р.м.<span class="_star">*</span></td>
									<td>130&nbsp;000</td>
									<td>162&nbsp;500</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;50&nbsp;р.м.<span class="_star">*</span></td>
									<td>312&nbsp;000</td>
									<td>374&nbsp;400</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;100&nbsp;р.м.<span class="_star">*</span></td>
									<td>600&nbsp;000</td>
									<td>720&nbsp;000</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;300&nbsp;р.м.<span class="_star">*</span></td>
									<td>1&nbsp;780&nbsp;000</td>
									<td>2&nbsp;136&nbsp;000</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;500&nbsp;р.м.<span class="_star">*</span></td>
									<td>2&nbsp;960&nbsp;000</td>
									<td>3&nbsp;552&nbsp;000</td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								<tr>
									<td>1С:Предприятие 8&nbsp;КОРП. Клиентская лицензия на&nbsp;1000&nbsp;р.м.<span class="_star">*</span></td>
									<td>5&nbsp;906&nbsp;000</td>
									<td></td>
									<td>8<span class="_star">**</span></td>
									<td><a class="button pupop" href="#callback-new">Заказать</a></td>
								</tr>
								</tbody>
							</table>

							<?LazyLoad::includeFile($this->GetFolder() . '/lazy_blocks/documentooborot_mobile_additional_licenses.php');?>
						</div>
						
						<p><span class="_star">*</span> Р.м. - рабочее место</p>
						<p><span class="_star">**</span> Информацию по количеству бесплатных часов уточняйте у менеджеров.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<?if($arResult['PROPERTIES']['VIDEOCOURSE_BLOCK']['~VALUE']['TEXT']){?>
<section class="c-product-card _pt51">

	<div class="c-product-card_additional">

		<div class="simple-tabs_hash">
			<div class="simple-tabs__tabs">
				<div class="simple-tabs__tab _active" id="additional2_<?= $arResult["CODE"] ?>">

					<?= $arResult['PROPERTIES']['VIDEOCOURSE_BLOCK']['~VALUE']['TEXT']; ?>
				</div>
			</div>
		</div>

	</div>
</section>
<?}?>

<section class="c-workflow">
	<div class="content-center">
		<h2 class="h1">Почему выгодно купить программу 1С у&nbsp;нас?</h2>
		
		<div class="b-features">
			<div class="b-features__item _has-icon _icon-car">
				<div class="h3">Доставим<br> до&nbsp;офиса</div>
			</div>
			
			<div class="b-features__item _has-icon _icon-computer">
				<div class="h3">Установим<br> и&nbsp;подключим</div>
			</div>
			
			<div class="b-features__item _has-icon _icon-question-mark">
				<div class="h3">Поможем и<br> проконсультируем</div>
			</div>
			
			<div class="b-features__item _has-icon _icon-equalizer">
				<div class="h3">Настроим<br> и&nbsp;внедрим</div>
			</div>
			
			<div class="b-features__item _has-icon _icon-handshake">
				<div class="h3">Обучим<br> и&nbsp;поддержим</div>
			</div>
		</div>
	</div>
</section>
