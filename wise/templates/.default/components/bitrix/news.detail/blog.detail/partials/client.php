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
<? if ((string)$arResult['PROPERTIES']['CLIENT_NAME']['VALUE']): ?>
    <h2 class="h2">Клиент</h2>
    <div class="c-post__client">
		<? if ($arResult['DISPLAY_PROPERTIES']['CLIENT_LOGO']['VALUE']): ?>
            <img class="c-post__client-img"
                 src="<?= ($arResult['DISPLAY_PROPERTIES']['CLIENT_LOGO']['RESIZE']['src']) ? :
					 $arResult['DISPLAY_PROPERTIES']['CLIENT_LOGO']['FILE_VALUE']['SRC']; ?>"
                 alt="<?= $arResult['PROPERTIES']['CLIENT_NAME']['VALUE'] ?>">
		<? endif; ?>
        <div class="c-post__client-info">
            <h3 class="h3"><?= $arResult['PROPERTIES']['CLIENT_NAME']['VALUE'] ?></h3>
			<? if ((string)$arResult['PROPERTIES']['CLIENT_DESCRIPTION']['VALUE'] != ''): ?>
                <p><?= $arResult['PROPERTIES']['CLIENT_DESCRIPTION']['VALUE'] ?></p>
			<? endif; ?>
        </div>
		<? if (!empty($arResult['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['FILE_VALUE'])): ?>
            <div class="c-post-preview__link c-post-preview c-post-client-review">
                <a class="dotted-link _review-link pupop"
                   href="#client-review"><?= $arResult['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['NAME'] ?></a>
                <div style="display:none;" id="client-review">
                    <img src="<?= $arResult['DISPLAY_PROPERTIES']['CLIENT_REVIEW_LINK']['FILE_VALUE']['SRC'] ?>"/>
                </div>
            </div>
		<? endif; ?>
		<? if (!empty($arResult['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE'])): ?>
            <div class="c-post-preview__link c-post-preview c-post-project-link">
                <a class="default-link _press-release-link"
                   href="<?= $arResult['DISPLAY_PROPERTIES']['PROJECT_LINK']['LINK_ELEMENT_VALUE'][ $arResult['DISPLAY_PROPERTIES']['PROJECT_LINK']['VALUE'] ]['DETAIL_PAGE_URL'] ?>">
                    Описание проекта
                </a>
            </div>
		<? endif; ?>
    </div>
<? endif; ?>
