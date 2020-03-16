<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
$this->setFrameMode(true);?>
<ul class="oim-05__vacancies-list js-oim-05-vacancies clearfix">
<?foreach($arResult["ITEMS"] as $arItem):?>
    <li class="oim-05__vacancies-item js-oim-05-vacancy">
        <div class="oim-05__vacancy">
            <h3 class="oim-05__vacancy-title"><a class="underlined-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"><?= $arItem['NAME'] ?></a></h3>
            <p>
				<?= $arItem['cropedDetailText'] ?>
            </p>
            <a class="btn oim-05__vacancy-btn js-popup-vacansy-custom-form" href="#wa-vacancy-response" data-vacancy-title="<?= $arItem['NAME'] ?>" data-vacancy-code="<?= $arItem['CODE'] ?>">Откликнуться</a>
        </div>
    </li>
<?endforeach;?>
</ul>
