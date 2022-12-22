$(document).ready(function () {
    $("#file-upload").change(function () {
        var i = $(this).prev("label").clone();
        var file = $("#file-upload")[0].files[0].name;
        $(this).prev("label").text(file);
    });

    $("#autoparkFilterButton li a").click(function () {
        var ourClass = $(this).attr("class");
        $("#autoparkFilterButton li").removeClass("active");
        $(this).parent().addClass("active");
        if (ourClass == "all") {
            $("#autopark-body").children("div.item").show();
        } else {
            $("#autopark-body .item").hide();
            $("#autopark-body")
                .find("." + ourClass)
                .show();
        }

        return false;
    });

    $("#galleryFilterButton li a").click(function () {
        var ourClass = $(this).attr("class");
        $("#galleryFilterButton li").removeClass("active");
        $(this).parent().addClass("active");
        if (ourClass == "all") {
            $("#aniimated-thumbnials").children("a.media-item").show();
        } else {
            $("#aniimated-thumbnials")
                .children("a:not(." + ourClass + ")")
                .hide();
            $("#aniimated-thumbnials")
                .children("a." + ourClass)
                .show();
        }
        return false;
    });

    $("#faqFilterButton li").click(function () {
        var ourClass = $(this).attr("class");
        $("#faqFilterButton li").removeClass("active");
        $(this).addClass("active");
        if (ourClass == "all") {
            $("#faq-body").children("div.___").show();
        } else {
            $("#faq-body")
                .children("div.___:not(." + ourClass + ")")
                .hide();
            $("#faq-body")
                .children("div.___." + ourClass)
                .show();
        }
        return false;
    });

    $("#campaignFilterButton li").click(function () {
        var ourClass = $(this).attr("class");
        $("#campaignFilterButton li").removeClass("active");
        $(this).addClass("active");
        $("#campaigns-body")
            .children("div.___:not(." + ourClass + ")")
            .hide();
        $("#campaigns-body")
            .children("div.___." + ourClass)
            .show();
        return false;
    });

    // $('#yukdashima-body').children('div.item:not(.active)').hide();
    //
    // $('#yukdashimaFilterButton li a').click(function () {
    //     var ourClass = $(this).attr('class');
    //     $('#yukdashimaFilterButton li').removeClass('active');
    //     $(this).parent().addClass('active');
    //
    //     if (ourClass == 'active') {
    //         $('#yukdashima-body').children('div.item').show();
    //         $('#yukdashima-body').children('div.item:not(.' + ourClass + ')').hide();
    //     }
    //     else {
    //         $('#yukdashima-body').children('div.item:not(.' + ourClass + ')').hide();
    //         $('#yukdashima-body').children('div.item.' + ourClass).show();
    //     }
    //
    //
    //     return false;
    // });

    /*function scrollEvent() {
      var hT = $('#about').offset().top,
        hH = $('#about').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
      if (wS > (hT+hH-wH)){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                    }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));

                    }

                    });

                });
        window.removeEventListener("scroll", scrollEvent);
      }
    }*/
    /*	  window.addEventListener("scroll", scrollEvent);*/

    $("#filterButton li a").click(function () {
        var ourClass = $(this).attr("class");
        $("#filterButton li").removeClass("active");
        $(this).parent().addClass("active");
        if (ourClass == "all") {
            $("#question-blok").children("div.item").show();
        } else {
            $("#question-blok")
                .children("div:not(." + ourClass + ")")
                .hide();
            $("#question-blok")
                .children("div." + ourClass)
                .show();
        }

        return false;
    });

    $(".item").click(function () {
        $("i", this).toggleClass("fas fa-angle-right fas fa-angle-down");
    });

    $(".answer").click(function () {
        $(".item")
            .find("i")
            .toggleClass("fas fa-angle-right fas fa-angle-down");
    });

    $(".team-members__body--header").hover(function () {
        $(this).find(".info").toggleClass("d-flex");
    });

    $(function () {
        $(".payment-item").on("click", function () {
            $(this).parent().find(".active").removeClass("active");
            $(this).addClass("active");
        });
    });
});
// GUNEL JS FINISH 2nd version
// GUNEL JS START
var acc = document.getElementsByClassName("faq-item");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}
$(document).ready(function () {
    $(".faq-item").click(function () {
        $("i", this).toggleClass("fas fa-angle-right fas fa-angle-down");
    });
    //   $('.answer').click(function () {
    // 	$('.faq-item').find('i').toggleClass("fas fa-angle-right fas fa-angle-down");
    //   });
    $(".team-body__item--header").hover(function () {
        $(this).find(".team-body__item--over").toggleClass("d-flex");
    });
});

