const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open Modal
openModal.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

// Close Modal
closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});