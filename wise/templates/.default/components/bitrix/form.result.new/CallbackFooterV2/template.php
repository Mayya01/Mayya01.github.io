<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
} ?>

<div class="form-rd form-rd--inline " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
	
	<? if ($arResult["FORM_NOTE"] != ""): ?>
        <div class="form-note">
			<?= $arResult["FORM_NOTE"] ?>
        </div>
	<? endif; ?>
	
	<? if ($arResult["isFormNote"] != "Y") : ?>
		<?= $arResult["FORM_HEADER"] ?>
		<div class="form-rd__row-md">
        <input type="hidden" name="ajax" value="1"/>
        <input type="hidden" name="action" value="formsubmit"/>
        <input type="hidden" name="confirm" value="1"/>
        <input type="hidden" name="confirm" value="1"/>
        <input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
        <input type="hidden" data-fieldtype="formName" value="Callback"/>
		
		<? if ($arResult["isFormErrors"] == "Y"): ?>
			<?= $arResult["FORM_ERRORS_TEXT"]; ?>
		<? endif; ?>
		
		<? foreach ($arResult["VISIBLE_QUESTIONS"] as $kkey => $arQuestion): ?>
            <?if ($arQuestion["CODE"] == "FORM_SOURCE"): ?>
                <div class="js-callback-source">
					<?= $arQuestion["HTML_CODE"] ?>
                </div>
			<? elseif ($arQuestion["CODE"] == "FORM_PAGE"): ?>
                <input type="hidden" class="js-form-page"
                       name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
                       value="<?= $APPLICATION->GetCurPage() ?>"/>
			<? elseif ($arQuestion["CODE"] == "FORM_AUTOCALL"): ?>
                <?= $arQuestion["HTML_CODE"] ?>
			<? elseif ($arQuestion["CODE"] != "FORM_EMAIL" || (!$arParams["HIDE_EMAIL"])): ?>
			
				
			
                <div class="form-rd__col-1-3-md">
                    
                    <div class="form-rd__group">
						<? if ($arQuestion["CODE"] == "FORM_TARIFF"): ?>
                            <select class="select2 js-obs-tariff-select"
                                    name="form_text_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>">
								<? foreach ($arResult["TARIFFS"] as $tariff): ?>
                                    <option value="<?= $tariff ?>">
										<?= $tariff ?>
                                    </option>
								<? endforeach; ?>
                            </select>
						<? elseif ($arQuestion["CODE"] == "FORM_NAME"): ?>
							<input type="text" name="form_text_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>" placeholder="Ваше имя" class="field field--bottom-border" checked
								   data-name="username" data-fieldtype="username" data-fieldlabel="Ваше имя" data-necessary="data-necessary" data-fieldname="FORM_NAME"
							>
						<? elseif ($arQuestion["CODE"] == "FORM_PHONE"): ?>
							<input type="tel" name="form_text_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>" placeholder="+7 (___) ___ __ __" data-necessary="data-necessary"  class="field field--bottom-border"
								   data-name="phone" data-fieldtype="phone" data-fieldlabel="Телефон" data-mask="phone" placeholder="+7 (___) ___-__-__" data-necessary="data-necessary" data-fieldname="FORM_PHONE"
							>
						<? else: ?>
							<?= $arQuestion["HTML_CODE"] ?>
						<? endif ?>
                    </div>
                </div>
			<? endif ?>
		<? endforeach; ?>
		<div class="form-rd__col-1-3-md">
			<input type="submit" class="button" value="Перезвоните мне" name="web_form_submit">
		</div>
	</div>
		
		<div class="form-rd__licence-info">
			<input type="checkbox" id="licence-info" data-necessary="data-necessary" checked>
			<label for="licence-info"><span>Соглашаюсь на <a class="form-rd__licence-info-link" href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf">обработку персональных данных</a> </span></label>
		</div>
	
		<?= $arResult["FORM_FOOTER"] ?>
	<? endif; //isFormNote ?>

    <script>
		$(function () {
			setTimeout(function () {
				$('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
			}, 100);
		});

    </script>

</div>
