<?php

/*
 * @name custom result_modifier.php
 * @description Кастомный result_modifier.php для реализации режима LazyLoad для компонента
 * @autor Oleg Matasov
 */
//Если не сработало наименование CSS класса с параметров - определяем руками
//if (!isset($arParams["CSS_WRAPPER_MODIFIER"])||empty($arParams["CSS_WRAPPER_MODIFIER"])) $arParams["CSS_WRAPPER_MODIFIER"] = "js-lazy-load";
// Ввожу признак CUSTOM_AJAX_MODE в параметрах (можно указывать в параметрах вызова компонента, можно нет, так как без указания режим будет включен, по сути в параметрах его можно только выключить)
$arResult['CUSTOM_AJAX_MODE'] = $this->__component->arParams['CUSTOM_AJAX_MODE'] = isset($arParams['CUSTOM_AJAX_MODE']) ? $arParams['CUSTOM_AJAX_MODE'] : 'N';
// Определяю ключ доступа к компоненту по ajax (кодирую массив параметров и название шаблона)
$arResult['PARAMS_HASH'] = md5($arParams . $this->GetName());
// Сохраняю в инстанс компонента ключ
$this->__component->arResult['PARAMS_HASH'] = $arResult['PARAMS_HASH'];
// Сохраняю ключ в кеше инстанса
$this->__component->SetResultCacheKeys(array('PARAMS_HASH'));
// Определяю текущий вызов - это ajax?
$arResult['AJAX'] = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $arResult['PARAMS_HASH']) ? true : false;