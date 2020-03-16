<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<h1 class="issues_journal_head">Все статьи</h1>

<?if(count($arResult["ITEMS"]) > 0):?>
    <section class="articles-list">
    <?foreach ($arResult["ITEMS"] as $arItem):?>
    <?
    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
    ?>
        <div class="news-result-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <div class="date"><?echo $arItem["DISPLAY_ACTIVE_FROM"]?></div>
                        <?if($arItem["DETAIL_PAGE_URL"] != $APPLICATION->GetCurPage(false)):?>
            <a href="<?echo $arItem["DETAIL_PAGE_URL"]?>"><?echo $arItem["NAME"]?></a>
            <?else:?>
            <div class="title"><?echo $arItem["NAME"]?></div>
            <?endif;?>

            <?if($arItem['PREVIEW_PICTURE']['SRC']):?>
                <?if($arItem["DETAIL_PAGE_URL"] != $APPLICATION->GetCurPage(false)):?>
                    <a href="<?echo $arItem["DETAIL_PAGE_URL"]?>"><img class="new-banner"  src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" /></a>
                <?else:?>
                    <img class="new-banner" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" />
                <?endif;?>
            <?endif;?>

            <div class="description">
                <p><?echo $arItem["~PREVIEW_TEXT"]?></p>
            </div>
        </div>
    <?endforeach;?>
    </section>
    <?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
    <div class="pager">
        <?=$arResult["NAV_STRING"]?>
    </div>
    <?endif;?>
<?else:?>
    <div>
        <?=GetMessage('NO_RESULT')?>
    </div>
<?endif;?>