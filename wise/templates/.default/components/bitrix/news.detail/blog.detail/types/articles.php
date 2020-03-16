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
?>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wiseadvice-it.ru<?=$arResult['DETAIL_PAGE_URL']?>"
  },
"headline": "<?=$arResult['NAME'];?>",
"description": "<?=$APPLICATION->GetProperty("description");?>",
<?if($arResult['PROPERTIES']['EXPERT_ID']['values']['picture']):?>
"image": "https://wiseadvice-it.ru<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['picture']?>",
<?else:?>
"image": "https://wiseadvice-it.ru/local/templates/main/img/logo_franchisee.png",
<?endif;?>
"datePublished": "<?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?>",
"dateModified": "<?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?>",
"author": {
   <? if ($arResult['PROPERTIES']['EXPERT_ID']['VALUE']) : ?>
    "@type": "Person",
    "name": "<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_NAME_VALUE'] ?> <?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_SURNAME_VALUE'] ?> <?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_SECONDNAME_VALUE'] ?>",
	"description": "<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_POST_VALUE'] ?>",
		<?if($arResult['PROPERTIES']['EXPERT_ID']['values']['picture']):?>
	"image": "https://wiseadvice-it.ru<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['picture']?>"
		<?else:?>
	"image": "https://wiseadvice-it.ru/local/templates/main/img/logo_franchisee.png",
		<?endif;?>
	<?endif;?>
},
  "publisher": {
    "@type": "Organization",
    "name": "WiseAdvice 1С:Франчайзи",
    "logo": {
      "@type": "ImageObject",
      "url": " https://wiseadvice-it.ru/local/templates/main/img/logo_franchisee.png",
      "width": 219,
      "height": 72
    }
  }
}
</script>
<div class="c-post__inner js-sticky">
    <div class="c-post__main content-area article-content">
        <? if ($arResult['PROPERTIES']['EXPERT_ID']['VALUE']) : ?>
            <div class="c-post__article-author clearme">
                <div class="c-post__article-left-col">
                    <div class="c-post__author-photo">
                        <img src="<?= $arResult['PROPERTIES']['EXPERT_ID']['values']['picture'] ?>" alt="Редактор статьи" width="123" height="143">
                    </div>
                    <div class="c-post__author-info">
                        <span>Редактор статьи:</span>
                        <div class="c-post__author-name h3">
                            <?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_NAME_VALUE'] ?>&nbsp;
                            <?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_SURNAME_VALUE'] ?>&nbsp;
                            <?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_SECONDNAME_VALUE'] ?>
                        </div>
                        <span><?= $arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_POST_VALUE'] ?></span>
                        <a href="#callback-new" class="pupop button">Получить консультацию </a>
                    </div>
                </div>
                <? if(($tplType == 'articles')&&(!empty($arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"])) ): ?>
                    <div class="c-post__article-right-col hide-up-to-md">
                        <div class="c-post__article-date">
                            <div class="c-post__actual-text"><span>Актуальность статьи проверена:<br><time datetime="<?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?>"><b><?= $arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] ?></b></time></span></div>
                        </div>
                    </div>
                <? endif; ?>
            </div>
        <? endif; ?>
        <? if (count($arResult['tableOfContent']) > 1): ?>
            <div class="c-post__article-content _gray">
                <div class="h3">Содержание статьи</div>
                <ul>
                    <? foreach ($arResult['tableOfContent'] as $toc): ?>
                        <li><a data-title = 'true' href="#<?= $toc['id'] ?>"><?= $toc['text'] ?></a>
							<?if($toc['h3']):?>
								<ul>
									<? foreach ($toc['h3'] as $toc2): ?>
										<li><a data-title = 'true' href="#<?= $toc2['id'] ?>"><?= $toc2['text'] ?></a></li>
									<?endforeach;?>
								</ul>
							<?endif;?>
						</li>
                    <? endforeach; ?>
                </ul>
            </div>
        <? endif; ?>
        <? if ((string)$arResult['PROPERTIES']['TASK']['VALUE']['TEXT'] != ''): ?>
            <h2 class="h2">Задача</h2>
            <p><?= $arResult['PROPERTIES']['TASK']['~VALUE']['TEXT'] ?></p>
        <? endif; ?>
        <? if ((string)$arResult['PROPERTIES']['CLIENT_NAME']['VALUE']): ?>
            <h2 class="h2">Клиент</h2>
            <div class="c-post__client">
                <? if ($arResult['DISPLAY_PROPERTIES']['CLIENT_LOGO']['VALUE']): ?>
                    <img class="c-post__client-img"
                         src="<?= ($arResult['DISPLAY_PROPERTIES']['CLIENT_LOGO']['RESIZE']['src']) ?: $arResult['DISPLAY_PROPERTIES']['CLIENT_LOGO']['FILE_VALUE']['SRC']; ?>"
                         alt="<?= $arResult['PROPERTIES']['CLIENT_NAME']['VALUE'] ?>">
                <? endif; ?>
                <div class="c-post__client-info">
                    <h3 class="h3"><?= $arResult['PROPERTIES']['CLIENT_NAME']['VALUE'] ?></h3>
                    <? if ((string)$arResult['PROPERTIES']['CLIENT_DESCRIPTION']['VALUE'] != ''): ?>
                        <p><?= $arResult['PROPERTIES']['CLIENT_DESCRIPTION']['VALUE'] ?></p>
                    <? endif; ?>
                </div>
                <?if(!empty($arResult['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['FILE_VALUE'])):?>
                    <div class="c-post-preview__link c-post-preview c-post-client-review">
                        <a class="dotted-link _review-link pupop" href="#client-review"><?=$arResult['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['NAME']?></a>
                        <div style="display:none;" id="client-review">
                            <img src="<?=$arResult['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['FILE_VALUE']['SRC']?>"/>
                        </div>
                    </div>
                <?endif;?>
                <?if(!empty($arResult['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE'])):?>
                    <div class="c-post-preview__link c-post-preview c-post-project-link">
                        <a class="default-link _press-release-link"
                           href="<?=$arResult['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE'][$arResult['DISPLAY_PROPERTIES']['PROJECT_LINK']['VALUE']]['DETAIL_PAGE_URL']?>">
                            Описание проекта
                        </a>
                    </div>
                <?endif;?>
            </div>
        <? endif; ?>
        <?= $arResult['~DETAIL_TEXT'] ?>
    </div>
    <aside class="c-post__aside js-blog-post-aside">
       <div class="c-post__aside-inner">
        <div class="js-sticky__block">

				<? if (!empty($arResult["BANNERS"])): ?>
				<?if($APPLICATION->GetPageProperty("CAROUSEL_SPEED"))
					{
						$carouselSpeed = $APPLICATION->GetPageProperty("CAROUSEL_SPEED")*1000;
					}
					?>
					<div class="items-carousel _margin-bottom _type1">
						<div class="items-carousel__holder product-list">
							<ul data-infinite="data-infinite" data-slides="1"
								<?if($carouselSpeed):?>
								data-autoplayspeed="<?=$carouselSpeed?>" data-autoplay="true"
								<?endif;?>
								data-slides768="1" data-slides1024="1" data-dots="true" class="items-carousel__slider">
								<?foreach ($arResult["PROPERTIES"]["BANNER_ID"]["VALUE"] as $bannerId):?>
									<? $arBanner = $arResult["BANNERS"][$bannerId]; ?>
									<li class="items-carousel__slide">
										<div class="product-list__item _full _no-similar-height">
											<div class="product-plate _w-300 _w-400">
												<?if($arBanner["PIC"]["src"]):?>
													<div class="product-plate__img-holder">
														<img src="<?=$arBanner["PIC"]["src"]?>" alt="<?=$arBanner["NAME"]?>" class="product-plate__img">
													</div>
												<?endif?>
												<div class="product-plate__content _price">
													<div class="product-plate__caption h3">
														<?if (!empty($arBanner["PROPS"]["LINK"]["VALUE"])) : ?>
															<a href="<?=$arBanner["PROPS"]["LINK"]["VALUE"]?>" class="product-plate__link default-link">
																<?=$arBanner["NAME"]?>
															</a>
														<?else:?>
															<span class="product-plate__link default-link">
                                                        <?=$arBanner["NAME"]?>
                                                    </span>
														<?endif?>
													</div>
													<div class="product-plate__text">
														<?=$arBanner["PREVIEW_TEXT"]?>
													</div>
												</div>
												<div class="product-plate__ui-holder _price">

													<div class="product-plate__price">
														<? if (!empty($arBanner['PROPS']['PRICE']['VALUE'])) : ?>
															<?= $arBanner['PROPS']['PRICE']['VALUE'] ?>
														<? else: ?>
															&nbsp;
														<? endif; ?>
													</div>

													<? if (!empty($arBanner["PROPS"]["LINK"]["VALUE"])) : ?>
														<a href="<?=$arBanner["PROPS"]["LINK"]["VALUE"]?>" class="product-plate__btn button">
															Узнать больше
														</a>
													<? endif; ?>
												</div>
											</div>
										</div>

									</li>
								<? endforeach; ?>
							</ul>
						</div>
					</div>
				<?else:?>
				<?
					LazyLoad::includeFile('/local/include/blocks/blog_detail_aside.php', array());
				?>
			<?endif;?>
				 </div>

	</aside>
</div>
<footer class="c-post__footer">

    <div class="c-post__social-wrapper clearme _before-form">
        <div class="c-post__footer-left-col">
            <div class="c-post__share">
                <span>Поделитесь:</span>
                <script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"
                        charset="utf-8"></script>
                <script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
                <div class="ya-share2" data-services="vkontakte,facebook,gplus,twitter,linkedin"></div>
            </div>
        </div>
        <div class="c-post__footer-right-col">
            <ul class="c-post__nav">
				<? if ($arResult['prevElementUrl']): ?>
                    <li>
                        <a class="default-link" href="<?= $arResult['prevElementUrl'] ?>">
							<?= $arResult['PREV_ELEMENT_LINK_TEXT'] ?>
                        </a>
                    </li>
				<? else: ?>
                    <li>
                        <a class="default-link" href="<?= $arParams['SECTION_URL'] ?>">
							<?= $arResult['PATH_TO_LIST_LINK_TEXT'] ?>
                        </a>
                    </li>
                <? endif; ?>
				<? if ($arResult['nextElementUrl']): ?>
                    <li>
                        <a class="default-link" href="<?= $arResult['nextElementUrl'] ?>">
							<?= $arResult['NEXT_ELEMENT_LINK_TEXT'] ?>
                        </a>
                    </li>
                <? else: ?>
                    <li>
                        <a class="default-link" href="<?= $arParams['SECTION_URL'] ?>">
							<?= $arResult['PATH_TO_LIST_LINK_TEXT'] ?>
                        </a>
                    </li>
				<? endif; ?>
            </ul>
        </div>
    </div>
	<? if ($arResult['SHOW_DATE']): ?>
        <time class="c-post__date"><?= $arResult['displayDate'] ?></time>
	<? endif ?>

  

    <div class="clear"></div>
    <? if ($arResult["IS_TAGS"]) {
        LazyLoad::includeFile(SITE_DIR . 'local/include/blocks/articles/tags.php', [
            'TAGS_BLOCK_OTHER' => $arResult['TAGS_BLOCK_OTHER'],
            'arTags'           => $arResult['arTags'],
            'SECTION_URL'      => $arParams['SECTION_URL']
        ]);
    } ?>
	
	<div class="clear"></div>
	<?// форма задайте вопрос консультанту по 1С ?>
	<?$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_SHOW" => "file",
			"PATH" => SITE_DIR.'/local/include/blocks/callback-consult-1C.php'
		)
	);?>

    <? /*
	<?if($arResult["IS_TAGS"]):?>
		<? LazyLoad::includeFile(SITE_DIR . 'local/include/blocks/articles/tags_footer.php', [
			'TAGS'          => $arResult['arTags'],
			'SECTION_URL'   => $arParams['SECTION_URL'],
		]); ?>
	<?endif?>
    */ ?>
    <div class="c-post__comments">
		<? $APPLICATION->IncludeComponent(
			"cackle.comments",
			"",
			Array(
				"COMPONENT_TEMPLATE" => ".default"
			)
		); ?>
    </div>
</footer>


</div>
</section>
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
<section class="c-articles _self-contained-section _gray">
    <div class="content-center">
        <?
        global $arrSameFilter;
        if (count($arResult['sameArticles'])) {
            $arrSameFilter['ID'] = $arResult['sameArticles'];
        } else {
            $arrSameFilter['!=ID'] = $arResult['ID'];
        }

        $template = 'sameArticles';

        $APPLICATION->IncludeComponent("bitrix:news.list", "blog.articles.footer", Array(
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
            "NEWS_COUNT"                      => "4",
            "NEWS_COUNT_MOBILE"               => "2",
            "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
            "PAGER_SHOW_ALL"                  => "Y",
            "PAGER_SHOW_ALWAYS"               => "N",
            "PAGER_TEMPLATE"                  => ".default",
            "PAGER_TITLE"                     => "Новости",
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
        ),
            false
        );
        ?>

