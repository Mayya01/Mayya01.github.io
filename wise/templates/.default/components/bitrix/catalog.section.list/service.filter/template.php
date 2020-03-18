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

<? if (0 < $arResult['SECTIONS_COUNT']) : ?>
	<div
	  class="content-row service-list-dynamic-filter js-service-list-dynamic-filter">
		<div class="layout-center-wrapper service-list-dynamic-filter__wrap">
			<div class="content-col clearfix">
				<h2
				  class="module-h2 service-list-dynamic-filter__h2"><?= GetMessage('CSL_SF_HEADING') ?></h2>
			</div>
			<div class="service-list-dynamic-filter__options content-col clearfix">
				<div class="service-list-dynamic-filter__select-slick js-service-list-filter-ddslick" id="service-list-filter-ddslick"></div>
				<button class="service-list-dynamic-filter__btn service-list-dynamic-filter__btn--active js-filter-tag"
						data-group="all"><span
					  class="service-list-dynamic-filter__btn-label">Все услуги</span>
				</button>
				<? foreach ($arResult['TAGS'] as $arTag) : ?>
					<button class="service-list-dynamic-filter__btn js-filter-tag"
							data-group="tagid<?= $arTag['ID'] ?>"><span
						  class="service-list-dynamic-filter__btn-label"><?= $arTag['NAME'] ?></span>
					</button>
				<? endforeach; ?>
			</div>
			<div class="service-list-dynamic-filter__grid clearfix js-service-grid">
				<? foreach ($arResult['SECTIONS'] as $arSection) : ?>
					<? $tagsIDs = array('all'); ?>
					<? foreach ($arSection['TAGS'] as $arTags) : ?>
						<? $tagsIDs[] = 'tagid'.$arTags['ID']; ?>
					<? endforeach; ?>
					<? $tagsJsonStr = json_encode($tagsIDs); ?>
					<div class="service-list-dynamic-filter__item service-list-dynamic-filter-item js-service-section"
							data-groups='<?=$tagsJsonStr?>'>
						<div class="service-list-dynamic-filter-item__holder">
							<div class="service-list-dynamic-filter-item__icon-wrap">
								<div class="service-list-dynamic-filter-item__icon<?if(!empty($arSection['UF_SERV_ICON'])):?> service-list-dynamic-filter-item__icon--<?=$arSection['UF_SERV_ICON']?><?endif;?>"> </div>
							</div>
							<div class="service-list-dynamic-filter-item__link-wrap">
								<a href="<?= $arSection['SECTION_PAGE_URL'] ?>" class="service-list-dynamic-filter-item__link"><?= $arSection['NAME'] ?></a>
							</div>
						</div>
					</div>
				<? endforeach; ?>
			</div>
		</div>
	</div>
<? endif; ?>
