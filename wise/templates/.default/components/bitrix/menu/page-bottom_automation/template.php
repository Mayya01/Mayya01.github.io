<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>
<?if (!empty($arResult)):?>
<div class="c-other-automation-tasks__columns clearme">

	<?if (!empty($arResult["LEFT"])):?>
	<div class="c-other-automation-tasks__column _left">
	<?php foreach ($arResult["LEFT"] as $key => $arItem): ?>
		<div class="c-other-automation-tasks__line <?=$arItem["PARAMS"]["ICON"]?>">
			<?php if ($arItem["SELECTED"]): ?>
			<?=$arItem["TEXT"]?>
			<?php else: ?>
			<a href="<?=$arItem["LINK"]?>" title=""><?=$arItem["TEXT"]?></a>
			<?php endif ?>
			<?php if ($arItem["PARAMS"]["BADGE1"]): ?>
				<span><?=$arItem["PARAMS"]["BADGE1"]?></span>
			<?php endif ?>
			<?php if ($arItem["PARAMS"]["BADGE2"]): ?>
				<span><?=$arItem["PARAMS"]["BADGE2"]?></span>
			<?php endif ?>
		</div>
	<?php endforeach ?>
	</div>
	<?endif?>

	<?if (!empty($arResult["RIGHT"])):?>
	<div class="c-other-automation-tasks__column _right">
	<?php foreach ($arResult["RIGHT"] as $key => $arItem): ?>
		<div class="c-other-automation-tasks__line <?=$arItem["PARAMS"]["ICON"]?>">
		<?php if ($arItem["SELECTED"]): ?>
		<?=$arItem["TEXT"]?>
		<?php else: ?>
		<a href="<?=$arItem["LINK"]?>" title=""><?=$arItem["TEXT"]?></a>
		<?php endif ?>
		<?php if ($arItem["PARAMS"]["BADGE1"]): ?>
			<span><?=$arItem["PARAMS"]["BADGE1"]?></span>
		<?php endif ?>
		<?php if ($arItem["PARAMS"]["BADGE2"]): ?>
			<span><?=$arItem["PARAMS"]["BADGE2"]?></span>
		<?php endif ?>
		</div>
	<?php endforeach ?>
	</div>
	<?endif?>
	
</div>
<?endif?>