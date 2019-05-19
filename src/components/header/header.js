export default function header() {
    const openMenuButton = document.querySelector('.js-open-menu');
    const headerMenu = document.querySelector('.js-menu-list');

    const handleOpenMenu = () => {
        openMenuButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
    };

    openMenuButton.addEventListener('click', handleOpenMenu);


    $(document).ready(function() {
        $(".js-scroll").click(function() {
            if ($(window).width() <= 768) {
                $('.header_menu_list').removeClass('active');
                $('.header_menu').removeClass('active');
            }
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top - 150 + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
            return false;
        });


    });
}