<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
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

$strSectionEdit = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_EDIT');
$strSectionDelete = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'SECTION_DELETE');
$arSectionDeleteParams = array('CONFIRM' => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));


if (0 < $arResult['SECTIONS_COUNT'])
{
?>
<div class="c-typical-products__products">
    <div class="product-list <?=$arParams['CLASS']?>">
        <ul class="product-list__cols">
<?

    foreach ($arResult['SECTIONS'] as &$arSection)
    {
        $this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
        $this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);

        if (false === $arSection['PICTURE'])
            $arSection['PICTURE'] = array(
                'SRC' => $arCurView['EMPTY_IMG'],
                'ALT' => (
                    '' != $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_ALT']
                    ? $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_ALT']
                    : $arSection['NAME']
                ),
                'TITLE' => (
                    '' != $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_TITLE']
                    ? $arSection['IPROPERTY_VALUES']['SECTION_PICTURE_FILE_TITLE']
                    : $arSection['NAME']
                )
            );
        ?>
        <li class="product-list__item" <? echo $this->GetEditAreaId($arSection['ID']); ?>>
            <div class="product-plate _w-300 _w-400">
                <div class="product-plate__img-holder">
                    <img src="<?=$arSection['PICTURE']['SRC']?>" alt="<?=$arSection['UF_NAME_LIST']?>" class="product-plate__img"/>
                </div>
                <div class="product-plate__content _price">
                    <div class="product-plate__caption h3">
                        <a href="<?=$arSection['SECTION_PAGE_URL']?>" class="product-plate__link default-link"><?=$arSection['UF_NAME_LIST']?></a>
                    </div>
                    <div class="product-plate__text"><?=$arSection['~DESCRIPTION']?></div>
                </div>
                <div class="product-plate__ui-holder _price">
                    <div class="product-plate__price"><?=$arSection['UF_ARENDA_PRICE_LIST']?> руб/мес</div>
                    <a href="#arenda-programm"  onclick="setFormProgramm('<?=$arSection['UF_NAME_LIST']?>')" class="pupop product-plate__btn button">Арендовать</a>
                </div>
            </div>
        </li>

    <?
	}
?>
        </ul>
    </div>
</div>
<?

}
?>