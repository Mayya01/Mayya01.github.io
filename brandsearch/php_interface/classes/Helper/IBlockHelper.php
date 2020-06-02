<?php

if (!CModule::IncludeModule('iblock')) {
	ShowError(GetMessage('IBLOCK_MODULE_NOT_INSTALLED'));
	return;
}

/**
 * Class IBlockHelper
 */
class IBlockHelper
{

	/**
	 * Полностью очищает инфоблок
	 * 
	 * @param $iblockID
	 */
	public static function clear($iblockID) {

		$arSelect = Array('ID');
		$arFilter = Array('IBLOCK_ID'=>IntVal($iblockID));
		$oElement = new CIBlockElement;
		$oSection = new CIBlockSection;

		$dbElements = $oElement->GetList(Array(), $arFilter, false, false, $arSelect);

		while($arEl = $dbElements->Fetch())
		{
			$oElement->Delete($arEl['ID']);
		}

		$dbSections = $oSection->GetList(Array(), $arFilter, false, $arSelect, false);

		while($arSect = $dbSections->Fetch())
		{
			$oSection->Delete($arSect['ID'],false);
		}

		return;

	}
	
	/*
	 * Поиск элементов ИБ по ID
	 * @param integer $iElementId
	 * @param array $selectedFields список возвращаемых полей
	 * @param boolean $selectProperties
	 *
	 */
	public static function find($iElementId, array $selectedFields = array('*', 'PROPERTY_*'), $selectProperties = true)
	{
		
		$arFilter = array(
			'ID' => $iElementId,
			'ACTIVE' => 'Y',
		);
		
		$arElement = CIBlockElement::GetList(array(), $arFilter, false, array(), $selectedFields)->Fetch();
		
		return $arElement;
	}
	
	/**
	 * Выбирает элементы по фильтру
	 *
	 * @param array $filter
	 * @param array $orderBy
	 * @param array $selectedFields Список выбираемых полей (в формате BX)
	 * @param bool $selectProperties Нужно ли выбирать свойсвта
	 * @param mixed $navStartParams Ограничения выборки
	 *
	 * @return array
	 */
	public static function findBy($arFilter, $arOrder, $arSelectFields, $selectProperties, $arNavStartParams)
	{
		
		$rsElements = CIBlockElement::GetList($arOrder, $arFilter, false, $arNavStartParams, $arSelectFields);
		
		$arElements = array();
		
		while ($element = $rsElements->GetNextElement()) {
			$arFields = $element->GetFields();
			if ($selectProperties) {
				$arFields['PROPERTIES'] = $element->GetProperties();;
			}
			$arElements[] = $arFields;
		}
		return $arElements;
	}
	
	/**
	 * Ищет один элемент по фильтру
	 *
	 * @param array $filter
	 * @param array $selectedFields
	 * @param bool $selectProperties
	 *
	 * @return array|null
	 */
	public static function findOneBy(
		array $filter = array(),
		array $selectedFields = array('*', 'PROPERTY_*'),
		$selectProperties = true
	) {
		$items = self::findBy($filter, array(), $selectedFields, $selectProperties, array('nTopCount' => 1));
		
		return isset($items[0]) ? $items[0] : null;
	}
	
	
}
