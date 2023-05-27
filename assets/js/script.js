const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

// Open Modal
openModal();

// Close Modal
closeModal();

function openModal() {
  openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });
}

function closeModal() {
  closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
}
