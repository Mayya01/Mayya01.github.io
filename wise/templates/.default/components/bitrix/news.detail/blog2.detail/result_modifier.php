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
CModule::IncludeModule("iblock");

$blogDetail = new BlogDetail($arResult);
$arResult = $blogDetail
    ->formatDate()
    ->formatTags()
	->getExpert()
    ->getPrevElement()
    ->getNextElement()
    ->getSameElements()
    ->getArTimeStamps()
    ->formatTimeStamps()
    ->getYouTubeVideoId()
    ->resizeClientLogo()
	->createTableOfContent()
    ->placeFreeConsultForm()
	->placeSubscribeForm()
	->placeDescAfterImgFromTitle()
	->placeBigLink()
    ->getElement();

$arResult['PATH_TO_LIST_LINK_TEXT'] = BlogHelper::getPathToListLinkText($arParams['SECTION']);
$arResult['PREV_ELEMENT_LINK_TEXT'] = BlogHelper::getPrevElementLinkText($arParams['SECTION']);
$arResult['NEXT_ELEMENT_LINK_TEXT'] = BlogHelper::getNextElementLinkText($arParams['SECTION']);
$arResult['TAGS_BLOCK_TITLE'] = BlogHelper::getTagsBlockTitle($arParams['SECTION']);
$arResult['TAGS_BLOCK_OTHER'] = BlogHelper::getOtherTitle($arParams['SECTION']);
$arResult['SHOW_DATE'] = BlogHelper::needDetailShowDate($arParams['SECTION']);
$arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"] = ConvertDateTime($arResult["PROPERTIES"]["RELEVANCE_CHECK_DATE"]["VALUE"], "d.m.Y");

if ($arParams['SECTION'] == 'articles' && $arResult["PROPERTIES"]["BANNER_ID"]["VALUE"]) {
    $arResult["BANNERS"] = [];
    $arSelect = Array("ID", "IBLOCK_ID", "NAME", "PREVIEW_PICTURE", "PREVIEW_TEXT", "DATE_ACTIVE_FROM", "DATE_CREATE", "TAGS");
    $arFilter = Array("ID" => $arResult["PROPERTIES"]["BANNER_ID"]["VALUE"], "ACTIVE_DATE" => "Y", "ACTIVE" => "Y");
    $res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
    while ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $arFields["PIC"] = CFile::ResizeImageGet($arFields['PREVIEW_PICTURE'],
            array('width' => 300,
                'height' => 125),
            BX_RESIZE_IMAGE_EXACT,
            true
        );
		$arFields['TAGS'] = explode(',', $arFields['TAGS']);
        $arFields['VISIBLE_DATE'] = FormatDate('d F Y', MakeTimeStamp($arFields['DATE_ACTIVE_FROM'] ?: $arFields['DATE_CREATE']));
        $arFields["PROPS"] = $ob->GetProperties();

        $arResult["BANNERS"][$arFields["ID"]] = $arFields;
    }
}
$isTags = false;
foreach($arResult['arTags'] as $arTag){
    if($arTag) $isTags = true;
}
$arResult["IS_TAGS"] = $isTags;
if($arResult['PROPERTIES']['PRICE_LINK']['VALUE']){
	$APPLICATION->SetPageProperty("PRICE_LINK", $arResult['PROPERTIES']['PRICE_LINK']['VALUE']);
}

$arResult['showCounter'] = $arResult['SHOW_COUNTER'] + 10500;
define ('IS_ARTICLE', true); // константа обозначающая, что выводится статья

//Замена в тексте bbcode [youtube]xxx[/youtube] на вставку видео с youtube, xxx - код видео
$detailText = $arResult['~DETAIL_TEXT'];
$pattern = "/\[youtube\](.+)\[\/youtube\]/";
preg_match_all($pattern, $detailText, $matches);

