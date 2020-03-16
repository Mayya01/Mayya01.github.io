<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Для прессы");
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
					<li><a class="underlined-link js-section-nav__link" href="#">Структура компании</a></li>
					<li><a class="underlined-link js-section-nav__link" href="#">Партнеры и&nbsp;статусы</a></li>
					<li><a class="underlined-link js-section-nav__link active" href="#">Для прессы</a></li>
				</ul>

				<div class="section-nav__text">Мы&nbsp;— известная и&nbsp;признанная консалтинговая компания, которая вносит ощутимый вклад в&nbsp;развитие цивилизованного и&nbsp;эффективного бизнес-сообщества.</div>
			</div>
		</div>
	</div>
</section>

<section class="for-media">
	<div class="layout-center-wrapper">
		<div class="content-col">
			<h2 class="for-media__h2 module-h2">Сотрудничество со СМИ</h2>

			<div class="clearfix">
				<div class="for-media__right">
					<blockquote>
						<p>WiseAdvice Consulting Group информационно открытая компания, заинтересованная в&nbsp;сотрудничестве со&nbsp;СМИ.</p>

						<p>Представители нашей компании готовы выступать в&nbsp;качестве экспертов и&nbsp;ньюсмейкеров, давать свою профессиональную оценку и&nbsp;высказывать компетентное мнение по&nbsp;различным вопросам экономики и&nbsp;бизнеса.</p>

						<cite>Ольга Яковлева<br> <span>PR-менеджер</span></cite>
					</blockquote>

					<div class="for-media__contacts-title">По вопросам сотрудничества:</div>

					<div class="for-media__contacts">
						+7 495 995-82-58 доб. 117<br>

						<div class="for-media__mail">
							<a class="underlined-link underlined-link--small" href="mailto:yakovleva@wiseadvice.ru">yakovleva@wiseadvice.ru</a>
						</div>

						<a class="for-media__vcard dotted-link dotted-link--black" href="#">vCard</a>
					</div>
				</div>

				<div class="for-media__left">
					<img class="for-media__pr-manager" src="<?=SITE_TEMPLATE_PATH?>/images/yakovleva.jpg" alt="<?=SITE_TEMPLATE_PATH?>/images/wiseadvice-1c-franchise-logo.png">

					<a class="for-media__download-link dotted-link" href="#">Скачать пресс-кит</a>
				</div>
			</div>
		</div>
	</div>
</section>

<?$APPLICATION->IncludeComponent(
    'bitrix:news.list',
    'slider.massmediapublic',
    Array(
        'ACTIVE_DATE_FORMAT' => 'd.m.Y',
        'ADD_SECTIONS_CHAIN' => 'N',
        'CACHE_FILTER' => 'N',
        'CACHE_GROUPS' => 'Y',
        'CACHE_TIME' => '36000000',
        'CACHE_TYPE' => 'A',
        'CHECK_DATES' => 'Y',
        'DISPLAY_BOTTOM_PAGER' => 'N',
        'DISPLAY_DATE' => 'N',
        'DISPLAY_NAME' => 'Y',
        'DISPLAY_PICTURE' => 'Y',
        'DISPLAY_PREVIEW_TEXT' => 'N',
        'DISPLAY_TOP_PAGER' => 'N',
        'FIELD_CODE' => array('NAME', 'PREVIEW_TEXT', 'PREVIEW_PICTURE', ''),
        'FILTER_NAME' => '',
        'HIDE_LINK_WHEN_NO_DETAIL' => 'N',
        'IBLOCK_ID' => EnvironmentHelper::getParam('mediaPublicationIBlockId'),
        'IBLOCK_TYPE' => 'articles',
        'INCLUDE_IBLOCK_INTO_CHAIN' => 'N',
        'INCLUDE_SUBSECTIONS' => 'Y',
        'MESSAGE_404' => '',
        'NEWS_COUNT' => '9999',
        'PREVIEW_TRUNCATE_LEN' => '',
        'PROPERTY_CODE' => array('EXT_URL', ''),
        'SET_BROWSER_TITLE' => 'N',
        'SET_LAST_MODIFIED' => 'N',
        'SET_META_DESCRIPTION' => 'N',
        'SET_META_KEYWORDS' => 'N',
        'SET_STATUS_404' => 'N',
        'SET_TITLE' => 'N',
        'SHOW_404' => 'N',
        'SORT_BY1' => 'SORT',
        'SORT_BY2' => 'ID',
        'SORT_ORDER1' => 'ASC',
        'SORT_ORDER2' => 'DESC'
    )
); ?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>