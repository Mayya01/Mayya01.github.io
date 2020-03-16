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
?>
<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
    <div class="c-post__aside-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
        <div class="c-post-preview _client">
            <div class="c-post-preview__header">
                <?if ($arItem['DISPLAY_PICTURE']):?>
                <a class="c-post-preview__img-link" href="<?=$arItem['DETAIL_PAGE_URL']?>"><img class="c-post-preview__img" src="<?=$arItem['DISPLAY_PICTURE']?>" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>"></a>
                <?endif;?>
                <div class="h3"><a class="default-link" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['PROPERTIES']['CLIENT_NAME']['VALUE']?></a></div>
                <p><?=$arItem['PROPERTIES']['CLIENT_DESCRIPTION']['VALUE']?></p>
            </div>

            <div class="c-post-preview__main">
                <?if ($arItem['PROPERTIES']['TASK']['VALUE']):?>
                    <p><?=$arItem['PROPERTIES']['TASK']['VALUE']['TEXT']?></p>
                <?endif;?>

                <?if ($arItem['PROPERTIES']['CLIENT_REVIEW_LINK']['VALUE']):?>
                    <div class="c-post-preview__link">
                        <a class="dotted-link _review-link" href="<?=$arItem['PROPERTIES']['CLIENT_REVIEW_LINK']['VALUE']?>">Отзыв клиента</a>
                    </div>
                <?endif;?>

                <div class="c-post-preview__link">
                    <a class="default-link _press-release-link" href="<?=$arItem['DETAIL_PAGE_URL']?>">Подробный пресс-релиз</a>
                </div>

                <ul class="c-post-preview__tags">
                    <?foreach($arItem['arTags'] as $tag):?>
                    <li><a href="<?=$arItem['LIST_PAGE_URL']?>?tags=<?=$tag?>"><?=$tag?></a></li>
                    <?endforeach;?>
                </ul>
            </div>
        </div>
    </div>
<?endforeach;?>


