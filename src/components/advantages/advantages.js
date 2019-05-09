export default function advantages() {
    const slider = $('.owl-carousel');

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
                stagePadding: 20
            }
        }
    });
}