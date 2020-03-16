<?php
foreach ($arResult["ITEMS"] as &$ITEM){
	$ITEM["IS_IT_HAS_TAGS"] = false;
	$arTags = array();
	
	if(is_array($ITEM['PROPERTIES']['ARTICLE_TAGS']['VALUE']) && !empty($ITEM['PROPERTIES']['ARTICLE_TAGS']['VALUE'])){
		$arTags = $ITEM['PROPERTIES']['ARTICLE_TAGS']['VALUE'];
		
	}else{
		if(!empty($ITEM["TAGS"])){
			$arTags = explode(', ', $ITEM['TAGS']);
		}
	}
	$ITEM["IS_IT_HAS_TAGS"] = true;
	$ITEM["TAGS"] = $arTags;
	
	
	
	
	
}
