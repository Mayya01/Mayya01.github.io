<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
?>

	<form id="subForm" action="<?=$arResult["FORM_ACTION"]?>" method="post">
		<?echo bitrix_sessid_post();?>
		
			<label class="c-subscription-form__label">Ваш e-mail	
				<input class="c-subscription-form__field" id="subscription-email" name="EMAIL" value="<?=$arResult["SUBSCRIPTION"]["EMAIL"]!=""?$arResult["SUBSCRIPTION"]["EMAIL"]:$arResult["REQUEST"]["EMAIL"];?>" type="email" placeholder="example@yandex.ru" required />
			</label>

			<div class="c-subscription-form__subtitle">Интересные для вас разделы:</div>

			<div class="checkboxes clearme">
            	<div class="c-subscription-form__left-col checkboxes__row">
            		<?$rubricCnt = 0;?>
					<?foreach($arResult["RUBRICS"] as $itemID => $itemValue):?>

						<?if ($rubricCnt == round(count($arResult['RUBRICS'])/2) && count($arResult['RUBRICS']) > 1):?>
						</div>

	            		<div class="c-subscription-form__right-col checkboxes__row">
						<?endif;?>
					
						<label><input id="<?=$itemValue["CODE"]?>" type="checkbox" name="RUB_ID[]" value="<?=$itemValue["ID"]?>" data-label="<?=$itemValue["NAME"]?>" <?if (!$_POST['Save']):?>checked<?endif;?> /><span></span><?=$itemValue["NAME"]?></label>
						
						<?$rubricCnt++;?>
					<?endforeach;?>
				</div>
			</div>	

			<input type="hidden" name="FORMAT" value="html" />
			
		
			<input class="button" type="submit" value="Подписаться" name="Save" />
		
			<input type="hidden" name="PostAction" value="<?echo ($arResult["ID"]>0? "Update":"Add")?>" />
			<input type="hidden" name="ID" value="<?echo $arResult["SUBSCRIPTION"]["ID"];?>" />

	</form>


