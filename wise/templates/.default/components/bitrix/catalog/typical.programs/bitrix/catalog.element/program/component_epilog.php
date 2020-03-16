<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $templateData */
/** @var @global CMain $APPLICATION */
use Bitrix\Main\Loader;

global $APPLICATION;
if (isset($templateData['TEMPLATE_THEME'])) {
	$APPLICATION->SetAdditionalCSS($templateData['TEMPLATE_THEME']);
}
if (isset($templateData['TEMPLATE_LIBRARY']) && !empty($templateData['TEMPLATE_LIBRARY'])) {
	$loadCurrency = false;
	if (!empty($templateData['CURRENCIES']))
		$loadCurrency = Loader::includeModule('currency');
	CJSCore::Init($templateData['TEMPLATE_LIBRARY']);
	if ($loadCurrency) {
		?>
		<script type="text/javascript">
			BX.Currency.setCurrencies(<? echo $templateData['CURRENCIES']; ?>);
		</script>
		<?
	}
}

$blogItems = array(
	'NEWS', 'VIDEO', 'ARTICLES', 'PRESS'
);

if (!empty($arResult['PARENT_SECTION']['UF_SHOW_BLOG'])) {
	foreach ($arResult['PARENT_SECTION']['UF_SHOW_BLOG'] as $key => $item) {
		if (in_array($item, $blogItems)) {
			$APPLICATION->SetPageProperty('SHOW_' . $item, $key);
		} else {
			$APPLICATION->SetPageProperty('SHOW_' . $item, '');
		}
	}
	$APPLICATION->SetPageProperty('tags', $arResult['PARENT_SECTION']['UF_TAGS']);
}

?>
