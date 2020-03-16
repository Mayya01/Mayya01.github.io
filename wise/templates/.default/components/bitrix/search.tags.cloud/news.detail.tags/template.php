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

if (!empty($arResult["SEARCH"])):
	?>

	<div class="c-post__aside-item">
		<div class="c-post__search">
			<div class="h3"><?= $arParams['TITLE'] ?></div>
			<ul class="c-post__tags">
				<? foreach ($arResult["SEARCH"] as $tags):?>
					<li>
						<a href="<?= CommonHelper::nfGetCurPageParam('tags[' . 0 . ']=' . urlencode($tags["NAME"]), [], NULL, $arParams['URL_SEARCH']) ?>">
							<?= $tags["NAME"] ?>
						</a>
					</li>
				<?endforeach; ?>
			</ul>
		</div>
	</div>
	<?
endif;
?>