  var delays = [11000, 11000, 11000];
  $(document).ready(function() {
      if (!isMobile()) {
          var owl = $('#bannerCarousel1');
      } else {
          var owl = $('#bannerCarousel2');
      }
      owl.owlCarousel({
          loop: true,
          margin: 0,
          autoplay: true,
          autoplayTimeout: 11000,
          paginationSpeed: 400,
          transitionStyle: "fade",
          afterChange: function() {
              setDelay()
          },
          afterLoad: function() {
              setDelay()
          },
          nav: true,
          dots: false,
          items: 1,
          navigation: true,
          navText: ["", ""],
      });






      owl.on('translate.owl.carousel', function(e) {
          $('.owl-item video').each(function() {
              $(this).get(0).pause();
          });
      });
      owl.on('translated.owl.carousel', function(e) {
          $('.owl-item.active video').get(0).play();
      })
      if (!isMobile()) {
          $('.owl-item .item').each(function() {
              var attr = $(this).attr('data-videosrc');
              if (typeof attr !== typeof undefined && attr !== false) {
                  console.log('hit');
                  var videosrc = $(this).attr('data-videosrc');
                  $(this).prepend('<video muted><source src="' + videosrc + '" type="video/mp4"></video>');
              }
          });
          $('.owl-item.active video').attr('autoplay', true).attr('loop', true);
      }
  });


  function isMobile(width) {
      if (width == undefined) {
          width = 719;
      }
      if (window.innerWidth <= width) {
          return true;
      } else {
          return false;
      }
  }