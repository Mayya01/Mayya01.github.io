
function equalizersec(parent, selector1, selector2) {
    var $context = $(parent);
    var $list = $context;
    var $listItems = $('.projects-list__item', $context);
    var contextWidth = $context.width();
    var plateWidth;
    var $plates = $(selector1, $context);
    var _tmp = 0;
    var heights = [];
    var iterations = 0;

    if ($plates.length == 0) return;

    contextWidth = $list.width();
    plateWidth = $listItems.eq(0).outerWidth();
    _tmp = Math.round(contextWidth / plateWidth);
    iterations = $plates.length / _tmp;

    if (contextWidth == 0) return;

    setTimeout(function () {
        $(selector1, $context).css('height', 0);
        for (var r = 0; r < iterations; r++) {
            for (var i = 0; i < _tmp; i++) {
                if (heights[r] === undefined) {
                    heights[r] = Math.ceil($plates.eq(r * _tmp + i).find(selector2).first().outerHeight()) + Math.ceil($plates.eq(r * _tmp + i).find(selector2).last().outerHeight());
                } else {
                    heights[r] = Math.max(Math.ceil($plates.eq(r * _tmp + i).find(selector2).first().outerHeight()) + Math.ceil($plates.eq(r * _tmp + i).find(selector2).last().outerHeight()), heights[r]);
                }
            }
        }

        for (var r = 0; r < iterations; r++) {
            for (var i = 0; i < _tmp; i++) {

                $plates.eq(r * _tmp + i).css('height', heights[r]);
            }
        }
        $(document).animate({scrollTop: $plates.last().offset().top},1000);
    }, 600);
}
$(function () {

    // loader('.projects-list__item', '.c-about__projects .loader', 6);

    $('.projects-list').load(function () {
        equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
    }).resize(function () {
        equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
    });

    $('.projects-list').each(function () {
        var $context = $(this);
        var adaptParams = {
            780: '_w-780',
            670: '_w-670',
            480: '_w-480'
        }
        $context.adaptBlock(adaptParams);
    });
    $(window).load(function () {
        equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
    }).resize(function () {
        equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
    });

});


// Фильтр
function prepareUrl() {
    var urlParams = window.location.search;
    urlParams = urlParams.replace('?', '');
    urlParams = urlParams.split('&');

    for (var i = urlParams.length - 1; i >= 0; i--) {
        urlParams[i] = urlParams[i].split('=');
    }
    return urlParams;
}

function checkGet() {
    var arrGet = prepareUrl();
    var arrNeed = Array();
    for (var i = 0; i < arrGet.length; i++) {
        if (arrGet[i][0] == 'cat1') {
            arrNeed[1] = arrGet[i][1];
        }
        if (arrGet[i][0] == 'cat2') {
            arrNeed[2] = arrGet[i][1];
        }
        if (arrGet[i][0] == 'cat3') {
            arrNeed[3] = arrGet[i][1];
        }
    }
    return arrNeed;
}
function checkOne(that) {
    var parent = that.parent().parent().parent();
    var flag = true;
    $('.checkboxes__row:not(".all") input', parent).each(function () {
        if ($(this).prop('checked') == false) {
            flag = false;
        }
    });

    if (flag == false && !$('.checkboxes__row.all input', parent).hasClass('notall')) {
        $('.checkboxes__row.all input', parent).addClass('notall');
        $('.checkboxes__row.all input', parent).prop('checked', false);
    }
    else if (flag == true && $('.checkboxes__row.all input', parent).hasClass('notall')) {
        $('.checkboxes__row.all input', parent).removeClass('notall');
        $('.checkboxes__row.all input', parent).prop('checked', true);
    }

    if ($('.checkboxes__row:not(".all") input:checked', parent).length == 0) {
        $('.checkboxes__row.all input', parent).removeClass('notall');
        $('.checkboxes__row.all input', parent).prop('checked', false);
    }

}

function checkAll(o) {
    var parent = o.parent('label').parent('li');
    var $checkbox = $('.'+parent.attr('rel')+'.checkboxes__row:not(".all") input');
    $checkbox.each(function () {
        $(this).prop('checked', true);
    });
}

function uncheckAll(that) {
    var parent = that.parent().parent().parent();
    var $checkbox = $('.checkboxes__row:not(".all") input', parent);

    $checkbox.each(function () {
        $(this).prop('checked', false);
    });
}
function checkCat(cat, value) {
    var $wrp = $('.c-about__checkboxes');
    var $col = $('.column', $wrp);
    $col.eq(cat - 1).find('.checkboxes__row[data-id="' + value + '"] input').each(function () {
        $(this).prop('checked', true);
        checkOne($(this));

    });
    $col.not(":eq(" + (cat - 1) + ")").find('.checkboxes__row:not(".all") input').each(function () {
        $(this).prop('checked', true);
    });
}
function route() {
    var arrCats = checkGet();
    if (arrCats[1]) {
        checkCat(1, arrCats[1]);
    }
    else if (arrCats[2]) {
        checkCat(2, arrCats[2]);
    }
    else if (arrCats[3]) {
        checkCat(3, arrCats[3]);
    }
    else {
        checkAll($('.js-column-1 input'));
        checkAll($('.js-column-2 input'));
        checkAll($('.js-column-3 input'));
    }
}

function ajaxOnChange() {
    var $wrp = $('.c-about__checkboxes');
    var $col = $('.column', $wrp);
    var dt = {};
    $col.each(function (i) {
        dt['cat' + (i + 1)] = Array();
        $('.checkboxes__row:not(".all") input', this).each(function () {
            if ($(this).prop('checked') == true) {
                dt['cat' + (i + 1)].push($(this).parent().parent().attr('data-id'));
            }
        });
    });
    dt['AJAX'] = 'Y';
    dt['KEY'] = $('.js-projects-ajax-key').val();

    $.get('', dt, function (data) { ///local/include/news_list.php
        $('.projects-list').html(data);
        equalizersec('.projects-list', '.projects-plate', '.projects-plate__content');
        window.application.appWidgetsAjaxMorePager.initAjaxPagen();
    });
}

$(function () {
    route();
    $('.checkboxes__row.all input').click(function () {
        if ($(this).prop('checked') == true) {
            $(this).removeClass('notall');
            checkAll($(this));
            ajaxOnChange();
        }
        else {
            uncheckAll($(this));
            ajaxOnChange();
        }
    });
    $('.checkboxes__row:not(".all") input').click(function () {
        checkOne($(this));
        $('.c-about__checkboxes').css({"opacity": "0.5"});
        ajaxOnChange();
        setTimeout(function () {
            $('.c-about__checkboxes').css({"opacity": "1"});
        }, 500);
        loader('.projects-list__item', '.c-about__projects .loader', 6);
    });
    $('.projects-plate__cats li a').on('click', function () {
        var href = $(this).attr('href');
        window.location.replace(href);
    })

});

function minimize() {
    var showMoreBtn = $('.checkboxes__minimize');
    $('.checkboxes__list li').not('.all').stop().slideToggle();
    showMoreBtn.toggleClass('active');
    if (showMoreBtn.hasClass('active')) {
        $(' > span', showMoreBtn).text('Развернуть фильтры');
    }
    else {
        $(' > span', showMoreBtn).text('Свернуть фильтры');
    }
}

$(function () {

    $('.checkboxes__minimize').bind('click', minimize);

    $('.c-about__checkboxes').each(function () {
        var $context = $(this);
        var adaptParams = {
            959: '_w-959',
            680: '_w-680'
        };
        $context.adaptBlock(adaptParams);
    });

    minimize();

});