// GUNEL JS FINISH
$(function () {
    var wrapperWidth = $(".wrapper").width();
    var autoparkItemWidth = 272;
    var mediaItemWidth = 170;
    //	create AutoparkCarousel
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("#autoparkCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 4,
            },
            auto: {
                items: 0,
            },
            prev: "#autoparkPrev",
            next: "#autoparkNext",
        });
        var autoparkMargin = wrapperWidth - 4 * autoparkItemWidth;
        $(".main-autopark__body--item").css("margin-right", autoparkMargin / 3);
    } else if (
        window.matchMedia("(min-width:992px) and (max-width: 1199px)").matches
    ) {
        $("#autoparkCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 3,
            },
            auto: {
                items: 0,
            },
            prev: "#autoparkPrev",
            next: "#autoparkNext",
        });
        var autoparkMargin = wrapperWidth - 3 * autoparkItemWidth;
        $(".main-autopark__body--item").css({
            "margin-right": autoparkMargin / 6,
            "margin-left": autoparkMargin / 6,
        });
    } else if (
        window.matchMedia("(min-width:768px) and (max-width: 991px)").matches
    ) {
        $("#autoparkCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 2,
            },
            auto: {
                items: 0,
            },
            prev: "#autoparkPrev",
            next: "#autoparkNext",
        });
        var autoparkMargin = wrapperWidth - 2 * autoparkItemWidth;
        $(".main-autopark__body--item").css({
            "margin-right": autoparkMargin / 4,
            "margin-left": autoparkMargin / 4,
        });
    } else {
        $("#autoparkCarousel ").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 1,
            },
            auto: {
                items: 0,
            },
            prev: "#autoparkPrev",
            next: "#autoparkNext",
        });
    }
    if (window.matchMedia("(min-width:576px) and (max-width:767px)").matches) {
        $("#autoparkWrapper .caroufredsel_wrapper").css({
            "margin-right": "auto",
            "margin-left": "auto",
            width: "272px",
        });
    } else if (
        window.matchMedia("(min-width:364px) and (max-width: 575px)").matches
    ) {
        $("#autoparkWrapper .caroufredsel_wrapper").css({
            "margin-right": "auto",
            "margin-left": "auto",
            width: "245px",
        });
    } else if (window.matchMedia("(max-width:363px)").matches) {
        $("#autoparkWrapper .caroufredsel_wrapper").css({
            "margin-right": "auto",
            "margin-left": "auto",
            width: "228px",
        });
    }
    //	re-position the carousel, vertically centered
    var $elems = $("#autoparkWrapper"),
        $image = $("#autoparkCarousel div:first");
    $(window)
        .bind("resize.example", function () {
            var height = $image.outerHeight(true);
            $elems.height(height);
        })
        .trigger("resize.example");

    /*--------------------------------------------------- */

    //	create mediaCarousel
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("#mediaCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 170,
                height: 278,
                visible: 5,
            },
            auto: {
                items: 0,
            },
            prev: "#mediaPrev",
            next: "#mediaNext",
        });
        var mediaMargin = wrapperWidth - 5 * mediaItemWidth;
        $(".main-media .news-item").css({
            "margin-right": mediaMargin / 10,
            "margin-left": mediaMargin / 10,
        });
    } else if (
        window.matchMedia("(min-width:992px) and (max-width: 1199px)").matches
    ) {
        $("#mediaCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 170,
                height: 278,
                visible: 4,
            },
            auto: {
                items: 0,
            },
            prev: "#mediaPrev",
            next: "#mediaNext",
        });
        var mediaMargin = wrapperWidth - 4 * mediaItemWidth;
        $(".main-media .news-item").css({
            "margin-right": mediaMargin / 8,
            "margin-left": mediaMargin / 8,
        });
    } else if (
        window.matchMedia("(min-width:768px) and (max-width: 991px)").matches
    ) {
        $("#mediaCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 170,
                height: 278,
                visible: 3,
            },
            auto: {
                items: 0,
            },
            prev: "#mediaPrev",
            next: "#mediaNext",
        });
        var mediaMargin = wrapperWidth - 3 * mediaItemWidth;
        $(".main-media .news-item").css({
            "margin-right": mediaMargin / 6,
            "margin-left": mediaMargin / 6,
        });
    } else if (
        window.matchMedia("(min-width:576px) and (max-width: 767px)").matches
    ) {
        $("#mediaCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 170,
                height: 278,
                visible: 2,
            },
            auto: {
                items: 0,
            },
            prev: "#mediaPrev",
            next: "#mediaNext",
        });
        var mediaMargin = wrapperWidth - 2 * mediaItemWidth;
        $(".main-media .news-item").css({
            "margin-right": mediaMargin / 4,
            "margin-left": mediaMargin / 4,
        });
    } else {
        $("#mediaCarousel").carouFredSel({
            responsive: true,
            items: {
                width: 170,
                height: 278,
                visible: 1,
            },
            auto: {
                items: 0,
            },
            prev: "#mediaPrev",
            next: "#mediaNext",
        });
        var mediaMargin = wrapperWidth - mediaItemWidth;
        $(".main-media .news-item").css({
            "margin-right": mediaMargin / 2,
            "margin-left": mediaMargin / 2,
        });
    }
    //	re-position the carousel, vertically centered
    var $elems = $("#mediaWrapper"),
        $image = $("#mediaCarousel div:first");
    $(window)
        .bind("resize.example", function () {
            var height = $image.outerHeight(true);
            $elems.height(height);
        })
        .trigger("resize.example");

    var wrapperWidthSecond = $(".wrapper").width();
    var serviceItemWidth = 272;
    //	create AutoparkCarousel
    if (window.matchMedia("(min-width: 1200px)").matches) {
        $("#serviceCams").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 4,
            },
            auto: {
                items: 0,
            },
            prev: "#servicesPrev",
            next: "#servicesNext",
        });
        var serviceMargin = wrapperWidthSecond - 4 * serviceItemWidth;
        $(".service-item.serviceItemSecond").css(
            "margin-right",
            serviceMargin / 3
        );
    } else if (
        window.matchMedia("(min-width:992px) and (max-width: 1199px)").matches
    ) {
        $("#serviceCams").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 3,
            },
            auto: {
                items: 0,
            },
            prev: "#servicesPrev",
            next: "#servicesNext",
        });
        var serviceMargin = wrapperWidthSecond - 3 * serviceItemWidth;
        console.log(serviceMargin);
        $(".service-item.serviceItemSecond").css({
            "margin-right": serviceMargin / 6,
            "margin-left": serviceMargin / 6,
        });
    } else if (
        window.matchMedia("(min-width:768px) and (max-width: 991px)").matches
    ) {
        $("#serviceCams").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 2,
            },
            auto: {
                items: 0,
            },
            prev: "#servicesPrev",
            next: "#servicesNext",
        });
        var serviceMargin = wrapperWidthSecond - 2 * serviceItemWidth;
        console.log(serviceMargin);
        $(".service-item.serviceItemSecond").css({
            "margin-right": serviceMargin / 4,
            "margin-left": serviceMargin / 4,
        });
    } else {
        $("#serviceCams").carouFredSel({
            responsive: true,
            items: {
                width: 272,
                height: 588,
                visible: 1,
            },
            auto: {
                items: 0,
            },
            prev: "#servicesPrev",
            next: "#servicesNext",
        });
    }
    if (window.matchMedia("(min-width:576px) and (max-width:767px)").matches) {
        $("#serviceCam .caroufredsel_wrapper").css({
            "margin-right": "auto",
            "margin-left": "auto",
            width: "272px",
        });
    } else if (
        window.matchMedia("(min-width:364px) and (max-width: 575px)").matches
    ) {
        $("#serviceCam .caroufredsel_wrapper").css({
            "margin-right": "auto",
            "margin-left": "auto",
            width: "245px",
        });
    } else if (window.matchMedia("(max-width:363px)").matches) {
        $("#serviceCam .caroufredsel_wrapper").css({
            "margin-right": "auto",
            "margin-left": "auto",
            width: "228px",
        });
    }
    //	re-position the carousel, vertically centered
    var $elems = $("#serviceCam"),
        $image = $("#serviceCams div:first");
    $(window)
        .bind("resize.example", function () {
            var height = $image.outerHeight(true);
            $elems.height(height);
        })
        .trigger("resize.example");
});

