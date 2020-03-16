function loader(selector,btn,q)
{
    var total = $(selector).length;

    var j = 1;
    
    var b = function()
    {
        var i;
        $(btn).hide();
        for (i = q*j; i <= q*j ; i++)
        {
            $(selector).each(function()
            {
                if ( $(this).index() < i )
                {
                    $(this).removeClass('hide');
                }
            });
            if ( i < total )
            {
                $(this).show();
                $('span',btn).text('Показать еще '+(total - i));
                $(btn).show();

                break;
            }
        };
        j++;
    }

    b();

    $(btn).click(function(){
        b();

    });
}
function equalizersec(parent,selector1,selector2)
{
    var $context = $(parent);
    var $list = $context;
    var $listItems = $('.projects-list__item', $context);
    var contextWidth = $context.width();
    var plateWidth;
    var $plates = $(selector1, $context);
    var _tmp = 0;
    var heights = [];
    var iterations = 0;

    if($plates.length == 0) return;

    contextWidth = $list.width();
    plateWidth   = $listItems.eq(0).outerWidth();
    _tmp = Math.round(contextWidth/plateWidth);
    iterations = $plates.length / _tmp;

    if(contextWidth == 0) return;


    setTimeout(function () {
        //$(selector1, $context).css('height', 0);
        for(var r = 0; r < iterations; r++) {
            for(var i = 0; i<_tmp; i++) {
                if(heights[r] === undefined) {
                    heights[r] = Math.ceil($plates.eq(r*_tmp + i).find(selector2).first().outerHeight()) + Math.ceil($plates.eq(r*_tmp + i).find(selector2).last().outerHeight());
                } else {
                    heights[r] = Math.max(Math.ceil($plates.eq(r*_tmp + i).find(selector2).first().outerHeight()) + Math.ceil($plates.eq(r*_tmp + i).find(selector2).last().outerHeight()), heights[r]);
                }
            }
        }

        for(var r = 0; r < iterations; r++) {
            for(var i = 0; i<_tmp; i++) {

                $plates.eq(r*_tmp + i).css('height', heights[r]);
            }
        }
    }, 600);

}
$(function(){
    $('.projects-list').load(function(){
        equalizersec('.projects-list','.projects-plate','.projects-plate__content');
    }).resize(function(){
        equalizersec('.projects-list','.projects-plate','.projects-plate__content');
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
    //filterAjaxCheckboxes();
    $(window).load(function(){
        equalizersec('.projects-list','.projects-plate','.projects-plate__content');
    }).resize(function() {
        equalizersec('.projects-list','.projects-plate','.projects-plate__content');
    });

});