if (count($matches) >= 1){
	$videoIds = [];
	foreach($matches[1] as $k=>$match){
		$videoIds[] = $match;
	}
	$rsVideo = CIBlockElement::GetList(
		['ID' => 'ASC'],
		['ID' => $videoIds, 'IBLOCK_CODE' => 'video_youtube'],
		false,
		false,
		['ID', 'IBLOCK_ID', 'PREVIEW_PICTURE', 'PROPERTY_YOUTUBE_CODE']
	);
	while($arVideo = $rsVideo->GetNext()) {
		$arVideo['PREVIEW_PICTURE'] = CFile::GetPath($arVideo['PREVIEW_PICTURE']);
		$arVideous[$arVideo['ID']] = $arVideo;
	}
	foreach($matches[1] as $k=>$match){
		$detailText = str_replace($matches[0][$k], '<div class=" c-post__video  js-wa-youtube-video-player" data-videoid="' . $arVideous[$match]['PROPERTY_YOUTUBE_CODE_VALUE'] . '"
		 data-preview = "' . $arVideous[$match]['PREVIEW_PICTURE'] . '">
						<div class=" c-post__video-iframe js-wa-youtube-video-player-frame"></div>
							<button class="c-training-video__start-btn js-wa-youtube-video-player-btn" type="button">Play
							</button>
						</div>', $detailText);
	}
	$arResult['~DETAIL_TEXT'] = $detailText;
}


//Замена bbcode [event] на актуальное мероприятие
//Получаем актуальное мероприятие
$arSelect = Array("ID", "IBLOCK_ID", "NAME", "DETAIL_PAGE_URL", "DATE_ACTIVE_FROM","PREVIEW_PICTURE","DETAIL_TEXT","PROPERTY_*");
$arFilter = Array("IBLOCK_ID"=>  EnvironmentHelper::getParam("eventsIblockID"),
				  ">=PROPERTY_EVENT_DATE" => date("Y-m-d")." 00:00:00",
				  array(
					  "LOGIC" => "OR",
					  array("PROPERTY_ALL_ARTICLES_VALUE" => "Да"),
					  array("PROPERTY_SELECTED_ARTICLES.ID" => $arResult['ID'])
				  ),
				  "ACTIVE"=>"Y");
$res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>50), $arSelect);
if($ob = $res->GetNextElement())
{
	$arFields = $ob->GetFields();
	$arProps = $ob->GetProperties();
	$arElements = [];
	$arElements[0] = $arFields;
	$arElements[0]['PROPERTIES'] = $arProps;
	$arBlogElements = new BlogList($arElements);
	$arElements = $arBlogElements
		->formatEventDate()
		->resizePhotoEventInArticle()
		->getElements();

	$arEvent = $arElements[0];

	switch ($arEvent['PROPERTIES']['EVENT_TYPE']['VALUE']) {
        case 'Вебинар':
            $inviteText = 'Приглашаем на <br class="hide-up-to-lg"><span>бесплатный</span> вебинар!';
            break;
        case 'Мероприятие':
        default:
        $inviteText = 'Приглашаем на <br class="hide-up-to-lg"><span>бесплатное</span> мероприятие!';
        break;
    }

	$eventBlock = "<div class=\"b-event-preview\">
									<div class=\"b-event-preview__wrapper\">
										<div class=\"b-event-preview__col  \">
											<a class=\"b-event-preview__img-link\" href=\"".$arEvent['DETAIL_PAGE_URL']."\"><img class=\"b-event-preview__img\" src=\"".$arEvent['DISPLAY_PICTURE']."\" alt=\"Планшет\"></a>
											<div class=\"b-event-preview__btn-holder hide-up-to-md\">
												<a href=\"#event-registration\" data-event-id=\"".$arEvent['ID']."\" class=\"button pupop-center\"  onclick=\"setFormEventID(".$arEvent['ID'].");setFormEventName('".$arEvent['NAME']."');setFormEventDate('".$arEvent['displayDateString']."');setFormEventDuration('".$arEvent['PROPERTIES']['DURATION']['VALUE']."');setWebinarLink('".$arEvent['DETAIL_PAGE_URL']."');setFormEventType('" . mb_strtolower($arEvent['PROPERTIES']['EVENT_TYPE']['VALUE']) . "');\">Записаться</a>
											</div>

										</div>
										<div class=\"b-event-preview__info-col \">
											<div class=\"b-event-preview__highlited-text\">$inviteText</div>
											<div class=\"b-event-preview__title\"><a href=\"".$arEvent['DETAIL_PAGE_URL']."\" class=\"default-link\">".$arEvent['NAME']."</a></div>
											<div class=\"b-event-preview__iconic-time _mb12  \">
												<div class=\"iconic-time \">
													<div class=\"iconic-time__section _calendar\">
														<time datetime=\"".$arEvent['displayDateMonth']."T".$arEvent['displayTime']."\">".$arEvent['displayDate']." в ".$arEvent['displayTime']." <sup>мск</sup></time>
													</div>
													<div class=\"iconic-time__section _sandglass\">
														<time datetime=\"60m\">".$arEvent['PROPERTIES']['DURATION']['VALUE']."</time>
													</div>
												</div>
											</div>
											<div class=\"b-event-preview__btn-holder hide-md\">
												<a href=\"#event-registration\" data-event-id=\"".$arEvent['ID']."\" class=\"button pupop-center\">Записаться</a>
											</div>

										</div>

									</div>

								</div>";
} else{
	$eventBlock = "";
}