/*--------------------------------------------------- */

$(document).ready(function () {
    $(".header-primary__tab").click(function () {
        var cl = $(this).attr("class");
        var cl2 = cl.split(" ", 2)[1];
        $("." + cl2).addClass("active");
        $(".header-primary__tab")
            .not("." + cl2)
            .removeClass("active");
        $(".footer-primary__tab")
            .not("." + cl2)
            .removeClass("active");
        $(".comments-header__tab")
            .not("." + cl2)
            .removeClass("active");
    });
    $(".header-language__dropdown").hover(function () {
        $(this).find(".header-dropdown__menu").css("display", "block");
    });
    $(".header-language__dropdown").mouseleave(function () {
        $(this).find(".header-dropdown__menu").css("display", "none");
    });
    /*$(".header-navbar__dropdown").hover(function(){
        $(this).find(".header-maindropdown__menu").css("display", "block");
    });
    $(".header-navbar__dropdown").mouseleave(function(){
        $(this).find(".header-maindropdown__menu").css("display", "none");
        $(".header-subdropdown__menu").css("display", "none");
    });*/
    $(".header-subdropdown").click(function () {
        $(this).find(".header-subdropdown__menu").css("display", "block");
        $(".header-subdropdown")
            .not(this)
            .find(".header-subdropdown__menu")
            .css("display", "none");
    });
    $(".header-sidenav__item").click(function () {
        $(this).next().toggleClass("d-block");
        $(this).find("i").toggleClass("fa-chevron-up");
    });
    $(".header-sidenav__subitem").click(function () {
        $(this).next().toggleClass("d-block");
        $(this).find("i").toggleClass("fa-chevron-up");
    });
    $(".footer-primary__tab").click(function () {
        var cl = $(this).attr("class");
        var cl2 = cl.split(" ", 2)[1];
        $("." + cl2).addClass("active");
        $(".footer-primary__tab")
            .not("." + cl2)
            .removeClass("active");
        $(".header-primary__tab")
            .not("." + cl2)
            .removeClass("active");
        $(".comments-header__tab")
            .not("." + cl2)
            .removeClass("active");
        // Valeh
        var id = $(this).attr("id");
        $(".main-comments__table").hide();
        $("." + id).show();
    });
    $(".comments-header__tab").click(function () {
        var cl = $(this).attr("class");
        var cl2 = cl.split(" ", 2)[1];
        $("." + cl2).addClass("active");
        $(".footer-primary__tab")
            .not("." + cl2)
            .removeClass("active");
        $(".header-primary__tab")
            .not("." + cl2)
            .removeClass("active");
        $(".comments-header__tab")
            .not("." + cl2)
            .removeClass("active");
        // Valeh
        let id = $(this).attr("id");
        $(".main-comments__table").hide();
        $("." + id).show();
    });
    // $(".service-item").hover(function () {
    //     $(this).find(".service-image--hover").toggleClass("d-flex");
    // });
    /*$(".regulator-minus").click(function(){
        var output = parseInt($(this).parent().find(".regulator-output").val());
        if(output>0){
            $(this).parent().find(".regulator-output").val(output-1);
        }
    });
    $(".regulator-plus").click(function(){
        var output = parseInt($(this).parent().find(".regulator-output").val());
        $(this).parent().find(".regulator-output").val(output+1);
    });*/
    $("body").on("click", ".regulator-minus", function () {
        var output = parseInt($(this).parent().find(".regulator-output").val());
        if (output > 0) {
            $(this)
                .parent()
                .find(".regulator-output")
                .val(output - 1);
        }
    });

    $("body").on("click", ".regulator-plus", function () {
        var output = parseInt($(this).parent().find(".regulator-output").val());
        $(this)
            .parent()
            .find(".regulator-output")
            .val(output + 1);
    });
    $("#step1").change(function () {
        var orderItem = $("#step1 option:selected").attr("class");
        if (orderItem == "advertisement") {
            $(".order-bottom").addClass("d-none");
            $(".order-new").addClass("d-none");
            $(".order-advertisement").removeClass("d-none");
        } else {
            $(".order-bottom").removeClass("d-none");
            $(".order-new").removeClass("d-none");
            $(".order-advertisement").addClass("d-none");
        }
        $(".order-top__center ." + orderItem)
            .removeClass("d-none")
            .addClass("d-block");
        $(".order-top__right ." + orderItem)
            .removeClass("d-none")
            .addClass("d-block");
        $(".order-top__center--item")
            .not("." + orderItem)
            .addClass("d-none")
            .removeClass("d-block");
        $(".order-top__right--item")
            .not("." + orderItem)
            .addClass("d-none")
            .removeClass("d-block");
    });
    $(".order-trash").click(function () {
        $(this).addClass("d-none");
        $(this).parent().find(".order-ready__item").addClass("d-none");
    });
    $("#newServiceSelect").change(function () {
        $("#newService").modal("hide");
        $("#newOrder").modal("show");
    });
    $("#newServiceSelect").change(function () {
        var newServiceItem = $("#newServiceSelect option:selected").attr(
            "class"
        );
        $("#newOrderSelect option[value=" + newServiceItem + "]").attr(
            "selected",
            "selected"
        );
        $(".modal-service__body--items ." + newServiceItem)
            .removeClass("d-none")
            .addClass("d-block");
        $(".modal-service__body--item")
            .not("." + newServiceItem)
            .addClass("d-none")
            .removeClass("d-block");
    });
    $("#newOrderSelect").change(function () {
        var newOrderItem = $("#newOrderSelect option:selected").attr("class");
        $(".modal-service__body--items ." + newOrderItem)
            .removeClass("d-none")
            .addClass("d-block");
        $(".modal-service__body--item")
            .not("." + newOrderItem)
            .addClass("d-none")
            .removeClass("d-block");
    });
    if (window.matchMedia("(max-width: 575px)").matches) {
        $("#header-search button").attr("type", "button");
        function changeAttr() {
            $("#header-search button").attr("type", "submit");
        }
        var body = document.getElementById("body");
        var except = document.getElementById("header-search");
        body.addEventListener(
            "click",
            function () {
                $("#header-search").removeClass("header-search__mobile");
                $("#header-search button").attr("type", "button");
            },
            false
        );
        except.addEventListener(
            "click",
            function (ev) {
                $("#header-search").addClass("header-search__mobile");
                setTimeout(changeAttr, 200);
                $("#header-search input").focus();
                ev.stopPropagation();
            },
            false
        );
    }

    $(".login-tabs a").click(function () {
        id = $(this).attr("id");
        $(this).addClass("active");
        $(".login-tabs a").not(this).removeClass("active");
        $(".login-right__content")
            .not("." + id)
            .hide();
        $(".login-right__content." + id).show();
        if ($("#partner-business").hasClass("active")) {
            $("#blockModal").modal("show");
        }
        if ($("#partner-loyal").hasClass("active")) {
            $(".login-right__header").hide();
        } else {
            $(".login-right__header").show();
        }
    });
    $(".registration-tabs a").click(function () {
        id = $(this).attr("id");
        $(this).addClass("active");
        $(".registration-tabs a").not(this).removeClass("active");
        $(".registration-right__content")
            .not("." + id)
            .hide();
        $(".registration-right__content." + id).show();
    });
    // var regRight = $(".registration-right").height();
    // $(".registration").height(regRight + 8);
    $(".form-row__password i").click(function () {
        $(this).toggleClass("fa-eye-slash");
        if ($(this).hasClass("fa-eye-slash")) {
            $(this).parent().find("input").attr("type", "text");
        } else {
            $(this).parent().find("input").attr("type", "password");
        }
    });
});
function openSecondaryMenu() {
    document.getElementById("headerSecondaryMenu").style.width = "100%";
}
function closeSecondaryMenu() {
    document.getElementById("headerSecondaryMenu").style.width = "0";
}
$(".carousel-pause").carousel({
    interval: false,
    wrap: false,
});
$("#datetimepicker1").datetimepicker({
    format: "LT",
    locale: "az",
});
$("#datetimepicker2").datetimepicker({
    format: "LT",
    locale: "az",
});
moment.locale("en-gb");
// moment.locale('ru');
// moment.locale('az');

