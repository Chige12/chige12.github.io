$(function(){
    $('#global_nav').hover(function(){
        $(this).addClass('motion');
    },function(){
        $(this).removeClass('motion');
    });
    $('.global_nav_item').click(function(){
        $("#global_nav").removeClass("motion");
    });
});
