<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<div class="free-consult  js-form-wrapper <?= $arParams['FORM_CONTAINER_CLASS'] ?>" id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
	<div class="free-consult__title">Бесплатная<br> консультация<br> эксперта</div>
	<div class="free-consult__expert">
		
		<?if($arParams['EXPERT']['EXPERT_ID']){?>
			<div class="free-consult__expert-img-block"><img src="<?=$arParams['EXPERT']['PIC']?>" alt=""></div>
			<div class="free-consult__expert-text">
				<div class="free-consult__expert-name"><?=$arParams['EXPERT']['NAME']?></div>
				<div class="free-consult__expert-job"><?=$arParams['EXPERT']['JOB']?></div>
			</div>
		<?}else{?>
			<div class="free-consult__expert-img-block"><img src="/local/templates/main/img/default_free_consult_author.png" alt=""></div>
			<div class="free-consult__expert-text">
				<div class="free-consult__expert-name">Наталия Сиворина</div>
				<div class="free-consult__expert-job">Консультант-аналитик 1С</div>
			</div>
		<?}?>
	</div>
	
	
	<div class="free-consult__form">
		
		
		<? if ($arResult["FORM_NOTE"] != ""): ?>
			<div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
		<? endif; ?>
		<? if ($arResult["isFormNote"] != "Y") : ?>
		<?= $arResult["FORM_HEADER"] ?>
		<input type="hidden" name="ajax" value="1"/>
		<input type="hidden" name="action" value="formsubmit"/>
		<input type="hidden" name="confirm" value="1"/>
		<input type="hidden" name="confirm" value="1"/>
		<input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
		<input type="hidden" data-fieldtype="formName" value="CallbackFreeConsult"/>
		<?= $arResult["FORM_AUTOCALL"]["HTML_CODE"] ?>
		
		<? if ($arResult["isFormErrors"] == "Y"): ?>
			<?= $arResult["FORM_ERRORS_TEXT"]; ?>
		<? endif; ?>
		  <? foreach ($arResult["VISIBLE_QUESTIONS"] as  $arQuestion): ?>
				<? if($arQuestion["CODE"] == "FORM_PAGE"): ?>
				<input type="hidden" class="js-form-page"
					   name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
					   value="<?= $APPLICATION->GetCurPage() ?>"/>
				<? elseif ($arQuestion["CODE"] == "FORM_PAGE_SOURCE"): ?>
				<div class="js-callback-source">
					<?= $arQuestion["HTML_CODE"] ?>
				</div>
				<? endif; ?>
		  <?endforeach;?>
		
		<div class="free-consult__form-row">
			
			<div class="free-consult__form-field js-form-field">
				<input input type="text" name="form_text_161" value="" size="100" data-name="username" data-fieldtype="username" data-fieldlabel="Ваше имя" data-necessary="data-necessary" data-fieldname="FORM_NAME" placeholder="Ваше имя" class="free-consult__form-input" placeholder="Ваше имя">
			</div>
		
		</div>
		
		<div class="free-consult__form-cols">
			<div class="free-consult__form-col">
				<div class="free-consult__form-field js-form-field">
					<input type="tel" name="form_text_162" value="" size="100" data-name="phone" data-fieldtype="phone" data-fieldlabel="Телефон" data-mask="phone" data-necessary="data-necessary" data-fieldname="FORM_PHONE" class="free-consult__form-input" placeholder="Номер телефона">
				</div>
			</div>
			<div class="free-consult__form-col">
				<div class="free-consult__form-field js-form-field">
					<input type="email" class="free-consult__form-input" name="form_email_163" value="" size="100" data-name="email" data-fieldtype="email" data-fieldlabel="E-mail" data-mask="email" placeholder="E-mail" data-fieldname="FORM_EMAIL">
				</div>
			</div>
		</div>
		
		<div class="free-consult__form-row">
			<div class="free-consult__form-field js-form-field">
				<textarea placeholder="Ваш вопрос"
						  name="form_textarea_164" cols="100" rows="1"
						  class="inputtextarea js-resize-textarea" data-fieldname="FORM_SOURCE"
						  data-fieldtype="tocomment" data-fieldlabel="Ваш вопрос"
				></textarea>
			</div>
		
		</div>
		<div class="free-consult__form-row">
			<input type="submit" name="web_form_submit" class="button" value="Задать вопрос">
		</div>
		
		<div class="free-consult__form-license-info js-form-field">
			<input type="checkbox" type="checkbox" class="" id="callbackFreeConsult-privicy" checked="" data-necessary="data-necessary">
			<label for="callbackFreeConsult-privicy">Соглашаюсь на обработку персональных данных</label>
		</div>
			<?endif;?>
	</div>
	<?= $arResult["FORM_FOOTER"] ?>

</div>
<div class="success-message-modal">
	<div class="success-message-modal__caption">Спасибо за Ваше обращение!</div>
	<div class="success-message-modal__text">Специалист 1С свяжется с вами в течение 15 минут.</div>
</div>

<script>
	$(function () {
		gtm_magic_filling('#<?= $arParams['FORM_CONTAINER_ID'] ?>');
		$('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
	});
</script>
