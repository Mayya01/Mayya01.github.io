<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
$component->SetResultCacheKeys(array('TAGS')); // чтобы в эпилоге были доступны теги
$tplType = $arParams['SECTION'];
?>

<section class="post-page js-blog">
	<div class="post-page__main post-block">
		<header class="post-block__header post-banner<?if($arParams['SECTION'] == 'novosti'):?> post-banner--centered<?endif;?> js-blog-header js-favorites-block">
			<div class="content-center">
				<? $APPLICATION->IncludeComponent("bitrix:breadcrumb", "breadcrumb_blog", array(
					"START_FROM" => "0",
					"PATH"       => "",
					"SITE_ID"    => SITE_ID
				), false); ?>
				<div class="post-banner__labels">
					<time class="post-banner__date"><?= $arResult['displayDate'];?></time>
					<span class="post-banner__views"><?= $arResult['showCounter'] ?></span>
					<span class="post-banner__selected  js-favorites-link"
						  data-element-id="<?= $arResult['ID'] ?>"></span>
					<span class="post-banner__search-icon js-blog-header__search-btn"></span>
				</div>
				<h1><? AD_H1($arResult['NAME']) ?></h1>
				<? if ($arParams['SECTION'] == 'articles'): ?>
					<? if ($arResult['PROPERTIES']['EXPERT_ID']['VALUE']) : ?>
						<div class="article-author">
							<div class="article-author__wrapper">
								<div class="article-author__info">
									<div class="article-author__img-holder">
										<img src="<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['picture'] ?>"
											 alt="<?= $arResult['AUTHOR_FIO']; ?>">
									</div>
									<div class="article-author__text">
										<div class="article-author__author-info">
										<span class="article-author__name">
											<?= $arResult['AUTHOR_FIO']; ?>,
										</span>
											<span
												class="article-author__position"><?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_POST_VALUE'] ?></span>
										</div>
										<div class="post-banner__remark hide-up-to-md">
											<time><?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?></time>
											<span class="post-banner__remark-type">
												<? if ($arResult['arTags'][0]): ?><?= $arResult['arTags'][0] ?><? endif; ?>
											</span>
											<? if (!empty($arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"])): ?>
												<span
													class="post-banner__remark-check">Актуальность проверена: <?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?></span>
											<? endif; ?>
										</div>
									</div>
								</div>
								<div class="article-author__btn-wrapper">
									<a href="#callback-new" onclick="setCallbackFormHeader('Получить бесплатную консультацию эксперта')" class="button pupop _lg-font">Получить консультацию</a>
									<span
										class="article-author__btn-label article-author__btn-label--arrowed">Бесплатно</span>
								</div>
							</div>
						</div>

					<?endif;?>
				<? endif; ?>
			</div>
			<div class="search-overlay js-blog-header__overlay">
				<div class="search-overlay__overlay"></div>
				<div class="content-center">
					<? $APPLICATION->IncludeComponent("bitrix:search.form", "blog2.searchForm", array(
							"COMPONENT_TEMPLATE" => "blog.searchForm",
							"PAGE"               => "#SITE_DIR#o-kompanii/blog/search/",
							"USE_SUGGEST"        => "N"
						), false); ?>
					<? $APPLICATION->IncludeComponent("bitrix:menu", "blog2Menu", Array(
						"ALLOW_MULTI_SELECT"    => "N",
						"CHILD_MENU_TYPE"       => "left",
						"COMPONENT_TEMPLATE"    => ".default",
						"DELAY"                 => "N",
						"MAX_LEVEL"             => "1",
						"MENU_CACHE_GET_VARS"   => "",
						"MENU_CACHE_TIME"       => "3600",
						"MENU_CACHE_TYPE"       => "N",
						"MENU_CACHE_USE_GROUPS" => "Y",
						"ROOT_MENU_TYPE"        => "left",
						"USE_EXT"               => "N",
						//'COUNT'                 => $arParams['PARAMS']
					), false); ?>
					<span class="search-overlay__close-btn js-blog-header__overlay-close-btn"></span>
				</div>
			</div>
		</header>
		<div class="post-block__main js-sticky" data-bottom = "0">
			<div class="content-center">
				<div class="row-fl-md">
					<div class="col-fl-1-3-md col-fl-order-2-md ">
							<? if (count($arResult['tableOfContent']) > 1): ?>
							<div class="post-block__content js-post-content">
								<div class="post-block__content-title js-post-content__btn-outher">Содержание <span
										class="hide-up-to-md">статьи</span></div>
								<ul class="numbered-list numbered-list--xs-font numbered-list--no-zero js-post-content__outher-content">
									<? foreach ($arResult['tableOfContent'] as $toc): ?>
										<? if (!$toc['h3']): ?>
											<li class="numbered-list__item"><a data-title='true'
																			   href="#<?= $toc['id'] ?>"><?= $toc['text'] ?></a>
											</li>
										<? else: ?>
											<li class="numbered-list__item"><a class="js-post-content__btn-inner"
																			   href="#<?= $toc['id'] ?>"><?= $toc['text'] ?></a>
												<ul class="js-post-content__inner-content bordered-list">
													<? foreach ($toc['h3'] as $toc2): ?>
														<li class="bordered-list__item">
															<a class="bordered-list__link  js-post__anchor-link" data-title='true'
															   href="#<?= $toc2['id'] ?>"><?= $toc2['text'] ?></a>
														</li>
													<? endforeach; ?>
												</ul>
											</li>
										<? endif; ?>
									<? endforeach; ?>
								</ul>
							</div>
						<? endif; ?>
							<div class="js-sticky__block product-card-preview-slider hide-up-to-md">
								<? if (!empty($arResult["BANNERS"])): ?>
								<? if ($APPLICATION->GetPageProperty("CAROUSEL_SPEED")) {
									$carouselSpeed = $APPLICATION->GetPageProperty("CAROUSEL_SPEED") * 1000;
								}
								?>
								<div class=" js-product-card-preview-slider"
									<?if($carouselSpeed):?>
										data-autoplayspeed="<?=$carouselSpeed?>" data-autoplay="true"
									<?endif;?>
								>
									<? foreach ($arResult["PROPERTIES"]["BANNER_ID"]["VALUE"] as $bannerId): ?>
									<? $arBanner = $arResult["BANNERS"][ $bannerId ]; ?>
									<div class="product-card-preview">
										<div class="product-card-preview__img-holder">
											<a href="<?= $arBanner["PROPS"]["LINK"]["VALUE"] ?>"><? if ($arBanner["PIC"]["src"]): ?>
													<img src="<?= $arBanner["PIC"]["src"] ?>"
														 alt="<?= $arBanner["NAME"] ?>"
											<? endif ?>
											</a>
										</div>
										<div class="product-card-preview__text-wrapper">
											<div class="product-card-preview__title"> <?= $arBanner["NAME"] ?></div>
											<p class="product-card-preview__text"><?= $arBanner["PREVIEW_TEXT"] ?> </p>
										</div>
										<div class="product-card-preview__footer">
											<div class="product-card-preview__price">
												<? if (!empty($arBanner['PROPS']['PRICE']['VALUE'])) : ?>
													<span><?= $arBanner['PROPS']['PRICE']['VALUE'] ?></span>
												<? endif; ?>
											</div>
											<div class="product-card-preview__link-wrapper">
												<a href="<?= $arBanner["PROPS"]["LINK"]["VALUE"] ?>" class="product-card-preview__link">Подробнее</a>
											</div>
										</div>
									</div>
									<? endforeach; ?>
								</div>
								<? endif; ?>
							</div>
					</div>
					<div class="col-fl-2-3-md">
						<?= $arResult['~DETAIL_TEXT'] ?>

						<?if($arParams['SECTION'] == 'novosti'):?>
						<?
						$APPLICATION->IncludeComponent("bitrix:form.result.new", "blog2.subscribe", array(
								"WEB_FORM_ID"            => "ARTICLES_SUBSCRIBE",
								"ZATO_DIRECTION"         => FormHelper::getDefaultZatoDirection(),
								"IGNORE_CUSTOM_TEMPLATE" => "N",
								"USE_EXTENDED_ERRORS"    => "Y",
								"SEF_MODE"               => "N",
								"CACHE_TYPE"             => "A",
								"CACHE_TIME"             => "3600",
								"LIST_URL"               => "",
								"EDIT_URL"               => "",
								"SUCCESS_URL"            => "",
								"CHAIN_ITEM_TEXT"        => "",
								"CHAIN_ITEM_LINK"        => "",
								"SEF_FOLDER"             => "",
								"WEB_FORM_ID2"           => "N",
								"ITEM_TITLE_VALUE"       => "",
								"ITEM_URL_VALUE"         => "",
								"FORM_CONTAINER_CLASS"   => "js-ajax", // yeah, i know. It's SEO, baby.
								"FORM_CONTAINER_ID"      => "callback-modal",
								"INNER_BANNER"           => "Y",
								"CUSTOM_TEXT_1" 			 => "Не пропустите свежие новости",
								"CUSTOM_TEXT_2"          => 'Подпишитесь на рассылку и получайте самые свежые новости
																<br class="hide-up-to-md">  1 раз в неделю специально для вас',
								"VARIABLE_ALIASES"       => array(
									"WEB_FORM_CLASS" => "js-ajax",
									"WEB_FORM_ID"    => "ARTICLES_SUBSCRIBE",
									"RESULT_ID"      => "RESULT_ID",
								)
							), false);
						?>
					<?endif;?>

					</div>
				</div>
			</div>
		</div>
		<footer class="post-block__footer">
			<div class="content-center">
				<? if ($arParams['SECTION'] == 'articles'): ?>
					<? if ($arResult['PROPERTIES']['EXPERT_ID']['VALUE']) : ?>
						<div class="article-author post-block__author">
							<span class="article-author__label">Автор статьи</span>
							<div class="article-author__wrapper">
								<div class="article-author__info">
									<div class="article-author__img-holder">
										<img src="<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['picture'] ?>"
											 alt="<?= $arResult['AUTHOR_FIO'] ?>">
									</div>
									<div class="article-author__text">
										<div class="article-author__author-info">
											<span class="article-author__name"><?= $arResult['AUTHOR_FIO'] ?>,</span> <span
												class="article-author__position"><?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_POST_VALUE'] ?></span>
										</div>
									</div>
								</div>
								<div class="article-author__btn-wrapper">
									<a href="#callback-new"  onclick="setCallbackFormHeader('Получить бесплатную консультацию эксперта')" class="button pupop">Получить консультацию</a>
									<span class="article-author__btn-label article-author__btn-label--red">Бесплатно</span>
								</div>
							</div>
						</div>
					<? endif; ?>
				<? endif; ?>
				<div class="social-networks post-block__social">
					<span class="social-networks__label">Рассказать друзьям</span>
					<script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"
							charset="utf-8"></script>
					<script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
					<div class="ya-share2" data-services="vkontakte,facebook,twitter,telegram,whatsapp"></div>
				</div>
				<? if ($arResult["IS_TAGS"]) : ?>
					<? LazyLoad::includeFile(SITE_DIR . 'local/include/blocks/articles/tags_blog2.php', [
						'TAGS_BLOCK_OTHER' => $arResult['TAGS_BLOCK_OTHER'],
						'arTags'           => $arResult['arTags'],
						'SECTION_URL'      => $arParams['SECTION_URL']
					]); ?>
				<? endif; ?>

				<div class="post-pagination post-block__pagination">
					<? if ($arResult['prevElementUrl']): ?>
						<div class="post-pagination__left">
							<a class="post-pagination__link post-pagination__link--prev"
							   href="<?= $arResult['prevElementUrl'] ?>">Предыдущая <?= $arResult['LOC']['ONE_ITEM'] ?></a>
							<div class="post-pagination__text"><?= $arResult['prevElementName'] ?></div>
						</div>
					<? else: ?>
						<div class="post-pagination__left">
							<a class="post-pagination__link post-pagination__link--prev"
							   href="<?= $arParams['SECTION_URL'] ?>">Предыдущая <?= $arResult['LOC']['ONE_ITEM'] ?></a>
							<div class="post-pagination__text"><?= $arResult['PATH_TO_LIST_LINK_TEXT'] ?></div>
						</div>
					<? endif; ?>
					<? if ($arResult['nextElementUrl']): ?>
						<div class="post-pagination__right">
							<a class="post-pagination__link post-pagination__link--next"
							   href="<?= $arResult['nextElementUrl'] ?>">Следующая <?= $arResult['LOC']['ONE_ITEM'] ?></a>
							<div class="post-pagination__text">    <?= $arResult['nextElementName'] ?></div>
						</div>
					<? else: ?>
						<div class="post-pagination__right">
							<a class="post-pagination__link post-pagination__link--next"
							   href="<?= $arParams['SECTION_URL'] ?>">Следующая <?= $arResult['LOC']['ONE_ITEM'] ?></a>
							<div class="post-pagination__text"><?= $arResult['PATH_TO_LIST_LINK_TEXT'] ?></div>
						</div>
					<? endif; ?>

				</div>
			</div>
		</footer>
	</div>
	<div class="post-page__remark">
		<div class="content-center">
			<? if ($arParams['SECTION'] == "articles"): ?>
				<div class="h2">Другие статьи по темам</div>
			<? elseif ($arParams['SECTION'] == "novosti"): ?>
				<div class="h2">Другие новости по темам</div>
			<? endif; ?>
			<?
			global $arrSameFilter;
			if (count($arResult['sameArticles'])) {
				$arrSameFilter['ID'] = $arResult['sameArticles'];
			} else {
				$arrSameFilter['!=ID'] = $arResult['ID'];
			}

			$template = 'sameArticles';

			$APPLICATION->IncludeComponent("bitrix:news.list", "blog2.articles.footer", Array(
				"HIDE_DESCRIPTION"                => true,
				"ACTIVE_DATE_FORMAT"              => "d.m.Y",
				"ADD_SECTIONS_CHAIN"              => "N",
				'ADD_ELEMENT_CHAIN'               => 'N',
				"INCLUDE_IBLOCK_INTO_CHAIN"       => "N",
				"AJAX_MODE"                       => "N",
				"AJAX_OPTION_ADDITIONAL"          => "",
				"AJAX_OPTION_HISTORY"             => "N",
				"AJAX_OPTION_JUMP"                => "N",
				"AJAX_OPTION_STYLE"               => "Y",
				"CACHE_FILTER"                    => "N",
				"CACHE_GROUPS"                    => "Y",
				"CACHE_TIME"                      => "36000000",
				"CACHE_TYPE"                      => "A",
				"CHECK_DATES"                     => "Y",
				"COMPONENT_TEMPLATE"              => ".default",
				"DETAIL_URL"                      => "",
				"DISPLAY_BOTTOM_PAGER"            => "Y",
				"DISPLAY_DATE"                    => "Y",
				"DISPLAY_NAME"                    => "Y",
				"DISPLAY_PICTURE"                 => "N",
				"DISPLAY_PREVIEW_TEXT"            => "Y",
				"DISPLAY_TOP_PAGER"               => "N",
				"FIELD_CODE"                      => array("TAGS"),
				"FILTER_NAME"                     => "arrSameFilter",
				"HIDE_LINK_WHEN_NO_DETAIL"        => "N",
				"IBLOCK_ID"                       => $arParams["IBLOCK_ID"],
				"NEWS_COUNT"                      => "3",
				"NEWS_COUNT_MOBILE"               => "2",
				"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
				"PAGER_SHOW_ALL"                  => "Y",
				"PAGER_SHOW_ALWAYS"               => "N",
				"PAGER_TEMPLATE"                  => ".default",
				"PAGER_TITLE"                     => $arResult['LOC']['MANY_ITEMS'],
				"PREVIEW_TRUNCATE_LEN"            => "200",
				'PROPERTY_CODE'                   => array(
					0 => "",
					1 => "VIDEO_ID",
					2 => "CLIENT_NAME",
					3 => "CLIENT_LOGO",
					4 => "TASK",
					5 => 'CLIENT_DESCRIPTION',
					6 => 'CLIENT_REVIEW_LINK',
					7 => 'PROJECT_LINK'
				),
				"SET_BROWSER_TITLE"               => "N",
				"SET_LAST_MODIFIED"               => "N",
				"SET_META_DESCRIPTION"            => "N",
				"SET_META_KEYWORDS"               => "N",
				"SET_STATUS_404"                  => "N",
				"SET_TITLE"                       => "N",
				"SHOW_404"                        => "N",
				"SORT_BY1"                        => "ACTIVE_FROM",
				"SORT_BY2"                        => "SORT",
				"SORT_ORDER1"                     => "DESC",
				"SORT_ORDER2"                     => "ASC",
				"SECTION"                         => $arParams['SECTION'],
				"SECTION_URL"                     => $arParams['SECTION_URL'],
			), false);
			?>



			<? if ($arParams['SECTION'] == 'articles'): ?>
				<div class="more-info post-page__more-info">
					<a href="" class=" dowload-more more-info__link">Загрузить комментарии <span id="commentsCount">0</span></a>
					<div class="more-info__container">
						<div class="c-post__comments">
							<? $APPLICATION->IncludeComponent("cackle.comments", "", Array(
									"COMPONENT_TEMPLATE" => ".default"
								)); ?>
						</div>
					</div>
				</div>
				<?
				$APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
					"AREA_FILE_SHOW" => "file",
					"PATH"           => SITE_DIR . 'local/include/banners/presents_buying_its_prof.php'
				));
				?>
			<? endif; ?>
		</div>
	</div>
