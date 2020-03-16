<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
}
?>
<section class="section">
    <div class="content-center">
        <h1><?= $arResult['NAME'] ?></h1>
        <div class="row-fl-md">
            <div class="col-fl-1-2-md col-fl-order-2-md">
                <div class="education-info-card _mb30">
                    <h2 class="education-info-card__title">Варианты обучения</h2>
                    <? foreach ($arResult['LEARN_VARIANTS'] as $variant): ?>
                        <div class="education-info-card__section">
                            <div class="education-info-card__text-col">
                                <div class="education-info-card__text education-info-card__text--icon-<?= $variant['ICON'] ?>">
                                    <div class="education-info-card__text-wrapper">
                                        <span class="education-info-card__type"><?= $variant['NAME'] ?></span>
                                        <? if (MakeTimeStamp($arResult['UF_DISCOUNT_DATE'], 'DD.MM.YYYY') - time() > 0): ?>
                                            <a href="#sales-block" class="education-info-card__sale">Получить скидку <?= $arResult['UF_DISCOUNT_VALUE'] ?>%</a>
                                        <? endif; ?>
                                    </div>
                                </div>
                            </div>
                            <div class="education-info-card__price-col">
                                <span><?= number_format($variant['PRICE'], 0, '', ' ') ?> руб.</span>
                            </div>
                        </div>
                    <? endforeach; ?>
                    <a href="#sales-block" class="button">Посмотреть расписание</a>
                </div>
            </div>
            <div class="col-fl-1-2-md">
                <?= $arResult['~UF_DESC_FIRST'] ?>

            </div>
        </div>
        <div class="row-fl-md">
            <div class="col-fl-1-2-md ">
                <?= $arResult['~UF_DESC_SECOND'] ?>
            </div>
            <div class="col-fl-1-2-md">
                <div class="education-info-card _mt30-up-to-md">
                    <h2 class="education-info-card__title">Варианты оплаты</h2>
                    <div class="education-info-card__text education-info-card__text--icon-printer">
                        <div class="education-info-card__text-wrapper">
                            <span class="education-info-card__type">По счету для Юр. лиц</span>
                        </div>
                    </div>
                    <div class="education-info-card__text education-info-card__text--icon-cards">
                        <div class="education-info-card__text-wrapper">
                            <span class="education-info-card__type">Online-оплата картой</span>
                        </div>
                    </div>
					<a href="/obuchenie-1s/oplata-kursa/?ID=<?= $arResult['ITEMS'][0]['ID']?>" onclick="gtm_magic_send_event('Paycourse');" class="button">Оплатить</a>
                </div>
            </div>

        </div>
</section>
<? if(count($arResult['UF_PAID']) > 0): ?>
    <section class="section _gray">
        <div class="content-center">
            <h2 class="h1">В стоимость курса включено</h2>
            <ul class="check-bullet-list">
                <? foreach ($arResult['UF_PAID'] as $item): ?>
                    <li><?= $item ?></li>
                <? endforeach; ?>
            </ul>
        </div>
    </section>
<? endif; ?>
<? if(count($arResult['UF_AUTHOR']) > 0): ?>
<section class="section _bottom-bordered">
    <div class="content-center">
        <? if (count($arResult['UF_AUTHOR']) == 1): ?>
            <h2 class="h1">Автор курса</h2>
        <? else: ?>
            <h2 class="h1">Авторы курса</h2>
        <? endif; ?>
        <? foreach ($arResult['UF_AUTHOR'] as $arAuthor): ?>
            <div class="author-block">
                <div class="author-block__wrapper">
                    <div class="author-block__img">
                        <img src="<?= $arAuthor['PICTURE'] ?>" alt="<?= $arAuthor['NAME'] ?>"
                             width="132" height="198">
                    </div>
                    <div class="author-block__text">
                        <h3 class="author-block__title"><?= $arAuthor['NAME'] ?></h3>
                        <p><?= $arAuthor['ABOUT']?></p>
                    </div>
                </div>
            </div>
        <? endforeach;?>
    </div>
