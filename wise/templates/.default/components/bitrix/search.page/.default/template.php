<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
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

$bxajaxid = CAjax::GetComponentID($component->__name, $component->__template->__name, '');
?>

<section class="c-search-results js-loadSearchElements <?if(!$arResult['SEARCH']):?>_pb50<?endif;?>">
	<div class="content-center">
		<h1 class="h1">Поиск по сайту</h1>
		<div class="c-search-results__top">
			<form class="c-search-results__form"  method="get">
				<div class="c-search-results__form-row clear">
					<div class="c-search-results__left-col">
						<input type="text" name="q" value="<?=$arResult["REQUEST"]["QUERY"]?>" class="c-search-results__input" placeholder="">
					</div>
					<div class="c-search-results__right-col">
						<input type="submit" value="Найти" class="c-search-results__btn button">
					</div>
				</div>
			</form>
			<ul class="b-search-results-tabs js-switch-active">
				<li class="b-search-results-tabs__tab <?if($_REQUEST['how'] == 'd'):?>_is-active<?endif;?> js-switch-active__btn">
					<a href="<?=$arResult["URL"]?>&amp;how=d"><span>По дате</span></a>
				</li>
				<li class="b-search-results-tabs__tab <?if($_REQUEST['how'] == 'r' || !isset($_REQUEST['how'])):?>_is-active<?endif;?> js-switch-active__btn">
					<a href="<?=$arResult["URL"]?>&amp;how=r"><span>По релевантности</span></a>

				</li>
			</ul>
		</div>

		<div id="search-results-containter" class="c-search-results__blocks js-search-content">

					<?foreach ($arResult['SEARCH'] as $arItem):?>
						<article class="b-search-result-block js-search-result-item">
							<time datetime="<?=$arItem['displayDate']?>"><?=$arItem['displayDate']?></time>
							<div class="b-search-result-block__title"><a class="default-link" href="<?=$arItem['URL']?>"><?=$arItem['TITLE']?></a></div>
							<p><?=$arItem['BODY_FORMATED']?></p>
						</article>
					<?endforeach;?>

		</div>
		<?/*if($arResult["NAV_RESULT"]->nEndPage > 1 && $arResult["NAV_RESULT"]->NavPageNomer<$arResult["NAV_RESULT"]->nEndPage):?>
		<div class="c-search-results__show-more-btn" id="btn_<?=$bxajaxid?>">
			<a  data-ajax-id="<?=$bxajaxid?>" href="javascript:void(0)" data-show-more="<?=$arResult["NAV_RESULT"]->NavNum?>" data-next-page="<?=($arResult["NAV_RESULT"]->NavPageNomer + 1)?>" data-max-page="<?=$arResult["NAV_RESULT"]->nEndPage?>" href="#" class="button">Показать ещё 10 результатов</a>
		</div>
		<?endif*/?>
		<? if ($arResult['NAV_RESULT']->NavPageNomer < $arResult['NAV_RESULT']->NavPageCount): ?>
			<div class="c-search-results__show-more-btn js-search-loader" id="btn_<?=$bxajaxid?>"
				 data-nav="<?= $arResult['NAV_RESULT']->NavNum ?>"
				 data-page="<?= ($arResult['NAV_RESULT']->NavPageNomer + 1) ?>"
				 data-lastPage="<?= $arResult['NAV_RESULT']->NavPageCount ?>"
				 data-count="<?= $arResult['AJAX_PAGEN_DATA']['elementOnNextPage'] ?>">
				<a href="javascript:void(0)" class="button js-search-loader-wrapper">Показать ещё <?= $arResult['AJAX_PAGEN_DATA']['elementOnNextPage'] ?> <span class="hide-up-to-md">результатов</span></a>
			</div>

		<? endif; ?>

		<?if(!$arResult['SEARCH']):?>
		<div class="c-search-results__content">
			<h4>По вашему запросу ничего не найдено.</h4>
			<p>Попробуйте другую формулировку, или задайте свой вопрос эксперту.</p>
		</div>
		<?endif;?>
	</div>
</section>

<?if(!$arResult['SEARCH']):?>
	<section class="c-consultation-block _top-border">
		<div class="content-center">
<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_SHOW" => "file",
		"PATH" => SITE_DIR.'/local/include/blocks/callback-consult-1C-for-search.php'
	)
);?>
	</div>
</section>
<?endif;?>

