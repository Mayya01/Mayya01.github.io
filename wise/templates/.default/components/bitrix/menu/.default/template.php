<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if (!empty($arResult)):?>
<nav class="top_nav">
<? foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
		continue;
	?>
	<?if($arItem["SELECTED"]):?>
	<a href="<?=$arItem["LINK"]?>" class="top_a active"><?=$arItem["TEXT"]?></a>
<?else:?>
	<a href="<?=$arItem["LINK"]?>" class="top_a"><?=$arItem["TEXT"]?></a>
<?endif?>

<?endforeach?>

</nav>
<?endif?>