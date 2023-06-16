$(document).ready(function() {
    $(".lang-flag").click(function() {
        $(".language-dropdown").toggleClass("open");
    });
    $("ul.lang-list li").click(function() {
        $("ul.lang-list li").removeClass("selected");
        $(this).addClass("selected");
        if ($(this).hasClass('lang-en')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-germ").removeClass("lang-russ").removeClass("lang-span").removeClass("lang-poli").removeClass("lang-arab");
            $("#lang_selected").html("<p>English</p>")
        } else if ($(this).hasClass('lang-germ')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-germ").removeClass("lang-en").removeClass("lang-russ").removeClass("lang-span").removeClass("lang-poli").removeClass("lang-arab");
            $("#lang_selected").html("<p>German</p>")
        } else if ($(this).hasClass('lang-russ')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-russ").removeClass("lang-en").removeClass("lang-germ").removeClass("lang-span").removeClass("lang-poli").removeClass("lang-arab");
            $("#lang_selected").html("<p>Russian</p>")

        } else if ($(this).hasClass('lang-span')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-span").removeClass("lang-en").removeClass("lang-germ").removeClass("lang-russ").removeClass("lang-poli").removeClass("lang-arab");
            $("#lang_selected").html("<p>Spanish</p>")
        } else if ($(this).hasClass('lang-poli')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-poli").removeClass("lang-en").removeClass("lang-germ").removeClass("lang-russ").removeClass("lang-span").removeClass("lang-arab");
            $("#lang_selected").html("<p>Polish</p>")
        } else if ($(this).hasClass('lang-arab')) {
            $(".language-dropdown").find(".lang-flag").addClass("lang-arab").removeClass("lang-en").removeClass("lang-germ").removeClass("lang-russ").removeClass("lang-span").removeClass("lang-poli");
            $("#lang_selected").html("<p>Arabic</p>")
        }





        //else{
        //      $(".language-dropdown").find(".lang-flag").addClass("lang-russ").removeClass("lang-en").removeClass("lang-germ").removeClass("lang-span").removeClass("lang-poli").removeClass("lang-arab");
        //      $("#lang_selected").html("<p>Russian</p>")
        //    }
        //	



        $(".language-dropdown").removeClass("open");
    });
})


//  lang-en  lang-germ  lang-russ    lang-span  lang-poli  lang-arab