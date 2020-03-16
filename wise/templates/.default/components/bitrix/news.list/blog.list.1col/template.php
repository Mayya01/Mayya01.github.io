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
?>
<h2 class="h1 c-useful-articles__caption"><?= $arParams['SECTION_NAME'] ?></h2>
<div class="news-list">
	<? foreach ($arResult["ITEMS"] as $arItem): ?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
		<div class="news-item news-list__item" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
			<div class="news-item__title">
				<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="default-link"><?= $arItem['NAME'] ?></a>
			</div>
			<?if($arParams['SECTION'] == 'video'):?>
						<div class="c-video-review js-wa-youtube-video-player no-margin-top"
						     data-videoid="<?=$arItem["PROPERTIES"]["VIDEO_ID"]["VALUE"];?>">
							<div class="c-video-review__frame js-wa-youtube-video-player-frame"></div>
							<button class="c-video-review__start-btn js-wa-youtube-video-player-btn" type="button">Play</button>
						</div>
			<?endif;?>
			<div class="news-item__content"><?= $arItem['FORMATTED_PREVIEW_TEXT'] ?></div>
		</div>
	<? endforeach; ?>
	<div class="news-list__all-holder">
		<a href="<?= $arParams['IBLOCK_URL'] ?>" class="news-list__all-link">
			<span><?=$arResult['PATH_TO_LIST_LINK_TEXT']?></span>
		</a>
	</div>
</div>