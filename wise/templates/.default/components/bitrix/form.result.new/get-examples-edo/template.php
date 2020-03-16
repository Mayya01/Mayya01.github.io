<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>


	<div class="preoder-card__form-cols <?= $arParams['FORM_CONTAINER_CLASS'] ?>" id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
		
		
		<? if($arResult["FORM_NOTE"] != ""): ?>
			<div class="form-note"><?=$arResult["FORM_NOTE"]?></div>
		<? endif; ?>
		
		<?if ($arResult["isFormNote"] != "Y") : ?>
		<?=$arResult["FORM_HEADER"]?>
		<input type="hidden" name="ajax" value="1" />
		<input type="hidden" name="action" value="formsubmit" />
		<input type="hidden" name="confirm" value="1" />
		<input type="hidden" name="confirm" value="1" />
		<input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
		<input type="hidden" class="js-form-page" name="form_hidden_<?=$arResult['QUESTIONS']['FORM_PAGE']['STRUCTURE']['0']['ID']?>" value="/uslugi-1s/avtomatizaciya-na-baze-1s/reshaemye-funkcionalnye-zadachi/1s-edo/">
		<div class="js-callback-source">
			<input type="hidden" data-fieldtype="tocomment" data-fieldlabel="Откуда была вызвана форма" name="form_hidden_<?=$arResult['QUESTIONS']['FORM_SOURCE']['STRUCTURE']['0']['ID']?>" value="Верний блок" data-fieldname="FORM_SOURCE">
		</div>
		<?if ($arResult["isFormErrors"] == "Y"):?>
			<?=$arResult["FORM_ERRORS_TEXT"];?>
		<?endif;?>
		
		<div class="preoder-card__form-col js-form-field">
			<input type="email" class="preoder-card__form-input" name="form_text_<?=$arResult['QUESTIONS']['EMAIL']['STRUCTURE']['0']['ID']?>" size="100" data-name="email" data-fieldtype="email" data-fieldlabel="Ваш email" data-mask="email" placeholder="Ваш email" data-necessary="data-necessary" data-fieldname="FORM_EMAIL">
		</div>
		<div class="preoder-card__form-col">
			<input type="submit" name="web_form_submit" class="button _red _sm" value="Получить">
		</div>
			
			<?=$arResult["FORM_FOOTER"]?>
		<? endif; //isFormNote ?>
	</div>



	<script>
		
		$(function(){
            setTimeout(function(){
				console.log('wtf');
                $('#get-examples-edo form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            },100);
		});
	</script>



