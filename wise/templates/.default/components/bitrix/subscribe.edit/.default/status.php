<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
//***********************************
//status and unsubscription/activation section
//***********************************
?>
<div class="b-form tmargin_25 ">
    <form action="<?=$arResult["FORM_ACTION"]?>" method="get">
        <div class="subscr-section_header">
            <?echo GetMessage("subscr_title_status")?>
        </div>

        <table border="0" cellpadding="0" cellspacing="5" class="data-table">
            <tr valign="top">
                <td nowrap><?echo GetMessage("subscr_conf")?></td>
                <td nowrap class="<?echo ($arResult["SUBSCRIPTION"]["CONFIRMED"] == "Y"? "notetext":"errortext")?>"><?echo ($arResult["SUBSCRIPTION"]["CONFIRMED"] == "Y"? GetMessage("subscr_yes"):GetMessage("subscr_no"));?></td>
            </tr>
            <tr>
                <td nowrap><?echo GetMessage("subscr_act")?></td>
                <td nowrap class="<?echo ($arResult["SUBSCRIPTION"]["ACTIVE"] == "Y"? "notetext":"errortext")?>"><?echo ($arResult["SUBSCRIPTION"]["ACTIVE"] == "Y"? GetMessage("subscr_yes"):GetMessage("subscr_no"));?></td>
            </tr>
            <tr>
                <td nowrap><?echo GetMessage("adm_id")?></td>
                <td nowrap><?echo $arResult["SUBSCRIPTION"]["ID"];?>&nbsp;</td>
            </tr>
        </table>
        <?if($arResult["SUBSCRIPTION"]["CONFIRMED"] == "Y"):?>
            <div class="row">
                <br />
                <?if($arResult["SUBSCRIPTION"]["ACTIVE"] == "Y"):?>
                    <div class="f_input">
                        <button class="button " type="submit" name="unsubscribe" ><?echo GetMessage("subscr_unsubscr")?></button>
                    </div>
                    <input type="hidden" name="action" value="unsubscribe" />
                <?else:?>
                    <div class="f_input">
                        <button class="button" type="submit" name="activate"><?echo GetMessage("subscr_activate")?></button >
                    </div>
                    <input type="hidden" name="action" value="activate" />
                <?endif;?>
                <div class="clear"></div>
            </div>
        <?endif;?>

        <input type="hidden" name="ID" value="<?echo $arResult["SUBSCRIPTION"]["ID"];?>" />
        <?echo bitrix_sessid_post();?>
    </form>
</div>