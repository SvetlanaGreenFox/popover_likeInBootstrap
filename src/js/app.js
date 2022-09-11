// import controlPopover from './controlPopover';

const toggle = document.querySelector('.btn');
const popover = document.querySelector('.popover');

toggle.addEventListener('click', () => {
  popover.classList.toggle('hidden');
  if (!popover.classList.contains('hidden')) {
    popover.style.bottom = `${toggle.offsetHeight}px`;
    popover.style.left = `${toggle.offsetTop + (toggle.offsetWidth - popover.offsetWidth) / 2}px`;
  }
});
