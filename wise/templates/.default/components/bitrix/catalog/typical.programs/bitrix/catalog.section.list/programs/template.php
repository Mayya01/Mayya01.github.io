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
$this->setFrameMode(true);

$strSectionEdit = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_EDIT");
$strSectionDelete = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_DELETE");
$arSectionDeleteParams = array("CONFIRM" => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));


if (0 < $arResult["SECTIONS_COUNT"])
{
	?>
	<div class="c-typical-products__products">
		<div class="product-list <?=$arParams['CLASS']?>">
			<ul class="product-list__cols">
				<?
				foreach ($arResult['SECTIONS'] as &$arSection)
				{
					if ($arSection['UF_DELTERM']) {
						continue;
					}
					$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
					$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);

					$sPricePrefix = '';
					if ($arSection['doShowPrefix']) {
						$sPricePrefix = "от&nbsp;";
					}

					if (empty($arSection['PICTURE']['SRC']))
						$arSection['PICTURE'] = array(
							'SRC' => $arCurView['EMPTY_IMG'],
							'ALT' => (
							'' != $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_ALT"]
								? $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_ALT"]
								: $arSection["NAME"]
							),
							'TITLE' => (
							'' != $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_TITLE"]
								? $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_TITLE"]
								: $arSection["NAME"]
							)
						);
					?>
					<li class="product-list__item" <? echo $this->GetEditAreaId($arSection['ID']); ?>>
						<div class="product-plate">
							<div class="product-plate__img-holder">
								<img src="<?=$arSection['PICTURE']['SRC']?>" alt="<?=$arSection['UF_NAME_LIST']?>" class="product-plate__img"/>
							</div>
							<div class="product-plate__content _price">
								<div class="product-plate__caption h3">
									<a href="<?=$arSection['SECTION_PAGE_URL']?>" class="product-plate__link default-link"><?=$arSection['UF_NAME_LIST']?></a>
								</div>
								<div class="product-plate__text">
									<?=$arSection['~DESCRIPTION']?>
								</div>
							</div>
							<div class="product-plate__ui-holder _price">
								<? if(!empty($arSection['NEW_PRICE'])): ?>
									<div class="product-plate__prices-holder">
										<del class="product-plate__old-price">
											<span><?= count($arSection['PRICES'])>1?"от":"" ?>&nbsp;<?= number_format($arSection['MIN_PRICE'], 0, ',', ' '); ?>&nbsp;руб</span>
										</del>
										<div class="product-plate__price">
											<?= count($arSection['PRICES'])>1?"от":"" ?>&nbsp;<?= number_format($arSection['NEW_PRICE'], 0, ',', ' '); ?>&nbsp;руб
											<span class="discounts-label">-<?= $arSection['NEW_PRICE']/($arSection['MIN_PRICE']/100) ?>%</span>
										</div>
									</div>
								<? else: ?>
									<div class="product-plate__prices-holder">
										<div class="product-plate__price">
											<?= count($arSection['PRICES'])>1?"от":"" ?>&nbsp;
											<?= $arSection['MIN_PRICE']?number_format($arSection['MIN_PRICE'], 0, ',', ' '):$arSection['UF_PRICE_LIST']; ?>&nbsp;руб.
										</div>
									</div>
								<? endif; ?>
								<a href="<?=$arSection['SECTION_PAGE_URL']?>" class="_hide">Узнать больше</a>
								<a class="product-plate__btn button pupop" href="#order-programm" onclick="globalSetFeedbackOrderParams('Программы 1С','-','-','<?= $arSection["UF_NAME_LIST"]?>')">Купить</a>
							</div>
						</div>
					</li>
				<? } ?>
			</ul>
		</div>
	</div>
<? } ?>