// daterangepicker default state

$(".datetime-text").text(moment().format("D MMMM YYYY"));

//input values default start
$("#datetime-text").val(moment().format("D MMMM YYYY"));
//input values default end

$(".datetime").daterangepicker({
    orientation: "left",
    expanded: true,
    single: true,
    locale: {
        applyButtonTitle: "Apply",
        cancelButtonTitle: "Cancel",
        endLabel: "End",
        startLabel: "Start",
    },
    callback: function (endDate) {
        $(this).find(".datetime-text").text(endDate.format("D MMMM YYYY"));
        //input values on change start
        $(this).find("#datetime-text").val(endDate.format("D MMMM YYYY"));
        //input values on change end
    },
});
/* ------------------------------- Valeh -------------------- */
$(document).ready(function () {
    $("#aniimated-thumbnials").lightGallery({
        thumbnail: true,
    });

    $(".comments-modal__open").click(function (e) {
        e.preventDefault();
        var parents = $(this).parents(".comments-body__item");
        var imageSrc = parents.find(".comment-header__image").attr("src");
        var name = parents.find(".comment-header__description h6").text();
        var date = parents.find(".comment-header__description p").text();
        var stars = parents.find(".comment-header__rating img");
        var text = parents.find(".comment-body").text();

        $(".comments-modal .comment-header__image").attr("src", imageSrc);
        $(".comments-modal .comment-header__description h6").text(name);
        $(".comments-modal .comment-header__description p").text(date);
        $(".comments-modal .comment-header__rating").html(stars);
        $(".comments-modal .comment-body p").text(text);

        $(".comments-modal").fadeIn("slow");
        $(".comments-modal").css("display", "flex");
    });

    $(".comments-modal__close").click(function () {
        $(".comments-modal").fadeOut("slow");
    });

    $(".comments-header__send").click(function (e) {
        $("html,body").animate(
            {
                scrollTop: $("#main-send").offset().top,
            },
            1000
        );
    });

    /*  $(".main-slider__document").click(function () {
        $(".main-corporative__slider").hide();
        $(".main-corporative__modal").show();
    });*/
    $(".main-slider__close").click(function () {
        $(".main-corporative__slider").hide();
    });
    $(".main-corporative__right-read").click(function (e) {
        e.preventDefault();
        var parents = $(this).parents(".main-corporative__item");
        var docImageSrc = parents
            .find(".main-corporative__left img")
            .attr("src");
        var logoImageSrc = parents
            .find(".main-corporative__right-logo img")
            .attr("src");
        var text = parents.find(".main-corporative__right-paragraph").text();

        $(".main-slider .main-slider__logo img").attr("src", logoImageSrc);
        $(".main-slider .main-slider__document img").attr("src", docImageSrc);
        $(".main-slider .main-slider__right p").text(text);
        $(".main-corporative__slider").css("display", "flex");
    });
    $(".main-document__close").click(function () {
        $(".main-corporative__modal").hide();
    });
    $(".main-clear__filter .filter-inner li").click(function () {
        $(".main-clear__filter .filter-inner li").removeClass("active");
        $(this).addClass("active");
        let id = $(this).attr("id");
        $(".main-clear__type").hide();
        $("." + id).show();
    });
    $(".main-tabs__button").click(function () {
        $(".main-tabs__button").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("id");
        $(".main-tabs__table").hide();
        $("." + id).show();
    });
    $(".main-opinion__reply a").click(function (e) {
        $(".main-opinion__form").show();
        $("html , body").animate(
            {
                scrollTop: $("#main-send__form").offset().top,
            },
            1000
        );
    });
    // $('.header-language__dropdown--menu ul li').click(function () {
    // 	$('.header-dropdown__menu ul li').removeClass('active');
    // 	$(this).addClass('active');
    // 	var lang = $(this).attr('class').split(' ')[0];
    // 	var src = `img/${lang}.svg`;
    // 	$('.header-language img').attr('src' , src);
    // 	$('.header-language a').text(lang);
    // });
    // $(".tab-secondary").off("click").css("cursor", "default");
});
/* ------------------------------- End Valeh ---------------- */

