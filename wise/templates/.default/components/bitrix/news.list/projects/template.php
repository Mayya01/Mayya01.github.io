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
$isAjaxRequest = $arResult['CUSTOM_AJAX_MODE'] == 'Y' && $arResult['AJAX'] ? true : false;
?>
    <div class="projects-list clear js-projects-list">
        <!--experience-ajax-stack-->
<?foreach($arResult["ITEMS"] as $iItem=>$arItem):?>
    <? //var_dump($arItem['PROPERTIES']['PROJ_OF_YEAR']['VALUE']); ?>
	<div class="projects-list__item <?if($isAjaxRequest):?>projects-item--ajax-false<?endif;?>">
		<div class="projects-plate">
			<div class="projects-plate__content">
				<? if ($arItem['PROPERTIES']['PROJ_OF_YEAR']['VALUE']) : ?>
                    <div class="label-year-winner label-year-winner--list"></div>
				<? endif; ?>
				<img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" class="projects-plate__thumb" title="" alt="">
				<div class="projects-plate__caption h3">
					<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="projects-plate__link default-link"><?=$arItem["NAME"]?></a>
				</div>
				<div class="projects-plate__text">
					<?=$arItem["PROPERTIES"]["subtitle"]['~VALUE']['TEXT']?>
				</div>
			</div>
			<div class="projects-plate__content">
				<div class="projects-plate__text">
					<?=$arItem["PREVIEW_TEXT"]?>
				</div>
				<? if ($arItem["PROPERTIES"]['review']['VALUE']) {
                    $images = [];
					foreach ($arItem["PROPERTIES"]['review']['VALUE'] as $id){
						$images[] = CFile::ResizeImageGet($id, Array("width" => 1000, 'height' => 9999), BX_RESIZE_IMAGE_PROPORTIONAL );
					}
					// собираем в массив только пути к картинкам
					$images = array_map(function($item){
						return $item['src'];
					},$images); ?>
                    <a class="projects-plate__review popup-img" data-link="<?= CUtil::PhpToJSObject($images)?>" href=""><span><?=$arItem["PROPERTIES"]['review']['NAME']?></span></a>
				<? }?>
				<? if ($arItem["PROPERTIES"]['press']['VALUE']) {?>
					<a class="projects-plate__press-relize" href="<?=$arItem["PROPERTIES"]['press']['VALUE']?>"><span><?=$arItem["PROPERTIES"]['press']['NAME']?></span></a>
				<?}?>
				<ul class="projects-plate__cats">

					<? $i = 0; ?>
					<? foreach ( $arItem['PROPERTIES']['cats1']['VALUE'] as $cat1 ) {?>
						<li><a href="/o-kompanii/nash-opyt/projects/?cat1=<?=$arItem['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i]?>" data-cat-id="1" data-id="<?=$arItem['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i]?>"><?=$cat1?></a></li>
						<? $i++; ?>
					<?}?>

					<? $j = 0; ?>
					<? foreach ( $arItem['PROPERTIES']['cats2']['VALUE'] as $cat2 ) {?>
						<li><a href="/o-kompanii/nash-opyt/projects/?cat2=<?=$arItem['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j]?>" data-cat-id="2" data-id="<?=$arItem['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j]?>"><?=$cat2?></a></li>
						<? $j++; ?>
					<?}?>

					<? $k = 0; ?>
					<? if ($arItem['PROPERTIES']['cats3']['VALUE']) foreach ( $arItem['PROPERTIES']['cats3']['VALUE'] as $cat3 ) {?>
						<li><a href="/o-kompanii/nash-opyt/projects/?cat3=<?=$arItem['PROPERTIES']['cats3']["VALUE_ENUM_ID"][$k]?>" data-cat-id="3" data-id="<?=$arItem['PROPERTIES']['cats3']["VALUE_ENUM_ID"][$k]?>"><?=$cat3?></a></li>
						<? $k++; ?>
					<?}?>
				</ul>
			</div>
		</div>
	</div>
<?endforeach;?>
<? if ($arParams['DISPLAY_BOTTOM_PAGER'] == 'Y'): ?>
		<? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
            <?
            // Определяем сколько осталось непоказанных элементов в базе
            $iRestItems = ($arResult['NAV_RESULT']->NavRecordCount - ($arResult['NAV_RESULT']->NavPageNomer*$arResult['NAV_RESULT']->NavPageSize));
            // Для избежания ситуаций типа "показать 6 из 2"
            if ($iRestItems < $arResult['NAV_RESULT']->NavPageSize) {
				$arResult['NAV_RESULT']->NavPageSize = $iRestItems;
            }?>
            <div class='loader js-pager-container'>
            <a href="<?= $APPLICATION->GetCurPageParam('PAGEN_'.$arResult['NAV_RESULT']->NavNum.'='.($arResult['NAV_RESULT']->NavPageNomer + 1), array('PAGEN_'.$arResult['NAV_RESULT']->NavNum,'AJAX','KEY')); ?>" class="projects__ajax-pagen js-projects-nav-ajax js-page-nav"
                  data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
                  data-page="<?= $arResult['NAV_RESULT']->NavPageNomer + 1 ?>">
					Показать ещё <?= $arResult['NAV_RESULT']->NavPageSize ?> <?= CommonHelper::getNumEnding($arResult['NAV_RESULT']->NavPageSize,
					array('проект', 'проекта', 'проектов')) ?> из <?= $iRestItems ?>
				</a>
            </div>
		<? endif ?>
        <!--experience-ajax-stack-->
        </div>
<input type="hidden" class="js-projects-ajax-key" value="<?= $arResult['PARAMS_HASH'] ?>">
<? endif; ?>
