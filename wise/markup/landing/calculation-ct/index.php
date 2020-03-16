<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Калькулятор колл-трекинга");
$assets = Bitrix\Main\Page\Asset::getInstance();

$asset->addString('<meta name="twitter:card" content="summary_large_image">', true, 'BEFORE_CSS');
$asset->addString('<meta property="og:type" content="website">', true, 'BEFORE_CSS');
$asset->addString('<meta property="og:url" content="http://wiseadvice.ru/oim/calc/">', true, 'BEFORE_CSS');
$asset->addString('<meta property="og:title" content="Расчёт пула номеров для динамического колл-трекинга">', true, 'BEFORE_CSS');
$asset->addString('<meta property="og:description" content="Калькулятор рассчитывает количество номеров для отслеживания конверсий по ключевым словам в зависимости от количества сессий, их длительности и времени резервирования номера после завершения сессии.">', true, 'BEFORE_CSS');
$asset->addString('<meta property="og:image" content="http://www.wiseadvice.ru/local/templates/main/images/header-logo-big.png">', true, 'BEFORE_CSS');

$asset->addJs('/local/markup/landing/calculation-ct/calculator-ct.js');
$asset->addJs('/local/markup/landing/calculation-ct/calculation-result-order-form.js');
?>

<div class="layout-center-wrapper">
	<div class="content-col">
		<ul class="breadcrumb">
			<li class="breadcrumb__item"><a href="/">Главная</a></li>
		</ul>
	</div>
</div>

