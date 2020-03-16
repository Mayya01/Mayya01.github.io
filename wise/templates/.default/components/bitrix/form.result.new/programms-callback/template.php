<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>



<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?>" id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

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
        <input type="hidden" data-fieldtype="formName" value="Callback"/>
		<input type="hidden" data-fieldtype="tocomment" data-fieldlabel="Автозвонок" name="form_hidden_248" value="true" data-fieldname="FORM_AUTOCALL">
		<input type="hidden" class="js-form-page" name="form_hidden_142" value="/programmy-1s/">
		<div class="js-callback-source">
			<input type="hidden" data-fieldtype="tocomment" data-fieldlabel="Откуда была вызвана форма" name="form_hidden_67" value="Верний блок" data-fieldname="FORM_SOURCE">
		</div>
		<?if ($arResult["isFormErrors"] == "Y"):?>
			<?=$arResult["FORM_ERRORS_TEXT"];?>
		<?endif;?>
	<div class="call-us__form-row">
		<span class="js-form-field">
			<input type="text" name="form_text_64" size="100" data-name="username" data-fieldtype="username" data-fieldlabel="Ваше имя" data-necessary="data-necessary" data-fieldname="FORM_NAME" class="call-us__form-input" placeholder="Ваше имя" >
		</span>
		
		<span class="js-form-field">
			<input  type="text" class="call-us__form-input" name="form_text_65" size="100" data-name="phone" data-fieldtype="phone" data-fieldlabel="Телефон" data-mask="phone" placeholder="Телефон" data-necessary="data-necessary" data-fieldname="FORM_PHONE">
		</span>
		
		<input type="submit" name="web_form_submit" class="button" value="Заказать звонок">
	</div>
		<div class="call-us__form-license-info">
			<input type="checkbox" id="call-us" checked="" data-necessary="data-necessary">
			<label for="call-us">Соглашаюсь на
				<a href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf" class="default-link" target="_blank">обработку персональных данных</a>
			</label>
		</div>
	
	
	
	<? endif; //isFormNote ?>

	<script>
		$(function(){
			
            setTimeout(function(){
                $('#callback-programs form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
            },100);
		});
	</script>

</div>