$(document).ready(function () {
    time();

    setInterval(function () {
        time();
    }, 60000);

    function time() {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let minutes = timeConvert2(h, m);
        let time = timeConvert(minutes);
        let quarter = timeConvert(minutes + 15);
        let half = timeConvert(minutes + 30);

        $(".modal-service__time__option .time-now").text(time);
        $(".modal-service__time__option .time-quarter").text(quarter);
        $(".modal-service__time__option .time-half").text(half);

        function timeConvert(n) {
            let num = n;
            let hours = num / 60;
            let rhours = Math.floor(hours);
            let minutes = (hours - rhours) * 60;
            let rminutes = Math.round(minutes);
            let baseMinuts;
            let baseHours;

            if (rminutes < 10) {
                baseMinuts = `0${rminutes}`;
            } else {
                baseMinuts = rminutes;
            }

            if (rhours < 10) {
                baseHours = `0${rhours}`;
            } else {
                baseHours = rhours;
            }

            return baseHours + ":" + baseMinuts;
        }

        function timeConvert2(h, m) {
            let rMinutes = h * 60;
            let totalMinutes = rMinutes + m;
            return totalMinutes;
        }
    }
    $(`#datetimepicker6`).datetimepicker({
        format: "LT", //L
        locale: "az",
    });
    $(`#datetimepicker7`).datetimepicker({
        format: "L", //L
        locale: "az",
    });

    $('[name="callBackTime"]').each(function () {
        let checkedRadio = $(this).prop("checked");
        if (checkedRadio) {
            let checkVal = $(this)
                .parents(".modal-service__time__option")
                .find("strong")
                .text();
            $("#datetimepicker6").attr("value", checkVal);
        }
    });

    $('[name="callBackTime"]').change(function (e) {
        let value = $(this)
            .parents(".modal-service__time__option")
            .find("strong")
            .text();
        let otherClass = $(this).hasClass("otherTime");
        if (value === "" && otherClass) {
            $("#datetimepicker6")
                .attr("value", time)
                .parents(".form-row--date")
                .show();
        } else {
            $("#datetimepicker6")
                .attr("value", value)
                .parents(".form-row--date")
                .hide();
        }
    });

    let d = new Date();
    let day = realDay();
    let year = d.getFullYear();
    let month = realMonth();

    function realDay() {
        let rday = d.getDate();

        if (rday < 10) {
            rday = `0${d.getDate()}`;
        } else {
            rday = d.getDate();
        }

        return rday;
    }

    function realMonth() {
        let rmonth = d.getMonth() + 1;

        if (rmonth < 10) {
            rmonth = `0${d.getMonth() + 1}`;
        } else {
            rmonth = d.getMonth();
        }

        return rmonth;
    }

    $("#datetimepicker7").val(`${day}.${month}.${year}`);
});

