//Реализация переносов

var vowels = 'оеаиуяыюэё',
	voiced = 'нрвлмдгбзчхжшцщ',
	deaf = 'тскпф',
	brief = 'й',
	other = 'ьъ',
	consonants = 'нтсрвлкмдпгбзчхжшцщф';

function isNotLastSep(remainStr) {
	var is = false;

	for (var i = 0; i < remainStr.length; i++) {
		if (vowels.indexOf(remainStr.substr (i, 1)) != -1) {
			is = true;
			break;
		}
	}

	return is;
}

function separate(s) {
	var letter = '',
		syllable = '',
		syllables = [],
		final_syllables = [];

	function pushSyllable() {
		syllables.push(syllable);
		syllable = '';
	};


	for (var i = 0; i < s.length; i++) {
		letter = s.substr (i, 1);
		syllable += letter;

		// Проверка на признаки конца слогов
		// если буква равна 'й' и она не первая и не последняя и это не последний слог
		if (
			(i != 0) &&
			(i != s.length -1) &&
			(brief.indexOf (letter) != -1) &&
			(isNotLastSep (s.substr (i+1, s.length-i+1)))
		) { pushSyllable (); continue; }

		// если текущая гласная и следующая тоже гласная
		// EDIT: этот блок необходим если задача - корректно разбить слово на фонетические слоги,
		// и не нужен если задача - разбить слово на части, которые можно переносить
		//
		//  if (
		//  (i < s.length - 1) &&
		//  (vowels.indexOf (letter) != -1) &&
		//  (vowels.indexOf (s.substr (i+1, 1)) != -1)
		//) { pushSyllable (); continue; }

		// если текущая гласная, следующая согласная, а после неё гласная
		if (
			(i < s.length - 2) &&
			(vowels.indexOf (letter) != -1) &&
			(consonants.indexOf (s.substr (i+1, 1)) != -1) &&
			(vowels.indexOf (s.substr (i+2, 1)) != -1)
		) { pushSyllable (); continue; }

		// если текущая гласная, следующая глухая согласная, а после согласная и это не последний слог
		if (
			(i < s.length - 2) &&
			(vowels.indexOf (letter) != -1) &&
			(deaf.indexOf (s.substr (i+1, 1)) != -1) &&
			(consonants.indexOf (s.substr (i+2, 1)) != -1) &&
			(isNotLastSep (s.substr (i+1, s.length-i+1)))
		) { pushSyllable (); continue; }

		// если текущая звонкая или шипящая согласная, перед ней гласная, следующая не гласная и не другая, и это не последний слог
		if (
			(i > 0) &&
			(i < s.length - 1) &&
			(voiced.indexOf (letter) != -1) &&
			(vowels.indexOf (s.substr (i-1, 1)) != -1) &&
			(vowels.indexOf (s.substr (i+1, 1)) == -1) &&
			(other.indexOf (s.substr (i+1, 1)) == -1) &&
			(isNotLastSep (s.substr (i+1, s.length-i+1)))
		) { pushSyllable (); continue; }

		// если текущая другая, а следующая не гласная если это первый слог
		if (
			(i < s.length - 1) &&
			(other.indexOf (letter) != -1) &&
			((vowels.indexOf (s.substr (i+1, 1)) == -1) ||
				(isNotLastSep (s.substr (0, i))))
		) { pushSyllable (); continue; }
	}
	pushSyllable();

	return syllables;
}

$(function() {

	$('.projects-slider__title').each(function () {
		var text = $(this).text();
		newtext = separate(text).join('&shy;');
		$(this).html(newtext);

	});

});
