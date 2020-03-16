<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
} ?>
<div class="b-consultation-block">
	<div class="h1">Задайте свой вопрос консультанту по 1С</div>
	<div class="b-consultation-block__row clearme">
		<div class="b-consultation-block__col">
			<div class="h2">Консультации по 1С</div>
			<div class="h4">Звоните</div>
			<div class="b-consultation-block__contacts">
				<div class="b-consultation-block__phone"><? $APPLICATION->IncludeComponent("bitrix:main.include", "",
						Array(
							"AREA_FILE_SHOW" => "file",
							"PATH"           => SITE_DIR . '/local/include/phone_link.php'
						)); ?></div>
				<a class="b-consultation-block__email-link" href="mailto:welcome@wiseadvice-it.ru">welcome@wiseadvice-it.ru</a>
			</div>
			<p class="b-consultation-block__text">На все вопросы отвечают только <br> сертифицированные специалисты</p>
		</div>
		<div class="b-consultation-block__col">
			<div class="contact-modal form-standart b-consultation-block__form _block _outside-of-modal">
				<div class="contact-modal__plate">
					<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">
						<? if ($arResult["FORM_NOTE"] != ""): ?>
							<div class="form-note"><?= $arResult["FORM_NOTE"] ?></div>
						<? endif; ?>
						
						<? if ($arResult["isFormNote"] != "Y") : ?>
							<?= $arResult["FORM_HEADER"] ?>
							<input type="hidden" name="ajax" value="1"/>
							<input type="hidden" name="action" value="formsubmit"/>
							<input type="hidden" name="confirm" value="1"/>
							<input type="hidden" name="confirm" value="1"/>
							<input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
							<input type="hidden" data-fieldtype="formName" value="Callback2"/>
							
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
                                <? elseif ($arQuestion["CODE"] == "FORM_AUTOCALL"): ?>
                                    <?= $arQuestion["HTML_CODE"] ?>
								<? elseif ($arQuestion["CODE"] != "FORM_EMAIL" || (!$arParams["HIDE_EMAIL"])): ?>
									<div class="contact-modal__field">
										<div
											class="contact-modal__label _necessary hide-up-to-md"><?= $arQuestion["CAPTION"] ?></div>
										<div class="contact-modal__item">
											<? if ($arQuestion["CODE"] == "FORM_TARIFF"): ?>
												<select class="select2 js-obs-tariff-select"
														name="form_text_<?= $arQuestion["STRUCTURE"][0]["ID"] ?>">
													<? foreach ($arResult["TARIFFS"] as $tariff): ?>
														<option value="<?= $tariff ?>"><?= $tariff ?></option>
													<? endforeach; ?>
												</select>
											<? else: ?>
												<? if ($arQuestion["CODE"] == 'FORM_PHONE') :
													// удаляем дефолтовый placeholder из кода вопроса "телефон"
													$arQuestion['HTML_CODE'] = preg_replace('/placeholder=(\'|")([^"]*)(\'|") /i',
														'', $arQuestion['HTML_CODE']);
												endif; ?>
												<? // жестко вставляем placeholder в тег поля вопроса ?>
												<? $arQuestion['CAPTION'] = ($arQuestion["CODE"] == 'FORM_PHONE') ?
													'Телефон' : $arQuestion['CAPTION']; ?>
												<? $htmlCode = str_replace('/>',
													'placeholder="' . $arQuestion['CAPTION'] . '" />',
													$arQuestion['HTML_CODE']); ?>
												<?= $htmlCode ?>
											<? endif ?>
											<div class="contact-modal__error">Неверно заполнено поле</div>
											<div class="contact-modal__none">Заполнение поля обязательно</div>
										</div>
									</div>
								<? endif ?>
							<? endforeach; ?>
							<? showAcceptCheckbox('consultant-quiestion', 'Заказать звонок'); ?>
							<?= $arResult["FORM_FOOTER"] ?>
						<? endif; //isFormNote ?>
						<script>
							// @todo заблокировано в связи с дублированием контроллеров веб-форм. РАЗОБРАТЬСЯ!!!
							
							// $(function () {
							//	setTimeout(function () {
							//		$('form[name="<?//= $arResult['arForm']['SID'] ?>//"]').initWebForm();
							//	}, 100);
							// });
						</script>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
