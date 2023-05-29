const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open Modal
modalOpen();

// Close Modal
modalClosed();

function modalOpen() {
  openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });
}

function modalClosed() {
  closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
}