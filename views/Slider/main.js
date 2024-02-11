const carousel = document.querySelector('.carousel');
const firstImg = document.querySelector('.carousel img');
const arrowIcons = document.querySelectorAll('.wrapper i');

let isDragging = false;
let startX, scrollLeft;

// ocultar o mostrar iconos segun la pocicion del scroll
const showHideIcons = () => {

  const atStart = carousel.scrollLeft < 10;
  const atEnd = carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth;

  arrowIcons[0].style.display = atStart ? 'none' : 'block';
  arrowIcons[1].style.display = atEnd ? 'none' : 'block';
}

// iniciar drag
const dragStart = (e) => {

  isDragging = true;
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;

}

// soltar drag
const dragStop = () => {

  isDragging = false;
  carousel.classList.remove('dragging');

}

// efecto de drag sobre el carousel
const dragging = (e) => {

  if (!isDragging) return;
  e.preventDefault();
  carousel.classList.add('dragging');
  const deltaX = (e.pageX || e.touches[0].pageX) - startX;
  carousel.scrollLeft = scrollLeft - deltaX;
  showHideIcons()

}

// añadir scrolling a lo iconos
arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const direction = icon.id === 'left' ? -1 : 1
    carousel.scrollLeft += direction * (firstImg.clientWidth + 14)
    setTimeout(showHideIcons, 60);
  })
})

// control de eventos
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);