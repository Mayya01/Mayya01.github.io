<?php

if (isset($_POST['ajax']) &&
	$_POST['ajax'] == '1' &&
	isset($_POST['action']) &&
	$_POST['action'] == 'formsubmit' &&
	intval($_POST['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID'])) {
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

/* Заполнение скрытых полей из параметров компонента. Плюс передаём через data-fieldname оригинальное название поля */
$arResult['QUESTIONS'] = FormHelper::rewriteQuestionFields($arResult['QUESTIONS'], $arParams);

foreach ($arResult["QUESTIONS"] as $kkey => &$field) {
	$field["CODE"] = $kkey;
	if ($kkey == "FORM_TYPE") {
		$arResult["FORM_TYPE"] = $field;
	} else {
		// заменяем плэйсхолдыры на наши
		switch ($kkey) {
			case 'FORM_NAME':
				$field['HTML_CODE'] = str_replace('data-fieldname="FORM_NAME"',
					'data-fieldname="FORM_NAME" placeholder="Ваше имя"', $field['HTML_CODE']);
				break;
			// case 'FORM_PHONE' :
			// 	$field['HTML_CODE'] = str_replace('placeholder="+7 (___) ___-__-__"',
			// 		'placeholder="+7 (___) ___-__-__"', $field['HTML_CODE']);
			// 	break;
			case "FORM_AUTOCALL":
				$arResult["FORM_AUTOCALL"] = $field;
				break;
			case 'FORM_EMAIL':
				$field['HTML_CODE'] = str_replace('placeholder="example@example.com"',
					'placeholder="E-mail"', $field['HTML_CODE']);
				break;
		}
		$arResult["VISIBLE_QUESTIONS"][] = $field;
	}
}

// заменяем путь для передачи данных веб-формы
$arResult["FORM_HEADER"] = preg_replace("'action=\".*?\"'si", 'action="/ajax/forms/callback-free-consult/"',
	$arResult["FORM_HEADER"]);
