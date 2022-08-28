const menuItem = document.querySelectorAll('#menu-item');
const mobileMenuItem = document.querySelectorAll('#mobile-menu-item');
const mobileSidebar = document.querySelector('.mobile-navbar');

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', () => {
  closeMenu.classList.add('show');
  openMenu.classList.add('hidden');
  overlay.classList.add('show');
  mobileSidebar.classList.add('show-mobile-sidebar');
  document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
  openMenu.classList.remove('hidden');
  overlay.classList.remove('show');
  mobileSidebar.classList.remove('show-mobile-sidebar');
  document.body.classList.remove('no-scroll');
});

menuItem.forEach((elem) => {
  elem.addEventListener('click', () => {
    const imgChild = elem.children[1];
    const dropdownChild = elem.children[2];

    console.log(imgChild, dropdownChild);

    imgChild.classList.toggle('rotate');
    dropdownChild.classList.toggle('show');
  });
});

mobileMenuItem.forEach((elem) => {
  elem.addEventListener('click', () => {
    const imgChild = elem.children[1];
    const dropdownChild = elem.children[2];

    imgChild.classList.toggle('rotate');
    dropdownChild.classList.toggle('show');
  });
});
