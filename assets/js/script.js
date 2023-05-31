const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open Modal
modalOpen();

// Close Modal
modalClosed();

/**
 * This opens the modal
 * when the user clicks on how to play
 */
function modalOpen() {
  openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });
}

/**
 * This closes the modal
 * when the user clicks on the button close
 */
function modalClosed() {
  closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
}