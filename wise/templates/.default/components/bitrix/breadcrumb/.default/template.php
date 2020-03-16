<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

/**
 * @global CMain $APPLICATION
 */

global $APPLICATION;

//delayed function must return a string
if(empty($arResult) || count($arResult) <= 1)
	return "";

$strReturn = '';

/* $strReturn .= '<div class="content-row">'; */
	$strReturn .= '<div class="layout-center-wrapper">';
		$strReturn .= '<div class="content-col">';
			$strReturn .= '<ul class="breadcrumb">';

					if (!empty($arResult)):

						$itemSize = count($arResult);
						for($index = 0; $index < $itemSize; $index++)
						{
							$title = htmlspecialcharsex($arResult[$index]["TITLE"]);

							$nextRef = ($index < $itemSize-2 && $arResult[$index+1]["LINK"] <> ""? ' itemref="breadcrumb_'.($index+1).'"' : '');
							$child = ($index > 0? ' itemprop="child"' : '');
							$arrow = ($index > 0? '<span class="breadcrumb__divider">/</span>' : '');

							if($arResult[$index]["LINK"] <> "" && $index != $itemSize-1)
							{
								$strReturn .= '
									<li class="breadcrumb__item" id="breadcrumb_'.$index.'" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"'.$child.$nextRef.'>
										<a class="breadcrumb__link" href="'.$arResult[$index]["LINK"].'" title="'.$title.'" itemprop="url">
											<span class="breadcrumb__title breadcrumb__title--link" itemprop="title">'.$title.'</span>
										</a>
									</li>';
							}
						}

					endif;

			$strReturn .= '</ul>';
		$strReturn .= '</div>';
    $strReturn .= '</div>';
/* $strReturn .= '</div>'; */

return $strReturn;
