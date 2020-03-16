<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
<div class="c-subscription-form js-subscriprion-form" id="subscription">
    <div class="c-subscription-form__title">Оформление подписки</div>
	<?
	$frame = $this->createFrame("subscribe-form", false)->begin();
	?>
		<form action="<?=$arResult["FORM_ACTION"]?>" id="">

		<label class="c-subscription-form__label">Ваш e-mail
			<input name="sf_EMAIL" class="c-subscription-form__field" id="subscription-email" type="email" placeholder="example@yandex.ru" required />
		</label>

		<div class="c-subscription-form__subtitle">Интересные для вас разделы:</div>

	        <div class="checkboxes clearme">
	            <div class="c-subscription-form__left-col checkboxes__row">

				<?$rubricCnt = 0;?>
				<?foreach($arResult["RUBRICS"] as $itemID => $itemValue):?>
					<?if ($rubricCnt == round(count($arResult['RUBRICS'])/2)):?>
					</div>

            		<div class="c-subscription-form__right-col checkboxes__row">
					<?endif;?>
					<label for="sf_RUB_ID_<?=$itemValue["ID"]?>">
						<input type="checkbox" name="sf_RUB_ID[]" id="sf_RUB_ID_<?=$itemValue["ID"]?>" value="<?=$itemValue["ID"]?>" data-label="<?=$itemValue["NAME"]?>" checked/><span></span><?=$itemValue["NAME"]?>
					</label>
					<?$rubricCnt++;?>
				<?endforeach;?>

				</div>
			</div>

			<input type="submit" name="OK" value="Подписаться" class="button" />

			<div class="footnote"><span class="_star">*</span><span>Данные конфиденциальны и не могут быть переданы третьим лицам</span></div>
		</form>
	<?
	$frame->beginStub();
	?>
		<form action="<?=$arResult["FORM_ACTION"]?>" id="">

			<label class="c-subscription-form__label">Ваш e-mail
				<input name="sf_EMAIL" class="c-subscription-form__field" id="subscription-email" type="email" placeholder="example@yandex.ru" required />
			</label>
			
			

			<div class="c-subscription-form__subtitle">Интересные для вас разделы:</div>

	        <div class="checkboxes clearme">
	            <div class="c-subscription-form__left-col checkboxes__row">
				
				<?$rubricCnt = 0;?>
				<?foreach($arResult["RUBRICS"] as $itemID => $itemValue):?>
					<?if ($rubricCnt == round(count($arResult['RUBRICS'])/2)):?>
					</div>

            		<div class="c-subscription-form__right-col checkboxes__row">
					<?endif;?>
					<label for="sf_RUB_ID_<?=$itemValue["ID"]?>">
						<input type="checkbox" name="sf_RUB_ID[]" id="sf_RUB_ID_<?=$itemValue["ID"]?>" value="<?=$itemValue["ID"]?>" data-label="<?=$itemValue["NAME"]?>" checked/><span></span><?=$itemValue["NAME"]?>
					</label>
					<?$rubricCnt++;?>
				<?endforeach;?>

				</div>
        	</div>

        	<input type="submit" name="OK" value="Подписаться" class="button" />

			<div class="footnote"><span class="_star">*</span><span>Данные конфиденциальны и не могут быть переданы третьим лицам</span></div>
			<?showPersonalNotice(null, 'Подписаться')?>
		</form>
	<?
	$frame->end();
	?>
</div>
