(function($) {
    "use strict";

    /* sticky header */
    /* --------------------------------------------------------------------- */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 40) {
            //jQuery('body').addClass("sticky-for-body");
            jQuery('header').addClass("sticky-for-header");
            jQuery('header-main').addClass("stick-09");
            //jQuery('header .toolbar').addClass('toolbar_hidden');
        } else {
            //jQuery('body').removeClass("sticky-for-body");
            jQuery('header').removeClass("sticky-for-header");
            jQuery('header-main').removeClass("stick-09");
            //jQuery('header .toolbar').removeClass('toolbar_hidden');
        }
    });



    $(function() {
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 40) {
                $(".header-main").addClass("stick-09");
                $(".toolbar").addClass("stickyt");
                //$(".menu-pad2").addClass("logo-bor");
                //$(".menu-color").addClass("menu-color-add");
                //$(".sub-menu").addClass("sub-show");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".header-main").removeClass("stick-09");
                $(".toolbar").removeClass("stickyt");
                //$(".menu-pad2").removeClass("logo-bor");
                // $(".menu-color").removeClass("menu-color-add");
                // $(".sub-menu").removeClass("sub-show");

            }
        });
    });







    //$('.menu-01').hide(); 
    //$('#sidebar').mouseover(function () {
    //      $('.menu-01').show();      
    //});
    //$('#sidebar').mouseout(function () {
    //      $('.menu-01').hide();      
    //});
    //
    //$('.menu-01').hide(); 
    //$('#sidebar1').mouseover(function () {
    //      $('.menu-01').show();      
    //});
    //$('#sidebar1').mouseout(function () {
    //      $('.menu-01').hide();      
    //});
    //
    //
    //$('.menu-02').hide(); 
    //$('#sidebar2').mouseover(function () {
    //      $('.menu-02').show();      
    //});
    //$('#sidebar2').mouseout(function () {
    //      $('.menu-02').hide();      
    //});
    //
    //$('.menu-02').hide(); 
    //$('#sidebar3').mouseover(function () {
    //      $('.menu-02').show();      
    //});
    //$('#sidebar3').mouseout(function () {
    //      $('.menu-02').hide();      
    //});
    //










    /* --------------------------------------------------------------------- */

    /*	Scroll to top
    /* ---------------------------------------------------------------------- */

    /* --------------------------------------------------------------------- */

    /* For Tooltips 
    /* ---------------------------------------------------------------------- */


    /* Popovers
    /* ---------------------------------------------------------------------- */
    jQuery(function() {
        jQuery("[data-toggle=popover]")
            .popover()
    });
    /* --------------------------------------------------------------------- */

    /* for Mega Menu
    /* ---------------------------------------------------------------------- */
    jQuery(function() {
        window.prettyPrint && prettyPrint()
        jQuery(document).on('click', '.megamenu .dropdown-menu', function(e) {
            e.stopPropagation()
        })
    });
    /* --------------------------------------------------------------------- */

    /* For dropdown menus on hover rather than click 
    /* ------------------------------------------------------------- */
    jQuery(document).ready(function() {
        jQuery('.nav li.dropdown').hover(function() {
            jQuery(this).addClass('open');
        }, function() {
            jQuery(this).removeClass('open');
        });
    });


})(jQuery);