// $(document).ready(function(){

$(document).ready(() => {
  const textArea = document.querySelectorAll('[data-autoresize]');
  textArea.forEach((item) => {
    const textAreaHeight = item.offsetHeight;
    item.addEventListener('input', (event) => {
      const $this = event.target;
      $this.style.height = `${textAreaHeight}px`;
      $this.style.height = `${$this.scrollHeight}px`;
    });
  });
  const menuItemHasChildrenA = document.querySelector('.mobile-nav .menu-item-has-children > a');
  const menuItemHasChildren = document.querySelector('.mobile-nav .menu-item-has-children > a +ul');

  // const menuItemHasChildren = document.getElementsByTagName('.mobile-nav .menu-item-has-children > a +ul');
  console.log(menuItemHasChildren);

  // menuItemHasChildrenA.forEach((item) => {
  //   item.addEventListener('click', (event) => {
  //     // console.log(item);
  //     const menuItemHasChildrenAUl = event.childNodesnextSibling;
  //     // const menuItemHasChildrenAUl = event.target.closest('ul');
  //     console.log(menuItemHasChildrenAUl);
  //   });
  // });

  menuItemHasChildrenA.addEventListener('click', () => {
    if (menuItemHasChildren.classList.contains('open')) {
      menuItemHasChildren.classList.remove('open');
    } else {
      menuItemHasChildren.classList.add('open');
    }
  });

  const burger = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const bodyPage = document.body;
  const mainBblock = document.getElementById('page');

  burger.addEventListener('click', () => {
    if (bodyPage.classList.contains('show-sidebar')) {
      // document.querySelector('.page__mask').remove();
      bodyPage.classList.remove('show-sidebar');
      sidebar.classList.remove('open');
      burger.classList.remove('active');
      document.querySelector('.page__mask').remove();
    } else {
      const mask = document.createElement('div');
      mask.classList.add('page__mask');
      mainBblock.appendChild(mask);
      bodyPage.classList.add('show-sidebar');
      sidebar.classList.add('open');
      burger.classList.add('active');
    }
  });

  const modalBtn = document.querySelectorAll('[data-modal]');
  const modalClose = document.querySelectorAll('.modal__close');
  const modalW = document.querySelectorAll('.modal');
  const { body } = document;

  function closeModal(curretModal) {
    const modalContentTwo = curretModal.querySelector('.modal__content');
    modalContentTwo.removeAttribute('style');
    setTimeout(() => {
      curretModal.classList.remove('show');
      body.classList.remove('no-scroll');
    }, 200);
  }

  modalBtn.forEach((item) => {
    item.addEventListener('click', (event) => {
      const $this = event.currentTarget;
      const modalId = $this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      const modalContent = modal.querySelector('.modal__content');

      modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      modal.classList.add('show');
      body.classList.add('no-scroll');
      setTimeout(() => {
        modalContent.style.transform = 'none';
      }, 1);
    });
  });

  modalClose.forEach((item) => {
    item.addEventListener('click', (event) => {
      const curretModal = event.currentTarget.closest('.modal');
      closeModal(curretModal);
    });
  });

  modalW.forEach((item) => {
    item.addEventListener('click', (event) => {
      const curretModal = event.currentTarget;
      closeModal(curretModal);
    });
  });
});
