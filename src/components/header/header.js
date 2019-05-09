export default function header() {
    const openMenuButton = document.querySelector('.js-open-menu');
    const headerMenu = document.querySelector('.js-menu-list');

    const handleOpenMenu = () => {
        openMenuButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
    };

    openMenuButton.addEventListener('click', handleOpenMenu);
}