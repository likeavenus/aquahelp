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
                768: {
                    items: 2,
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
        console.log($(window).width());
        if ($(window).width() >= 1366) {
            slider.trigger('destroy.owl.carousel');
        }

        if ($(window).width() < 1366) {
            startSlider();
        }
    });




}