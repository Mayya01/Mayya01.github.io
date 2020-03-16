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
$openPopup = ($arParams["OPEN_POPUP"])?:"callback";
$thead  = '';
$abon   = '';
$hour   = '';
$volume = '';
$ver	= '';
$link   = '';

$arParams['ORDER_BUTTON_TEXT'] = strlen($arParams['ORDER_BUTTON_TEXT']) ? $arParams['ORDER_BUTTON_TEXT'] : 'Подключиться';

$mobile = '';

foreach ( $arResult["ITEMS"] as $item )
{
	$thead  .= '<th>' . $item["PROPERTIES"]["price"]['props']['UF_NAME'] . '</th>';
	$abon   .= '<td>' . $item["PROPERTIES"]["price"]['props']["UF_ABON"] . '</td>';
	$hour   .= '<td>' . $item["PROPERTIES"]["price"]['props']["UF_HOUR"] . '</td>';
	$volume .= '<td>' . $item["PROPERTIES"]["price"]['props']["UF_VOLUME"] . '</td>';
	$ver	.= '<td> ПРОФ </td>';
	$link   .= '<td><a data-val="'.$item["NAME"].' - '.$item["PROPERTIES"]["price"]['props']["UF_HOUR"].'/час" href="#'.$openPopup.'" class="button pupop js-set-classic-ratiff">' . $arParams['ORDER_BUTTON_TEXT'] . '</a></td>';

	$mobile .= '<div class="h3">' . $item["PROPERTIES"]["price"]['props']['UF_NAME'] . '</div>';
	$mobile .= '<ul>';
	$mobile .= '<li>Абонентская плата - ' . $item["PROPERTIES"]["price"]['props']["UF_ABON"] . '</li>';
	$mobile .= '<li>Стоимость 1 часа работы - ' . $item["PROPERTIES"]["price"]['props']["UF_HOUR"] . '</li>';
	$mobile .= '<li>Объем включенных услуг - ' . $item["PROPERTIES"]["price"]['props']["UF_VOLUME"] . '</li>';
	$mobile .= '</ul>';
	// был заложен переход на страницу тарифа, но в задаче https://rm.9958258.ru/issues/123856 менеджер сказал сделать как на десктопе
	// $mobile .= '<a href="'.$item["PROPERTIES"]["price"]['props']["UF_LINK"].'" class="button more-link">Узнать больше</a>';
	$mobile .= '<a data-val="'.$item["NAME"].' - '.$item["PROPERTIES"]["price"]['props']["UF_HOUR"].'/час" href="#'.$openPopup.'" class="button pupop js-set-classic-ratiff">Подключиться</a>';
}
?>

	<div class="c-prices__classic-tarifs" <?if($arParams["NO_BOTTOM_PADDING"]):?>style="padding-bottom: 0"<?endif?>>
		<?if(!$arParams["NO_CONTENT_WRAPPER"]):?><?='<div class="content-center">'?><?endif?>
			<?if(!$arParams["NO_TITLE"]):?><div class="classic-tarifs__title h2">Классические тарифные планы</div><?endif?>
			<div class="table-block _services-main _services _mobile-change">
				<table>
					<thead>
						<tr>
							<th></th>
							<?=$thead?>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Стоимость<br>1 часа работы</td>
							<?=$hour?>
						</tr>
						<tr>
							<td>Абонентская плата<br>в месяц</td>
							<?=$abon?>
						</tr>
						<tr>
							<td>Объем<br>включенных услуг<br>в месяц</td>
							<?=$volume?>
						</tr>

					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<?=$link?>
						</tr>
					</tfoot>
				</table>
				<div class="mobile-wrapper">
					<div class="content-area">
						<?=$mobile?>
					</div>
				</div>
			</div>
		<?if(!$arParams["NO_CONTENT_WRAPPER"]):?><?='</div>'?><?endif?>
	</div>


