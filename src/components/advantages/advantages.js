export default function advantages() {
    const slider = $('.advantages_slider');

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