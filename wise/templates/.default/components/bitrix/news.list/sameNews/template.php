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

<? foreach ($arResult["ITEMS"] as $arItem): ?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
	<div class="c-post__aside-item" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
		<? if ($arParams['SECTION'] == 'press'): ?>
			<div class="c-post-preview _client">
				<div class="c-post-preview__header">
					<? if ($arItem['DISPLAY_PICTURE']): ?>
						<a class="c-post-preview__img-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
							<img class="c-post-preview__img" src="<?= $arItem['DISPLAY_PICTURE'] ?>"
							     alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
						</a>
					<? endif; ?>
					<div class="h3">
						<a class="default-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
							<?= $arItem['NAME'] ?>
						</a>
					</div>
					<p><?= $arItem['PREVIEW_TEXT'] ?></p>
				</div>
				<div class="c-post-preview__main">
					<? if (!empty($arItem['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['FILE_VALUE'])): ?>
						<div class="c-post-preview__link">
							<a class="dotted-link _review-link pupop" href="#client-review-<?= $arItem['ID'] ?>">
								<?= $arItem['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['NAME'] ?>
							</a>
							<div style="display:none;" id="client-review-<?= $arItem['ID'] ?>">
								<img
									src="<?= $arItem['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['FILE_VALUE']['SRC'] ?>"/>
							</div>
						</div>
					<? endif; ?>
					<? if (is_array($arItem['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE']) AND !empty($arItem['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE'])): ?>
						<div class="c-post-preview__link">
							<a class="default-link _press-release-link"
							   href="<?= $arItem['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE'][$arItem['DISPLAY_PROPERTIES']['PROJECT_LINK']['VALUE']]['DETAIL_PAGE_URL'] ?>">
								Описание проекта
							</a>
						</div>
					<? endif; ?>
					<? if ((string)$arItem['TAGS'] != ''): ?>
						<ul class="c-post-preview__tags">
							<?
							$tags = explode(', ', $arItem['TAGS']);
							foreach ($tags as $tag):
								?>
								<li>
									<a href="<?= CommonHelper::nfGetCurPageParam('tags[' . 0 . ']=' . urlencode($tag), '', NULL, $arItem['LIST_PAGE_URL']) ?>">
										<?= $tag ?>
									</a>
								</li>
							<? endforeach; ?>
						</ul>
					<? endif; ?>
				</div>
			</div>
		<? else: ?>
			<div class="c-post-preview _new">
				<? if ($arItem['DISPLAY_PICTURE']): ?>
					<a class="c-post-preview__img-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
						<img class="c-post-preview__img" src="<?= $arItem['DISPLAY_PICTURE'] ?>"
						     alt="<?= $arItem['PREVIEW_PICTURE']['ALT'] ?>">
					</a>
				<? endif; ?>
				<date сlass="c-post-preview__date">
					<?= FormatDate('d F Y', MakeTimeStamp($arItem['ACTIVE_FROM'] != '' ? $arItem['ACTIVE_FROM'] : $arItem['TIMESTAMP_X'])) ?>
				</date>
				<div class="h3">
					<a class="default-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
						<?= $arItem['NAME'] ?>
					</a>
				</div>
				<? if (!$arParams["HIDE_DESCRIPTION"]): ?>
					<p><?= $arItem['PREVIEW_TEXT'] ?></p>
				<? endif ?>

				<ul class="c-post-preview__tags">
					<?
					$tags = explode(', ', $arItem['TAGS']);
					foreach ($tags as $tag):
						?>
						<li>
							<a href="<?= CommonHelper::nfGetCurPageParam('tags[' . 0 . ']=' . urlencode($tag), '', NULL, $arItem['LIST_PAGE_URL']) ?>"><?= $tag ?></a>
						</li>
					<? endforeach; ?>
				</ul>
			</div>
		<? endif; ?>
	</div>
<? endforeach; ?>