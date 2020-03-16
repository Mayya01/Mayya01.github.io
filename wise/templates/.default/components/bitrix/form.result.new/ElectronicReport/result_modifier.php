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
$arResult['QUESTIONS'] = FormHelper::rewriteQuestionFields($arResult['QUESTIONS'],$arParams);

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

/*справочник взят с http://v8.1c.ru/edi/edi_app/1c-otchetnost/rates/index.htm*/
$arResult["REGIONS"] = array(
    0 =>
        array(
            'NAME' => 'Республика Адыгея',
            'TYPE' => 'p2',
        ),
    1 =>
        array(
            'NAME' => 'Республика Башкортостан',
            'TYPE' => 'p1',
        ),
    2 =>
        array(
            'NAME' => 'Республика Бурятия',
            'TYPE' => 'p1',
        ),
    3 =>
        array(
            'NAME' => 'Республика Алтай',
            'TYPE' => 'p1',
        ),
    4 =>
        array(
            'NAME' => 'Республика Дагестан',
            'TYPE' => 'p2',
        ),
    5 =>
        array(
            'NAME' => 'Республика Ингушетия',
            'TYPE' => 'p2',
        ),
    6 =>
        array(
            'NAME' => 'Кабардино-Балкарская Республика',
            'TYPE' => 'p1',
        ),
    7 =>
        array(
            'NAME' => 'Республика Калмыкия',
            'TYPE' => 'p1',
        ),
    8 =>
        array(
            'NAME' => 'Республика Карачаево-Черкесия',
            'TYPE' => 'p1',
        ),
    9 =>
        array(
            'NAME' => 'Республика Карелия',
            'TYPE' => 'p1',
        ),
    10 =>
        array(
            'NAME' => 'Республика Крым',
            'TYPE' => 'p4',
        ),
    11 =>
        array(
            'NAME' => 'Республика Коми',
            'TYPE' => 'p1',
        ),
    12 =>
        array(
            'NAME' => 'Республика Марий Эл',
            'TYPE' => 'p1',
        ),
    13 =>
        array(
            'NAME' => 'Республика Мордовия',
            'TYPE' => 'p1',
        ),
    14 =>
        array(
            'NAME' => 'Республика Саха (Якутия)',
            'TYPE' => 'p2',
        ),
    15 =>
        array(
            'NAME' => 'Республика Северная Осетия-Алания',
            'TYPE' => 'p1',
        ),
    16 =>
        array(
            'NAME' => 'Республика Татарстан',
            'TYPE' => 'p1',
        ),
    17 =>
        array(
            'NAME' => 'Республика Тыва',
            'TYPE' => 'p1',
        ),
    18 =>
        array(
            'NAME' => 'Удмуртская Республика',
            'TYPE' => 'p1',
        ),
    19 =>
        array(
            'NAME' => 'Республика Хакасия',
            'TYPE' => 'p1',
        ),
    20 =>
        array(
            'NAME' => 'Чеченская республика',
            'TYPE' => 'p1',
        ),
    21 =>
        array(
            'NAME' => 'Чувашская Республика',
            'TYPE' => 'p1',
        ),
    22 =>
        array(
            'NAME' => 'Алтайский край',
            'TYPE' => 'p1',
        ),
    23 =>
        array(
            'NAME' => 'Краснодарский край',
            'TYPE' => 'p2',
        ),
    24 =>
        array(
            'NAME' => 'Красноярский край',
            'TYPE' => 'p1',
        ),
    25 =>
        array(
            'NAME' => 'Приморский край',
            'TYPE' => 'p2',
        ),
    26 =>
        array(
            'NAME' => 'Ставропольский край',
            'TYPE' => 'p2',
        ),
    27 =>
        array(
            'NAME' => 'Хабаровский край',
            'TYPE' => 'p1',
        ),
    28 =>
        array(
            'NAME' => 'Амурская область',
            'TYPE' => 'p1',
        ),
    29 =>
        array(
            'NAME' => 'Архангельская область',
            'TYPE' => 'p1',
        ),
    30 =>
        array(
            'NAME' => 'Астраханская область',
            'TYPE' => 'p1',
        ),
    31 =>
        array(
            'NAME' => 'Белгородская область',
            'TYPE' => 'p1',
        ),
    32 =>
        array(
            'NAME' => 'Брянская область',
            'TYPE' => 'p2',
        ),
    33 =>
        array(
            'NAME' => 'Владимирская область',
            'TYPE' => 'p1',
        ),
    34 =>
        array(
            'NAME' => 'Волгоградская область',
            'TYPE' => 'p1',
        ),
    35 =>
        array(
            'NAME' => 'Вологодская область',
            'TYPE' => 'p1',
        ),
    36 =>
        array(
            'NAME' => 'Воронежская область',
            'TYPE' => 'p2',
        ),
    37 =>
        array(
            'NAME' => 'Ивановская область',
            'TYPE' => 'p1',
        ),
    38 =>
        array(
            'NAME' => 'Иркутская область',
            'TYPE' => 'p1',
        ),
    39 =>
        array(
            'NAME' => 'Калининградская область',
            'TYPE' => 'p1',
        ),
    40 =>
        array(
            'NAME' => 'Калужская область',
            'TYPE' => 'p2',
        ),
    41 =>
        array(
            'NAME' => 'Камчатский край',
            'TYPE' => 'p2',
        ),
    42 =>
        array(
            'NAME' => 'Кемеровская область',
            'TYPE' => 'p1',
        ),
    43 =>
        array(
            'NAME' => 'Кировская область',
            'TYPE' => 'p1',
        ),
    44 =>
        array(
            'NAME' => 'Костромская область',
            'TYPE' => 'p1',
        ),
    45 =>
        array(
            'NAME' => 'Курганская область',
            'TYPE' => 'p1',
        ),
    46 =>
        array(
            'NAME' => 'Курская область',
            'TYPE' => 'p2',
        ),
    47 =>
        array(
            'NAME' => 'Ленинградская область',
            'TYPE' => 'p2',
        ),
    48 =>
        array(
            'NAME' => 'Липецкая область',
            'TYPE' => 'p2',
        ),
    49 =>
        array(
            'NAME' => 'Магаданская область',
            'TYPE' => 'p1',
        ),
    50 =>
        array(
            'NAME' => 'Московская область',
            'TYPE' => 'p2',
        ),
    51 =>
        array(
            'NAME' => 'Мурманская область',
            'TYPE' => 'p1',
        ),
    52 =>
        array(
            'NAME' => 'Нижегородская область',
            'TYPE' => 'p2',
        ),
    53 =>
        array(
            'NAME' => 'Новгородская область',
            'TYPE' => 'p1',
        ),
    54 =>
        array(
            'NAME' => 'Новосибирская область',
            'TYPE' => 'p2',
        ),
    55 =>
        array(
            'NAME' => 'Омская область',
            'TYPE' => 'p1',
        ),
    56 =>
        array(
            'NAME' => 'Оренбургская область',
            'TYPE' => 'p2',
        ),
    57 =>
        array(
            'NAME' => 'Орловская область',
            'TYPE' => 'p1',
        ),
    58 =>
        array(
            'NAME' => 'Пензенская область',
            'TYPE' => 'p1',
        ),
    59 =>
        array(
            'NAME' => 'Пермский край',
            'TYPE' => 'p1',
        ),
    60 =>
        array(
            'NAME' => 'Псковская область',
            'TYPE' => 'p1',
        ),
    61 =>
        array(
            'NAME' => 'Ростовская область',
            'TYPE' => 'p2',
        ),
    62 =>
        array(
            'NAME' => 'Рязанская область',
            'TYPE' => 'p2',
        ),
    63 =>
        array(
            'NAME' => 'Самарская область',
            'TYPE' => 'p1',
        ),
    64 =>
        array(
            'NAME' => 'Саратовская область',
            'TYPE' => 'p1',
        ),
    65 =>
        array(
            'NAME' => 'Сахалинская область',
            'TYPE' => 'p1',
        ),
    66 =>
        array(
            'NAME' => 'Свердловская область',
            'TYPE' => 'p1',
        ),
    67 =>
        array(
            'NAME' => 'Смоленская область',
            'TYPE' => 'p1',
        ),
    68 =>
        array(
            'NAME' => 'Тамбовская область',
            'TYPE' => 'p1',
        ),
    69 =>
        array(
            'NAME' => 'Тверская область',
            'TYPE' => 'p1',
        ),
    70 =>
        array(
            'NAME' => 'Томская область',
            'TYPE' => 'p1',
        ),
    71 =>
        array(
            'NAME' => 'Тульская область',
            'TYPE' => 'p2',
        ),
    72 =>
        array(
            'NAME' => 'Тюменская область',
            'TYPE' => 'p1',
        ),
    73 =>
        array(
            'NAME' => 'Ульяновская область',
            'TYPE' => 'p2',
        ),
    74 =>
        array(
            'NAME' => 'Челябинская область',
            'TYPE' => 'p1',
        ),
    75 =>
        array(
            'NAME' => 'Читинская область',
            'TYPE' => 'p2',
        ),
    76 =>
        array(
            'NAME' => 'Ярославская область',
            'TYPE' => 'p1',
        ),
    77 =>
        array(
            'NAME' => 'г. Москва',
            'TYPE' => 'p3',
            'CURRENT' => true
        ),
    78 =>
        array(
            'NAME' => 'г. Санкт-Петербург',
            'TYPE' => 'p2',
        ),
    79 =>
        array(
            'NAME' => 'г. Севастополь',
            'TYPE' => 'p4',
        ),
    80 =>
        array(
            'NAME' => 'Еврейская автономная область',
            'TYPE' => 'p1',
        ),
    81 =>
        array(
            'NAME' => 'Забайкальский край',
            'TYPE' => 'p2',
        ),
    82 =>
        array(
            'NAME' => 'Коми-Пермяцкий АО',
            'TYPE' => 'p1',
        ),
    83 =>
        array(
            'NAME' => 'Корякский АО',
            'TYPE' => 'p1',
        ),
    84 =>
        array(
            'NAME' => 'Ненецкий автономный округ',
            'TYPE' => 'p1',
        ),
    85 =>
        array(
            'NAME' => 'Таймырский (Долгано-Ненецкий АО)',
            'TYPE' => 'p1',
        ),
    86 =>
        array(
            'NAME' => 'Усть-Ордынский Бурятский АО',
            'TYPE' => 'p1',
        ),
    87 =>
        array(
            'NAME' => 'Ханты-Мансийский автономный округ - Югра',
            'TYPE' => 'p1',
        ),
    88 =>
        array(
            'NAME' => 'Чукотский автономный округ',
            'TYPE' => 'p2',
        ),
    89 =>
        array(
            'NAME' => 'Эвенкийский АО',
            'TYPE' => 'p1',
        ),
    90 =>
        array(
            'NAME' => 'Ямало-Ненецкий автономный округ',
            'TYPE' => 'p1',
        ),
);


$arResult["ORG_COUNT"] = array(
    "1-2" => "от&nbsp;1 до&nbsp;2",
    "3-5" => "от&nbsp;3 до&nbsp;5",
    "6-10" => "от&nbsp;6 до&nbsp;10",
    "11-15" => "от&nbsp;11 до&nbsp;15",
    "16-25" => "от&nbsp;16 до&nbsp;25",
    "26-50" => "от&nbsp;26 до&nbsp;50",
    "51-100" => "от&nbsp;51 до&nbsp;100",
    "100-9999" => "свыше 100 организаций"
);


$arResult["TARGET"] = array(
    "Принятие решения о приобритении",
    "Обучающие цели (студенты)",
    "Ознакомительные цели (разобраться)"
);
