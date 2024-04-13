(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      backdropOpen: document.querySelector("[backdrop-open]"),
      backdropClose: document.querySelector("[backdrop-close]"),
      modal: document.querySelector("[data-modal]"),
      backdrop: document.querySelector("[backdrop]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.backdropOpen.addEventListener("click", toggleModal);
    refs.backdropClose.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.backdrop.classList.toggle("is-hidden");
    }


    // Отримати всі посилання на сторінки

  })();