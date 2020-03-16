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

<? $tabs    = ''; ?>
<? $content = ''; ?>
<? $index   = 0; ?>

<? foreach($arResult["ITEMS"] as $arItem): ?>

	<? $active = ''; ?>
	<? $hide   = ''; ?>
	<? if ( $index == 0 ) $active = '_active'; ?>
		<?
	$titles = '';
	foreach ( $arItem['PROPERTIES']['titles']["VALUE"] as $t )
	{
		$titles .= '<th>'.$t.'</th>';
	}
	?>

	<?
	$rows   = '';
	$rows_m = '';
	foreach ( $arItem['PROPERTIES']['price']['props'] as $index2 => $p )
	{
		$rows .='<tr>';
		$rows .= '<td>'.$p["UF_NAME1"].'</td>';
		    if($p["UF_VALUE1"]){ $rows .= '<td>'.$p["UF_VALUE1"].'</td>'; }
			if($p["UF_VALUE2"]){ $rows .= '<td>'.$p["UF_VALUE2"].'</td>'; }
			if($p["UF_VALUE3"]){ $rows .= '<td>'.$p["UF_VALUE3"].'</td>';}
		    if($p["UF_VALUE4"]){ $rows .= '<td>'.$p["UF_VALUE4"].'</td>'; }
		$rows .='</tr>';

		$rows_m .= '<div class="h3">Вид договора:'.$p["UF_NAME1"].'</div>';
		$rows_m .= '<ul>';
		if($p["UF_VALUE1"] && $p["UF_VALUE1"] != "—") { $rows_m .= '<li>'.$p["UF_VALUE1"].' '.$arItem['PROPERTIES']['titles']["VALUE"][0].'</li>';}
		if($p["UF_VALUE2"] && $p["UF_VALUE2"] != "—") { $rows_m .= '<li>'.$p["UF_VALUE2"].' '.$arItem['PROPERTIES']['titles']["VALUE"][1].'</li>';}
		if($p["UF_VALUE3"] && $p["UF_VALUE3"] != "—") { $rows_m .= '<li>'.$p["UF_VALUE3"].' '.$arItem['PROPERTIES']['titles']["VALUE"][2].'</li>';}
		if($p["UF_VALUE4"] && $p["UF_VALUE4"] != "—") { $rows_m .= '<li>'.$p["UF_VALUE4"].' '.$arItem['PROPERTIES']['titles']["VALUE"][3].'</li>';}
		$rows_m .= '</ul>';
	}
	?>

	<?
	$content .='<div class="radio-block__tab '.$hide.'">
		<div class="table-block _mobile-change">
			<table>
				<thead>
					<tr>
						<th>Вид договора</th>
						'.$titles.'
					</tr>
				</thead>
				<tbody>
					'.$rows.'
				</tbody>
			</table>
			<div class="mobile-wrapper">
				<div class="content-area">
					'.$rows_m.'
				</div>
			</div>
		</div>
	</div>';
	?>

	<? $index++; ?>
<? endforeach; ?>

<!-- Начало блока: Сопровождение таблица -->
<div class="c-product-card__diff-container _opened">
	<div class="recommend-detail">
		<div data-adaptive-change="true" class="radio-block radio-tab _white-bg">
			<ul class="radio-block__ui">
				
				<li class="radio-block__ui-item _active"><a href="#" class="radio-block__ui-link _continuous"><span class="radio-block__ui-text">при непрерывном продлении</span></a></li>
				<li class="radio-block__ui-item"><a href="#" class="radio-block__ui-link _renewal"><span class="radio-block__ui-text">при возобновлении договора</span></a></li>
			</ul>
			<div class="radio-block__tabs">
				
				<?=$content?>
				
			</div>
		</div>
	</div>
</div>
<!-- Конец блока: Сопровождение таблица -->
