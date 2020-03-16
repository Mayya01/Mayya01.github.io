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
$this->setFrameMode(true); ?>
<!--js-tags-component-->
<?
if (count($arResult['ITEMS'])):?>
<div class="c-event-preview _bottom-bordered">
	<h1 class="h1">Мероприятия</h1>
	<div class="b-event-previews">
		<? foreach ($arResult['ITEMS'] as $arItem): ?>
            <?
            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
            ?>
            <div class="b-event-preview" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
                <div class="b-event-preview__wrapper">
                    <div class="b-event-preview__col">
                        <a class="b-event-preview__img-link" href="<?= $arItem['DETAIL_PAGE_URL'] ?>"><img class="b-event-preview__img" src="<?= $arItem['DISPLAY_PICTURE'] ?>" alt="Планшет"></a>
                    </div>
                    <div class="b-event-preview__info-col">
                        <div class="b-event-preview__activity-type"><?= $arItem['PROPERTIES']['EVENT_TYPE']['VALUE'] ?></div>
                        <div class="b-event-preview__title"><a href="<?= $arItem['DETAIL_PAGE_URL'] ?>" class="default-link"><?= $arItem['NAME'] ?></a></div>
                        <div class="b-event-preview__row-inline">
                            <div class="b-event-preview__iconic-time">
                                <div class="iconic-time ">
                                    <div class="iconic-time__section _calendar">
                                        <time datetime="<?= $arItem['displayDateMonth'] ?>T<?= $arItem['displayTime'] ?>"><?= $arItem['displayDate'] ?> в <?= $arItem['displayTime'] ?> <sup>мск</sup></time>
                                    </div>
                                    <div class="iconic-time__section _sandglass">
                                        <time datetime="60m"><?= $arItem['PROPERTIES']['DURATION']['VALUE']; ?></time>
                                    </div>
                                </div>
                            </div>
                            <div class="b-event-preview__btn-holder">
                                <a href="#event-registration" data-event-id="<?=$arItem['ID']?>" onclick="setFormEventID(<?=$arItem['ID']?>);setFormEventName('<?=$arItem['NAME']?>');setFormEventDate('<?=$arItem['displayDateString']?>');setFormEventDuration('<?=$arItem['PROPERTIES']['DURATION']['VALUE']?>');setWebinarLink('<?= $arItem['DETAIL_PAGE_URL']?>');setFormEventType('<?= mb_strtolower($arItem['PROPERTIES']['EVENT_TYPE']['VALUE']) ?>');" class="button pupop-center">Записаться</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
		<?endforeach;?>
	</div>
</div>
<? endif; ?>


