const controlPopover = (tag) => {
  const toggle = document.querySelector(`.${tag}`);
  const popover = document.querySelector('.popover');

  toggle.addEventListener('click', () => {
    if (popover.dataset.toggle === 'hidden') {
      popover.dataset.toggle = 'show';
      popover.style.bottom = `${toggle.offsetHeight}px`;
      popover.style.left = `${
        toggle.offsetLeft + (toggle.offsetWidth / 2 - popover.offsetWidth / 2)
      }px`;
    } else if (popover.dataset.toggle === 'show') {
      popover.dataset.toggle = 'hidden';
    }
  });
};

export default controlPopover;
