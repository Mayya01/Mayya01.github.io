<?
if(isset($_POST['ajax']) && $_POST['ajax'] == '1' && isset($_POST['action']) && $_POST['action'] == 'formsubmit') {
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

if(isset($_GET['event-id'])){
	$eventID = $_GET['event-id'];
	$arResult['EVENT'] = $eventID;
}
