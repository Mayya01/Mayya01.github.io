<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("404");
?>

<section class="wa-404">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h1 class="wa-404__h2 module-h2">Четыре ноль четыре. Нет такой страницы</h1>

			<div class="clearfix">
				<div class="wa-404__left text-container">
					<p class="lead">Скорее всего мы&nbsp;уже знаем о&nbsp;проблеме и&nbsp;в&nbsp;ближайшее время исправим&nbsp;её. А&nbsp;пока…</p>

					<h2 class="wa-404__h3 module-h3">Узнайте больше о&nbsp;WiseAdvice</h2>

					<ul class="wa-404__links">
						<li><a href="#" class="underlined-link underlined-link--small">О&nbsp;группе компаний</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Актуальные вакансии</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Карьера в&nbsp;Wiseadvice</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Истории успеха</a></li>
					</ul>

					<h2 class="wa-404__h3 module-h3">Ознакомьтесь с&nbsp;нашими услугами</h2>

					<ul class="wa-404__links">
						<li><a href="#" class="underlined-link underlined-link--small">Услуги бухгалтеров</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Интернет-маркетинг</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Услуги аудиторов</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Услуги оценщиков</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Патентные услуги</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Услуги по&nbsp;экспертизе</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Налоговые юристы</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">ПО для юристов</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">Автоматизация<br> бизнеса</a></li>

						<li><a href="#" class="underlined-link underlined-link--small">ПО для финансистов</a></li>
					</ul>
				</div>

				<div class="wa-404__right js-form">
					<div class="wa-form wa-form--404 js-form__feedback-form-wrap">
						<div class="wa-form__title">Форма обратной связи</div>

						<form class="js-form__feedback-form" action="">
							<div class="wa-form__field wa-form__field--textarea">
								<label class="wa-form__label" for="question">Ваш вопрос</label>

								<textarea class="wa-form__input wa-form__input--textarea" rows="1" name="" id="question"></textarea>
							</div>

							<div class="wa-form__field">
								<label class="wa-form__label" for="email">Email:</label>

								<input class="wa-form__input" id="email" type="mail">
							</div>

							<div class="wa-form__field">
								<label class="wa-form__label" for="phone">Телефон:</label>

								<input class="wa-form__input" id="phone" type="tel" placeholder="+7 (___) ___-__-__">
							</div>

							<div class="wa-form__field">
								<label class="wa-form__label" for="name">Ваше имя:</label>

								<input class="wa-form__input" id="name" type="text">
							</div>

							<div class="wa-form__inner">
								<div class="wa-form__right">
									<label class="wa-form__checkbox-label">
										<input class="wa-form__checkbox" type="checkbox" checked>
										<span class="wa-form__custom-checkbox"></span>
										Я не робот
									</label>

									<input class="btn btn--red btn--with-border js-form__feedback-submit-btn" type="submit" value="Отправить">
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