<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Контакты");
?>

<section class="wa-contacts">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h1 class="wa-contacts__h2 module-h2">Контактная информация</h1>
		</div>
	</div>

	<div class="wa-contacts__map">
		<div class="wa-map js-map" id="map">

		</div>

		<div class="wa-contacts__info">
			<div class="layout-center-wrapper">
				<div class="content-col">
					<div class="wa-contacts__info-text js-tabs">
						<div class="wa-contacts__h3 module-h3">Как добраться</div>

						<ul class="wa-contacts__tabs">
							<li class="wa-contacts__tab active js-tabs__tab js-map-placemark-control" data-id="walk">Пешком</li>
							<li class="wa-contacts__tab js-tabs__tab js-map-placemark-control" data-id="drive">На авто</li>
						</ul>

						<div class="js-tabs__container js-print">
							<div class="wa-contacts__tab-content active js-tabs__content" id="walk">
								<p>Станция метро «Рязанский проспект», первый вагон из центра, из метро направо, дойти до супермаркета, затем еще раз повернуть направо. Вы увидите две розово-серые башни.</p>

								<p>Клиентский отдел WISEADVICE находится в первой башне (ближней к шлагбауму) на 7-м этаже. С поста охраны на первом этаже необходимо позвонить по внутреннему телефону 1506, затем с документом, удостоверяющим личность, подойти к охране.</p>

								<a href="#" title="" class="btn btn--red btn--with-border wa-contacts__print-btn js-print-btn" data-print="js-print-walk">Распечатать</a>
								<div class="wa-contacts__print-img js-print-walk">
									<img src="<?=SITE_TEMPLATE_PATH?>/images/contacts/print-contacts-walk.png" alt="">
								</div>
							</div>

							<div class="wa-contacts__tab-content js-tabs__content" id="drive">
								<p><b>Из центра:</b> на пересечении Рязанского проспекта и улицы Паперника развернуться на круге и повернуть на ул. Паперника. После второй автобусной остановки, не доезжая моста, повернуть во дворы. Либо ехать дальше по улице Паперника, после моста объехать авто заправку и свернуть на улицу Вострухина, затем на 4-й Вешняковский проезд.</p>

								<p><b>В центр:</b> не сворачивая с Рязанского проспекта, проехать чуть дальше станции метро «Рязанский проспект», развернуться на круге, затем проехать в обратную сторону и повернуть на втором повороте.</p>
								<a href="#" title="" class="btn btn--red btn--with-border wa-contacts__print-btn js-print-btn" data-print="js-print-drive">Распечатать</a>
								<div class="wa-contacts__print-img js-print-drive">
									<img src="<?=SITE_TEMPLATE_PATH?>/images/contacts/print-contacts-drive.png" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="wa-requisites">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<div class="clearfix">
				<div class="wa-requisites__left">
					<h2 class="wa-requisites__h2 module-h2">Реквизиты</h2>
					<p>Общество с ограниченной ответственностью «Вайзэдвайс»</p>
					<p>Юридический адрес:<br> 109456, Москва, Рязанский проспект, д. 75к4</p>
					<p>Фактический адрес:<br> 109456, Москва, Рязанский проспект, д. 75к4</p>
					<p>БИК: 044525201</p>
					<p>ИНН/КПП 7721595364/772101001</p>
					<p>Р/c 40702810400000012709 в ПАО АКБ «Авангард»</p>
					<p>ОКПО 82447185</p>
					<p>ОГРН 107775911514</p>
				</div>

				<div class="wa-requisites__right js-form">
					<div class="wa-form wa-form--contacts js-form__feedback-form-wrap">
						<div class="wa-form__title">Форма обратной связи</div>
						
						<form class="js-form__feedback-form js-form-validation" action="">
							<div class="wa-form__field wa-form__field--textarea">
								<label class="wa-form__label" for="question">Ваш вопрос</label>

								<textarea class="wa-form__input wa-form__input--textarea" rows="4" name="" id="question" placeholder="Опишите Ваш вопрос/ситуацию" data-validation="length" data-validation-length="min5"></textarea>
							</div>

							<div class="wa-form__field">
								<label class="wa-form__label" for="email">Email:</label>

								<input class="wa-form__input" id="email" type="mail" placeholder="postbox@example.com" data-validation="email, length" data-validation-length="min6" data-validation-optional="true">
							</div>

							<div class="wa-form__field">
								<label class="wa-form__label" for="phone">Телефон:</label>

								<input class="wa-form__input" id="phone" type="tel" placeholder="8 900 900-90-90" data-validation="number, length" data-validation-length="min10">
							</div>

							<div class="wa-form__field">
								<label class="wa-form__label" for="name">Ваше имя:</label>

								<input class="wa-form__input" id="name" type="text" placeholder="Владимир Иванов" data-validation="length" data-validation-length="min2">
							</div>

							<div class="wa-form__inner">
								<div class="wa-form__right">
									<label class="wa-form__checkbox-label">
										<input class="wa-form__checkbox" type="checkbox">
										<span class="wa-form__custom-checkbox"></span>
										Я не робот
									</label>

									<input class="btn btn--red btn--with-border js-form__feedback-submit-btn js-form-validation-btn" type="submit" value="Отправить">
								</div>
							</div>
						</form>
					</div>

					<div class="wa-form wa-form--success wa-form--hide js-form__success">
						<div class="wa-form__title js-form__title">Спасибо за обращение в WiseAdvice</div>
						<p>В ближайшее время мы вам перезвоним.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>