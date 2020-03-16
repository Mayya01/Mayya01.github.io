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
$this->setFrameMode(true);

//$this->addExternalCss('/ceny/css/ceny.css');
?>

<!-- Заголовок страницы -->
<div class="content-center">
    <h1 class="c-prices__caption">
		<? $APPLICATION->ShowProperty('H1', AD_H1_toString('Цены')); ?>
    </h1>
</div>
<!-- Начало блока: табы -->

<? // вариант реализации навигации по табам с ajax-запросами. олдовый, плохой вариант ?>
<? /*
<div class="content-center">
    <ul class="c-prices__tab-list">
		<?
		$cur_page = $APPLICATION->GetCurPage();

		if ($cur_page == '/ceny/') {
			$cur_page = '/ceny/vnedrenie-1s/';
		}
		?>
		<? foreach ($arResult["ITEMS"] as $arItem): ?>
			<?
			$active = '';
			$link   = $arItem["DETAIL_PAGE_URL"];

			if ($arItem['DETAIL_PAGE_URL'] == $cur_page) {
				$active = 'active';
				$link   = '';
			}
			?>
            <li class="c-prices__tab <?= $active ?>">
                <a href="<?= $link ?>" <?//= $onclick ?> >
                    <span><?= $arItem['NAME'] ?></span>
                </a>
            </li>
		<? endforeach; ?>
        <? //@todo это что за покемон?! ?>
        <span></span>
        </ul>
    </div>
    */ ?>
	
	<? // другой вариант реализации навигации по табам, без ajax-запросов ?>
    <div class="content-center">
        <div class="c-prices__tabs">
			<?
			$cur_page = $APPLICATION->GetCurPage();
			
			if ($cur_page == '/price/') {
			$cur_page = '/price/programmy-1s/';
			}
	?>
    <? foreach ($arResult["ITEMS"] as $arItem): ?>
        <?
        $active = '';
        $link   = $arItem["DETAIL_PAGE_URL"];

        if ($arItem['DETAIL_PAGE_URL'] == $cur_page || $arItem['CODE'] == $arParams['SELECTED_LINK']) {
            $active = 'active';
            $link   = '';
        }
        if($link == '/price/programmy-1s/'){
        	$link = '/price/';
		}
        
        ?>
        <div class="c-prices__tab <?= $active ?>">
            <a href="<?= $link ?>" <?//= $onclick ?> >
                <span><?= $arItem['NAME'] ?></span>
            </a>
        </div>
    <? endforeach; ?>
    </div>
</div>

<!-- Конец блока: табы -->
