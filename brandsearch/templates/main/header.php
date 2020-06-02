<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}
global $USER;
\Bitrix\Main\Loader::includeModule('iblock');
\Bitrix\Main\Localization\Loc::loadLanguageFile(__FILE__);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<? $APPLICATION->ShowHead() ?>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><? $APPLICATION->ShowTitle() ?></title>
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
	<? $APPLICATION->ShowPanel() ?>
