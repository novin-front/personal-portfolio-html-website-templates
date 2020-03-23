$(document).ready(function () {
    // main menu code 
    var top = 0;
    $(window).on('scroll', function () {
        $("#main-menu-id").toggleClass("hide", $(window).scrollTop() > top);
        top = $(window).scrollTop();
    });

    // portfolio code 
    $(".img-to-show").hover(function () {
        $(this).css("opacity", "0");
    }, function () {
        $(this).css("opacity", "1");
    });

    //counter-up code
    // $('.number-counter').each(function () {
    //         $(this).prop('Counter', 0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 5000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
});