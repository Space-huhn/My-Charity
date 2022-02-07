$(document).ready(function () {
    $('.slider').slick();

});

$(window).ready(function () {
    $(".header-burger").click(function () {
        $(".header-burger, header, body, .memu__list").toggleClass("activ");
    });

});

$(document).scroll(function () {
    var scroll = $(document).scrollTop();
    if (scroll >= 50) {
        $(".memu, .logo, .header-burger").addClass("down");
    } else {
        $(".memu, .logo, .header-burger").removeClass("down");
    }
});

// $(window).ready(function () {
//     $('header').on('.activ', function () {
//         $(".wrapper").addClass("overh");
//     });

// });

// $('header').on('.activ', function () {
//     $(body).css("overflow", "hidden");
// })
// //.on('mouseleave', function () {
// //     $("body").css("overflow","auto");
// //  });