</section>
<? endif; ?>
<section class="section">
    <div class="content-center">
        <h2 class="h1">Содержание Курса</h2>
        <div data-partially-hidden="true" class="more-info partially-hidden">
            <?= $arResult['~UF_CONTENTS'] ?>
            <div class="partially-hidden__links-wrapper">
                <div class="partially-hidden__link-shadow more-info__link-wrapper">
                    <a href="#" class="dotted-link more-info__link " data-change-text="Свернуть содержание курса">Читать все содержание курса</a>
                </div>
                <a href="#callback-new" onclick="setFormGtmFilling('cheсkin_moreFilling','#callback-new'); setFormGtmSend('cheсkin_moreSent'); setCallbackFormHeader('Записаться на курс');" class="button pupop">Записаться на курс</a>
            </div>
        </div>
        </div>
    </div>
</section>
<? if (count($arResult['ITEMS']) > 0): ?>
    <section class="section _gray">
        <div class="content-center">
            <h2 class="h1" id="sales-block">Расписание занятий и цены:</h2>
            <div class="timetable">
                <? foreach ($arResult['ITEMS'] as $arItem): ?>
                    <div class="timetable__section">
                        <div class="timetable__time">
                            <time><?= ConvertDateTime($arItem['PROPERTIES']['COURSE_DATE']['VALUE'], 'd.m.Y') ?>,</time>
                            <span>Начало в <?= ConvertDateTime($arItem['PROPERTIES']['COURSE_DATE']['VALUE'], 'HH:MI') ?></span>
                        </div>
                        <div class="timetable__type timetable__type--icon-<?= $arItem['PROPERTIES']['TYPE']['VALUE_XML_ID']?>">
                            <span><?= $arItem['NAME'] ?></span>
                        </div>
                        <div class="timetable__price">
                            <span><?= number_format($arItem['PROPERTIES']['PRICE']['VALUE'], 0, '', ' ')?> руб</span>
                        </div>
                        <div class="timetable__btn">
                            <a href="#callback-new" onclick="setFormGtmFilling('cheсkin_dataFilling','#callback-new'); setFormGtmSend('cheсkin_dataSent'); setCallbackFormHeader('Записаться на курс');" class="button pupop">Записаться</a>
                        </div>
                    </div>
                <? endforeach; ?>
            </div>
        </div>
    </section>
<? endif; ?>
<?
$APPLICATION->IncludeComponent('wiseadvice:courses.get.discount.form', '', [
    'IBLOCK_ID'     => EnvironmentHelper::getParam('coursesIBlockID'),
    'ORDER_PAGE'    => '/obuchenie-1s/oplata-kursa',
    'SECTION_ID'    => $arResult['CODE'],
    'DISCOUNT_DATE' => ['DATE' =>  $arResult['UF_DISCOUNT_DATE'], 'VALUE' => $arResult['UF_DISCOUNT_VALUE']]
], $component);

?>
<? if (count($arResult['UF_REVIEW']) > 0): ?>
    <section class="section _gray">
        <div class="content-center">
            <h2 class="h1">Отзывы о курсе </h2>
            <div class="reviews-slider">
                <div class="reviews-slider__wrapper js-reviews-slider">
                    <? foreach ($arResult['UF_REVIEW'] as $arReview): ?>
                        <div class="review-block">
                            <div class="review-block__wrapper">
                                <p class="review-block__text">
                                    <?= $arReview['TEXT'] ?>
                                </p>
                                <div class="review-block__author">
                                    <img src="<?= SITE_TEMPLATE_PATH ?>/img/photos/uknown-author-pic.png" alt="<?= $arReview['NAME'] ?>"
                                         width="60" height="60" class="review-block__author-img">
                                    <div class="review-block__author-info">
                                        <span class="review-block__author-name"><?= $arReview['NAME']?></span>
                                        <span class="review-block__author-position"><?= $arReview['POST']?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <? endforeach; ?>
                </div>
            </div>
            <div class="comments">
                <? $APPLICATION->IncludeComponent("cackle.comments", "", Array(
                    "COMPONENT_TEMPLATE" => ".default"
                )); ?>
            </div>
        </div>
    </section>
<? endif; ?>
