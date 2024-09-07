const modal = document.querySelector(".modal");
const btn = document.querySelector(".info-button");

btn.addEventListener('mouseover', (event) => {
  event.stopPropagation(); // Impede que o evento se propague para outros elementos
  modal.style.display = "block";
});

btn.addEventListener('mouseout', () => {
  modal.style.display = "none";
});