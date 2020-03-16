<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) { die(); } ?>
<?
$this->setFrameMode(true);
?>
<h2 class="wa-vacancy__h2 module-h2"><?=$arResult['NAME']?></h2>

<div class="wa-vacancy__right-col js-vacancy__col">
    <div class="wa-vacancy__features js-sticky-scroll__sticky-element js-vacancy__features">
<? /* Убрали зарплату
        <div class="wa-vacancy__feature">
            Уровень зарплаты<br>
            <span><?=$arResult['PROPERTIES']['PAYMENT']['~VALUE']?></span>
        </div>
*/ ?>
        <div class="wa-vacancy__feature">
            Город<br>
            <span><?=$arResult['PROPERTIES']['ADRESS']['~VALUE']?></span>
        </div>

        <div class="wa-vacancy__feature">
            Требуемый опыт<br>
            <span><?=$arResult['PROPERTIES']['EXPERIENCE']['~VALUE']?></span>
        </div>

        <div class="wa-vacancy__feature">
            Тип занятости<br>
            <span><?=$arResult['PROPERTIES']['TYPE_OF_EMPLOYMENT']['~VALUE']?></span>
        </div>

        <div class="wa-vacancy__link">
            <a class="btn btn--red btn--with-border js-popup-form" href="#wa-vacancy-response">Откликнуться</a>
        </div>
    </div>
</div>

<div class="wa-vacancy__description text-container js-sticky-scroll__sticky-point">
    <?=$arResult['DETAIL_TEXT']?>
</div>

