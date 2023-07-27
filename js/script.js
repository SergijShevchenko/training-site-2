"use strict"

// робимо аби при натисканні на бургер меню воно перетворювалось на випадаюче меню
document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
}