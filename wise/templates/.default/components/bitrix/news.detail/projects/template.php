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
<?

$c1 = array();
$c2 = array();
?>
<h1 class="c-about__caption"><? AD_H1($arResult["NAME"])?></h1>
<div class="c-about__content clear">
	<img class="content-logo" src="<?=$arResult["DETAIL_PICTURE"]["SRC"]?>" title="<?=$arResult["DETAIL_PICTURE"]["ALT"]?>" alt="<?=$arResult["DETAIL_PICTURE"]["TITLE"]?>">
	<? if ($arResult['PROPERTIES']['PROJ_OF_YEAR']['VALUE']) : ?>
        <div class="label-year-winner label-year-winner--detail"></div>
    <? endif; ?>
	<div class="content-attrs">
        <? if ( $arResult["PROPERTIES"]['cats1']['VALUE'] ) {?>
            <div class="content-attrs__item">
                <span><?=$arResult["PROPERTIES"]['cats1']['NAME']?>:</span>
                <? foreach ( $arResult["PROPERTIES"]['cats1']['VALUE'] as $i=>$value1 ) { ?>
	                <?
	                	$c1[] = $arResult['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i];
	                ?>
                    <a href="/o-kompanii/nash-opyt/projects/?cat1=<?=$arResult['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i]?>" data-cat-id="1" data-id="<?=$arResult['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i]?>"><?=$value1?></a>
                <? } ?>
            </div>
        <? } ?>
        <? if ( $arResult["PROPERTIES"]['cats2']['VALUE'] ) {?>
            <div class="content-attrs__item">
                <span><?=$arResult["PROPERTIES"]['cats2']['NAME']?>:</span>
                <? foreach ( $arResult["PROPERTIES"]['cats2']['VALUE'] as $j=>$value2 ) { ?>
                	<?
	                	$c2[] = $arResult['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j];
	                ?>
                    <a href="/o-kompanii/nash-opyt/projects/?cat2=<?=$arResult['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j]?>" data-cat-id="2" data-id="<?=$arResult['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j]?>"><?=$value2?></a>
                <? } ?>
            </div>
        <? } ?>
        <? if ( $arResult["PROPERTIES"]['cats3']['VALUE'] ) {?>
            <div class="content-attrs__item">
                <span><?=$arResult["PROPERTIES"]['cats3']['NAME']?>:</span>
                <? foreach ( $arResult["PROPERTIES"]['cats3']['VALUE'] as $k=>$value3 ) { ?>
                    <a  href="/o-kompanii/nash-opyt/projects/?cat3=<?=$arResult['PROPERTIES']['cats3']["VALUE_ENUM_ID"][$k]?>" data-cat-id="3" data-id="<?=$arResult['PROPERTIES']['cats3']["VALUE_ENUM_ID"][$k]?>"><?=$value3?></a>
                <? } ?>
            </div>
        <? } ?>
	</div>
    <? if(!empty($arResult["PROPERTIES"]['about']['~VALUE']['TEXT'])):?>
        <div class="h2">О клиенте</div>
        <div class="content-text content-area">
            <?= $arResult["PROPERTIES"]['about']['~VALUE']['TEXT']; ?>
        </div>
    <? endif;?>
    <?if(!empty($arResult["PROPERTIES"]['doing']['~VALUE']['TEXT'])):?>
	<div class="h2">Что сделано</div>
	<div class="content-make">
		<div class="content-make__text content-area">
			<?= $arResult["PROPERTIES"]['doing']['~VALUE']['TEXT']; ?>
		</div>
        <? if ($arResult["PROPERTIES"]['review']['VALUE']) {
            foreach ($arResult["PROPERTIES"]['review']['VALUE'] as $id){
                $images[] = CFile::ResizeImageGet($id, Array("width" => 1000, 'height' => 5000), BX_RESIZE_IMAGE_PROPORTIONAL );
            }
            // собираем в массив только путь к картинке
            $images = array_map(function($item){
                return $item['src'];
            },$images); ?>
            <a class="projects-plate__review popup-img" data-link="<?= CUtil::PhpToJSObject($images)?>" href=""><span><?=$arResult["PROPERTIES"]['review']['NAME']?></span></a>
        <? }?>
        <? if ($arResult["PROPERTIES"]['press']['VALUE']) {?>
		    <a class="projects-plate__press-relize" href="<?=$arResult["PROPERTIES"]['press']['VALUE']?>"><span><?=$arResult["PROPERTIES"]['press']['NAME']?></span></a>
        <? }?>
		<!--<a class="projects-plate__vnedrenie" href="/"><span>Подтверждение о внедрении программы</span></a>-->
	</div>
    <?endif;?>
    <? if($arResult["DETAIL_TEXT"]):?>
        <div class="h2">Как выполнялся проект</div>
        <div class="content-text content-area">
            <?=$arResult["DETAIL_TEXT"]?>
        </div>
    <?endif;?>
	
	<?
	// Вывод программ 1С
	// Оставляем только заявленные программы
	if ($arResult['PROPERTIES']['cats3']['VALUE']) {
		$arrFilter['ID'] = $arResult['PROPERTIES']['cats3']['VALUE_XML_ID'];
	} else {
		$arrFilter['ID'] = false;
	}
	$APPLICATION->IncludeComponent('bitrix:catalog.section.list','programms_uslugi',
		Array(
			'VIEW_MODE' => 'TEXT',
			'SHOW_PARENT_NAME' => 'Y',
			'IBLOCK_TYPE' => 'programmy1s',
			// Используем параметр из конфигурации
			'IBLOCK_ID' => EnvironmentHelper::getParam('programmy1sIBlockId'),
			'SECTION_ID' => false,
			'SECTION_CODE' => '',
			'SECTION_URL' => '',
			'COUNT_ELEMENTS' => 'N',
			'TOP_DEPTH' => '1',
			'SECTION_FIELDS' => '',
			'SECTION_USER_FIELDS' => '',
			'ADD_SECTIONS_CHAIN' => 'Y',
			'CACHE_TYPE' => 'A',
			'CACHE_TIME' => '36000000',
			'CACHE_NOTES' => '',
			'CACHE_GROUPS' => 'Y',
			'FILTER_VALUE' => $arrFilter,
		)
	);
	?>
    <?if(!empty($c1)):?>
        <? CModule::IncludeModule('iblock');
       
        $res = CIBlockSection::GetList(
            Array(),
            Array("IBLOCK_ID"=>21, "ACTIVE"=>"Y", "GLOBAL_ACTIVE"=>"Y", "EXTERNAL_ID" => $c1),
            true,
            Array()
        );?>
    
        <div class="h2">Функциональные задачи проекта</div>
     
        <div class="content-task">
            <ul class="task-list">
                <? while($arSection = $res->GetNext()){ ?>
                <li class="task-list__item">
                    <img class="task-list__item__icon" src="<?=SITE_TEMPLATE_PATH?>/img/task1.png">
                    <div class="task-list__item__title"><a href="/o-kompanii/nash-opyt/projects/?cat1=<?=$arSection['XML_ID']?>"><?=$arSection['NAME']?></a></div>
                    <div class="task-list__item__text">
                        <?=$arSection["DESCRIPTION"]?>
                        <ul class="task-sublist">
                            <? $el = CIBlockElement::GetList(
                                Array(),
                                Array("IBLOCK_ID"=>21, "SECTION_ID"=>$arSection['ID']),
                                false,
                                Array(),
                                Array()
                            );?>
    
                            <? while($arEl = $el->GetNextElement()){
                                $arFields = $arEl->GetFields();
                            ?>
                            <li class="task-sublist__item">
                                <div class="task-sublist__item__title"><a href="/"><?=$arFields['NAME']?></a></div>
                                <div class="task-sublist__item__text">
                                    <?=$arFields["PREVIEW_TEXT"]?>
                                </div>
                            </li>
                            <? } ?>
                        </ul>
                    </div>
                </li>
                <?};?>
            </ul>
        </div>
    <?endif;?>
    
    <?if(!empty($c2)):?>
        <? $gfd = CIBlockSection::GetList(
            Array(),
            Array("IBLOCK_ID"=>22, "ACTIVE"=>"Y", "GLOBAL_ACTIVE"=>"Y", "EXTERNAL_ID" => $c2),
            true,
            Array()
        );
        ?>
        <div class="h2">Отраслевая принадлежность проекта</div>
        <div class="content-task">
            <ul class="task-list">
                <? while($arSect = $gfd->GetNext()){ ?>
                <li class="task-list__item">
                    <img class="task-list__item__icon" src="<?=SITE_TEMPLATE_PATH?>/img/task3.png">
                    <div class="task-list__item__title"><a href="/o-kompanii/nash-opyt/projects/?cat2=<?=$arSect['XML_ID']?>"><?=$arSect['NAME']?></a></div>
                    <div class="task-list__item__text">
                        <?=$arSect["DESCRIPTION"]?>
                    </div>
                </li>
                <? } ?>
            </ul>
        </div>
    <?endif;?>

</div>
