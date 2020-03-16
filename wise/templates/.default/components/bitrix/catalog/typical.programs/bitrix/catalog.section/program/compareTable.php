<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
\Bitrix\Main\Loader::includeModule('iblock');
$sectionID = $_REQUEST["sectionId"]?$_REQUEST["sectionId"]:$arParams["sectionId"];
$currentVersion = $arParams['currentVersion'];
//Если есть код раздела
if ($sectionID) {
	
	$sectionInfo = CIBlockSection::GetByID($sectionID)->GetNext();
	//Получаем элементы по коду раздела
	$arSelect = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM");
	$arFilter = Array("SECTION_ID" => $sectionID, "ACTIVE" => "Y", "ACTIVE_DATE" => "Y");
	$res = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter, false, Array("nPageSize" => 5), $arSelect);
	$arCompareMatrix = array();
	$arCompareMatrix["HEAD"] = array();
	$arCompareMatrix["ROWS"] = array();
	$rowMapper = array();
	$paramIds = array();
	$arItems = array();


	$arVariantIds = array();
	while ($ob = $res->GetNextElement()) {
		$arFields       = $ob->GetFields();
		$arProps        = $ob->GetProperties();
		$arVariantIds[] = $arFields["ID"];
		if ($arFields['ID'] == $currentVersion) {
			$arProduct          = $arFields;
			$arProduct['PROPS'] = $arProps;
		}
		
		
		//Собираем поставки в $arItems
		$item          = $arFields;
		$item["PROPS"] = $arProps;
		$arSelect      = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM");
		$arFilter      = Array(
			"IBLOCK_CODE"      => EnvironmentHelper::getParam("variantyPostavok1sIBlockCode"),
			"ACTIVE_DATE"      => "Y",
			"ACTIVE"           => "Y",
			"PROPERTY_PRODUCT" => $item["ID"]//$currentVersion
		);
		$res2          = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter, false, false, $arSelect);
		while ($ob2 = $res2->GetNextElement()) {
			$arPost                            = $ob2->GetFields();
			$arPost["PROPS"]                   = $ob2->GetProperties();
			$arPost['PROPS']['PRICE']['VALUE'] = str_replace(' ', '', $arPost['PROPS']['PRICE']['VALUE']);
			$arPost['PROPS']['PRICE']['VALUE'] = number_format($arPost['PROPS']['PRICE']['VALUE'], 0, '', ' ');
			
			if ($arPost['PROPS']['DISCOUNT_PRICE']['VALUE']) {
				$arPost['PROPS']['PRICE']['VALUE'] = number_format($arPost['PROPS']['DISCOUNT_PRICE']['VALUE'], 0, '',
					' ');
			}
			$item["POSTAVKI"][] = $arPost;
			if ($item["ID"] == $currentVersion) {
				if($arParams['SHOW_VARIANTI'] != 'N') {
					$arProduct['POSTAVKI'][] = $arPost;
				}
			}
			if (!$arPostavki[ $arPost["PROPS"]["PRODUCT"]["VALUE"] ]) {
				$arPostavki[ $arPost["PROPS"]["PRODUCT"]["VALUE"] ] = array();
			}
			$arPostavki[ $arPost["PROPS"]["PRODUCT"]["VALUE"] ][] = $arPost;
		}
		
		$arItems[] = $item;
	}
	



