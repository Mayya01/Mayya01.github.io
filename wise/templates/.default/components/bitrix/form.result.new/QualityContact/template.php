<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();?>
			<div class="contact-modal__caption">Обращение в отдел качества</div>
			<?= $arResult['FORM_HEADER'] ?>
			<input type="hidden" name="ajax" value="1"/>
			<input class="js-typical-ajax-path" type="hidden" value="<?= $templateFolder ?>/ajax.php"/>
			<input class="js-typical-ajax-delete-path" type="hidden" value="<?= $templateFolder ?>/delete.php"/>
			<input type="hidden" name="action" value="formsubmit"/>
			<input type="hidden" name="confirm" value="1"/>
			<input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
			<input type="hidden" data-fieldtype="formName" value="InviteTender"/>
			<? if ($arResult["isFormErrors"] == "Y"): ?>
				<?= $arResult["FORM_ERRORS_TEXT"]; ?>
			<? endif; ?>
			<? foreach ($arResult["VISIBLE_QUESTIONS"] as $kkey => $arQuestion): ?>
				<? if ($arQuestion["CODE"] == "FORM_SOURCE"): ?>
					<div class="js-callback-source">
						<?= $arQuestion["HTML_CODE"] ?>
					</div>
				<? elseif ($arQuestion["CODE"] == "FORM_PAGE"): ?>
					<input type="hidden" class="js-form-page"
					   name="form_<?= $arQuestion["STRUCTURE"][0]["FIELD_TYPE"] ?>_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>"
					   value="<?= $APPLICATION->GetCurPage() ?>"/>
				<? endif; ?>
			<? endforeach; ?>
			<? foreach ($arResult['QUESTIONS'] as $key => $arQuestion): ?>
				<? if($key == 'CATEGORY'): ?>
					<div class="contact-modal__field _lined">
						<div class="contact-modal__label">Выберите категорию обращения</div>
						<div class="contact-modal__item">
							<div class="contact-modal__inputs">
								<select class="select2" name="form_dropdown_CATEGORY" id="form_dropdown_CATEGORY">
									<? foreach ($arQuestion['STRUCTURE'] as $arAnswer ): ?>
										<option value="<?= $arAnswer['ID'] ?>"><?= $arAnswer['MESSAGE'] ?></option>
									<? endforeach; ?>
								</select>
							</div>
						</div>
					</div>
				<? else: ?>
					<? foreach ($arQuestion['STRUCTURE'] as $arAnswer ): ?>
						<? if($arAnswer['FIELD_TYPE'] == 'text'):?>
							<div class="contact-modal__field _lined <?= $key == 'EMAIL' ? 'hide-up-to-md' : '' ?>">
								<div class="contact-modal__label <?= $arQuestion['REQUIRED'] == 'Y' ? '_necessary' : '' ?>"><?=$arAnswer['MESSAGE']?></div>
								<div class="contact-modal__item">
									<input type="text" class="inputtext" data-fieldname="<?=$key?>"
										   name="form_text_<?=$arAnswer['ID']?>"
										<?= $arQuestion['REQUIRED'] == 'Y' ? 'data-necessary="data-necessary"' : '' ?>
										<?= $key == 'EMAIL' ? 'placeholder="example@example.com"' : ''?>
										<?= $key == 'PHONE' ? 'placeholder="+7 (___) ___-__-__" data-mask="phone"' : ''?>
									>
									<div class="contact-modal__error">Неверно заполнено поле</div>
									<div class="contact-modal__none">Заполнение поля обязательно</div>
								</div>
							</div>
						<? elseif ($arAnswer['FIELD_TYPE'] == 'file'):?>
							<div class="contact-modal__field _lined js-block-file">
								<div class="contact-modal__label"><?=$arAnswer['MESSAGE']?></div>
								<div class="contact-modal__item _relative">
									<input type="text" class="inputtext" autocomplete="off" name="file" data-fieldname="<?=$key?>">
									<div class="contact-modal__file-field">
										<label for="form-card-lp-453-4" class="contact-modal__label-file-wrapper">
											<input type="file" name="form_file_<?=$arAnswer['ID']?>" id="form-card-lp-453-4">
										</label>
									</div>
								</div>
							</div>
						<? elseif ($arAnswer['FIELD_TYPE'] == 'textarea'):?>
							<div class="contact-modal__field _lined">
								<div class="contact-modal__label"><?=$arAnswer['MESSAGE']?></div>
								<div class="contact-modal__item">
									<div class="contact-modal__inputs">
										<textarea name="form_textarea_<?=$arAnswer['ID']?>" id="" data-fieldtype="tocomment"  data-fieldlabel="<?=$arAnswer['MESSAGE']?>" cols="30" rows="10" data-fieldname="<?=$key?>"></textarea>
									</div>
								</div>
							</div>
						<? endif; ?>
					<? endforeach; ?>
				<? endif; ?>
			<? endforeach; ?>
		<? showAcceptCheckbox('tender', 'Отправить'); ?>

		<?= $arResult["FORM_FOOTER"] ?>

<script>
	$(function () {
		setTimeout(function () {
			$('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
		}, 100);
	});
</script>
