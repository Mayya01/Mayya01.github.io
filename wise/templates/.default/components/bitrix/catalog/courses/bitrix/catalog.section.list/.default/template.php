<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<div class="product-cards js-courses-cards product-cards--three-columns">
    <? if (\Bitrix\Main\Context::getCurrent()->getRequest()->isAjaxRequest()):
        $APPLICATION->RestartBuffer();
    endif; ?>
    <? foreach ($arResult['SECTIONS'] as $arSection): ?>
        <div class="product-card">
            <div class="product-card__top-section">
                <img src="<?= $arSection['PICTURE']['SRC'] ?>" alt="<?= $arSection['NAME'] ?>" width="299" height="125">
            </div>
            <div class="product-card__wrapper">
                <div class="product-card__middle-section">
                    <h3 class="product-card__title">
                        <a href="<?= $arSection['SECTION_PAGE_URL'] ?>"
                           class="default-link"><?= $arSection['NAME'] ?></a>
                    </h3>
                    <p class="product-card__text"><?= $arSection['DESCRIPTION'] ?></p>
                </div>
                <div class="product-card__bottom-section">
                    <div class="product-card__price"><?= $arSection['MIN_PRICE'] ?></div>
                    <a href="<?= $arSection['SECTION_PAGE_URL'] ?>" class="button pupop">Узнать больше</a>
                </div>
            </div>
        </div>
    <? endforeach; ?>
    <? if (\Bitrix\Main\Context::getCurrent()->getRequest()->isAjaxRequest()) {
        exit;
    } ?>
</div>