<section class="calculation-ct js-calculation-ct">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h1 class="calculation-ct__h2 module-h2">Расчет количества номеров для динамического колл-трекинга</h1>

			<div class="calculation-ct__inner clearfix">
				<div class="calculation-ct__left">
					<form class="calculation-ct__form js-calculation-ct__form" action="">
						<div class="calculation-ct__form-field">
							<div class="calculation-ct__label-wrap">
								<label class="module-h3" for="sessions-number">Пиковое количество сеансов, в час&nbsp;</label><span class="calculation-ct__show-tooltip js-calculation-ct__show-tooltip" data-tooltip-content="#tooltip-content-sessions">?</span>

								<div class="calculation-ct__tooltip-text js-calculation-ct__tooltip-text">
									<div id="tooltip-content-sessions">
										<button class="calculation-ct__close-tooltip js-calculation-ct__tooltip-close" type="button">Скрыть подсказку</button>

										<p>Количество сеансов принимает пиковые значения в определенные часы и дни недели. При расчете мы рекомендуем использовать данные за полные 3—6 месяцев.</p>

										<p>Для формирование отчета скопируйте себе один из готовых отчетов Google Analytics и воспользуйтесь им:</p>

										<ul>
											<li><a href="https://analytics.google.com/analytics/web/template?uid=JjSPum3HRgSpFh5SO_TfMQ" target="_blank">Посещаемость по часам для B2B,<br> только будние дни</a><br> в построенном отчете выберите пиковое значение и разделите его на количество рабочих дней в выбранном периоде, используйте полученное значение для расчета в калькуляторе</li>

											<li><a href="https://analytics.google.com/analytics/web/template?uid=ALmRcmdJSW-9DPoo3NmmHA" target="_blank">Посещаемость по часам для B2C,<br> все дни недели</a><br> в построенном отчете выберете пиковое значение и разделите его на количество дней в выбранном периоде, используйте полученное значение для расчета в калькуляторе</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="calculation-ct__input-wrap">
								<input class="calculation-ct__input calculation-ct__input--number js-calculation-ct__input js-calculation-ct__input--peak js-only-number" id="sessions-number" type="text" placeholder="0" data-validation="number" data-validation-optional="true" data-validation-event="keyup change" data-validation-have-been-blurred="1">
							</div>
						</div>

						<div class="calculation-ct__form-field">
							<div class="calculation-ct__label-wrap">
								<label class="module-h3" for="session-duration">Средняя длительность сеанса, секунд&nbsp;</label><span class="calculation-ct__show-tooltip js-calculation-ct__show-tooltip" data-tooltip-content="#tooltip-content-session-time">?</span>
							</div>

							<div class="calculation-ct__tooltip-text js-calculation-ct__tooltip-text">
								<div id="tooltip-content-session-time">
									<button class="calculation-ct__close-tooltip js-calculation-ct__tooltip-close" type="button">Скрыть подсказку</button>

									<p>Средняя длительность сеанса доступна в общих отчетах Яндекс.Метрики или Google Analytics. Предварительно уточните у системы колл-трекинга на какое время они резервируют номер и есть ли возможность управлять этим значением в соответствии с вашими потребностями.</p>
								</div>
							</div>

							<div class="calculation-ct__input-wrap">
								<input class="calculation-ct__input calculation-ct__input--number js-calculation-ct__input js-calculation-ct__input--long js-only-number" id="session-duration" type="text" placeholder="0" data-validation="number" data-validation-optional="true" data-validation-event="keyup change" data-validation-have-been-blurred="1">
							</div>
						</div>

						<div class="calculation-ct__form-field calculation-ct__form-field--extra clearfix js-slide-toggle js-slide-toggle--accordion">
							<button class="calculation-ct__show-parameter js-slide-toggle__btn" type="button"><span class="dotted-border-link">Дополнительный параметр</span></button>

							<div class="calculation-ct__form-field-inner calculation-ct__form-field-inner--hidden js-slide-toggle__target">
								<div class="calculation-ct__label-wrap">
									<label class="module-h3" for="number-reserve">Резервирование номера после окончания сеанса, секунд&nbsp;</label><span class="calculation-ct__show-tooltip js-calculation-ct__show-tooltip" data-tooltip-content="#tooltip-content-session-reserve">?</span>
								</div>

								<div class="calculation-ct__tooltip-text js-calculation-ct__tooltip-text">
									<div id="tooltip-content-session-reserve">
										<button class="calculation-ct__close-tooltip js-calculation-ct__tooltip-close" type="button">Скрыть подсказку</button>

										<p>В некоторых случаях, актуально закреплять телефонные номера за пользователями, даже после окончания сессии. В таком случае если пользователь записал номер, закрыл сайт и позвонил — информация об источнике будет определена верно.</p>
									</div>
								</div>

								<div class="calculation-ct__input-wrap">
									<input class="calculation-ct__input calculation-ct__input--number js-calculation-ct__input js-calculation-ct__input--reserve js-only-number" id="number-reserve" type="text" placeholder="0" data-validation="number" data-validation-optional="true" data-validation-event="keyup change" data-validation-have-been-blurred="1">
								</div>
							</div>
						</div>
					</form>

					<div class="calculation-ct__note">Для повышения точности используйте<br> данные за 3—6 месяцев</div>
				</div>

				<div class="calculation-ct__right js-calculation-ct__output-container">
					<div class="calculation-ct__message js-calculation-ct__message">
						<p class="module-h3">Введите данные.<br> Мы всё рассчитаем.</p>
					</div>

					<div class="calculation-ct__output hide js-calculation-ct__output">
						<p class="calculation-ct__output-title">Доля покрываемых звонков:</p>

						<div class="calculation-ct__output-item calculation-ct__output-item--light-green">
							<span class="calculation-ct__output-number js-calculation-ct__output-number1"></span> номеров

							<div class="calculation-ct__output-chart">
								<div class="calculation-ct__output-chart-inner js-calculation-ct__output-chart1">
									<span class="calculation-ct__output-chart-percent js-calculation-ct__output-chart1-percent"></span>
								</div>
							</div>
						</div>

						<div class="calculation-ct__output-item calculation-ct__output-item--green">
							<span class="calculation-ct__output-number js-calculation-ct__output-number2"></span> номеров

							<div class="calculation-ct__output-chart">
								<div class="calculation-ct__output-chart-inner js-calculation-ct__output-chart2">
									<span class="calculation-ct__output-chart-percent js-calculation-ct__output-chart2-percent"></span>
								</div>
							</div>
						</div>

						<div class="calculation-ct__output-item calculation-ct__output-item--bright-green">
							<span class="calculation-ct__output-number js-calculation-ct__output-number3"></span> номеров

							<div class="calculation-ct__output-chart">
								<div class="calculation-ct__output-chart-inner js-calculation-ct__output-chart3">
									<span class="calculation-ct__output-chart-percent js-calculation-ct__output-chart3-percent"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="calculation-ct__share">
				<div class="calculation-ct__share-title module-h3">Рассказать о сервисе</div>

				<script src="https://yastatic.net/share2/share.js" async="async"></script>
				<div class="ya-share2" data-services="vkontakte,facebook,gplus,twitter" data-counter data-size="m" data-title="Расчёт пула номеров для динамического колл-трекинга" data-description="Калькулятор рассчитывает количество номеров для отслеживания конверсий по ключевым словам в зависимости от количества сессий, их длительности и времени резервирования номера после завершения сессии." data-image="http://www.wiseadvice.ru/local/templates/main/images/header-logo-big.png"></div>
			</div>

			<form class="calculation-ct__result-order-form js-form-validation js-calc-result-order" action="">
				<label class="module-h3" for="user-email">Отправить результаты на почту</label>

				<div class="calculation-ct__result-order-field">
					<input class="calculation-ct__input calculation-ct__input--email" type="mail" id="user-email" placeholder="example@mail.com" data-validation="email, length" data-validation-length="min6" data-validation-optional="true" data-validation-event="keyup change" data-validation-have-been-blurred="1">

					<input class="calculation-ct__result-order-btn" type="submit" disabled value="Отправить">
				</div>
			</form>
		</div>
	</div>
