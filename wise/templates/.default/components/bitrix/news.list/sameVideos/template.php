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
<ul class="c-articles__list">
<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
	<li class="c-articles__item  js-training-video" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
        <div class="c-post-preview">
            <div class="h3"><a class="default-link" href="<?=$arItem['DETAIL_PAGE_URL'] ?>"><?=$arItem['NAME'] ?></a></div>

            <div class="c-training-video js-wa-youtube-video-player" data-videoid="<?=$arItem['PROPERTIES']['VIDEO_ID']['VALUE'] ?>">
                <div class="c-training-video__frame js-wa-youtube-video-player-frame"></div>
                <button class="c-training-video__start-btn js-wa-youtube-video-player-btn" type="button">Play</button>
            </div>

            <p><?=$arItem['~PREVIEW_TEXT'] ?></p>

            <ul class="c-post-preview__tags">
                <?foreach($arItem['arTags'] as $tag):?>
                <li><a href="<?=$arItem['LIST_PAGE_URL']?>?tags=<?=$tag?>"><?=$tag?></a></li>
                <?endforeach;?>
            </ul>
        </div>
    </li>
<?endforeach;?>
</ul>
