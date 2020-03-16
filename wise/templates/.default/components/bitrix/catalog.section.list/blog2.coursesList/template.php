<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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

$strSectionEdit        = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], "SECTION_EDIT");
$strSectionDelete      = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], "SECTION_DELETE");
$arSectionDeleteParams = array("CONFIRM" => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));

if (0 < $arResult['SECTIONS_COUNT']):?>
	<h2>Обучение 1С</h2>
<!--	<div class="product-cards-slider">-->
	<div class="product-cards product-cards--three-columns product-cards--transformed-on-mobile js-product-card-slider">
	
	<? foreach ($arResult['SECTIONS'] as &$arSection):
		$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
		$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
		?>
		<div class="product-card">
					<div class="product-card__top-section">
						<img src="<?=$arSection['PICTURE']['SRC']?>" alt="<?=$arSection['PICTURE']['ALT']?>" width="299" height="125">
					</div>
					<div class="product-card__wrapper">
						<div class="product-card__middle-section">
							<h3 class="product-card__title">
								<a href="<?=$arSection['SECTION_PAGE_URL']?>" class="default-link"><?=$arSection['NAME']?></a>
							</h3>
							<p class="product-card__text"><?=$arSection['DESCRIPTION']?></p>
						</div>
						<div class="product-card__bottom-section">
							<div class="product-card__price">от <?=$arSection['MIN_PRICE_FORMATED']?> руб.</div>
							<a href="<?=$arSection['SECTION_PAGE_URL']?>" class="button pupop">Узнать больше</a>
						</div>
					</div>
				</div>
				
				
			
	
	<? endforeach; ?>
	</div>
<!--	</div>-->
	<div class="more-link">
		<a href="/obuchenie-1s/" class="default-link _no-border-bottom _arrowed-right">Посмотреть все курсы по 1С</a>
	</div>
<? endif; ?>


