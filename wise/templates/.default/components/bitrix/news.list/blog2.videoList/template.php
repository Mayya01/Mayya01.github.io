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
/** @var CBitrixComponent $component */ ?>

<? if (count($arResult["ITEMS"])): ?>
	<div class="blog__video">
		<div class="content-center">
			<h2>Видео</h2>
			<? if ($arResult["FIRST_ITEM"]): ?>
				<? $arItem = $arResult["FIRST_ITEM"]; ?>
				<div class="video-preview video-preview--inline">
					<div class="video-preview__video js-wa-youtube-video-player"
						 data-videoid="<?= $arItem['PROPERTIES']['VIDEO_ID']['VALUE'] ?>">
						<div class="video-preview__player-btn js-wa-youtube-video-player-btn">
							<img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
						</div>
						<div class="video-preview__frame js-wa-youtube-video-player-frame"></div>
					</div>
					<div class="video-preview__text">
						<h3 class="video-preview__title video-preview__title--lg"><?= $arItem['NAME'] ?> </h3>
						<p><?= $arItem['PREVIEW_TEXT'] ?></p>
					</div>
				</div>
			<? endif; ?>
			<div class="video-previews video-previews--four-columns">
				<? foreach ($arResult["ITEMS"] as $key => $arItem): ?>
					<?
					$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'],
						CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
					$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'],
						CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"),
						array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
					?>
					<? if ($key == 0) continue; ?>
					<div class="video-preview">
						<a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="video-preview__video-link">
							<img src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
						</a>
						<div class="video-preview__text">
							<h3 class="video-preview__title"><?= $arItem['NAME'] ?></h3>
						</div>
					</div>
				<? endforeach; ?>
			</div>
			<div class="more-link">
				<a href="/o-kompanii/blog/video/" class="default-link _no-border-bottom _arrowed-right _yellow">Все
					видео</a>
			</div>
		</div>
	</div>
<? endif; ?>
