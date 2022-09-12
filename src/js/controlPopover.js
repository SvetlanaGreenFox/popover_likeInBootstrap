const controlPopover = (tag) => {
  const toggle = document.querySelector(`.${tag}`);
  const popover = document.querySelector('.popover');

  toggle.addEventListener('click', () => {
    popover.classList.toggle('show');
    if (popover.classList.contains('show')) {
      popover.style.bottom = `${toggle.offsetHeight}px`;
      popover.style.left = `${toggle.offsetTop + (toggle.offsetWidth - popover.offsetWidth) / 2}px`;
    }
  });
};

export default controlPopover;
