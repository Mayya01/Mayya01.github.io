<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Вакансии");
?>

<div class="layout-center-wrapper">
	<div class="content-col">
		<ul class="breadcrumb">
			<li class="breadcrumb__item"><a href="/">Главная</a></li>
			<li class="breadcrumb__item"><a href="#">Карьера</a></li>
		</ul>
	</div>
</div>

<section class="section-nav js-section-nav">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h1 class="section-nav__h2 module-h2">Карьера в&nbsp;WiseAdvice</h1>

			<div class="section-nav__inner clearfix">
				<ul class="section-nav__list">
					<li><a class="underlined-link js-section-nav__link active" href="#">Вакансии</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Условия работы</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Истории успеха</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Организация труда</a></li>
				</ul>

				<div class="section-nav__text">Интересная и&nbsp;разнообразная работа всегда дает возможность профессионального развития. Это характерно только для консалтинговых компаний.</div>
			</div>
		</div>
	</div>
</section>

<section class="wa-vacancies">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h2 class="wa-vacancies__h2 module-h2">Вакансии</h2>

			<ul class="wa-vacancies__category-list js-slide-toggle">
				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Информационные технологии, интернет, телеком</span><span class="wa-vacancies__category-label">4</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<a href="#" class="underlined-link underlined-link--small">
								<div class="wa-vacancies__item-title">
									<span class="underlined-link--small">HTML-верстальщик</span>
									<!-- <date class="wa-vacancies__item-date">7&nbsp;декабря</date> -->
								</div>

								<!-- <div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div> -->
								<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
							</a>
						</li>

						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">PHP-программист / WEB-разработчик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">от&nbsp;50&nbsp;000 до&nbsp;100&nbsp;000&nbsp;руб.</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>

						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">Аналитик&nbsp;1С</a><br>
								<date class="wa-vacancies__item-date">21&nbsp;ноября</date>
							</div>

							<div class="wa-vacancies__item-salary">от&nbsp;100&nbsp;000 до&nbsp;130 000&nbsp;руб.</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>

						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">Менеджер по&nbsp;продажам проектов 1С</a><br>
								<date class="wa-vacancies__item-date">16&nbsp;ноября</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Бухгалтерия, управленческий учет, финансы предприятия</span><span class="wa-vacancies__category-label wa-vacancies__category-label--five">5</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Маркетинг, реклама, PR</span><span class="wa-vacancies__category-label">2</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>


				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Административный персонал</span><span class="wa-vacancies__category-label wa-vacancies__category-label--one">1</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Банки, инвестиции, лизинг</span><span class="wa-vacancies__category-label">2</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link  js-slide-toggle__btn">Управление персоналом, тренинги</span><span class="wa-vacancies__category-label wa-vacancies__category-label--one">1</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Начало карьеры, студенты</span><span class="wa-vacancies__category-label wa-vacancies__category-label--one">1</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Продажи</span><span class="wa-vacancies__category-label">8</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>

				<li class="wa-vacancies__category">
					<span class="wa-vacancies__category-title dotted-border-link js-slide-toggle__btn">Юристы</span><span class="wa-vacancies__category-label wa-vacancies__category-label--one">1</span>

					<ul class="wa-vacancies__list js-slide-toggle__target">
						<li class="wa-vacancies__item clearfix">
							<div class="wa-vacancies__item-title">
								<a href="#" class="underlined-link underlined-link--small">HTML-верстальщик</a><br>
								<date class="wa-vacancies__item-date">7&nbsp;декабря</date>
							</div>

							<div class="wa-vacancies__item-salary">з/п не&nbsp;указана</div>
							<div class="wa-vacancies__item-location">Москва,<br> Рязанский проспект</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</section>

<section class="leader-appeal leader-appeal--maria parallax-container js-parallax">
	<div class="layout-center-wrapper">
		<div class="content-col  clearfix">
			<div class="leader-appeal__text">
				<h2 class="leader-appeal__h2 module-h2">От&nbsp;первого лица</h2>

				<blockquote>
					<p>Компании, оказывающие интеллектуальные услуги, очень зависят от&nbsp;кадров. Мы&nbsp;это понимаем и&nbsp;нанимаем только лучших специалистов, чтобы оказывать услуги на&nbsp;высшем уровне.</p>

					<p>В&nbsp;2003&nbsp;году, на&nbsp;момент основания, вся команда состояла из&nbsp;4&nbsp;человек, к&nbsp;2015 году нас больше 350. Хотите у&nbsp;нас работать? Посмотрите  <span class="text-highlight deal-home__text-highlight"><b>наши вакансии</b></span></p>

					<cite class="leader-appeal__leader-name">Мария Тягунова<br> <span>Директор по&nbsp;персоналу</span></cite>
				</blockquote>
			</div>
		</div>
	</div>
	 <div class="js-parallax-window parallax-window"  data-image-src="<?=SITE_TEMPLATE_PATH?>/images/background/slider-maria-min.jpg"></div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>