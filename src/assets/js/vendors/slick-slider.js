"use strict";
$(".category-slider").length && $(".category-slider").slick({
    infinite: !0,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !1,
    arrows: !0,
    prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }, {
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }]
}), $(".product-slider").length && $(".product-slider").slick({
    infinite: !0,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !1,
    arrows: !0,
    prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }, {
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}), $(".team-slider").length && $(".team-slider").slick({
    infinite: !0,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !1,
    arrows: !0,
    prevArrow: '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 820,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}), $(".hero-slider").length && $(".hero-slider").slick({
    infinite: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !0,
    arrows: !1
}), $(".slider-8-columns").length && $(".slider-8-columns").each(function(s, o) {
    var e = $(this).attr("id"),
        i = "#" + e + "-arrows";
    $("#" + e).slick({
        infinite: !0,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !0,
        arrows: !0,
        speed: 1e3,
        loop: !0,
        adaptiveHeight: !0,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],
        prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
        nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
        appendArrows: i
    })
}), $(".product-slider-second").length && $(".product-slider-second").each(function(s, o) {
    var e = $(this).attr("id"),
        i = "#" + e + "-arrows";
    $("#" + e).slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !0,
        arrows: !0,
        speed: 1e3,
        loop: !0,
        adaptiveHeight: !0,
        responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],
        prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="feather-icon icon-chevron-right "></i></span>',
        appendArrows: i
    })
}), $(".slider-for").length && ($(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    asNavFor: ".slider-nav"
}), $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: !1,
    centerMode: !1,
    focusOnSelect: !0,
    prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>'
})), $(".product-slider-four-column").length && $(".product-slider-four-column").slick({
    infinite: !0,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: !0,
    dots: !1,
    arrows: !0,
    prevArrow: '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }, {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});