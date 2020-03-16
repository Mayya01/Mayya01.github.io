<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
} ?>
<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

	<? if ($arResult["FORM_NOTE"] != ""): ?>
		<div class="form-note">
			<?= $arResult["FORM_NOTE"] ?>
		</div>
	<? endif; ?>

	<? if ($arResult["isFormNote"] != "Y") : ?>
		<?= $arResult["FORM_HEADER"] ?>
		<input type="hidden" name="ajax" value="1" />
		<input type="hidden" name="action" value="formsubmit" />
		<input type="hidden" name="confirm" value="1" />
		<input type="hidden" name="confirm" value="1" />
		<input type="hidden" data-fieldtype="direction" value="<?=$arParams["ZATO_DIRECTION"]?>"/>
		<input type="hidden" data-fieldtype="formName" value="FREE_AUDIT" />
		<?= $arResult["FORM_AUTOCALL"]["HTML_CODE"] ?>
		<? if ($arResult["isFormErrors"] == "Y"): ?>
			<?= $arResult["FORM_ERRORS_TEXT"]; ?>
		<? endif; ?>

		<? foreach ($arResult["VISIBLE_QUESTIONS"] as $kkey => $arQuestion): ?>
			<? if ($arQuestion["CODE"] == "FORM_SOURCE"): ?>
				<div class="js-callback-source">
					<?= $arQuestion["HTML_CODE"] ?>
				</div>
			<? elseif($arQuestion["CODE"] == "FORM_PAGE"): ?>
				<input type="hidden" class="js-form-page" name="form_<?=$arQuestion["STRUCTURE"][0]["FIELD_TYPE"]?>_<?=$arQuestion["STRUCTURE"][0]["ID"]?>" value="<?=$APPLICATION->GetCurPage()?>" />

			<? else: ?>
				<div class="contact-modal__field">
					<div class="contact-modal__label _necessary">
						<?= $arQuestion["CAPTION"] ?>
					</div>
					<div class="contact-modal__item">
						<?= $arQuestion["HTML_CODE"] ?>
						<div class="contact-modal__error">Неверно заполнено поле</div>
						<div class="contact-modal__none">Заполнение поля обязательно</div>
					</div>
				</div>
			<? endif ?>
		<? endforeach; ?>

		<? showAcceptCheckbox('free-audit'); ?>

		<?= $arResult["FORM_FOOTER"] ?>
	<? endif; //isFormNote ?>

	<script>
		$(function() {
			setTimeout(function() {
				$('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
			}, 100);
		});

	</script>

</div>
