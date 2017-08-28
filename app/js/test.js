    $(function() {
      var $window_width = $(window).width();
        if($window_width >=421){
        $(".center").slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 4,
            autoplay: true,
            mobileFirst: true
        });
        $(".regular").slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000
        });
        }
         if($window_width <= 420){
          $(".center").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            mobileFirst: true,
            speed:1000
        });
          $(".regular").slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000
        });
        }
    });
