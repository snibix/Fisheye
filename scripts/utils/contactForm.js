const btnContact = document.querySelector(".contact_button");
const modal = document.querySelector("#contact_modal");
const closeModal = document.querySelector("#close_modal");
const titlePhotograph = document.querySelector(".title_photograph");
const form = modal.querySelector(".contact_form");
const firstFormField = form.querySelector("input"); // Premier champ du formulaire
const lastFormField = closeModal; // Dernier champ du formulaire

// Affiche la modal au clic du bouton "contactez-moi"
btnContact.addEventListener("click", () => {
  modal.style.display = "block";
  titlePhotograph.textContent =
    document.querySelector(".photograph-title").textContent;

  // Définir le focus sur le premier champ du formulaire lorsque la modal s'ouvre
  firstFormField.focus();
});

// Ferme la modal de contact
function closeModalFunction() {
  modal.style.display = "none";
}

closeModal.addEventListener("click", closeModalFunction);

// Intercepter la soumission du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Traitement du formulaire
  const firstName = form.querySelector("#firstname").value;
  const lastName = form.querySelector("#lastname").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;

  let objetData = {
    prenom: firstName,
    nom: lastName,
    email: email,
    message: message,
  };
  console.log(objetData);

  // Fermer la modal et réinitialiser le formulaire
  closeModalFunction();
  form.reset();
});

// Gérer le focus dans le formulaire pour empêcher le focus de sortir du formulaire
lastFormField.addEventListener("keydown", (event) => {
  if (event.key === "Tab" && !event.shiftKey) {
    event.preventDefault();
    firstFormField.focus();
  } else if (event.key === "Enter") {
    closeModalFunction(); // Fermer la modal lorsque la touche Entrée est pressée sur la croix de fermeture
  }
});
