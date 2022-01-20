const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu_list');
const menuIcon = document.querySelector('.menu_icon');

menuIcon.addEventListener('click', () => {
    if (menuList.classList.contains('menuShow')) {
        menuList.classList.remove('menuShow')
        menuIcon.innerHTML = `<img src="images/icon-hamburger.svg" alt="menu icon">`;
    }else{
        menuList.classList.add('menuShow')
        menuIcon.innerHTML = `<img src="images/icon-close.svg" alt="menu close icon">`;
    }
})