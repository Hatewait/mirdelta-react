document.addEventListener('DOMContentLoaded', (event) => {
  let mainSwiper = new Swiper('[data-main-page-main-slider]', {
    loop: true,
    navigation: {
      nextEl: '[data-main-page-slider-arrow_next]',
      prevEl: '[data-main-page-slider-arrow_prev]',
    },
    autoplay: true,
    speed: 300,
    effect: 'fade',
  });

  let flagmanTitles = document.querySelectorAll('[data-flagships-title]');

  flagmanTitles.forEach((item) => {
    let text = item.textContent.trim(); // берём текст из элемента
    let newStr = text.replace(" ", "<br>"); // заменяем первый пробел на перенос строки
    item.innerHTML = newStr; // вставляем обратно с <br>
  });
});



