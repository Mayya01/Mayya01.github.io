<?

/**
 * @var $arResult array
 * @var $arParams array
 *
 */

//подключаем модуль highloadblock
CModule::IncludeModule('iblock');



if (isset($_POST['ajax']) && $_POST['ajax'] == '1' && isset($_POST['action']) && $_POST['action'] == 'formsubmit' && intval($_POST['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID'])) {
	if (count($arResult['FORM_ERRORS']) > 0) {
		$result = array(
			'status' => 'error',
			'errors' => $arResult['FORM_ERRORS']
		);

		// json response
		while (ob_get_level() > 1) {
			ob_end_clean();
		}
		header("Content-type: application/json");
		echo json_encode($result);
		die();
	}
}
if (isset($_GET['formresult']) && $_GET['formresult'] == 'addok' && !(isset($_GET['ajax']) && $_GET['ajax'] == '0' && intval($_GET['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID']))) {
	$result = array(
		'status' => 'success',
		'message' => $arResult['FORM_NOTE']
	);
	if (trim($arParams['THANKYOU_URL']) != "") {
		$result['redirect'] = $arParams['THANKYOU_URL'];
	}

	// json response
	while (ob_get_level() > 1) {
		ob_end_clean();
	}
	header("Content-type: application/json");
	echo json_encode($result);
	die();
}

/* Заполнение скрытых полей из параметров компонента. Плюс передаём через data-fieldname оригинальное название поля */
$arResult['QUESTIONS'] = FormHelper::rewriteQuestionFields($arResult['QUESTIONS'],$arParams);

foreach ($arResult["QUESTIONS"] as $kkey => $field) {
	$field["CODE"] = $kkey;
	if ($kkey == "FORM_TYPE") {
		$arResult["FORM_TYPE"] = $field;
	} elseif ($kkey == "TARIFF") {
		$arResult["TARIFF"] = $field;
	} elseif ($kkey == "FORM_AUTOCALL") {
		$arResult["FORM_AUTOCALL"] = $field;
	} else {
		$arResult["VISIBLE_QUESTIONS"][] = $field;
	}
}
