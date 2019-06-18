export default function advantages() {
    const slider = $('.advantages_slider');

    function startSlider() {
        slider.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false,
                    stagePadding: 25
                },
                375: {
                    items: 1,
                    nav: false,
                    dots: false,
                    stagePadding: 55
                },
                768: {
                    items: 2,
                    stagePadding: 80
                },
                1024: {
                    items: 3,
                    stagePadding: 50
                },
                1200: {
                    items: 3,
                    stagePadding: 80
                }
            }
        });
    }

    $(document).ready(function () {
        if ($(window).width() < 1366) {
            startSlider();
        } else if ($(window).width() >= 1366) {
            slider.trigger('destroy.owl.carousel');
        }
    });




    $(window).on('resize', function () {
        if ($(window).width() >= 1366) {
            slider.trigger('destroy.owl.carousel');
        }

        if ($(window).width() < 1366) {
            startSlider();
        }
    });




}