</section>

<div style="display: none;">
	<?
	$APPLICATION->IncludeComponent(
		"bitrix:form.result.new",
		"ArticlesSubscribe",
		array(
			"WEB_FORM_ID" => "ARTICLES_SUBSCRIBE",
			"ZATO_DIRECTION" => FormHelper::getDefaultZatoDirection(),
			"IGNORE_CUSTOM_TEMPLATE" => "N",
			"USE_EXTENDED_ERRORS" => "Y",
			"SEF_MODE" => "N",
			"CACHE_TYPE" => "A",
			"CACHE_TIME" => "3600",
			"LIST_URL" => "",
			"EDIT_URL" => "",
			"SUCCESS_URL" => "",
			"CHAIN_ITEM_TEXT" => "",
			"CHAIN_ITEM_LINK" => "",
			"SEF_FOLDER" => "",
			"WEB_FORM_ID2" => "N",
			"ITEM_TITLE_VALUE" => "",
			"ITEM_URL_VALUE" => "",
			"FORM_CONTAINER_CLASS" => "js-ajax", // yeah, i know. It's SEO, baby.
			"FORM_CONTAINER_ID" => "callback-modal",
			"VARIABLE_ALIASES" => array(
				"WEB_FORM_CLASS" => "js-ajax",
				"WEB_FORM_ID" => "ARTICLES_SUBSCRIBE",
				"RESULT_ID" => "RESULT_ID",
			)
		),
		false
	);
	?>
</div>
