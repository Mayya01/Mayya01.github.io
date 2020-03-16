<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?if ($arResult['MESSAGE']['SENT']):?>
<div class="c-subscription-form js-subscriprion-form" id="subscription">

    <div class="c-subscription-form__title"><?=$arResult['MESSAGE']['SENT']?></div>

</div>
<?else:?>
<div class="c-subscription-form js-subscriprion-form subscriptionPopup" id="subscription">

    <div class="c-subscription-form__title">Оформление подписки</div>
	<?
		include("setting.php");
	?>
</div>
<?endif;?>
