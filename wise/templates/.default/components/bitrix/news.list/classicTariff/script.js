$(function(){
   $(".js-set-classic-ratiff").on("click",function(e){
       var obj = $(this);
        $(".js-obs-tariff-select").val(obj.data("val")).trigger("change");
   }) ;
});