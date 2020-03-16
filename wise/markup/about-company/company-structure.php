<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Структура компании");
?>

<div class="layout-center-wrapper">
	<div class="content-col">
		<ul class="breadcrumb">
			<li class="breadcrumb__item"><a href="/">Главная</a></li>
			<li class="breadcrumb__item"><a href="#">О&nbsp;компании</a></li>
		</ul>
	</div>
</div>

<section class="section-nav js-section-nav">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h1 class="section-nav__h2 module-h2">О&nbsp;компании</h1>

			<div class="section-nav__inner clearfix">
				<ul class="section-nav__list">
					<li><a class="underlined-link js-section-nav__link" href="#">Руководство</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">История</a></li>
					<li><a class="underlined-link js-section-nav__link active" href="#">Структура компании</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Партнеры и&nbsp;статусы</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Для прессы</a></li>
				</ul>

				<div class="section-nav__text">Мы&nbsp;— известная и&nbsp;признанная консалтинговая компания, которая вносит ощутимый вклад в&nbsp;развитие цивилизованного и&nbsp;эффективного бизнес-сообщества.</div>
			</div>
		</div>
	</div>
</section>

<section class="wa-structure">
	<div class="wa-structure__h2 layout-center-wrapper">
		<div class="content-col">
			<h2 class="wa-structure__h2 module-h2">Структура компании</h2>
			<p class="lead">С&nbsp;2010&nbsp;года мы&nbsp;развиваемся как мультбрендовая группа компаний.<br> Такая организационная структура обеспечивает лучшую специализацию по&nbsp;каждому направлению деятельности и&nbsp;более гибкое и&nbsp;клиентоориентированное управление. В&nbsp;настоящий момент в&nbsp;структуру WiseAdvice Consalting Group входит 12&nbsp;компаний.</p>

			<ul class="wa-companies clearfix">
				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Патентные услуги</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/gardium-logo.png" alt="Федеральное патентное бюро Гардиум">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Бухгалтерские услуги</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-1c-logo.png" alt="Wiseadvice дочерняя компания 1С">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Аудиторские услуги</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/pravovest-logo.png" alt="Правовест аудит">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Защита прав потребителей</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/pravpunkt-logo.png" alt="ПравПункт">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Программы для финансистов</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/finansist-logo.png" alt="Финансист финансовые программы">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Программы для&nbsp;юристов</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/urait-logo.png" alt="Юрайт вы всегда будете правы">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Услуги оценщиков</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-evaluation-logo.png" alt="Wiseadvice оценка">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Интернет-маркетинг</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/effectum-logo.png" alt="Эффектум продающие сайты">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Финансовый аудит</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/fna-audit-logo.png" alt="ФНА Аудит Financial and Tax Audit">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Налоговые юристы</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/abramov-rulkov-logo.png" alt="Арбитражное адвокатское бюро Абрамов Рульков Партнеры">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Независимые экспертизы</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/honest-logo.png" alt="Honest Экспертные и юридические услуги">
					</div>
				</li>

				<li class="wa-companies__item">
					<div class="wa-companies__content">
						<div class="wa-companies__link">
							<a class="underlined-link" href="">Автоматизация бизнеса</a>
						</div>

						<img class="wa-companies__img" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-1c-franchise-logo.png" alt="Wiseadvice 1С-франчайзи">
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>