</section>

<div class="highlighted-block">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<div class="highlighted-block__h2 module-h2"><a class="highlighted-block__link" href="#">Работа в WiseAdvice</a>
			</div>

			<p class="lead">Мы постоянно растем, поэтому нам нужны новые люди: интернет-маркетологи
			(от&nbsp;Junior до Group Head) в офис, на постоянную работу, html-верстальщики, веб-разработчики, веб-дизайнеры (на удаленную работу).</p>
		</div>
	</div>
</div>

<section class="faq" id="faq">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h2 class="faq__h2 module-h2">Вопросы и ответы</h2>

			<dl class="faq__list js-slide-toggle js-slide-toggle--accordion">
				<dt class="faq__question js-slide-toggle__btn"><span>Колл-трекинги сами всё рассчитают, зачем мне калькулятор?</span></dt>
				<dd class="faq__answer hide js-slide-toggle__target">По нашему опыту, колл-трекинги предоставляют весьма различающие расчёты, не раскрывают способы их получения и долю покрываемых звоноков, поэтому мы решили сами разобраться в вопросе. Предлагаемая модель расчёта прозрачна и показала высокую точность на реальных проектах. Калькулятором стоит воспользоваться если вы хотите сразу получить более точные данные о количестве телефонных номеров и избежать периода проб и ошибок, когда данные по кампаниям могут быть неточными (негодными).</dd>

				<dt class="faq__question js-slide-toggle__btn"><span>Какую математическую модель вы используете при расчётах?</span></dt>
				<dd class="faq__answer hide js-slide-toggle__target">В качестве математической модели, описывающей потребление телефонных номеров пользователями, мы используем вероятностное <a class="underlined-link underlined-link--red" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9F%D1%83%D0%B0%D1%81%D1%81%D0%BE%D0%BD%D0%B0" target="_blank" rel="noopener noreferrer">распределение Пуассона.</a> Используемые при расчёте допущения: в рассматриваемый временной интервал не попадают части сессий из предыдущего интервала, а все текущие сессии заканчиваются в текущем интервале, не переходя в следующий. Тем не менее, точность заметно выше чем «количество пользователей онлайн» из Яндекс.Метрики или Google Analytics. Также в расчёте есть информация о доле покрываемых номеров, можно учесть особенности вашего трафика (длительность сеанса и резервирования номера после окончания сессии).</dd>

				<dt class="faq__question js-slide-toggle__btn" id="calculator-error"><span>Калькулятор выдаёт ошибку, в чём дело?</span></dt>
				<dd class="faq__answer hide js-slide-toggle__target">При указанном сочетании данных мы не можем произвести точный расчет. Если у вас нагруженный проект и как следствие количество номеров для покрытия всех звонков слишком велико — почитайте про способы <a class="underlined-link underlined-link--red js-scroll-to js-scroll-to--pool-optimization" href="#pool-optimization">оптимизации пула номеров.</a></dd>

				<dt class="faq__question js-slide-toggle__btn" id="pool-optimization"><span>Как оптимизировать пул номеров?</span></dt>
				<dd class="faq__answer hide js-slide-toggle__target">Если на вашем проекте большие объемы трафика, надо определиться: для всех ли каналов вам требуется динамическое отслеживание? Например, если большую долю вашего трафика составляют переходы по инфозапросам из поисковых систем и вам будет достаточно информации о канале конверсии, можно отказаться от динамики в пользу статического номера. Тогда при расчете пиковой посещаемости и средней длительности сеанса можно исключать этот трафик, что позволит в разы сократить количество необходимых номеров, используемый тариф и общие затраты на колл-трекинг.</dd>

			</dl>
		</div>
	</div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>