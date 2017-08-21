
/*

   Table Of Content

   1. 新品介紹 Carousel
   2. 產品介紹Panel
   3. CountDown Timer
   4. Ajaxchimp for Subscribe Form
   5. Video and Google Map Popup
   6. Detail Box ( Slider by Owl Carousel )
   7.


*/

    /**新品介紹 Carousel**/
    $(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<6;i++) {
    itemToClone = itemToClone.next();

    if (!itemToClone.length) {
    itemToClone = $(this).siblings(':first');
    }

    itemToClone.children(':first-child').clone()
    .addClass("cloneditem-"+(i))
    .appendTo($(this));
    }
    });

    });

/**新品介紹 Carousel:END**/



/**產品介紹Panel List:STAR**/

$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });
});

/**產品介紹Panel List:END**/


/**產品細節-影視區:STAR**/
$(document).ready( function() {
    $('#myCarousel').carousel({
		interval:10000
	});

	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');
			}
		}
		clickEvent = false;
	});
});

/**產品細節-影視區:END**/
