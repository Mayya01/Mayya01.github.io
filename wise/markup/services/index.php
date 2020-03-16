<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Услуги");
?>

<section class="wa-services">
	<div class="layout-center-wrapper">
		<div class="service-list-dynamic-filter js-service-list-dynamic-filter">
			<h1 class="service-list-dynamic-filter__h2 module-h2">Услуги консалтинговой группы WiseAdvice</h1>

			<p class="lead">«ВайзЭдвайс»&nbsp;— это многопрофильная консалтинговая группа. Более 350 квалифицированных экспертов оказывают более 200&nbsp;профессиональных услуг, которые помогут сделать ваш бизнес более безопасным и&nbsp;прибыльным.</p>

			<div class="service-list-dynamic-filter__options clearfix">
				<div class="service-list-dynamic-filter__select-slick js-service-list-filter-ddslick" id="service-list-filter-ddslick"></div>

				<button class="service-list-dynamic-filter__btn service-list-dynamic-filter__btn--active js-filter-tag" data-group="all"><span class="service-list-dynamic-filter__btn-label">Все услуги</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid23"><span class="service-list-dynamic-filter__btn-label">Директору, владельцу</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid24"><span class="service-list-dynamic-filter__btn-label">Финансовому директору</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid25"><span class="service-list-dynamic-filter__btn-label">Главному бухгалтеру</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid26"><span class="service-list-dynamic-filter__btn-label">IT-директору</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid27"><span class="service-list-dynamic-filter__btn-label">Юристу</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid28"><span class="service-list-dynamic-filter__btn-label">HR-директору</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid29"><span class="service-list-dynamic-filter__btn-label">Маркетинг, продажи</span></button>

				<button class="service-list-dynamic-filter__btn js-filter-tag" data-group="tagid30"><span class="service-list-dynamic-filter__btn-label">Физлицу</span></button>
			</div>

			<div class="service-list-dynamic-filter__grid js-service-grid">
				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid26","tagid27","tagid29","tagid30"]'>
					<h2 class="wa-service-promo__h2 module-h2">Патентное бюро</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/gardium-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Патентные услуги оказывает Федеральное патентное бюро «Гардиум» Wiseadvice Consulting Group</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Товарные знаки: регистрация и&nbsp;иные действия</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Патентование изобретений и&nbsp;других объектов</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Регистрация программ<br> для ЭВМ и&nbsp;БД</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Авторские права:<br> регистрация и&nbsp;охрана</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Защита прав в&nbsp;ППС, СИП (Арбитарж), ФАС</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid24","tagid25","tagid26","tagid27","tagid28","tagid29"]'>
					<h2 class="wa-service-promo__h2 module-h2">Автоматизация бизнеса на&nbsp;базе «1С»</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-1c-franchise-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги автоматизации оказывает подразделение WiseAdvice-IT. Мы&nbsp;входим в&nbsp;топ-20 крупнейших франчайзи «1С»</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Проекты автоматизации<br> «под ключ»</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Бухгалтерский учет, налоги</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Управления зарплатой, персоналом и&nbsp;кадровый учет (HRM)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Торгово-складской учет (OLTP)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Комплексное управление ресурсами предприятия (ERP)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Казначейство,<br> бюджетирование (FRP)</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Сопровождение (обслуживание)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Управление взаимоотношениями с&nbsp;клиентами (CRM)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Документооборот (DocFlow) и&nbsp;бизнес-процессы (BPM)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Консолидация данных</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Любые программы&nbsp;1С</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid24","tagid25","tagid26","tagid27","tagid28"]'>
					<h2 class="wa-service-promo__h2 module-h2">Аутсорсинг учетных функций</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-1c-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги автоматизации оказывает подразделение 1C-WiseAdvice, входящая в&nbsp;топ-10 бухгалтерских компаний</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Комплексное бухгалтерское обслуживание</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Аутсорсинг расчета<br> заработной платы (PayRoll)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Снижение расходов на&nbsp;бухгалтерию</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Построение эффективной бухгалтерии</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Оптимизация налогов</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Хостинг баз данных&nbsp;1С</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Аренда программ&nbsp;1С</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid24","tagid25","tagid27"]'>
					<h2 class="wa-service-promo__h2 module-h2">Аудиторские услуги</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/pravovest-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги по&nbsp;аудиту оказывает «Правовест Аудит» и&nbsp;«Финансовый и&nbsp;налоговый аудит» WiseAdvice Consulting Group</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Обязательный аудит</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Инициативный аудит</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Налоговый аудит</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Аудит по спецзаданиям</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Консультации аудиторов</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Услуги по стандартам<br> МСФО (IFRS, GAAP)</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid24","tagid25","tagid27","tagid30"]'>
					<h2 class="wa-service-promo__h2 module-h2">Услуги налоговых юристов</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/abramov-rulkov-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги автоматизации оказывает компания «Абрамов, Рульков и&nbsp;партнёры»</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Сопровождение налоговых проверок</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Судебные и&nbsp;досудебные споры</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Возмещение НДС</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Возврат переплаты<br> по&nbsp;налогам</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Адвокат по&nbsp;налоговым преступлениям</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid24","tagid25","tagid27","tagid29","tagid30"]'>
					<h2 class="wa-service-promo__h2 module-h2">Услуги по&nbsp;независимой оценке</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-evaluation-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги по&nbsp;оценке оказывает компания «Интелис Оценка» WiseAdvice Consulting Group</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Недвижимость</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Бизнес (акции, доли)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Оборудование</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Транспортные средства</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Интеллектуальная собственность (НМА)</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid29"]'>
					<h2 class="wa-service-promo__h2 module-h2">Услуги интернет-маркетинга</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/effectum-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги комплексного интернет-маркетинга оказывает компания «Эфектум» WiseAdvice Consulting Group</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Разработка сайтов</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Поисковая оптимизация (SEO)</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Контекстная реклама</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid23","tagid24","tagid25","tagid27","tagid28","tagid30"]'>
					<h2 class="wa-service-promo__h2 module-h2">Услуги иностранным компаниям</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-1c-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги комплексного интернет-маркетинга оказывает компания «Эфектум» WiseAdvice Consulting Group</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Аккредитация иностранных представительств</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Регистрация дочерних компаний</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Внесение изменений в&nbsp;государственный реестр</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Разрешение на&nbsp;работу для иностранных сотрудников</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Разрешение на&nbsp;работу (ВКС)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">3-НДФЛ для иностранных сотрудников</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Закрытие иностранных представительств, филиалов</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid24","tagid26","tagid27"]'>
					<h2 class="wa-service-promo__h2 module-h2">Решения «1С» собственной разработки</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__two-third">
							<div class="wa-service-promo__inner clearfix">
								<div class="wa-service-promo__one-half">
									<img class="wa-service-promo__logo wa-service-promo__logo--urait" src="<?=SITE_TEMPLATE_PATH?>/images/urait-logo--big.jpg" alt="Юрайт. Вы всегда будете правы.">
								</div>

								<div class="wa-service-promo__one-half">
									<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/finansist-logo--big.jpg" alt="Финансист. Финансовые программы.">
								</div>
							</div>

							<p>WiseAdvice является разработчиком собственных решений для удобной работы на базе программ «1С»</p>
						</div>

						<div class="wa-service-promo__one-third text-container">
							<ul class="wa-service-promo__links">
								<li><a class="underlined-link underlined-link--small" href="#">Юрайт: программы для юристов</a></li>

								<li><a class="underlined-link underlined-link--small" href="#">Финансист: программы для финансистов</a></li>
							</ul>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid24","tagid27","tagid30"]'>
					<h2 class="wa-service-promo__h2 module-h2">Досудебные и&nbsp;судебные экспертизы</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/honest-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Услуги оказывает компания Honest WiseAdvice Consulting Group. Экспертиза №1 в&nbsp;Московском регионе</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Автоэкспертиза (ДТП, ОСАГО)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Экспертиза ущерба<br> (залив, пожар)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Почерковедческая<br> (почерка и&nbsp;подписи)</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Технико-криминалистическая экспертиза документов</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Автотехническая экспертиза</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Транспортно-трасологическая</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="wa-service-promo js-service-section" data-groups='["all","tagid30"]'>
					<h2 class="wa-service-promo__h2 module-h2">Юридические услуги для физлиц</h2>

					<div class="wa-service-promo__inner clearfix">
						<div class="wa-service-promo__left">
							<img class="wa-service-promo__logo" src="<?=SITE_TEMPLATE_PATH?>/images/pravpunkt-logo--big.jpg" alt="Гардиум Федеральное патентное бюро">

							<p>Юридические услуги оказывает компания «Прав Пункт» WiseAdvice Consulting Group</p>
						</div>

						<div class="wa-service-promo__right">
							<div class="wa-service-promo__links-inner clearfix">
								<div class="wa-service-promo__center-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Суд со&nbsp;страховой компанией (ОСАГО, КАСКО)</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Юридическая помощь при ДТП</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Суд по&nbsp;заливу квартиры</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Возврат авто автомобиля</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Некачественный ремонт автомобиля</a></li>
									</ul>
								</div>

								<div class="wa-service-promo__right-links text-container">
									<ul class="wa-service-promo__links">
										<li><a class="underlined-link underlined-link--small" href="#">Оспаривание кадастровой стоимости</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Споры с&nbsp;застройщиками</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Споры с&nbsp;турфирмами и&nbsp;авиаперевозчиками</a></li>

										<li><a class="underlined-link underlined-link--small" href="#">Споры с&nbsp;банками</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>