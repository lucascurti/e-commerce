export const hideModal = () => {
  document.getElementsByTagName('body')[0].classList.remove('modal-open');
  document.getElementsByClassName('modal-backdrop')[0].classList.remove('show');
  document.getElementsByClassName('modal-backdrop')[0].classList.add('hide');
};