if($arParams['SHOW_LICENSES'] != 'N') {
	//Получим информацию из инфоблока дополнительных лицензий
	$arAditionalLicenses = array();
	$arIndustryLicenses  = array();
	$arCorpLicenses      = array();
	
	$additionalLicensesIblock = EnvironmentHelper::getParam('additionalLicensesIblock');
	if ($additionalLicensesIblock < 1) {
		$res4 = CIBlock::GetList(Array("SORT" => "ASC"),
			Array("CODE" => EnvironmentHelper::getParam('additionalLicensesIblockCode')), true);
		if ($ar_res = $res4->Fetch()) {
			$additionalLicensesIblock = $ar_res['ID'];
		}
	}
	if ($currentVersion) {
		$arSelect3 = Array("ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM", "PROPERTY_PROGRAMM");
		$arFilter3 = Array(
			"PROPERTY_PROGRAMM" => $currentVersion,
			"IBLOCK_ID"         => $additionalLicensesIblock,
			"ACTIVE"            => "Y",
			"ACTIVE_DATE"       => "Y"
		);
		$res3      = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter3, false, false, $arSelect3);
		while ($ob3 = $res3->GetNextElement()) {
			$arFields3                            = array();
			$arFields3                            = $ob3->GetFields();
			$arFields3['PROPS']                   = $ob3->GetProperties();
			$arFields3['PROPS']['PRICE']['VALUE'] = str_replace(' ', '', $arFields3['PROPS']['PRICE']['VALUE']);
			$arFields3['PROPS']['PRICE']['VALUE'] = number_format($arFields3['PROPS']['PRICE']['VALUE'], 0, '', ' ');
			if ($arFields3['PROPS']['BLOCK_TYPE']['VALUE'] == "Отраслевые решения") {
				$arIndustryLicenses[ $arItem['ID'] ][] = $arFields3;
			} elseif ($arFields3['PROPS']['BLOCK_TYPE']['VALUE'] == "КОРП") {
				$arCorpLicenses[ $arItem['ID'] ][] = $arFields3;
			} else {
				$arAditionalLicenses[ $arItem['ID'] ][] = $arFields3;
			}
		}
	}
}

if($arParams['SHOW_COMPARE'] != 'N') {
	/*шапка таблицы и полный список сравниваемых параметров*/
	$arCompareMatrix["PRICES"]       = array();
	$arCompareMatrix["INFORMATIONS"] = array();
	foreach ($arItems as &$arItem) {
		//$arCompareMatrix["HEAD"][] = $arItem['PROPS']['COMPARE_TABLE_NAME']['VALUE'] ? $arItem['PROPS']['COMPARE_TABLE_NAME']['VALUE'] : $arItem["NAME"];
		$arCompareMatrix["HEAD"][] = $arItem['PROPS']['TAB_NAME']['VALUE'] ? $arItem['PROPS']['TAB_NAME']['VALUE'] :
			$arItem["NAME"];
		$price                     = "-";
		if (count($arPostavki[ $arItem["ID"] ]) == 1) {
			$price = $arPostavki[ $arItem["ID"] ][0]["PROPS"]["PRICE"]["VALUE"] . " руб.";
		}
		if (count($arPostavki[ $arItem["ID"] ]) > 1) {
			$minPrice = 999999;
			foreach ($arPostavki[ $arItem["ID"] ] as $arPost) {
				if ($arPost["PROPS"]["PRICE"]["VALUE"] < $minPrice) {
					$minPrice = $arPost["PROPS"]["PRICE"]["VALUE"];
				}
			}
			$price = "от " . $minPrice . " руб.";
		}
		$arCompareMatrix["PRICES"][]       = $price;
		$arCompareMatrix["INFORMATIONS"][] = $arItem;
		
		foreach ($arItem["PROPS"]["COMPARE_PARAMS"]["VALUE"] as $kkey => $paramVal) {
			$arItem["PARAM_VAL"][ $paramVal ] = $arItem["PROPS"]["COMPARE_PARAMS"]["DESCRIPTION"][ $kkey ];
			$paramIds[]                       = $paramVal;
			if (!$rowMapper[ $paramVal ]) {
				$row                       = array();
				$row["VALUES"]             = array();
				$row["PARAM_ID"]           = $paramVal;
				$arCompareMatrix["ROWS"][] = $row;
				$rowMapper[ $paramVal ]    = true;
			}
		}
	}
	
	
	/*Получим названия параметров*/
	if (!empty($paramIds)) {
		$arSelect   = Array("ID", "NAME");
		$arFilter   = Array("ID" => $paramIds, "ACTIVE_DATE" => "Y", "ACTIVE" => "Y");
		$res        = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
		$paramNames = array();
		while ($ob = $res->GetNextElement()) {
			$arFields                      = $ob->GetFields();
			$paramNames[ $arFields["ID"] ] = $arFields["NAME"];
		}
	}
	
	foreach ($arCompareMatrix["ROWS"] as &$arRow) {
		$arRow["NAME"] = $paramNames[ $arRow["PARAM_ID"] ];
		
		foreach ($arItems as &$arItem) {
			$itemParamVal = "";
			$itemParamVal = $arItem["PARAM_VAL"][ $arRow["PARAM_ID"] ];
			
			$arRow["VALUES"][] = $itemParamVal;
		}
	}
	}
} ?>


