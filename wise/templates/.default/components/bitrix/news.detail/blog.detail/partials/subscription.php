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
?>
<? $APPLICATION->IncludeComponent("wiseadvice:subscription.input", "", Array(
	"SHOW_FULL_INSTANT" => "Y",
	"TITLE"             => "Подпишитесь на обновления",
	"ADD_CLASS"         => "_full-width js-subscribe-widget-blogpost",
	"RUB_CODE"          => array(
		"BLOG_NEWS",
		"BLOG_PRESS_RELEASE",
		"BLOG_ARTICLES",
		
		"BLOG_VIDEO"
	)
)); ?>