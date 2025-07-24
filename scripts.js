document.addEventListener("DOMContentLoaded", () => {
  const tutorialButtons = document.querySelectorAll(".view-tutorial");
  const modals = document.querySelectorAll(".tool-modal");
  const closeButtons = document.querySelectorAll(".close-modal");

  tutorialButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tool = button.getAttribute("data-tool");
      const modal = document.getElementById(`${tool}-modal`);
      if (modal) {
        modal.classList.add("active");
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".tool-modal");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Close modal when clicking outside modal content
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
});
