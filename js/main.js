$(function() {
    "use strict";
    var e = $(window).width();
    $(window).height();
    $(window).on("load", function() {
        $(".preloader .spinner").fadeOut(function() {
            $(".preloader").fadeOut(), $("body").addClass("ready")
        })
    }), $(".filter").on("click", "a", function() {
        var e = $(this).attr("data-filter");
        return $(".work-item").hide(), $(e).fadeIn(), !1
    }), $(".menu-btn").sideNav(), 1080 > e && $(".side-nav").css({
        transform: "translateX(-100%)"
    }), $("#home-section").length && $(window).on("scroll", function() {
        var e = $(window).scrollTop();
        $(".side-nav li > a").each(function() {
            var a = $(this),
                i = $(a.attr("href"));
            i.offset().top - 30 <= e && ($(".side-nav li").removeClass("active"), a.closest("li").addClass("active"))
        })
    }), $(".scrollspy").scrollSpy({
        scrollOffset: 0
    }), $("#cform").validate({
        rules: {
            name: {
                required: !0
            },
            message: {
                required: !0
            },
            subject: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            }
        },
        highlight: function(e) {
            $(e).addClass("invalid"), $(e).removeClass("valid")
        },
        unhighlight: function(e) {
            $(e).removeClass("invalid"), $(e).addClass("valid")
        },
        success: "valid",
        submitHandler: function() {
            $.ajax({
                url: "feedback.php",
                type: "post",
                dataType: "json",
                data: "name=" + $("#cform").find('input[name="name"]').val() + "&email=" + $("#cform").find('input[name="email"]').val() + "&subject=" + $("#cform").find('input[name="subject"]').val() + "&message=" + $("#cform").find('textarea[name="message"]').val(),
                beforeSend: function() {},
                complete: function() {},
                success: function() {
                    $("#cform").fadeOut(), $(".alert-success").delay(1e3).fadeIn();
                }
            })
			
			
        }
    }), $("#blog-form").validate({
        rules: {
            name: {
                required: !0
            },
            message: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            }
        },
        highlight: function(e) {
            $(e).addClass("invalid"), $(e).removeClass("valid")
        },
        unhighlight: function(e) {
            $(e).removeClass("invalid"), $(e).addClass("valid")
        },
        success: "valid",
        submitHandler: function() {
            $("#blog-form").fadeOut(), $(".alert-success").delay(1e3).fadeIn()
        }
    }), $(".card.work-item .activator").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: !0,
        mainClass: "mfp-fade"
    }), $(".post-lightbox").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    })
	
});