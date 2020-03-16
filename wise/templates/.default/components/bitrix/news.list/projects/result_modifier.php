<?php

$arResult['CUSTOM_AJAX_MODE'] = $this->__component->arParams['CUSTOM_AJAX_MODE'] = isset($arParams['CUSTOM_AJAX_MODE']) ? $arParams['CUSTOM_AJAX_MODE'] : 'Y';
$arResult['PARAMS_HASH'] = md5($arParams . $this->GetName());
$this->__component->arResult['PARAMS_HASH'] = $arResult['PARAMS_HASH'];
$this->__component->SetResultCacheKeys(array('PARAMS_HASH'));
$arResult['AJAX'] = (isset($_REQUEST['AJAX']) && isset($_REQUEST['KEY']) && $_REQUEST['KEY'] == $arResult['PARAMS_HASH']) ? true : false;
