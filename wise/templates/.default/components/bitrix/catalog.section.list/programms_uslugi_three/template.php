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

if (0 < $arResult['SECTIONS_COUNT']) {
?>
<div class="c-typical-products__products">
    <div class="product-list">
        <ul class="product-list__cols">
            <?

            foreach ($arResult['SECTIONS'] as &$arSection) {
                $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
                $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete,
                    $arSectionDeleteParams);

                if (false === $arSection['PICTURE']) {
                    $arSection['PICTURE'] = array(
                        'SRC'   => $arCurView['EMPTY_IMG'],
                        'ALT'   => ('' != $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_ALT'] ?
                            $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_ALT'] :
                            $arSection['UF_NAME_LIST']),
                        'TITLE' => ('' != $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_TITLE'] ?
                            $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_TITLE'] :
                            $arSection['UF_NAME_LIST'])
                    );
                }
                ?>

                <li class="product-list__item">
                    <div class="product-plate _w-300 _w-400 <?= $arParams['CLASS'] ?>">
                        <?/* @todo Уьран так как ничего не выводит и бьёт верстку
                        <div class="product-plate-top">
                            <div class="product-plate-top__time"><?= $arSection['UF_OFFER_TITLE_LIST'] ?></div>
                            <div class="product-plate-top__text"><?= $arSection['~UF_OFFER_TEXT_LIST'] ?></div>
                        </div>
                        */?>
                        <div class="product-plate__img-holder">
                            <? if ($arSection['PICTURE']['SRC']) { ?>
                                <img src="<?= $arSection['PICTURE']['SRC'] ?>"
                                     alt="<?= $arSection['PICTURE']['ALT'] ?>" class="product-plate__img">
                            <? } ?>
                        </div>
                        <div class="product-plate__content _price">
                            <div class="product-plate__caption h3">
                                <a href="<?= $arSection['SECTION_PAGE_URL'] ?>"
                                   class="product-plate__link default-link"><?= $arSection['UF_NAME_LIST'] ?></a>
                            </div>
                            <div class="product-plate__text"><?= $arSection['DESCRIPTION'] ?></div>
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
                                        <?= count($arSection['PRICES'])>1?"от":"" ?>&nbsp;<?= $arSection['MIN_PRICE']?number_format($arSection['MIN_PRICE'], 0, ',', ' '):$arSection['UF_PRICE_LIST']; ?>&nbsp;руб.
                                    </div>
                                </div>
                           <? endif; ?>

                            <a href="<?= $arSection['SECTION_PAGE_URL'] ?>" class="product-plate__btn button">Узнать больше</a>
                        </div>
                    </div>
                </li>
            <? } ?>
        </ul>
    </div>
</div>
<?

}
?>
