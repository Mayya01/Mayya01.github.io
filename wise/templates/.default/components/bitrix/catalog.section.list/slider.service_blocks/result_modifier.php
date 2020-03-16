<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

if ( ! function_exists('addPict2MainSliderBlocks')) {

	function addPict2MainSliderBlocks($i,$arr) {

		$arRet = $arr[$i];

		$arRet = array_merge($arRet + array(
			'TYPE' => 'PICT',
			'ID' => 'pict'.$i,
			'PICTURE' => CFile::MakeFileArray($arRet['SRC'])
		));

		return $arRet;

	}

}

$arBlocks = array();
$oElement = new CIBlockElement;

$addPictures = array(
	16 => array(
		'SRC' => SITE_TEMPLATE_PATH.'/images/service_slider/grass.jpg',
	  	'WIDE' => 0
	),
  	1 => array(
	  	'SRC' => SITE_TEMPLATE_PATH.'/images/service_slider/stones.jpg',
		'WIDE' => 0
	),
	4 => array(
		'SRC' => SITE_TEMPLATE_PATH.'/images/service_slider/pearl.jpg',
		'WIDE' => 0
  	),
	7 => array(
	  	'SRC' => SITE_TEMPLATE_PATH.'/images/service_slider/golf.jpg',
		'WIDE' => 0
	),
    10 => array(
	  	'SRC' => SITE_TEMPLATE_PATH.'/images/service_slider/ballons.jpg',
	  	'WIDE' => 1
	),
  	12 => array(
	  	'SRC' => '',
		'WIDE' => 0
	)
);

$i = 0;
if (0 < $arResult['SECTIONS_COUNT']) {

	foreach ($arResult['SECTIONS'] as &$section) {

		$i++;

		if (array_key_exists($i, $addPictures)) {
			$arBlocks[] = addPict2MainSliderBlocks($i, $addPictures);
			$i++;
		}

		$arBlock = array(
			'TYPE' => 'ITEM',
		  	'LINK' => $section['SECTION_PAGE_URL'],
		  	'ID' => $section['ID'],
		  	'NAME' => $section['UF_SERV_SHORT_NAME'],
		  	'BKG_COLOR' => $section['UF_SERV_B_COLOR']
		);

		if (!empty($section['UF_SERV_COMPANY'])) {

			$rsCompany = $oElement->GetList(
			  array('SORT' => 'ASC'),
			  array(
				'IBLOCK_ID' => EnvironmentHelper::getParam('allCompaniesIBlockId'),
				'ACTIVE' => 'Y',
				'ID' => $section['UF_SERV_COMPANY'],
			  ),
			  false,
			  false,
			  array(
				'ID',
				'NAME',
				'ACTIVE',
				'SORT',
				'PREVIEW_PICTURE'
			  )
			);

			if ($arCompany = $rsCompany->GetNext()) {
				$arBlock = array_merge($arBlock + array(
				  	'COMPANY_ID' => $arCompany['ID'],
				  	'COMPANY_NAME' => $arCompany['~NAME'],
				  	'LOGO' => CFile::ResizeImageGet($arCompany['PREVIEW_PICTURE'], array('width' => '478', 'height' => '242'), BX_RESIZE_IMAGE_PROPORTIONAL, true)
				));
			}

		}

		$arBlocks[] = $arBlock;

	}

	$arResult['BLOCKS'] = $arBlocks;

}
