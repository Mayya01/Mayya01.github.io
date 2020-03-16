<?
if(isset($_POST['ajax']) && $_POST['ajax'] == '1' && isset($_POST['action']) && $_POST['action'] == 'formsubmit' && intval($_POST['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID'])) {
	if(count($arResult['FORM_ERRORS']) > 0){
		$result = array(
			'status' => 'error',
			'errors' => $arResult['FORM_ERRORS']
		);

		// json response
		while (ob_get_level() > 1)
			ob_end_clean();
		header("Content-type: application/json");
		echo json_encode($result);
		die();
	}
}
if(isset($_GET['formresult']) && $_GET['formresult'] == 'addok' && !(isset($_GET['ajax']) && $_GET['ajax'] == '0' && intval($_GET['WEB_FORM_ID']) == intval($arParams['WEB_FORM_ID']))) {
	$result = array(
		'status' => 'success',
		'message' => $arResult['FORM_NOTE']
	);
	if(trim($arParams['THANKYOU_URL']) != ""){
		$result['redirect'] = $arParams['THANKYOU_URL'];
	}

	// json response
	while (ob_get_level() > 1)
		ob_end_clean();
	header("Content-type: application/json");
	echo json_encode($result);
	die();
}

/* Заполнение скрытых полей из параметров компонента. Плюс передаём через data-fieldname оригинальное название поля */

foreach ($arResult['QUESTIONS'] as $key => $field) {
	//cdump($field);
	if($field['STRUCTURE'][0]['FIELD_TYPE'] == 'hidden'){
		$arResult['QUESTIONS'][$key]['HTML_CODE'] = '<input type="hidden"  name="form_hidden_'.$field['STRUCTURE'][0]['ID'].'" value="'.$arParams[strtoupper($key)."_VALUE"].'" data-fieldname="'.$key.'" />';
	} else if($field['STRUCTURE'][0]['FIELD_TYPE'] == 'textarea'){
		$arResult['QUESTIONS'][$key]['HTML_CODE'] = str_replace('class="inputtextarea"', 'class="inputtextarea" data-fieldname="'.$key.'"', $arResult['QUESTIONS'][$key]['HTML_CODE']);
	} else {
		$arResult['QUESTIONS'][$key]['HTML_CODE'] = str_replace('/>','data-fieldname="'.$key.'" />', $arResult['QUESTIONS'][$key]['HTML_CODE']);
	}
}
// заменяем путь для передачи данных веб-формы
$arResult["FORM_HEADER"] = preg_replace("'action=\".*?\"'si", 'action="/ajax/forms/contacts-simple-form/"',
	$arResult["FORM_HEADER"]);

?>
