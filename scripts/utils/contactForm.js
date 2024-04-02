// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }
const btnContact = document.querySelector(".contact_button");
const modal = document.querySelector("#contact_modal");
const closeModal = document.querySelector("#close_modal");
const titlePhotograph = document.querySelector(".title_photograph");
console.log(modal, btnContact);
btnContact.addEventListener("click", () => {
  modal.style.display = "block";
  titlePhotograph.textContent =
    document.querySelector(".photograph-title").textContent;
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
