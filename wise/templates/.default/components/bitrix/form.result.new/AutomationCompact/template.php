<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
		die();
} ?>

<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> js-typical-form " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">

		<? if ($arResult["FORM_NOTE"] != ""): ?>
				<div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
		<? endif; ?>

		<? if ($arResult["isFormNote"] != "Y") : ?>
				<?= $arResult["FORM_HEADER"] ?>
				<input type="hidden" name="ajax" value="1"/>
				<input class="js-typical-ajax-path" type="hidden" value="<?= $templateFolder ?>/ajax.php"/>
				<input class="js-typical-ajax-delete-path" type="hidden" value="<?= $templateFolder ?>/delete.php"/>
				<input type="hidden" name="action" value="formsubmit"/>
				<input type="hidden" name="confirm" value="1"/>
				<input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
				<input type="hidden" data-fieldtype="formName" value="Automation"/>
				<?= $arResult["FORM_AUTOCALL"]["HTML_CODE"] ?>
				<div style="display: none;">
						<div class="js-feedback-form_type">
								<?= $arResult["FORM_TYPE"]["HTML_CODE"] ?>
						</div>
						<div class="js-feedback-form_type">
							<?= $arResult["FORM_PROGRAMM"]["HTML_CODE"] ?>
						</div>
				</div>
				<? if ($arResult["isFormErrors"] == "Y"): ?>
						<?= $arResult["FORM_ERRORS_TEXT"]; ?>
				<? endif; ?>

				<? foreach ($arResult["VISIBLE_QUESTIONS"] as $kkey => $arQuestion): ?>
						<? if ($arQuestion["CODE"] == "FORM_SOURCE"): ?>
								<div class="js-callback-source">
										<?= $arQuestion["HTML_CODE"] ?>
								</div>
						<? elseif ($arQuestion["CODE"] == "FORM_NO_DETAILS"): ?>
								<?= "<div class='form-standart__toogler _show'>" ?>

						<? elseif($arQuestion["CODE"] == "FORM_PAGE"): ?>
								<input type="hidden" class="js-form-page"
											 name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
											 value="<?= $APPLICATION->GetCurPage() ?>"/>
						<? elseif ($arQuestion["CODE"] == "FORM_USER_COUNT"): ?>
								<div class="contact-modal__field  _lined">
										<div class="contact-modal__item">
												<div class="form-standart__inputs _left _full-width-select">
														<b class="form-standart__inputs-title"><?= $arQuestion["CAPTION"] ?></b>
														<div class="form-standart__inputs-select">
																<select data-fieldtype="tocomment" data-fieldlabel="<?= $arQuestion["CAPTION"] ?>"
																				class="select2" name="form_text_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>">
																		<? foreach ($arResult["USER_COUNTS"] as $programm): ?>
																				<option value="<?= $programm ?>"><?= $programm ?></option>
																		<? endforeach ?>
																</select>
														</div>
												</div>
										</div>
								</div>

						<? elseif ($arQuestion["CODE"] == "FORM_NAME" || $arQuestion["CODE"] == "FORM_PHONE" || $arQuestion["CODE"] == "FORM_EMAIL"): ?>
								<div class="contact-modal__field<?= ($arQuestion['CODE'] == 'FORM_EMAIL') ? ' hide-up-to-md' : '' ?>">
										<div
												class="contact-modal__label <? if ($arQuestion["REQUIRED"] == "Y"): ?>_necessary<? endif ?>">
												<?= $arQuestion["CAPTION"] ?>
										</div>
										<div class="contact-modal__item">
												<div class="contact-modal__inputs">

														<?= $arQuestion["HTML_CODE"] ?>
														<div class="contact-modal__error">Неверно заполнено поле</div>
														<div class="contact-modal__none">Заполнение поля обязательно</div>
												</div>
										</div>
								</div>
						<? endif ?>
				<? endforeach; ?>
				<?= "</div>" ?>
			
		    	<? showAcceptCheckbox('automation-compact', 'Отправить заявку'); ?>
       
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