// ------------------------- New --------------------------

$(".userprofil").click(function () {
    $(".user-content").toggleClass("active-content");
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activeacorrd");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//tab panel
var newTableActive = function () {
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("id");
        $(".navs-tab").hide();
        $("." + id).fadeIn();
    });

    $(".bonus-tab__button").click(function () {
        $(".bonus-tab__button").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("id");
        $(".bonus-tab__table").hide();
        $("." + id).fadeIn();
    });

    $(document).on("click", ".homeFirst .body ul li a", function (evt) {
        if (!$(this).hasClass("bonus-link")) {
            evt.preventDefault();
        }
    });
};

newTableActive();

$(document).on("mouseenter", ".profile", function () {
    $(".profile-content").fadeIn(300);
});
$(document).on("mouseleave", ".profile", function () {
    $(".profile-content").fadeOut(300);
});

$(document).on("input", ".friends-add__input", function (e) {
    let val = $(this).val();
    $(".friends-add__input-width").text(val);
    let width = $(".friends-add__input-width").width() + 10;
    $(this).css("width", width);
});

$(document).on("keyup", ".friends-add__input", function (e) {
    let text;
    let val;
    if (e.keyCode === 13) {
        e.preventDefault();
        val = $(this).val();
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const pattern2 = /^\+?([0-9]{12})*$/i;
        if (pattern.test(val) || pattern2.test(val)) {
            if (val.length) {
                text =
                    `
          <span href="#" class="friends-add__item">
              <span class="friends-add__content">${val}</span>
              <span class="friends-add__remove"><img src="` +
                    cancel_button_asset +
                    `"></span>
          </span>
      `;
                $(this).before(text);
                $(this).val("").css("width", "20px");
                friendItem();
            }
        }
    }
});

$(document).on("keypress", "#x-edit-form", function (e) {
    const keyPress = e.keyCode || e.which;
    if (keyPress === 13) {
        e.preventDefault();
        return false;
    }
});

