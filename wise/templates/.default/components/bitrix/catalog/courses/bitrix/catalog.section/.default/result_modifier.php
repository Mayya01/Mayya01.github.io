<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
$arVariants = [];
foreach ($arResult['ITEMS'] as $arItem) {
    if (!isset($arVariants[$arItem['PROPERTIES']['TYPE']['VALUE_ENUM_ID']]) || $arVariants[$arItem['PROPERTIES']['TYPE']['VALUE_ENUM_ID']]['PRICE'] > $arItem['PROPERTIES']['PRICE']['VALUE']) {
        $arVariants[$arItem['PROPERTIES']['TYPE']['VALUE_ENUM_ID']]['PRICE'] = $arItem['PROPERTIES']['PRICE']['VALUE'];
        $arVariants[$arItem['PROPERTIES']['TYPE']['VALUE_ENUM_ID']]['NAME'] = $arItem['PROPERTIES']['TYPE']['VALUE'];
        $arVariants[$arItem['PROPERTIES']['TYPE']['VALUE_ENUM_ID']]['ICON'] = $arItem['PROPERTIES']['TYPE']['VALUE_XML_ID'];
    }
}
$arResult['LEARN_VARIANTS'] = $arVariants;
unset($arVariants);

$arAuthorFilter = [
    'IBLOCK_CODE' => EnvironmentHelper::getParam('coursesAuthorIBlockCode'),
    'ID'          => $arResult['UF_AUTHOR']
];
$rsAuthor = CIBlockElement::GetList([], $arAuthorFilter);
$arAuthors = [];
while ($arAuthor = $rsAuthor->GetNext()) {
    $author['NAME'] = $arAuthor['NAME'];
    $author['ABOUT'] = $arAuthor['DETAIL_TEXT'];
    $author['PICTURE'] = CFile::GetPath($arAuthor['DETAIL_PICTURE']);

    $arAuthors[] = $author;
}

$arResult['UF_AUTHOR'] = $arAuthors;

$arReviewFilter = [
    'IBLOCK_CODE' => EnvironmentHelper::getParam('coursesReviewIBlockCode'),
    'ID'          => $arResult['UF_REVIEW']
];
$rsReview = CIBlockElement::GetList([], $arReviewFilter);
$arReviews = [];
while ($arReview = $rsReview->GetNext()) {
    $review['NAME'] = $arReview['NAME'];
    $review['POST'] = $arReview['PREVIEW_TEXT'];
    $review['TEXT'] = $arReview['DETAIL_TEXT'];

    $arReviews[] = $review;
}

$arResult['UF_REVIEW'] = $arReviews;

if (strlen($arResult['UF_DISCOUNT_DATE']) <= 0) {
    $arResult['UF_DISCOUNT_DATE'] = $arParams['DISCOUNT_DATE']['DATE'];
    $arResult['UF_DISCOUNT_VALUE'] = $arParams['DISCOUNT_DATE']['VALUE'];
}