//Замена в тексте bbcode [event] на блок с анонсом мероприятия
unset($matches);


$detailText = $arResult['~DETAIL_TEXT'];
$pattern = "/\[event\]/";
preg_match_all($pattern, $detailText, $matches);

if (count($matches) >= 1){
	foreach($matches[0] as $k=>$match){
		$videoID = $match;
		$detailText = str_replace($matches[0][$k], $eventBlock, $detailText);
	}
	$arResult['~DETAIL_TEXT'] = $detailText;
}



//Замена в тексте bbcode [events_video] на блок с анонсом мероприятия
unset($matches);

$events_video_banner = '<div class="c-post__promo">
									<div class="c-post__promo-wrapper">
										<div class="c-post__promo-content">
											<div class="c-post__promo-text">Смотрите бесплатно <br> видеозаписи прошедших <br> мероприятий</div>
											<div class="c-post__promo-btn"><a href="/o-kompanii/blog/events/video/" class="button">Смотреть</a></div>
										</div>
									</div>
								</div>';

$detailText = html_entity_decode($arResult['~DETAIL_TEXT'], ENT_NOQUOTES,'UTF-8');
$pattern = "/\[events_video]/";
preg_match_all($pattern, $detailText, $matches);

if (count($matches) >= 1){
	foreach($matches[0] as $k=>$match){
		$videoID = $match;
		$detailText = str_replace($matches[0][$k], $events_video_banner, $detailText);
	}
	$arResult['~DETAIL_TEXT'] = $detailText;
}

$arResult['AUTHOR_FIO'] = trim($arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_NAME_VALUE']." ".$arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_SURNAME_VALUE']." ".$arResult['PROPERTIES']['EXPERT_ID']['values']['PROPERTY_SECONDNAME_VALUE']);

if($arParams['SECTION'] == "articles"){
	$arResult['LOC']['ONE_ITEM'] = GetMessage("ONE_ARTICLE");
	$arResult['LOC']['MANY_ITEMS'] = GetMessage("MANY_ARTICLES");
}elseif($arParams['SECTION'] == "novosti"){
	$arResult['LOC']['ONE_ITEM'] =  GetMessage("ONE_NEWS");
	$arResult['LOC']['MANY_ITEMS'] = GetMessage("MANY_NEWS");
}?>
