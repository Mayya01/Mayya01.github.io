<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();?>
<form action="/ajax/forms/get-learning-discount/" method="post" class="form-rd" name="course-discount" id="course-discount">
	<?= bitrix_sessid_post();?>
	<input type="hidden" name="DISCOUNT" value="<?= $arParams['DISCOUNT_DATE']['VALUE'] ?>">
	<input type="hidden" name="WEB_FORM_ID" value="GET_LEARNING_DISCOUNT">
	<div class="form-rd__group">
		<input type="text" class="field" name="form_text_<?= $arResult['arAnswers']['EMAIL'][0]['ID'] ?>" data-fieldtype="email" required placeholder="Email">
	</div>
	<div class="form-rd__group">
		<input class="field" type="text" data-fieldtype="username" name="form_text_<?= $arResult['arAnswers']['NAME'][0]['ID'] ?>" required placeholder="Ваше имя">
	</div>
	<div class="form-rd__group">
		<select name="form_text_<?= $arResult['arAnswers']['ID'][0]['ID'] ?>" id="course" class="select2 form-rd__select" data-fieldtype="tocomment">
			<? foreach ($arParams['COURSES'] as $arCourse): ?>
				<option value="<?= $arCourse['ID']?>">
					<? if(strlen($arParams['SECTION_ID']) <= 0): ?>
						<?= $arCourse['SECTION_NAME'] ?>
					<? endif; ?>
					<?= ConvertDateTime($arCourse['PROPERTIES']['COURSE_DATE']['VALUE'], 'd.m.Y HH:MI'); ?>
					<?= $arCourse['PROPERTIES']['TYPE']['VALUE'] ?>
				</option>
			<? endforeach; ?>
		</select>
	</div>
	<div class="form-rd__footer">
		<button type="submit" name="web_form_submit" value="Зафиксировать" class="button pupop sales-block__btn">Зафиксировать</button>
	</div>
</form>
