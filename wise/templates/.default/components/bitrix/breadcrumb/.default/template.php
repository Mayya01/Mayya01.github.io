<?
/**
 * @var $APPLICATION CMain
 */
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

global $APPLICATION;

//delayed function must return a string
if(empty($arResult))
	return "";

if($arResult[count($arResult)-1]["LINK"]!="" && $arResult[count($arResult)-1]["LINK"]!=$GLOBALS["APPLICATION"]->GetCurPage(false))
	$arResult[] = Array("TITLE"=>$GLOBALS["APPLICATION"]->GetTitle());

	/**
	 *  Сокращаем строку хлебных крошек путем вырезания промежуточного раздела
	 *  @task 144270 убираем "Решаемые функциональные задачи"
	 */
	$arSectionToChangeLink = ['/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/upravlenie-zarplatoi-personalom-kadrovyi-uchet/' => 'Автоматизация управления зарплатой, персоналом и кадрового учета'];
	$arSectionToCut = ["Решаемые функциональные задачи"];
	foreach ($arResult as $key => $arItem) {
		if(isset($arResult[$key+1]) && in_array($arItem['TITLE'], $arSectionToCut)) {
			unset($arResult[$key]);
		}
		if ($link = array_search($arItem['TITLE'], $arSectionToChangeLink)) {
		    $arResult[$key]['LINK'] = $link;
        }
	}
	//Убираем все ненужные пункты цепочки навигации для конструктора страниц
	foreach ($arResult as $key => $arItem) {
			$keys[] = $key;
		if($arItem['TITLE'] == 'DELETE_AFTER_THIS') {
			foreach ($keys as $key2) {
				unset($arResult[ $key2 ]);
				//$deleteLastItem = true;
			}
		}
	}
	if($deleteLastItem){
		array_pop($arResult);
	}
	unset($keys);


	$arResult = array_values($arResult);

    $strReturn .= '<div class="page-header__breadcrumbs ' . $APPLICATION->GetProperty('BREADCRUMB_COLOR_CLASS') . '">
                        <div class="content-center">
                            <div class="breadcrumbs-block">
                                <ul class="breadcrumbs-block__list">';

			$itemSize = count($arResult) - 1;

            for($index = 0; $index <= $itemSize; $index++)
            {
                if($arResult[$index]["TITLE"] != $arResult[$index+1]["TITLE"]) {

					if ($index != 0) $strReturn .= '';

					$title = htmlspecialcharsex($arResult[ $index ]["TITLE"]);

					if ($index === $itemSize) {
						$strReturn .= '<li class="breadcrumbs-block__item" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">' .
									  $title .
									  '</li>';
					} else {
						$strReturn .= '<li class="breadcrumbs-block__item" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
							<a href="' . $arResult[ $index ]["LINK"] . '" title="' . $title . '"class="breadcrumbs-block__link" itemprop="url">
							<span itemprop="title">' . $title . '</span></a></li>';
					}
				}
            }

$strReturn .= '</ul>
        </div>
    </div>
</div>';
return $strReturn;
