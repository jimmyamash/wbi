$(document).ready(function(){
    $(".faq-expand").click(function(){
        $(this).closest(".faq-question").toggleClass("active");
    });
    $(".faq-expand-all").click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $(".faq-question").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".faq-question").addClass("active");
        }
    });
    $(".row:not(.row-header):not(.row-main-atf)").appear(function(){
        $(this).addClass("animate");
    },{accX: 50, accY: -300});
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

    $(".faq-button-toggle").click(function(){
        if ($("body").hasClass("faqs")) {
            $(".atf-coins-1").attr("src","img/coins-1.png");
            $(".atf-coins-2").attr("src","img/coins-2.png");
        } else {
            $(".atf-coins-1").attr("src","img/questions-1.png");
            $(".atf-coins-2").attr("src","img/questions-2.png");
        }
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
    $(".anchor").click(function(){
        var theID = $(this).attr("id");
        if ($("body").hasClass("faqs")) {
            $("body").removeClass("faqs");
            $(".atf-coins-1").attr("src","img/coins-1.png");
            $(".atf-coins-2").attr("src","img/coins-2.png");            
        }
        switch(theID) {
            case "AnchorAbout":
                $("html, body").animate({ scrollTop: $('#Learn').offset().top }, 300);
                break;
            case "AnchorRoadmap":
                $("html, body").animate({ scrollTop: $('#Roadmap').offset().top }, 300);
                break;
            case "AnchorTeam":
                $("html, body").animate({ scrollTop: $('#Team').offset().top }, 300);
                break;
            case "AnchorJoin":
                $("html, body").animate({ scrollTop: $('#Join').offset().top }, 300);
                break;
        }

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