function friendItem() {
    const valueInput = $("#emails_phones");
    let items = [];
    let value = "";

    $(".friends-add__content").each(function () {
        const text = $(this).text();
        items.push(text);
    });

    value = items.length === 1 ? items[0] : items.join(",");
    valueInput.val("");
    valueInput.val(value);
}

$(document).on("click", ".friends-add__enter", function () {
    let text;
    let val;
    let $this = $(".friends-add__input");
    val = $this.val();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const pattern2 = /^\+?([0-9]{12})*$/i;
    if (pattern.test(val) || pattern2.test(val)) {
        if (val.length) {
            text =
                `
          <span href="#" class="friends-add__item">
              <span class="friends-add__content">${val}</span>
              <span class="friends-add__remove"><img src="` +
                cancel_button_asset +
                `"></span>
          </span>
      `;
            $this.before(text);
            $this.val("").css("width", "20px");
            $this.focus();
            friendItem();
        }
    }

    $(".friends-add__input").focus();
});

$(document).on("click", ".friends-add__remove", function () {
    $(this).parents(".friends-add__item").remove();
    friendItem();
});

$(document).on("submit", ".friends-body form", function (e) {
    e.preventDefault();
});
$(document).on("click", ".friends-add", function () {
    $(".friends-add__input").focus();
});

$(document).on("click", ".settings-body from button", function (e) {
    e.preventDefault();
});

$(".settings-body__top a ").click(function () {
    var ourClass = $(this).attr("id");
    $(".settings-body__top a").removeClass("active");
    $(this).addClass("active");
    $(".settings-body__form")
        .children(":not(." + ourClass + ")")
        .hide();
    $(".settings-body__form")
        .children("." + ourClass)
        .show();

    history.replaceState("", "", front_url + ourClass);

    return false;
});

$(document).on("click", ".dropdown.header-profile__dropdown a", function () {
    $(this).toggleClass("open");
    var cls = $(this).hasClass("open");
    if (cls) {
        $(this)
            .parents(".header-profile")
            .find(".dropdown-menu.header-profile__dropdown--menu")
            .fadeIn();
    } else {
        $(this)
            .parents(".header-profile")
            .find(".dropdown-menu.header-profile__dropdown--menu")
            .fadeOut();
    }
});

