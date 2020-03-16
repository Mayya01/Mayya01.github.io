<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>
<div class="h1">Читайте также</div>
<ul class="c-articles__list">
    <? $ii = 0 ?>
    <? foreach($arResult["ITEMS"] as $ITEM ): ?>
    <li class="c-articles__item js-article <?= (++$ii > intval($arParams['NEWS_COUNT_MOBILE'])) ? 'hide-up-to-md' : '' ?>">
        <div class="c-post-preview">
            <div class="h3"><a class="default-link" href="<?= $ITEM["DETAIL_PAGE_URL"] ?>"><?= $ITEM["NAME"] ?></a></div>
            <p><?= $ITEM["PREVIEW_TEXT"] ?></p>
            <? if($ITEM["IS_IT_HAS_TAGS"]): ?>
                <ul class="c-post-preview__tags">
                    <? foreach ($ITEM["TAGS"] as $TAG): ?>
                        <li>
                            <a href="<?= CommonHelper::nfGetCurPageParam('tags[' . 0 . ']=' . urlencode($TAG), '', NULL, $arParams['SECTION_URL']) ?>">
                                <?= $TAG ?>
                            </a>
                        </li>
                    <? endforeach; ?>
                </ul>
            <? endif; ?>
        </div>
    </li>
    <? endforeach; ?>
</ul>

<div class="c-blog__loader _articles _go-to-link">
    <span><a href="<?= str_replace("#SITE_DIR#/", "/",  $arResult["LIST_PAGE_URL"]) ?>">Перейти ко всем статьям</a></span>
</div>
