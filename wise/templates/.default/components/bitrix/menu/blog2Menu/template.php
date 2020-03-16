<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
/**
 * @var $arParams
 */
?>
<? if (!empty($arResult)): ?>
	<ul class="filters-list">
		<? foreach ($arResult as $arItem):
			if ($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) {
				continue;
			}
			?>
			<? if (($arItem['PARAMS']['VISIBLE'] != 'N' AND !$arItem['PARAMS']['COUNT']) OR
				   ($arItem['PARAMS']['COUNT'] == 'Y' AND (bool)$arParams['COUNT'][ $arItem['PARAMS']['CODE'] ])): ?>
			<li>
				<a class="filters-list__link <?
				if ($arItem['PARAMS']['CLASS']):?><?= " " . $arItem['PARAMS']['CLASS']; ?><? endif;
				?><? if ($arItem["SELECTED"]): ?> filters-list__link--active<? endif; ?>"
				   href="<?= $arItem["LINK"] ?>">
					<?= $arItem["TEXT"] ?>
				</a>
			</li>
		<? endif; ?>
		<? endforeach ?>
	
	</ul>
<? endif ?>
