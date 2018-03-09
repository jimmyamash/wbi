$(document).ready(function(){
    $("input:not([type='submit'])").on("blur", function(){
        var trim = $(this).val().trim();
        $(this).val(trim);
    });
    $(window).scroll(function(){
        $(".row:not(.row-header):not(.row-main-atf)").appear(function(){
            $(this).addClass("animate");
        },{accX: 50, accY: -300});
    });
    $(".row-header").addClass("animate");
    $(".row-main-first").addClass("animate");

    $(".signup-button-link").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 300);
        $("body").toggleClass("faqs");
        $(".row:not(.row-header):not(.row-main-atf)").removeClass("animate");
    });
    $(".learn-more").click(function(){
        $("html, body").animate({ scrollTop: $('#Learn').offset().top }, 300);
    });
    $(".join-wbi").click(function(){
        $("html, body").animate({ scrollTop: $('#Join').offset().top }, 300);
    });
    //callback to load success window after signup
    if(window.location.href.indexOf("success-content") > -1) {
        $("body").addClass("no-flow");
        $(".success-content").show();
    }
    $(".error-hide").click(function(){
        $(".error").hide();
    });
    $(".overlay-close").click(function(){
        $("body").removeClass("no-flow");
        $(".success-overlay").hide();
    })
    $(".overlay-close-faq").click(function(){
        window.location = window.location.href.replace('#success-faq', '');
    });
});
