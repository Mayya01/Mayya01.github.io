<?php

/**
 * Class ArrayHelper
 */
class ArrayHelper
{

	/**
	 * Сортирует вложенные массивы в многомерном массиве
	 * по определенному значению ключа вложенных массивов
	 *
	 * @param $array
	 * @param $value
	 * @param bool $asc
	 * @param bool $preserveKeys
	 * @return mixed
	 */
	public static function sortBySubValue(
	  $array,
	  $value,
	  $asc = true,
	  $preserveKeys = false
	) {
		if (is_object(reset($array))) {
			$preserveKeys ? uasort($array,
			  function ($a, $b) use ($value, $asc) {
				  return $a->{$value} == $b->{$value} ? 0 : ($a->{$value} - $b->{$value}) * ($asc ? 1 : -1);
			  }) : usort($array, function ($a, $b) use ($value, $asc) {
				return $a->{$value} == $b->{$value} ? 0 : ($a->{$value} - $b->{$value}) * ($asc ? 1 : -1);
			});
		} else {
			$preserveKeys ? uasort($array,
			  function ($a, $b) use ($value, $asc) {
				  return $a[$value] == $b[$value] ? 0 : ($a[$value] - $b[$value]) * ($asc ? 1 : -1);
			  }) : usort($array, function ($a, $b) use ($value, $asc) {
				return $a[$value] == $b[$value] ? 0 : ($a[$value] - $b[$value]) * ($asc ? 1 : -1);
			});
		}
		return $array;
	}

}
