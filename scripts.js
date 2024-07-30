document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementById("close");
  
    galleryItems.forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = item.dataset.fullsize;
        captionText.innerHTML = `<h2>${item.dataset.title}</h2><p>${item.dataset.description}</p>`;
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  