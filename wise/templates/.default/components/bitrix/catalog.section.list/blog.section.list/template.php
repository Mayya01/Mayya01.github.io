<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
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
<? if (count($arResult['SECTIONS'])) { ?>
    <div class='wa-blog-rubric'>
        <? foreach ($arResult['SECTIONS'] AS $arSection) { ?>
            <div class='wa-blog-rubric__item'>
                <a href='<?= $arSection['SECTION_PAGE_URL'] ?>'
                   title='<?= $arSection['NAME'] ?>'
                   class='label'><?= $arSection['NAME'] ?></a>
            </div>
        <? } ?>
    </div>
<? } ?>