<?if($arProduct['POSTAVKI'] || $arCompareMatrix["ROWS"] || $arAditionalLicenses || $arIndustryLicenses){?>
    <? if (!is_set($arParams['SECTION_WRAP']) || $arParams['SECTION_WRAP']): ?>
    <section class="c-automatization <?=$arParams['WRAP_CLASS']?>">
        <div class="content-center">
    <? endif; ?>
	
			
			<div class="versions-info"  id="compare-version">
				
				
				<?if($arCompareMatrix["ROWS"]){?>
					<div class="versions-info__compare-block">
						<h2 class="h2">Сравнение версий <?=$sectionInfo['NAME'];?></h2>
						<div class="table-block  versions-info__table  _mobile-change">
							<table>
								<thead>
								<tr>
									<th></th>
									<? foreach ($arCompareMatrix["HEAD"] as $headName): ?>
										<th>
											<?= $headName ?>
										</th>
									<? endforeach; ?>
								</tr>
								</thead>
								<tbody>
								<? foreach ($arCompareMatrix["ROWS"] as &$arRow): ?>
									<tr>
										<td><?= $arRow["NAME"] ?></td>
										<? foreach ($arRow["VALUES"] as $val): ?>
											<td>
												<? if ($val == "+"): ?>
													Есть
												<? else: ?>
													<? if(empty($val)): ?>
														—
													<? else: ?>
														<?= $val ?>
													<? endif; ?>
												<? endif ?>
											</td>
										<? endforeach; ?>
									</tr>
								<? endforeach; ?>
								<tr>
									<td></td>
									<? foreach ($arCompareMatrix["PRICES"] as $price): ?>
										<td><span class="table-block__price"><?= $price ?></span></td>
									<? endforeach; ?>
								</tr>
								<tr>
									<td></td>
									<? foreach ($arCompareMatrix["PRICES"] as $kkey => $price): ?>
										<td class="_small-padding"><a href="#order-programm"  class="pupop"
																	  onclick="globalSetFeedbackOrderParams('Кнопка заказа в сравнении','<?= $arCompareMatrix["INFORMATIONS"][$kkey]["NAME"]; ?>','<?=$price?>','<?= $sectionInfo["NAME"] ?>')">
												<input type="submit" value="Заказать"
													   class="preorder-block__btn c-product-card__preorder-block-btn button _tariff  _nomarg js-po-rent-btn"/>
											</a></td>
									<? endforeach; ?>
								</tr>
								</tbody>
							</table>
							<div class="mobile-wrapper more-info__container-partially-hidden">
								<?$hide = false;?>
								<? foreach ($arCompareMatrix["HEAD"] as $k=>$headName): ?>
									
									<h4 class="h3">Версия <?=$headName;//TODO:Добавить спец свойство для названия версии?></h4>
									<ul class="content-list">
										<? foreach ($arCompareMatrix["ROWS"] as &$arRow): ?>
											<? if ($arRow["VALUES"][$k] == "+"){ ?>
												<li><?= $arRow["NAME"] ?></li>				<? } ?>
										<? endforeach; ?>
									</ul>
								<? endforeach; ?>
							
							</div>
						</div>
					</div>
				<?}?>

                <? if ($arParams['SHOW_ROADMAP'] == 'ZUP'): ?>

                    <section class="section _nopt">
                        <h2 class="h1">Дорожная карта автоматизации в подарок</h2>
                        <div class="section__row-md">
                            <div class="section__col-1-2-md content-area">
                                <h3 class="h4">Бесплатно при покупке 1С:ЗУП версии ПРОФ</h3>
                                <ul>
                                    <li>Результат услуги: рекомендательное письмо с дорожной картой автоматизации.</li>
                                    <li>Ценность для клиента: готовый документ для автоматизации кадрового учета и расчета зарплаты, выявление ключевых бизнес-процессов для необходимой оптимизации.</li>
                                </ul>
                            </div>
                            <div class="section__col-1-2-md content-area">
                                <h3 class="h4">Для кого:</h3>
                                <ul>
                                    <li>Малый и средний бизнес.</li>
                                    <li>Количество пользователей: от 10 до 50.</li>
                                    <li>Регион: Москва и МО.</li>
                                    <li>Порядок оказания: интервьюирование, структурирование данных, финализация и предоставление результата.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="experience-section__offer _mt40">
                            <div class="experience-section__offer-text">
                                ЗУП ПРОФ - с нами это больше, чем<br>
                                просто покупка программы
                            </div>
                            <div class="experience-section__offer-button">
                                <a href="#callback-new" class="button pupop" onclick="setCallbackFormHeader('Получить бесплатную услугу')">Получить дорожную карту</a>
                            </div>
                        </div>
                    </section>

                <? endif; ?>
				
				<?if($arProduct['POSTAVKI'] || $arAditionalLicenses){?>
					
					<div class="versions-info__prices">
						<?if($arProduct['POSTAVKI']){?><h2 class="h2">Варианты поставки <?=$arParams['NAME'];?></h2><?}?>
						<div class="prices-blocks">
							<?if($arProduct['POSTAVKI']){?>
								
								<?//выводим продукты?>
								<?$index = 0;?>
								<?//foreach ($arItems as $k => $arElem):?>
									
									<div class="prices-block more-info"  data-partially-hidden="true">
										<?//выводим 2 циклом getlist для вариантов поставок?>
										<div class="more-info__container-partially-hidden ">
										<?foreach($arProduct['POSTAVKI'] as $arPostItem):?>
											<?$index++;?>
											<div class="prices-block__row clear<?if($index > 3):?> _hidden<?endif;?>">
												<div class="prices-block__content">
													<?if($arPostItem['PROPS']['LINK']['VALUE']){?>
														<a href="<?=$arPostItem['PROPS']['LINK']['VALUE']?>"  class="default-link"><?=$arPostItem['NAME']?></a>
													<?}else{?><?=$arPostItem['NAME']?><?}?>
												</div>
												<div class="prices-block__dotted  ">
													<div class="prices-block__img _one-line">
														<?if($arPostItem['PROPS']['UPDATE_CHECKBOX']['VALUE']=='Y'):?>
															<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon4.png" class="js-tooltip"  title="Обновления" alt="" />
														<?endif;?>
														<?if($arPostItem['PROPS']['DELIVERY']['VALUE']=='Y'):?>
															<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon9.png" class="js-tooltip"  title="Доставка" alt="" />
														<?endif;?>
														<?if($arPostItem['PROPS']['SETUP_CHECKBOX']['VALUE']=='Y'):?>
															<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon8.png" class="js-tooltip"  title="Установка" alt="" />
														<?endif;?>
														<?if($arPostItem['PROPS']['ITS_CHECKBOX']['VALUE']=='Y'):?>
															<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon3.png" class="js-tooltip"  title="ИТС на 3 месяца" alt="" />
														<?endif;?>
														<?if($arPostItem['PROPS']['HOURS_CHECKBOX']['VALUE']=='Y'):?>
															<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon13.png" class="js-tooltip"  title="Бесплатные часы" alt="" />
														<?endif;?>
														<?if($arPostItem['PROPS']['REPORTING_CHECKBOX']['VALUE']=='Y'):?>
															<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon14.png" class="js-tooltip"  title="Отчетность 1С" alt="" />
														<?endif;?>
													</div>
												</div>
												<div class="prices-block__price-row">
													<span> <?=$arPostItem['PROPS']['PRICE']['VALUE'];?> руб.</span>
													<a class="default-link pupop" href="#order-programm" onclick="globalSetFeedbackOrderParams('Кнопка Купить в Варианты поставок','<?=$arPostItem['NAME'];?>','<?=$arPostItem['PROPS']['PRICE']['VALUE'];?>','<?=$arParams['NAME']?>')">Купить</a>
												</div>
											</div>
										<?endforeach;?>
										<?if($index > 3){?>
											<div class="more-info__link-wrapper versions-info__link-wrapper">
												<a href="#" class="dotted-link more-info__link">Подробнее</a>
											</div>
										<?}?>
									</div>
									</div>
								<?//endforeach;?>
							
							<?}?>
							
							<?if($arIndustryLicenses){?>
								<div class="prices-block more-info" data-partially-hidden="true">
									<div class="more-info__container-partially-hidden ">
										<h2 class="h2">Отраслевые решения</h2>
										<?$index = 0;?>
										<?foreach ($arIndustryLicenses as $arProgramLicenses):?>
											<?$index2 = 0;?>
											<?foreach ($arProgramLicenses as $arLicense):?>
												<?$index2++;?>
												<div class="prices-block__row clear<?if($index2 > 3):?> _hidden<?endif;?>">
													<div class="prices-block__content"><?=$arLicense['NAME']?></div>
													<div class="prices-block__dotted  ">
														<div class="prices-block__img _one-line">
															<?if($arLicense['PROPS']['UPDATE_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon4.png" class="js-tooltip"  title="Обновления" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['DELIVERY']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon9.png" class="js-tooltip"  title="Доставка" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['SETUP_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon8.png" class="js-tooltip"  title="Установка" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['ITS_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon3.png" class="js-tooltip"  title="ИТС на 3 месяца" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['HOURS_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon13.png" class="js-tooltip"  title="Бесплатные часы" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['REPORTING_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon14.png" class="js-tooltip"  title="Отчетность 1С" alt="" />
															<?endif;?>
														</div>
													</div>
													<div class="prices-block__price-row">
														<span> <?=$arLicense['PROPS']['PRICE']['VALUE']?>&nbsp;руб.</span>
                                                        <?
                                                            switch ($sectionID) {
                                                                case 5:
                                                                    $industrySolutionBuyButton = 'Заказать';
                                                                    break;
                                                                default:
                                                                    $industrySolutionBuyButton = 'Купить';
                                                                    break;
                                                            }
                                                        ?>
														<a class="default-link pupop" href="#order-programm" onclick="globalSetFeedbackOrderParams('Отраслевые решения','<?=$arLicense['NAME'];?>','<?=$arLicense['PROPS']['PRICE']['VALUE'];?>','<?=$arParams['NAME']?>')"><?= $industrySolutionBuyButton ?></a>
													</div>
												</div>
											<?endforeach;?>
											<?if($index2 > 3){?>
												<div class="more-info__link-wrapper versions-info__link-wrapper">
													<a href="#" class="dotted-link more-info__link">Подробнее</a>
												</div>
											<?}?>
											<?$index++;?>
										
										<?endforeach;?>
									</div>
								</div>
							<?}?>
							
							<?//доп.лицензии
							if($arAditionalLicenses){?>
								<div class="prices-block more-info" data-partially-hidden="true">
									<div class="more-info__container-partially-hidden ">
										<h2 class="h2">Дополнительные лицензии </h2>
										<?$index = 0;?>
										<?foreach ($arAditionalLicenses as $arProgramLicenses):?>
											<?$index2 = 0;?>
											<?foreach ($arProgramLicenses as $arLicense):?>
												<?$index2++;?>
												<div class="prices-block__row clear<?if($index2 > 3):?> _hidden<?endif;?>">
													<div class="prices-block__content"><?=$arLicense['NAME']?></div>
													<div class="prices-block__dotted  ">
														<div class="prices-block__img _one-line">
															<?if($arLicense['PROPS']['UPDATE_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon4.png" class="js-tooltip"  title="Обновления" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['DELIVERY']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon9.png" class="js-tooltip"  title="Доставка" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['SETUP_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon8.png" class="js-tooltip"  title="Установка" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['ITS_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon3.png" class="js-tooltip"  title="ИТС на 3 месяца" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['HOURS_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon13.png" class="js-tooltip"  title="Бесплатные часы" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['REPORTING_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon14.png" class="js-tooltip"  title="Отчетность 1С" alt="" />
															<?endif;?>
														</div>
													</div>
													<div class="prices-block__price-row">
														<span> <?=$arLicense['PROPS']['PRICE']['VALUE']?>&nbsp;руб.</span>
                                                        <?
                                                        switch ($sectionID) {
                                                            case 5:
                                                                $aditionalLicensesBuyButton = 'Заказать';
                                                                break;
                                                            default:
                                                                $aditionalLicensesBuyButton = 'Купить';
                                                                break;
                                                        }
                                                        ?>
														<a class="default-link pupop" onclick="globalSetFeedbackOrderParams('Кнопка Купить в Дополнительные лицензии','<?=$arLicense['NAME'];?>','<?=$arLicense['PROPS']['PRICE']['VALUE']?>','<?=$arParams['NAME']?>')" href="#order-licence"><?= $aditionalLicensesBuyButton ?></a>
													</div>
												</div>
											<?endforeach;?>
											<?if($index2 > 3){?>
												<div class="more-info__link-wrapper versions-info__link-wrapper">
													<a href="#" class="dotted-link more-info__link">Подробнее</a>
												</div>
											<?}?>
											<?//$index++;?>
											
										<?endforeach;?>
									</div>
								</div>
							<?}?>
							
							
							
							<?if($arCorpLicenses){?>
								<div class="prices-block more-info" data-partially-hidden="true">
									<div class="more-info__container-partially-hidden ">
										<h2 class="h2">Дополнительные лицензии КОРП</h2>
										<?$index = 0;?>
										<?foreach ($arCorpLicenses as $arProgramLicenses):?>
											<?$index2 = 0;?>
											<?foreach ($arProgramLicenses as $arLicense):?>
												<?$index2++;?>
												<div class="prices-block__row clear<?if($index2 > 3):?> _hidden<?endif;?>">
													<div class="prices-block__content"><?=$arLicense['NAME']?></div>
													<div class="prices-block__dotted  ">
														<div class="prices-block__img _one-line">
															<?if($arLicense['PROPS']['UPDATE_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon4.png" class="js-tooltip"  title="Обновления" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['DELIVERY']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon9.png" class="js-tooltip"  title="Доставка" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['SETUP_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon8.png" class="js-tooltip"  title="Установка" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['ITS_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon3.png" class="js-tooltip"  title="ИТС на 3 месяца" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['HOURS_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon13.png" class="js-tooltip"  title="Бесплатные часы" alt="" />
															<?endif;?>
															<?if($arLicense['PROPS']['REPORTING_CHECKBOX']['VALUE']=='Y'):?>
																<img src="<?=SITE_TEMPLATE_PATH?>/img/content/icon14.png" class="js-tooltip"  title="Отчетность 1С" alt="" />
															<?endif;?>
														</div>
													</div>
													<div class="prices-block__price-row">
														<span> <?=$arLicense['PROPS']['PRICE']['VALUE']?>&nbsp;руб.</span>
                                                        <?
                                                        switch ($sectionID) {
                                                            case 5:
                                                                $corpLicensesBuyButton = 'Заказать';
                                                                break;
                                                            default:
                                                                $corpLicensesBuyButton = 'Купить';
                                                                break;
                                                        }
                                                        ?>
														<a class="default-link pupop" href="#order-programm" onclick="globalSetFeedbackOrderParams('Дополнительные лицензии КОРП','<?=$arLicense['NAME'];?>','<?=$arLicense['PROPS']['PRICE']['VALUE'];?>','<?=$arParams['NAME']?>')"><?= $corpLicensesBuyButton ?></a>
													</div>
												</div>
											<?endforeach;?>
											<?if($index2 > 3){?>
												<div class="more-info__link-wrapper versions-info__link-wrapper">
													<a href="#" class="dotted-link more-info__link">Подробнее</a>
												</div>
											<?}?>
											<?$index++;?>
										
										<?endforeach;?>
									</div>
								</div>
							<?}?>
						
						
						
						</div>
					</div>
				<?}?>
			
			</div>
	
	<? if (!is_set($arParams['SECTION_WRAP']) || $arParams['SECTION_WRAP']): ?>
        </div>
        </section>
	<? endif; ?>

<?}?>
