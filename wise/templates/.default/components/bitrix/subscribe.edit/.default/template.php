<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class="subscribe-edit">
    <? if ($arResult["MESSAGE"]["CONF"]): ?>
        <script>
            $(function(){
                $.fancybox.open("#subscription-confirm");
            });
        </script>
        <div class="c-subscription-form js-subscriprion-form appWidgetsSubscriptionForm _success"
             id="subscription-confirm">
            <div class="c-subscription-form__message">
                <h3>Спасибо! </h3>
                Ваша подписка успешно подтверждена<br />
                <br />
                <a style="z-index: 99999;position: relative;" href="/subscr_edit.php?ID=<?=$_REQUEST["ID"]?>&CONFIRM_CODE=<?=$_REQUEST["VGWg74VI"]?>"><span>Управлять своей подпиской</span></a>
            </div>
        </div>
    <? endif ?>
    <?
    foreach ($arResult["MESSAGE"] as $itemID => $itemValue)
        echo ShowMessage(array("MESSAGE" => $itemValue, "TYPE" => "OK"));
    foreach ($arResult["ERROR"] as $itemID => $itemValue)
        echo ShowMessage(array("MESSAGE" => $itemValue, "TYPE" => "ERROR"));
    ?>
    <?

    //whether to show the forms
    if ($arResult["ID"] == 0 && empty($_REQUEST["action"]) || CSubscription::IsAuthorized($arResult["ID"])) {

        if ($arResult["ID"] > 0) {
            include("status.php");
        } else echo "<div class='content__notify'>Данная ссылка недействительна</div>"

        ?>
        <?
    }

    ?>
</div>