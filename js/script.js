$(document).ready(function(){
	$('.header_items').slick({
		responsive: [
                {
                    breakpoint: 1038,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
	})
});
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.nav_spisok').toggleClass('active');
        $('body').toggleClass('lock');
        $('.slick-slider,.header_button,.tab-content,.tab-title,.footer').toggleClass('hhide');
          $ ('burger_dowm').toggleClass('down');
})
    $('.nav_spisok').click(function(event) {

        $('.header__burger,.nav_spisok').removeClass('active');

        $('body').removeClass('lock')});
});