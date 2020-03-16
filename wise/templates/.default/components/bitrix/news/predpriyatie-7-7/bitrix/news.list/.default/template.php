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

//$this->addExternalCss('/ceny/css/ceny.css');
?>

	<!-- Заголовок страницы -->
	<div class="content-center">
		<h1 class="c-prices__caption"><? AD_H1('Цены')?></h1>
	</div>
	<!-- Начало блока: табы -->
	<div class="content-center">
		<ul class="c-prices__tab-list">
			<?
			$cur_page = $APPLICATION->GetCurPage();

			if ($cur_page == '/price/')
			{
				$cur_page = '/price/programmy-1s/';
			}
		?>
			<?foreach($arResult["ITEMS"] as $arItem):?>
			<?
				$active = '';
				$link = $arItem["DETAIL_PAGE_URL"];

				if ( $arItem['DETAIL_PAGE_URL'] == $cur_page )
				{
					$active = 'active';
					$link = '';
				}
			?>
				<li class="c-prices__tab <?=$active?>"><a href="<?=$link?>" <?=$onclick?> ><span><?=$arItem['NAME']?></span></a></li>
			<?endforeach;?>
			<span></span>
		</ul>
	</div>

	<!-- Конец блока: табы -->
