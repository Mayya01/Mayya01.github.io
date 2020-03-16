<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);?>

<?if(count($arResult["ITEMS"]) > 0):?>
    <div class="table">
        <h1 class="index_jornal"><?=GetMessage('JOURNAL_IND_TITLE')?></h1>
        <div class="bottom_slider">
        <?foreach ($arResult["ITEMS"] as $arItem):?>
        <?
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
        ?>
            <a class="bottom_slider_a" href="<?=$arItem['CODE']?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
                <img src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" width="<?=$arItem['PREVIEW_PICTURE']['WIDTH']?>" height="<?=$arItem['PREVIEW_PICTURE']['HEIGHT']?>" alt="<?=$arItem['NAME']?>"/>
            </a>
        <?endforeach;?>
        </div>
        <div class="pager_bot_sl">
            
        </div>
    </div>
<?endif;?>