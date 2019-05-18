export default function algoritm() {
    const slider = $('.algoritm_list');

    function startOwlCarousel () {
        slider.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false,
                    stagePadding: 35
                },
                768: {
                    items: 2,
                    stagePadding: 20
                }
            }
        });
    }



    $(document).ready(function () {
        if ($(window).width() < 768) {
            startOwlCarousel();
        } else if ($(window).width() >= 768) {
            slider.trigger('destroy.owl.carousel');
        }
    });

    $(window).on('resize', function () {
        console.log($(window).width());
        if ($(window).width() >= 768) {
            slider.trigger('destroy.owl.carousel');
        }

        if ($(window).width() < 768) {
            startOwlCarousel();
        }
    });
}