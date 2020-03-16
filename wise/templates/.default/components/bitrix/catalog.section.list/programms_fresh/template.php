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
    <div class="product-list">
        <ul class="product-list__cols">

            <li class="product-list__item">
                <div class="product-plate _white _w-300 _w-400">
                    <div class="product-plate__img-holder">
                        <img src="<?=SITE_TEMPLATE_PATH?>/img/content/product-img15.jpg" alt="" class="product-plate__img"></div>
                    <div class="product-plate__content _price">
                        <div class="product-plate__caption h3"><a href="#" class="product-plate__link default-link">1С:Предприниматель 2015</a></div>
                        <div class="product-plate__text">Специальная поставка 1С: Бухгалтерия, понятная и удобная для руководителей: для работы в программе необязательно знать бухгалтерский учет</div>
                    </div>
                    <div class="product-plate__ui-holder _price">
                        <a href="#1c-fresh" onclick="setFormProgramm('1С:Предприниматель 2015')" class="product-plate__btn pupop button">Начать работу</a>
                    </div>
                </div>
            </li>
            
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
            <div class="product-plate _w-300 _w-400 <?=$arParams['CLASS']?>">
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
                    <a href="#1c-fresh"  onclick="setFormProgramm('<?=$arSection['UF_NAME_LIST']?>')" class="pupop product-plate__btn button">Начать работу</a>
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