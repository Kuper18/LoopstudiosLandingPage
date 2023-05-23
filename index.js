window.addEventListener('load', () => {
  ('use strict');

  const widthWindow = window.innerWidth;
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navBar = document.querySelector('.nav-bar');
  const navLink = document.querySelectorAll('.nav-link');

  if (widthWindow < 770) {
    changeImgAndremoveBtn();
  }

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.classList.toggle('active');
  });

  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      navBar.classList.toggle('active');
    });
  });

  window.addEventListener('resize', () => {
    changeImgAndremoveBtn();
  });

  function changeImgAndremoveBtn() {
    const widthWindow = window.innerWidth;
    const button = document.querySelector('button');
    const cloneBtn = button.cloneNode(true);
    const images = document.querySelectorAll('.img-card img');
    const imgArr = [
      'image-deep-earth.jpg',
      'image-night-arcade.jpg',
      'image-soccer-team.jpg',
      'image-grid.jpg',
      'image-from-above.jpg',
      'image-pocket-borealis.jpg',
      'image-curiosity.jpg',
      'image-fisheye.jpg',
    ];

    if (widthWindow < 770) {
      for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('src', `images/mobile/${imgArr[i]}`);
      }

      document.querySelector('.products').appendChild(cloneBtn);
      button.remove();
    } else {
      for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('src', `images/desktop/${imgArr[i]}`);
      }

      document.querySelector('.products-heading').appendChild(cloneBtn);
      button.remove();
    }
  }
});
