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
$this->setFrameMode(true);
?>

<div class="content-center">
	<div class="c-about__checkboxes clear">
		<div class="column">
			<div class="checkboxes__title">Функциональные задачи</div>
			<ul  class="checkboxes__list">
				<li class="checkboxes__row all js-column-1" data-id="0" rel="js-column-1"><label><input type="checkbox" checked><span></span>Выбрать все</label></li>
				<? if(CModule::IncludeModule("iblock")) : ?>
					<? $property_enums = CIBlockPropertyEnum::GetList(
						Array(
							"DEF"  => "ASC",
							"SORT" => "ASC"
						),
						Array(
							"IBLOCK_ID" => 19,
							"CODE"      => "cats1"
						)
					); ?>
					<?while($enum_fields = $property_enums->GetNext()){ ?>
				<li class="checkboxes__row js-column-1" data-id="<?=$enum_fields['ID']?>"><label><input type="checkbox"><span></span><?=$enum_fields['VALUE']?></label></li>
					<?}?>
				<? endif;?>
			</ul>
		</div>
		<div class="column">
			<div class="checkboxes__title">Автоматизация по отраслям</div>
			<ul class="checkboxes__list">
				<li class="checkboxes__row all js-column-2" data-id="0" rel="js-column-2"><label><input type="checkbox" checked><span></span>Выбрать все</label></li>
				<? if(CModule::IncludeModule("iblock")) : ?>
					<? $property_enums = CIBlockPropertyEnum::GetList(
						Array(
							"DEF"  => "ASC",
							"SORT" => "ASC"
						),
						Array(
							"IBLOCK_ID" => 19,
							"CODE"      => "cats2"
						)
					); ?>
					<?while($enum_fields = $property_enums->GetNext()){ ?>
				<li class="checkboxes__row js-column-2" data-id="<?=$enum_fields['ID']?>"><label><input type="checkbox"><span></span><?=$enum_fields['VALUE']?></label></li>
					<?}?>
				<? endif;?>
			</ul>
		</div>
		<div class="column">
			<div class="checkboxes__title">На базе программ</div>
			<ul class="checkboxes__list clear">
				<li class="checkboxes__row all js-column-3" data-id="0" rel="js-column-3"><label><input type="checkbox" checked><span></span>Выбрать все</label></li>
				<? if(CModule::IncludeModule("iblock")) : ?>
					<? $property_enums = CIBlockPropertyEnum::GetList(
						Array(
							"DEF"  => "ASC",
							"SORT" => "ASC"
						),
						Array(
							"IBLOCK_ID" => 19,
							"CODE"      => "cats3"
						)
					); ?>
					<?while($enum_fields = $property_enums->GetNext()){ ?>
				<li class="checkboxes__row js-column-3" data-id="<?=$enum_fields['ID']?>"><label><input type="checkbox"><span></span><?=$enum_fields['VALUE']?></label></li>
					<?}?>
				<? endif;?>
			</ul>
		</div>
	</div>
	<div class="checkboxes__minimize"><span>Свернуть фильтры</span></div>
</div>
