<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>

<?
/**
 * @var $arParams array
 * @var $arResult array
 */

?>



<div class="<?= $arParams['FORM_CONTAINER_CLASS'] ?> " id="<?= $arParams['FORM_CONTAINER_ID'] ?>">



<div class="contact-modal__plate _w960">
    <a href="#" class="contact-modal__caption center _two-row _linked js-webinar-link">Регистрация на <span class="js-event-type"><?= $arParams['EVENT_TYPE'] ?></span> <span class="js-event-name"><?=$arParams['EVENT_NAME']?></span></a>
		<div class="iconic-time center contact-modal__time-block hide-up-to-md">
			<div class="iconic-time__section _inline _calendar js-event-date">
				<time datetime=""><?=htmlspecialchars_decode ($arParams['EVENT_DATE'])?></time>
			</div>
			<div class="iconic-time__section _inline _sandglass js-event-duration">
				<time datetime="60m"><?=$arParams['EVENT_DURATION']?></time>
			</div>
		</div>





			<?=$arResult['FORM_HEADER']?>
			<input type="hidden" name="ajax" value="1" />
			<input type="hidden" name="action" value="formsubmit" />
			<input type="hidden" name="confirm" value="1" />
			<input type="hidden" value="Регистрация на мероприятие" data-fieldtype="formName"/>
			<input type="hidden" name="eventName" data-fieldlabel="Название мероприятия" value="" data-fieldtype="tocomment"/>
			<input type="hidden" name="eventData" data-fieldlabel="Дата проведения" class="js-event-date-input" value="" data-fieldtype="tocomment"/>
			<input type="hidden" name="eventId" value="<?= $arParams['EVENT']?>" />
			<input type="hidden" name="direction" data-fieldtype="direction" value="<?= $arParams['ZATO_DIRECTION']?>" />
			<?if ($arResult["isFormErrors"] == "Y"):?>
				<?=$arResult["FORM_ERRORS_TEXT"];?>
			<?endif;?>

			<? foreach ($arResult['arAnswers'] as $key => $arAnswer): ?>
				<? if(in_array($key, ['POST'])):?>
					<?
					$hide = 'hide-up-to-md';
					?>
				<? else: ?>
					<?
					$hide = '';
					?>
				<? endif; ?>
				<? if(in_array($key, ['NAME', 'PHONE', 'EMAIL'])): ?>
					<div class="contact-modal__cols _mb9 ">
				<? endif; ?>
				<div class="contact-modal__col <?=$key == 'NAME' ? '_before-input' : ' '?> <?= $hide ?>">
					<? foreach($arAnswer as $item): ?>
						<?if($item['FIELD_TYPE'] == 'hidden'):?>
							<input <?= $item['FIELD_PARAM']?> name="form_<?=$item["FIELD_TYPE"] . '_' . $item['ID']?>" data-fieldname="<?=$key?>"
								<?= $key == 'WEBINAR_EMAIL' ? 'value="' . $arParams['EMAIL_TO'] .'"' : '' ?> >
						<? else: ?>
							<div class="contact-modal__field _lined _mb9">
								<div class="contact-modal__label <?=$arResult['arQuestions'][$key]['REQUIRED'] == 'Y' ? '_necessary' : ''?>"><?= $item['MESSAGE']?></div>

								<div class="contact-modal__item">
									<div class="contact-modal__inputs">
										<input <?= $item['FIELD_PARAM']?> name="form_<?=$item["FIELD_TYPE"] . '_' . $item['ID']?>"
											<?= $arResult['arQuestions'][$key]['REQUIRED'] == 'Y' ? 'data-necessary="data-necessary"' : ''?>
										>
										<? if($arResult['arQuestions'][$key]['REQUIRED'] == 'Y'): ?>
											<div class="contact-modal__none">Заполнение поля обязательно</div>
										<? endif; ?>
									</div>
								</div>
							</div>
						<? endif; ?>
					<? endforeach; ?>
				</div>
				<? if($key == 'EMAIL'): ?>
					<div class="contact-modal__col hide-up-to-md">
						<div class="contact-modal__field _pt40">
							<div class="contact-modal__item">
								<div class="contact-modal__inputs">
									<label>
										<input type="checkbox" class="icheck" id="callbackFreeConsult-privicy" checked data-necessary="data-necessary">
										<span>
										<label for="callbackFreeConsult-privicy" class="pinfo-notice"><a href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf" class="default-link" target="_blank">Соглашаюсь на обработку персональных данных</a></label>
									</span>
										<span class="contact-modal__none">Для продолжения нужно согласие с условиями</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				<? endif; ?>
				<? if(in_array($key, ['COMPANY', 'POST', 'EMAIL'])): ?>
					</div>
				<? endif; ?>
			<? endforeach; ?>


			<div class="contact-modal__check-info center"><span>Спасибо, вы записаны на вебинар!</span></div>

			<div class="contact-modal__footer _centered-btn">
				<div class="contact-modal__submit-holder _full-md">
					<button type="submit" value="submit" name="web_form_submit" class="button">Зарегистрироваться <span class="hide-up-to-md">на мероприятие</span></button>
				</div>
				<div class="contact-modal__field hide-md">
					<div class="contact-modal__item">
						<div class="contact-modal__inputs">
							<label>
								<input type="checkbox" class="icheck" id="callbackFreeConsult-privicy" checked data-necessary="data-necessary">
								<span>
													<label for="callbackFreeConsult-privicy" class="pinfo-notice"><a href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf" class="default-link" target="_blank">Соглашаюсь на обработку персональных данных</a></label>
								</span>
								<span class="contact-modal__none">Для продолжения нужно согласие с условиями</span>
							</label>
						</div>
					</div>
				</div>
			</div>
</div>
</div>
<div class="contact-modal js-form-wrapper" id="webinar_success">
	<!-- Начало блока: Стандартная форма (колбек)-->
	<div class="c-subscription-form _success _full-width-md">
		<div class="c-subscription-form__message">
			<div class="success-message-modal__caption">Спасибо, #USERNAME#!</div>
            <div class="success-message-modal__text">Вы успешно зарегистрировались на <span style="font-weight: normal;" class="js-event-type-success"><?= $arParams['EVENT_TYPE'] ?></span> #EVENTNAME#</div>
		</div>
	</div>
	<!-- Конец блока: Стандартная форма (колбек)-->
</div>
		<script>
			$(function () {
				setTimeout(function () {
					$('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
					<?if(isset($arParams['EVENT_NAME'])):?>
					setFormEventName('<?=$arParams['EVENT_NAME']?>');
					setFormEventDate('<?=htmlspecialchars_decode($arParams['EVENT_DATE'])?>');
					setFormEventID('<?=$arParams['EVENT_ID']?>');
					<?endif;?>
				}, 100);

			});
		</script>

