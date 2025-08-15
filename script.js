function showHideMobileMenu() {
    let menu = document.getElementById('resp_menu');
    let btnImg = document.querySelector('.mobile_menu img');

    menu.classList.toggle('menu_close');

    if (menu.classList.contains('menu_close')) {
        btnImg.src = './img/icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
    } else {
        btnImg.src = './img/icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
    }
}