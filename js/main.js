
    //Owl-Carousel
    $('.site-main .project-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    //Sticky Nav
    let nav_offset_top = $('.header').height() + 50;

    function navbarFixed(){
        if($('.header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();



