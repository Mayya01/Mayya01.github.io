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

if (!empty($arResult["SEARCH"])):?>
	<ul class="c-blog__tags">
		<? foreach ($arResult["SEARCH"] as $tags): ?>
			<li class="c-blog__tags__li <? if (in_array($tags['NAME'], $arResult['SELECTED_TAGS'])): ?> _selected<? endif; ?>">
				<a class="c-blog__tags__link <? if (in_array($tags['NAME'], $arResult['SELECTED_TAGS'])): ?>_selected <? endif; ?>"
					<? if (in_array($tags['NAME'], $arResult['SELECTED_TAGS'])): ?>
						href="<?= CommonHelper::nfGetCurPageParam('', array(array('tags', array_search($tags['NAME'], $arResult['SELECTED_TAGS'])))) ?>"
					<? else: ?>
						href="<?= CommonHelper::nfGetCurPageParam('tags[' . ($arResult['LAST_KEY']+1) . ']=' . urlencode($tags["NAME"])) ?>"
					<? endif; ?>
                   data-tags="<?= $tags["NAME"]; ?>">
					<?= $tags["NAME"] ?>
				</a>
			</li>
		<? endforeach; ?>
	</ul>
<? endif; ?>
