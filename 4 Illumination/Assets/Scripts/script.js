// FLASHLIGHT CURSOR EFFECT

const mouseEvent = document.documentElement;
// const mouseCursor = document.querySelector('.cursor');

mouseEvent.addEventListener('mousemove', (e) => {
    mouseEvent.style.setProperty('--x', e.clientX + 'px');
    mouseEvent.style.setProperty('--y', e.clientY + 'px');

}); 