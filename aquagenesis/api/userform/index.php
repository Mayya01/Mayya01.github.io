<?php
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
require_once __DIR__ . '/../../php/bootstrap.php';

$app = new \Meiji\LandingApp\Application();

/** @var \Laminas\Diactoros\Response $response */
$response = $app->getResponse();

/** @var \Laminas\Diactoros\ServerRequest $request */
$request       = $app->getRequest();
$requestParams = $request->getQueryParams();

if ($requestParams['event']['form'] === 'callback' && $requestParams['event']['action'] === 'send') {
	
	$formFields     = [];
	$analyticFields = [];
	
	foreach ($requestParams['callbackform'] as $fieldName => $fieldVal) {
		$formFields[ $fieldName ] = urldecode($fieldVal);
	}
	
	foreach ($requestParams['analytics'] as $fieldName => $fieldVal) {
		$analyticFields[ $fieldName ] = urldecode($fieldVal);
	}
	
	$mail = (new \Meiji\LandingApp\Mail\Callback())->initEnv();
	
	$mail->subject('Заявка на обратный звонок — ' . urldecode($formFields['phone']))
		->textHeading($formFields)
		->textAnalytics($analyticFields)
		->send();
	
	$app->respond('Created', 201);
} else {
	$app->respond('Bad Request', 400);
}
