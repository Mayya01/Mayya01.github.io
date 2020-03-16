<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Руководство компании");
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
					<li><a class="underlined-link js-section-nav__link active" href="#">Руководство</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">История</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Структура компании</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Партнеры и&nbsp;статусы</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Для прессы</a></li>
				</ul>

				<div class="section-nav__text">Любая топовая компания начинается с&nbsp;топовых руководителей. Для компаний, работающих в&nbsp;такой сфере как консалтинг, это справедливо вдвойне.</div>
			</div>
		</div>
	</div>
</section>

<section class="wa-leaders">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h2 class="wa-leaders__h2 modulue-h2">Руководство компании</h2>
			<ul class="wa-leaders__list clearfix">
				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/tyagunov.jpg" alt="Иван Тягунов">

					<div class="wa-leaders__leader-name">Иван Тягунов</div>
					<div class="wa-leaders__leader-position">Управляющий партнер группы «WiseAdvice»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/abramov.jpg" alt="Алексей Абрамов">

					<div class="wa-leaders__leader-name">Алексей Абрамов</div>
					<div class="wa-leaders__leader-position">Управляющий партнёр Федерального Патентного Бюро «Гардиум»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/pryamonosov.jpg" alt="Александр Прямоносов">

					<div class="wa-leaders__leader-name">Александр Прямоносов</div>
					<div class="wa-leaders__leader-position">Генеральный директор «WiseAdvice: 1С-Франчайзи»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/druginina.jpg" alt="Маргарита Дружинина">

					<div class="wa-leaders__leader-name">Маргарита Дружинина</div>
					<div class="wa-leaders__leader-position">Управляющий партнёр «Правовест Аудит»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/kritari.jpg" alt="Павел Критари">

					<div class="wa-leaders__leader-name">Павел Критари</div>
					<div class="wa-leaders__leader-position">Генеральный директор «WiseAdvice: финансовый и&nbsp;налоговый аудит»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/berdinskih.jpg" alt="Борис Бердинских">

					<div class="wa-leaders__leader-name">Борис Бердинских</div>
					<div class="wa-leaders__leader-position">Генеральный директор «Юрайт»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/teplyakov.jpg" alt="Вольдемар Тепляков">

					<div class="wa-leaders__leader-name">Вольдемар Тепляков</div>
					<div class="wa-leaders__leader-position">Генеральный директор «WiseAdvice: независимая оценка»</div>
				</li>

				<li>
					<img src="<?=SITE_TEMPLATE_PATH?>/images/feofanov.jpg" alt="Денис Феофанов">

					<div class="wa-leaders__leader-name">Денис Феофанов</div>
					<div class="wa-leaders__leader-position">Генеральный директор Honest</div>
				</li>
			</ul>
		</div>
	</div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>