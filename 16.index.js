$('.meau_cover_img').mouseenter(function () {
    $(this).find('i').addClass('play_hover')
})
$('.meau_cover_img').mouseleave(function () {
    $(this).find('i').removeClass('play_hover')
})

$('.listshow').mouseenter(function(){
    $(this).find('.menu').show().siblings().find('.menu').hide();
})
$('.listshow').mouseleave(function(){
    $(this).find('.menu').hide().siblings().find('.menu').hide();
})
