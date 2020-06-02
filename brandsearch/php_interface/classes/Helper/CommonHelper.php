<?php

/**
 * Class CommonHelper
 */
class CommonHelper
{

	/**
	 * Конвертирует размер из байтов в человекопонятный вид
	 *
	 * @param $bytes
	 * @return mixed
	 */
	public static function formatSizeUnits($bytes)
	{
		if ($bytes >= 1073741824) {
			$bytes = number_format($bytes / 1073741824, 2) . ' Гб';
		} elseif ($bytes >= 1048576) {
			$bytes = number_format($bytes / 1048576, 2) . ' Мб';
		} elseif ($bytes >= 1024) {
			$bytes = number_format($bytes / 1024, 2) . ' Кб';
		} elseif ($bytes > 1) {
			$bytes = $bytes . ' байт';
		} elseif ($bytes == 1) {
			$bytes = $bytes . ' байт';
		} else {
			$bytes = '0 bytes';
		}

		return $bytes;
	}

	public static function getYouTubeVideoId($str)
	{
		if (strstr($str, "http")) { //если передали код для встраивания
			preg_match('#(\.be/|/embed/|/v/|/watch\?v=)([A-Za-z0-9_-]{5,11})#', $str, $matches);
			if (isset($matches[2]) && $matches[2] != '') {
				return $matches[2];
			} else {
				return false;
			}
		} else {
			return $str;
		}
	}

	public static function getNumEnding($iNumber, $aEndings)
	{
		$iNumber = $iNumber % 100;
		if ($iNumber >= 11 && $iNumber <= 19) {
			$sEnding = $aEndings[2];
		} else {
			$i = $iNumber % 10;
			switch ($i) {
				case (1):
					$sEnding = $aEndings[0];
					break;
				case (2):
				case (3):
				case (4):
					$sEnding = $aEndings[1];
					break;
				default:
					$sEnding = $aEndings[2];
			}
		}

		return $sEnding;
	}

	public static function nfGetCurPageParam($strParam = '', $arParamKill = array(), $get_index_page = NULL, $uri = FALSE)
	{

		if (NULL === $get_index_page) {

			if (defined('BX_DISABLE_INDEX_PAGE'))
				$get_index_page = !BX_DISABLE_INDEX_PAGE;
			else
				$get_index_page = TRUE;

		}

		$sUrlPath = GetPagePath($uri, $get_index_page);
		
		// отсекаем название ЧПУ-название статьи из адресной строки
		// $iPos = strrpos($sUrlPath, '/', -2);
		// $sUrlPath = substr($sUrlPath, 0, $iPos) . '/';

		$strNavQueryString = self::nfDeleteParam($arParamKill, $uri);

		if ($strNavQueryString != '' && $strParam != '')
			$strNavQueryString = '&' . $strNavQueryString;

		if ($strNavQueryString == '' && $strParam == '')
			return $sUrlPath;
		else
			return $sUrlPath . '?' . $strParam . $strNavQueryString;

	}

	public static function nfDeleteParam($arParam, $uri = FALSE)
	{

		$get = array();
		if ($uri && ($qPos = strpos($uri, '?')) !== FALSE) {

			$queryString = substr($uri, $qPos + 1);
			parse_str($queryString, $get);
			unset($queryString);

		}

		if (sizeof($get) < 1)
			$get = $_GET;

		if (sizeof($get) < 1)
			return '';

		if (is_array($arParam) && sizeof($arParam) > 0) {

			foreach ($arParam as $param) {

				$search = &$get;
				$param = (array)$param;
				$lastIndex = sizeof($param) - 1;

				foreach ($param as $c => $key) {

					if (array_key_exists($key, $search)) {

						if ($c == $lastIndex)
							unset($search[$key]);
						else
							$search = &$search[$key];

					}

				}

			}

		}

		return str_replace(
			array('%5B', '%5D'),
			array('[', ']'),
			http_build_query($get)
		);

	}


}
