$(function(){
    $('.variants-list .item').hover(function(){
        $('.variants-list').addClass('hover');
    },
    function(){
        $('.variants-list').removeClass('hover');
    })
})