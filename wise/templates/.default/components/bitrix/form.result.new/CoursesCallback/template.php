<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
    die();
} ?>

<section class="section _gray">
    <div class="content-center">
        <h2 class="h1 _before-subtitle">Нужна помощь в подборе курса?</h2>
        <p class="section__subtitle">Оставьте заявку, и мы перезвоним вам в ближайшее время</p>
        <form action="/ajax/forms/callback-new/" method="POST" enctype="multipart/form-data"
              class="form-rd form-rd--inline" name="LEARNING_CALLBACK" id="LEARNING_CALLBACK">
            <input type="hidden" name="ajax" value="1"/>
            <input type="hidden" name="action" value="formsubmit"/>
            <input type="hidden" name="confirm" value="1"/>
            <input type="hidden" data-fieldtype="direction" value="<?= $arParams["ZATO_DIRECTION"] ?>"/>
            <input type="hidden" data-fieldtype="formName" value="Callback"/>
            <input type="hidden" data-fieldtype="tocomment" data-fieldlabel="тип формы" name="form_hidden_240"
                   value="" data-fieldname="FORM_TYPE">
            <?= bitrix_sessid_post() ?>
            <div class="form-rd__row-md">
                <div class="form-rd__col-1-3-md">
                    <div class="form-rd__group">
                        <input type="text" name="form_text_<?= $arResult['arAnswers']['FORM_NAME'][0]['ID'] ?>"
                               data-name="username" data-fieldtype="username" data-fieldlabel="Ваше имя"
                               data-necessary="data-necessary" data-fieldname="FORM_NAME" placeholder="Ваше имя"
                               class="field field--bottom-border">
                    </div>
                </div>
                <div class="form-rd__col-1-3-md">
                    <div class="form-rd__group">
                        <input type="tel" name="form_text_<?= $arResult['arAnswers']['FORM_PHONE'][0]['ID'] ?>"
                               placeholder="+7 (___) ___ __ __" class="field field--bottom-border"
                               data-name="phone" data-fieldtype="phone"
                               data-fieldlabel="Телефон" data-mask="phone" data-necessary="data-necessary"
                               data-fieldname="FORM_PHONE">
                    </div>
                </div>
                <div class="form-rd__col-1-3-md">
                    <button type="submit" name="web_form_submit" class="button pupop">Перезвонить мне</button>
                </div>
            </div>
            <div class="form-rd__licence-info">
                <input type="checkbox" id="licence-info" checked="" data-necessary="data-necessary"
                       name="licence-info">
                <label for="licence-info">
                    <span>Соглашаюсь на
                        <a class="form-rd__licence-info-link"
                           href="/local/privacy/wiseadvice-it_ru_politika-v-otnoshenii-obrabotki-personalnyh-dannyh.pdf">обработку персональных данных</a>
                    </span>
                </label>
            </div>
        </form>
    </div>
</section>
<script>
    $(function () {
        setTimeout(function () {
            $('form[name="<?= $arResult['arForm']['SID'] ?>"]').initWebForm();
        }, 100);
    });

</script>
