<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<?
echo '<pre>';
/*var_dump($arResult["PROPERTIES"]['press']);
var_dump($arResult["PROPERTIES"]['review']);*/
echo '</pre>';
?>
<h1 class="c-about__caption"><?=$arResult["NAME"]?></h1>
<div class="c-about__content clear">
	<img class="content-logo" src="<?=$arResult["DETAIL_PICTURE"]["SRC"]?>" title="<?=$arResult["DETAIL_PICTURE"]["ALT"]?>" alt="<?=$arResult["DETAIL_PICTURE"]["TITLE"]?>">
	<div class="content-attrs">
        <? if ( $arResult["PROPERTIES"]['cats1']['VALUE'] ) {?>
            <div class="content-attrs__item">
                <span><?=$arResult["PROPERTIES"]['cats1']['NAME']?>:</span>
                <? $i = 0; ?>
                <? foreach ( $arResult["PROPERTIES"]['cats1']['VALUE'] as $value1 ) { ?>
                    <a href="/o-kompanii/nash-opyt/projects/?cat1=<?=$arResult['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i]?>" data-cat-id="1" data-id="<?=$arItem['PROPERTIES']['cats1']["VALUE_ENUM_ID"][$i]?>"><?=$value1?></a>
                    <? $i++; ?>
                <? } ?>
            </div>
        <? } ?>
        <? if ( $arResult["PROPERTIES"]['cats2']['VALUE'] ) {?>
            <div class="content-attrs__item">
                <span><?=$arResult["PROPERTIES"]['cats2']['NAME']?>:</span>
                <? $j = 0; ?>
                <? foreach ( $arResult["PROPERTIES"]['cats2']['VALUE'] as $value2 ) { ?>
                    <a href="/o-kompanii/nash-opyt/projects/?cat2=<?=$arResult['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j]?>" data-cat-id="2" data-id="<?=$arItem['PROPERTIES']['cats2']["VALUE_ENUM_ID"][$j]?>"><?=$value2?></a>
                    <? $j++; ?>
                <? } ?>
            </div>
        <? } ?>
        <? if ( $arResult["PROPERTIES"]['cats3']['VALUE'] ) {?>
            <div class="content-attrs__item">
                <span><?=$arResult["PROPERTIES"]['cats3']['NAME']?>:</span>
                <? $k = 0; ?>
                <? foreach ( $arResult["PROPERTIES"]['cats3']['VALUE'] as $value3 ) { ?>
                    <a  href="/o-kompanii/nash-opyt/projects/?cat3=<?=$arResult['PROPERTIES']['cats3']["VALUE_ENUM_ID"][$k]?>" data-cat-id="3" data-id="<?=$arItem['PROPERTIES']['cats3']["VALUE_ENUM_ID"][$k]?>"><?=$value3?></a>
                    <? $k++; ?>
                <? } ?>
            </div>
        <? } ?>
	</div>

	<div class="h2">О клиенте</div>
	<div class="content-text content-area">
		<p>Группа компаний «Детский мир» является крупнейшим розничным оператором торговли  детскими товарами в России и Казахстане.</p>
		<p>Сеть магазинов «Детский мир» занимает лидирующие позиции в России на рынке детских товаров.</p>
		<p>На 16 октября 2015 года в состав Группы компаний входят 328 магазинов «Детский мир» в 132 городах России и Казахстана, 44 магазина ELC.</p>
	</div>

	<div class="h2">Что сделано</div>
	<div class="content-make">
		<div class="content-make__text content-area">
			<p>Доработка и внедрение программ 1С: УПП 8, 1С: Бухгалтерия 8, 1С: ЗУП 8, настройка обменов внутри систем 1С, перенос данных из ранее использованных систем.</p>
		</div>
		<div class="content-make__attr">Количество автоматизированных рабочих мест: <span>800</span></div>
		<div class="content-make__attr">Период работы над проектом: <span>2009—2010</span></div>
        <? if ($arResult["PROPERTIES"]['review']['VALUE']) {?>
		    <a class="projects-plate__review" href="<?=$arResult["PROPERTIES"]['review']['VALUE']?>"><span><?=$arResult["PROPERTIES"]['review']['NAME']?></span></a>
        <? }?>
        <? if ($arResult["PROPERTIES"]['press']['VALUE']) {?>
		    <a class="projects-plate__press-relize" href="<?=$arResult["PROPERTIES"]['press']['VALUE']?>"><span><?=$arResult["PROPERTIES"]['press']['NAME']?></span></a>
        <? }?>
		<!--<a class="projects-plate__vnedrenie" href="/"><span>Подтверждение о внедрении программы</span></a>-->
	</div>

	<div class="h2">Как выполнялся проект</div>
	<div class="content-text content-area">
		<ul>
			<li>Предпроектное обследование. Анализ. Подготовка к проекту</li>
			<li>Первичное обучение пользователей 1С: Бухгалтерия 8</li>
			<li>Первичное обучение пользователей (1С: УПП 8 (учет по МСФО и кадровый учет))</li>
			<li>Разработка ТЗ и ПТИ на доработку ПП «1С: Бухгалтерия 8»</li>
			<li>Разработка ТЗ и ПТИ на доработку ПП «1С: УПП» (МСФО, кадровый учет)</li>
			<li>Разработка ТЗ на перенос начальных данных в 1С: Бухгалтерия 8</li>
			<li>Разработка ТЗ на механизм загрузки данных в 1С: Бухгалтерия 8 из АС «Домино»</li>
			<li>Реализация ТЗ на доработку типового ПП «1С: Бухгалтерия 8»</li>
			<li>Реализация ТЗ на доработку типового ПП «1С: УПП 8» (МСФО, кадровый учет)</li>
			<li>Реализация ТЗ на перенос начальных данных в 1С: Бухгалтерия 8</li>
			<li>Реализация ТЗ на загрузку данных в 1С: Бухгалтерия 8 из АС «Домино»</li>
			<li>Разработка пользовательской документации для 1С: Бухгалтерия 8</li>
			<li>Разработка пользовательской документации для 1С: УПП 8 (МСФО, кадровый учет)</li>
			<li>Тестирование, опытная эксплуатация, обучение пользователей (1С: Бухгалтерия 8)</li>
			<li>Тестирование, опытная эксплуатация, обучение пользователей (1С: УПП 8)</li>
			<li>Ввод в эксплуатацию, сопровождение 1С: Бухгалтерия 8 (ЦО)</li>
			<li>Ввод в эксплуатацию, сопровождение «1С: УПП» (ЦО)</li>
			<li>Обследование используемого ПО расчета заработной платы и кадрового учета</li>
			<li>Первичное обучение пользователей ЗиУП 8</li>
			<li>Составление ТЗ на доработку ПП ЗиУП</li>
			<li>Составление ТЗ на перенос данных в БД ЗиУП</li>
			<li>Реализация ТЗ на доработку типового ПП ЗиУП + реализация ТЗ на перенос данных в ЗиУП</li>
			<li>Разработка пользовательской документации для ЗиУП</li>
			<li>Тестирование, опытная эксплуатация, обучение пользователей ЗиУП</li>
			<li>Внедрение 1С: Зарплата и Управление персоналом 8 в ЦО</li>
			<li>Разработка ТЗ на обмен данными между «1С: Бухгалтерия 8» и «1С: УПП 8»</li>
			<li>Разработка ТЗ на обмен данными между «1С: ЗиУП 8» и «1С: Бухгалтерия 8» (ЦО)</li>
			<li>Реализация ТЗ на обмен данными между «1С: Бухгалтерия 8» и «1С: УПП 8» (ЦО)</li>
			<li>Реализация ТЗ на обмен данными между «1С: ЗиУП 8» и «1С: Бухгалтерия 8» (ЦО)</li>
			<li>Создание унифицированной конфигурации «1С: Бухгалтерия 8» для Филиалов и РТП</li>
			<li>Создание унифицированной конфигурации «1С: ЗиУП 8» для Филиалов и РТП</li>
			<li>Доработка пользовательских документаций для унифицированных конфигураций 1С: Б8.0, 1С: ЗиУП Филиалов и РТП</li>
			<li>Тестирование, опытная эксплуатация унифицированной конфигурации «1С: ЗиУП 8» (в ЦО)</li>
			<li>Тестирование, опытная эксплуатация унифицированной конфигурации «1С: Бухгалтерия 8» (в ЦО)</li>
			<li>Разработка ТЗ на обмен между унифицированной конфигурацией 1С: Бухгалтерия 8 и АС 1С: Бухгалтерия 8 центрального офиса</li>
			<li>Разработка ТЗ на обмен между унифицированной конфигурацией 1С: ЗиУП 8 и АС 1С: ЗиУП 8 центрального офиса</li>
			<li>Реализация ТЗ на обмен между унифицированной конфигурацией 1С: Бухгалтерия 8 и АС 1С: Бухгалтерия 8 центрального офиса</li>
			<li>Реализация ТЗ на обмен между унифицированной конфигурацией 1С: ЗиУП 8 и АС 1С: ЗиУП 8 центрального офиса</li>
		</ul>
	</div>

	<div class="h2">Проект выполнен на базе программ</div>
	<div class="c-typical-products__products">
		<div class="product-list">
			<ul class="product-list__cols">
				<li class="product-list__item">
					<div class="product-plate">
						<div class="product-plate__img-holder">
							<img src="http://wiseadvice-it.ru/upload/iblock/44d/44d1578f94dd5d8f22f992c6284c3723.jpg" alt="1С:Бухгалтерия" class="product-plate__img">
						</div>
						<div class="product-plate__content _price">
							<div class="product-plate__caption h3">
								<a href="/programmy-1s/1s-predpriyatie-8/tipovye-programmy/buhgalteriya-8/" class="product-plate__link default-link">1С:Бухгалтерия</a>
							</div>
							<div class="product-plate__text">
								1С:Бухгалтерия
							</div>
						</div>
						<div class="product-plate__ui-holder _price">
							<div class="product-plate__price">от&nbsp;1 650&nbsp;руб</div>
							<a href="/programmy-1s/1s-predpriyatie-8/tipovye-programmy/buhgalteriya-8/" class="product-plate__btn button">Узнать больше</a>
						</div>
					</div>
				</li>
				<li class="product-list__item" >
					<div class="product-plate">
						<div class="product-plate__img-holder">
							<img src="http://wiseadvice-it.ru/upload/iblock/300/3008b05377ab4fb4ff677a6911b504ab.jpg" alt="1С:Зарплата и Управление Персоналом" class="product-plate__img">
						</div>
						<div class="product-plate__content _price">
							<div class="product-plate__caption h3">
								<a href="/programmy-1s/1s-predpriyatie-8/tipovye-programmy/zup-8/" class="product-plate__link default-link">1С:Зарплата и Управление Персоналом</a>
							</div>
							<div class="product-plate__text">
								1С:Зарплата и Управление Персоналом
							</div>
						</div>
						<div class="product-plate__ui-holder _price">
							<div class="product-plate__price">от&nbsp;2 300&nbsp;руб</div>
							<a href="/programmy-1s/1s-predpriyatie-8/tipovye-programmy/zup-8/" class="product-plate__btn button">Узнать больше</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="h2">Функциональные задачи проекта</div>
	<div class="content-task">
		<ul class="task-list">
			<li class="task-list__item">
				<img class="task-list__item__icon" src="<?=SITE_TEMPLATE_PATH?>/img/task1.png">
				<div class="task-list__item__title"><a href="/">Бухгалтерский учет</a></div>
				<div class="task-list__item__text">
					<p>Постановка и автоматизация бухгалтерского и налогового учета любой сложности для самостоятельных компаний и холдингов.</p>
					<ul class="task-sublist">
						<li class="task-sublist__item">
							<div class="task-sublist__item__title"><a href="/">По РСБУ</a></div>
							<div class="task-sublist__item__text">
								Учет и регламентированная отчетность в соответствии с законодательством РФ.
							</div>
						</li>
						<li class="task-sublist__item">
							<div class="task-sublist__item__title"><a href="/">по МСФО</a></div>
							<div class="task-sublist__item__text">
								Учет и отчетность по международным стандартам (IFRS, GAAP).
							</div>
						</li>
					</ul>
				</div>
			</li>
			<li class="task-list__item">
				<img class="task-list__item__icon" src="<?=SITE_TEMPLATE_PATH?>/img/task2.png">
				<div class="task-list__item__title"><a href="/">Управление взаимоотношениями с клиентами</a> <span>CRM</span></div>
				<div class="task-list__item__text">
					<p>Повышение лояльности клиентов и увеличение объемов продаж за счет автоматизации всех стадий взаимоотношений с покупателями. Контроль и повышение эффективности работы отделов продаж и менеджеров в отдельности.</p>
				</div>
			</li>
		</ul>
	</div>

	<div class="h2">Отраслевая принадлежность проекта</div>
	<div class="content-task">
		<ul class="task-list">
			<li class="task-list__item">
				<img class="task-list__item__icon" src="<?=SITE_TEMPLATE_PATH?>/img/task3.png">
				<div class="task-list__item__title"><a href="/">Автоматизация торговых компаний </a></div>
				<div class="task-list__item__text">
					<p>Управление продажами, закупками и взаимоотношениями с клиентами
						в едином информационном пространстве. Повышение рентабельности торгового предприятия. Качественно новый уровень планирования
						и контроля всех аспектов жизнедеятельности торгового бизнеса.</p>
				</div>
			</li>
		</ul>
	</div>

</div>