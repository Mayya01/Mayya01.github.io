<?
CModule::IncludeModule("iblock");

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
$arResult['QUESTIONS'] = FormHelper::rewriteQuestionFields($arResult['QUESTIONS'],$arParams,array(
    "EMAIL" => "FORM_TESTDRIVE_EMAIL",
    "PHONE" => "FORM_TESTDRIVE_PHONE",
    "NAME" => "FORM_TESTDRIVE_NAME"
));


foreach ($arResult['QUESTIONS'] as $key => $field) {
    $arResult['QUESTIONS'][$key]['HTML_CODE'] = str_replace('&nbsp;<br />', "",
        $arResult['QUESTIONS'][$key]['HTML_CODE']);
    if ($field['STRUCTURE'][0]['FIELD_TYPE'] == 'hidden') {
        $arResult['QUESTIONS'][$key]['HTML_CODE'] = '<input type="hidden"  name="form_hidden_' . $field['STRUCTURE'][0]['ID'] . '" value="' . $arParams[strtoupper($key) . "_VALUE"] . '" data-fieldname="' . $key . '" />';
    } else {
        if ($field['STRUCTURE'][0]['FIELD_TYPE'] == 'textarea') {
            $arResult['QUESTIONS'][$key]['HTML_CODE'] = str_replace('class="inputtextarea"',
                'class="inputtextarea" data-fieldname="' . $key . '"', $arResult['QUESTIONS'][$key]['HTML_CODE']);
        } elseif ($field['STRUCTURE'][0]['FIELD_TYPE'] == 'checkbox'){
            $paste = "type=\"checkbox\" class='icheck' ";
            $arResult['QUESTIONS'][$key]['HTML_CODE'] = str_replace("type=\"checkbox\"", $paste,
                $arResult['QUESTIONS'][$key]['HTML_CODE']);
        }
        else {
            $paste = " placeholder='{$field['CAPTION']}' ";
            if ($key == "FORM_TESTDRIVE_NAME") {
                $paste .= 'data-name="username" ';
            }
            if ($key == "FORM_TESTDRIVE_PHONE") {
                $paste .= 'data-name="phone"  data-mask="phone" ';
            }
            if ($key == "FORM_TESTDRIVE_EMAIL") {
                $paste .= 'data-name="email"  data-mask="email" ';
            }

            if ($field["REQUIRED"] == "Y") {
                $paste .= ' data-necessary="data-necessary" ';
            }

            $paste .= 'data-fieldname="' . $key . '" />';
            $arResult['QUESTIONS'][$key]['HTML_CODE'] = str_replace('/>', $paste,
                $arResult['QUESTIONS'][$key]['HTML_CODE']);
        }
    }


}
foreach ($arResult["QUESTIONS"] as $kkey => $field) {
    $field["CODE"] = $kkey;
    if ($kkey == "FORM_TYPE") {
        $arResult["FORM_TYPE"] = $field;
    } elseif ($kkey == "VARIANT_POSTAVKI") {
        $arResult["VARIANT_POSTAVKI"] = $field;
    } elseif ($kkey == "TARIFF") {
        $arResult["TARIFF"] = $field;
    } elseif ($kkey == "PRODUCT_NAME") {
        $arResult["PRODUCT_NAME"] = $field;
    } else {
        $arResult["VISIBLE_QUESTIONS"][] = $field;
    }
}

/*$arFilter = array('IBLOCK_ID' => EnvironmentHelper::getParam("programmy1sIBlockId"));
$rsSections = CIBlockSection::GetList(array('SORT' => 'ASC'), $arFilter);
$arResult["PROPGRAMM_SECTIONS"] = array();
while ($arSection = $rsSections->Fetch())
{
    $arResult["PROPGRAMM_SECTIONS"][] = $arSection["NAME"];
}*/
$arResult["PROPGRAMM_SECTIONS"] = FormHelper::getProgramsListForFormSelect();
