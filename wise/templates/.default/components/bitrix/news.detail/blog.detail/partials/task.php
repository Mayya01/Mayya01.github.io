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
?>
<? if ((string)$arResult['PROPERTIES']['TASK']['VALUE']['TEXT'] != ''): ?>
    <h2 class="h2">Задача</h2>
    <p><?= $arResult['PROPERTIES']['TASK']['~VALUE']['TEXT'] ?></p>
<? endif; ?>