$(document).ready(function () {
    var carouselArr = [];
    var carouselArr2 = [];

    $("#commentsCarousel .comments-body__item").each(function () {
        var state = {
            image: $(this).find(".comment-header__image").attr("src"),
            name: $(this).find(".comment-header__description h6").text(),
            date: $(this).find(".comment-header__description p").text(),
            stars: $(this).find(".comment-header__rating").html(),
            text: $(this).find(".comment-body").text(),
        };
        carouselArr.push(state);
    });

    $("#commentsCarousel .main-corporative__item").each(function () {
        var state = {
            image: $(this).find(".main-corporative__left img").attr("src"),
            logo: $(this).find(".main-corporative__right-logo img").attr("src"),
            text: $(this).find(".main-corporative__right-paragraph").text(),
        };

        carouselArr2.push(state);
    });

    $("#commentsCarousel .carousel-inner").html("");

    if (carouselArr.length === 1) {
        var itemHtml = `
            <div class="comments-body carousel-item">
                <div class="comments-body__item">
                                <div class="comment-header">
                                        <img class="comment-header__image" src="${carouselArr[0].image}" alt="">
                                        <div class="comment-header__description">
                                            <h6>${carouselArr[0].name}</h6>
                                            <p>${carouselArr[0].date}</p>
                                        </div>
                                        <div class="comment-header__rating">
                                            ${carouselArr[0].stars}
                                                                                    </div>
                                    </div>
                                    <div class="comment-body">
                                        <p>${carouselArr[0].text}</p>
                                    </div>
                                </div>
                                </div>
            `;
        $("#commentsCarousel .carousel-inner").append(itemHtml);
    } else {
        for (var i = 1; i <= carouselArr.length - 1; i++) {
            if (i % 2 !== 0) {
                var itemHtml = `<div class="comments-body carousel-item">

                <div class="comments-body__item">
                                    <div class="comment-header">
                                        <img class="comment-header__image" src="${
                                            carouselArr[i - 1].image
                                        }" alt="">
                                        <div class="comment-header__description">
                                            <h6>${carouselArr[i - 1].name}</h6>
                                            <p>${carouselArr[i - 1].date}</p>
                                        </div>
                                        <div class="comment-header__rating">
                                                ${carouselArr[i - 1].stars}
                                                                                    </div>
                                    </div>
                                    <div class="comment-body">
                                        <p>${carouselArr[i - 1].text}</p>
                                    </div>

                                </div>
                                <div class="comments-body__item">
                                <div class="comment-header">
                                        <img class="comment-header__image" src="${
                                            carouselArr[i].image
                                        }" alt="">
                                        <div class="comment-header__description">
                                            <h6>${carouselArr[i].name}</h6>
                                            <p>${carouselArr[i].date}</p>
                                        </div>
                                        <div class="comment-header__rating">
                                            ${carouselArr[i].stars}
                                                                                    </div>
                                    </div>
                                    <div class="comment-body">
                                        <p>${carouselArr[i].text}</p>
                                    </div>
                                </div>
</div>
`;

                $("#commentsCarousel .carousel-inner").append(itemHtml);
            }
        }
    }

    if (carouselArr2.length === 1) {
        var itemHtml = `
            <div class="comments-body carousel-item">
                <div class="main-corporative__item">
                                    <div class="main-corporative__left">
                                        <img src="${
                                            carouselArr2[
                                                carouselArr2.length - 1
                                            ].image
                                        }" alt="document">
                                    </div>
                                    <div class="main-corporative__right">
                                        <div class="main-corporative__right-logo">
                                            <img src="${
                                                carouselArr2[
                                                    carouselArr2.length - 1
                                                ].logo
                                            }" alt="logo">
                                        </div>
                                        <p class="main-corporative__right-paragraph">
                                            ${
                                                carouselArr2[
                                                    carouselArr2.length - 1
                                                ].text
                                            }
                                        </p>
                                    </div>
                                </div>
                                </div>
            `;
        $("#commentsCarousel .carousel-inner").append(itemHtml);
    } else {
        for (var i = 1; i <= carouselArr2.length - 1; i++) {
            if (i % 2 !== 0) {
                var itemHtml = `<div class="comments-body carousel-item">

                <div class="main-corporative__item">
                                    <div class="main-corporative__left">
                                        <img src="${
                                            carouselArr2[i - 1].image
                                        }" alt="document">
                                    </div>
                                    <div class="main-corporative__right">
                                        <div class="main-corporative__right-logo">
                                            <img src="${
                                                carouselArr2[i - 1].logo
                                            }" alt="logo">
                                        </div>
                                        <p class="main-corporative__right-paragraph">
                                            ${carouselArr2[i - 1].text}
                                        </p>
                                    </div>
                                </div>
                                <div class="main-corporative__item">
                                    <div class="main-corporative__left">
                                        <img src="${
                                            carouselArr2[i].image
                                        }" alt="document">
                                    </div>
                                    <div class="main-corporative__right">
                                        <div class="main-corporative__right-logo">
                                            <img src="${
                                                carouselArr2[i].logo
                                            }" alt="logo">
                                        </div>
                                        <p class="main-corporative__right-paragraph">
                                            ${carouselArr2[i].text}
                                        </p>
                                    </div>
                                </div>
</div>
`;

                $("#commentsCarousel .carousel-inner").append(itemHtml);
            }
        }
    }

    setTimeout(function () {
        if ((carouselArr.length - 1) % 2 === 0) {
            var itemHtml = `
            <div class="comments-body carousel-item">
                <div class="comments-body__item">
                                <div class="comment-header">
                                        <img class="comment-header__image" src="${
                                            carouselArr[carouselArr.length - 1]
                                                .image
                                        }" alt="">
                                        <div class="comment-header__description">
                                            <h6>${
                                                carouselArr[
                                                    carouselArr.length - 1
                                                ].name
                                            }</h6>
                                            <p>${
                                                carouselArr[
                                                    carouselArr.length - 1
                                                ].date
                                            }</p>
                                        </div>
                                        <div class="comment-header__rating">
                                            ${
                                                carouselArr[
                                                    carouselArr.length - 1
                                                ].stars
                                            }
                                                                                    </div>
                                    </div>
                                    <div class="comment-body">
                                        <p>${
                                            carouselArr[carouselArr.length - 1]
                                                .text
                                        }</p>
                                    </div>
                                </div>
                                </div>
            `;
            $("#commentsCarousel .carousel-inner").append(itemHtml);
        }

        if ((carouselArr2.length - 1) % 2 === 0) {
            var itemHtml = `
            <div class="comments-body carousel-item">
                <div class="main-corporative__item">
                                    <div class="main-corporative__left">
                                        <img src="${
                                            carouselArr2[
                                                carouselArr2.length - 1
                                            ].image
                                        }" alt="document">
                                    </div>
                                    <div class="main-corporative__right">
                                        <div class="main-corporative__right-logo">
                                            <img src="${
                                                carouselArr2[
                                                    carouselArr2.length - 1
                                                ].logo
                                            }" alt="logo">
                                        </div>
                                        <p class="main-corporative__right-paragraph">
                                            ${
                                                carouselArr2[
                                                    carouselArr2.length - 1
                                                ].text
                                            }
                                        </p>
                                    </div>
                                </div>
                                </div>
            `;
            $("#commentsCarousel .carousel-inner").append(itemHtml);
        }
    }, 100);

    $("#commentsCarousel .carousel-item").each(function (val, i) {
        if (val === 0) {
            $(this).addClass("active");
        }
    });
});

$(document).on("click", ".campaigns-discount__item", function (e) {
    if (
        $(this).find("input[name='email'] , input[name='phone']").is(":focus")
    ) {
        e.preventDefault();
    }
});
