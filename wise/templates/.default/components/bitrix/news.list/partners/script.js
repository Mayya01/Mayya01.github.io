function loader(selector,btn,q)
{
    var total = $(selector).length;

    var j = 1;
    var nextQuantity = q;
    
    var b = function()
    {
        var i;
        $(btn).hide();
        for (i = q*j; i <= q*j ; i++)
        {
        	if ( q >= (total - i)) {
        		nextQuantity = total - i;
			}
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
                $('span',btn).text('Показать еще ' + nextQuantity + ' из ' +(total - i));
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

$(function () {
    loader('.partners__item', '.c-about__partners .loader' , 8);
    $('.c-about__partners').each(function () {
        var $context = $(this);
        var adaptParams = {
            920: '_w-920',
            630: '_w-630',
            480: '_w-480'
        }
        $context.adaptBlock(adaptParams);
    });

    $(window).load(function(){
        
    }).resize(function(){
        
    });
});
