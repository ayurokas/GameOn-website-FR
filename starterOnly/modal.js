function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// Sélection des éléments du DOM
const modalbg = document.querySelector(".bground");
const form = document.querySelector("#form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const confirmationMessage = document.querySelector(".formok");
const confirmationButton = document.querySelector(".formok-close");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationList = document.querySelectorAll(".locationlist input[type=radio]");
const tosCheckbox = document.querySelector("#tos");
const newsCheckbox = document.querySelector("#news");
const closeButton = document.querySelector(".btn-close");


// Fonction de validation du formulaire
function validate() {
  let isValid = true;

  // Validation du prénom
  if (firstName.value.trim().length < 2) {
    document.querySelector("#firstname-error").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid = false;
  } else {
    document.querySelector("#firstname-error").innerHTML = "";
  }

  // Validation du nom de famille
  if (lastName.value.trim().length < 2) {
    document.querySelector("#lastname-error").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    isValid = false;
  } else {
    document.querySelector("#lastname-error").innerHTML = "";
  }

  // Validation de l'adresse électronique
  if (!emailIsValid(email.value)) {
    document.querySelector("#email-error").innerHTML = "Veuillez entrer une adresse email valide.";
    isValid = false;
  } else {
    document.querySelector("#email-error").innerHTML = "";
  }

  // Validation de la date de naissance
  if (!birthdate.value) {
    document.querySelector("#birthdate-error").innerHTML = "Vous devez entrer votre date de naissance.";
    isValid = false;
  } else {
    document.querySelector("#birthdate-error").innerHTML = "";
  }

  // Validation du nombre de concours
  if (isNaN(quantity.value) || quantity.value < 0) {
    document.querySelector("#quantity-error").innerHTML = "Vous devez entrer une valeur numérique pour le nombre de concours.";
    isValid = false;
  } else {
    document.querySelector("#quantity-error").innerHTML = "";
  }

  // Validation de la sélection de la ville
  let locationChecked = false;
  for (let i = 0; i < locationList.length; i++) {
    if (locationList[i].checked) {
      locationChecked = true;
      break;
    }
  }
  if (!locationChecked) {
    document.querySelector("#location-error").innerHTML = "Vous devez choisir une option.";
    isValid = false;
  } else {
    document.querySelector("#location-error").innerHTML = "";
  }

  // Validation de l'acceptation des conditions générales
  if (!tosCheckbox.checked) {
    document.querySelector(".errormsg").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  } else {
    document.querySelector(".errormsg").innerHTML = "";
  }

  return isValid;
}

// Fonction pour valider le format de l'adresse électronique
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Événement submit pour le formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi du formulaire par défaut
  var isFormValid = validate(); // Vérifie la validité du formulaire
  if (isFormValid) {
  showConfirmation(); // Affiche le message de confirmation
  resetForm(); // Réinitialise le formulaire
  }
  });
  
  // Fonction pour réinitialiser le formulaire après soumission réussie
  function resetForm() {
  var form = document.querySelector("#form");
  form.reset(); // Réinitialise les champs du formulaire
  var errorMessages = document.querySelectorAll(".error-message");
  for (var i = 0; i < errorMessages.length; i++) {
  errorMessages[i].textContent = ""; // Efface les messages d'erreur
  }
  var checkboxes = document.querySelectorAll(".checkbox-input");
  for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].checked = checkboxes[i].defaultChecked; // Rétablit les cases à cocher par défaut
  }
  }

  function showConfirmation() {
    var modalbg = document.querySelector(".bground");
    var form = document.querySelector("#form");
    var formok = document.querySelector(".formok");
  
    form.classList.add("hide-element");
    formok.classList.remove("hide-element");
    formok.classList.add("show");
    modalbg.classList.remove("noscroll");

  // Bouton de fermeture du message de confirmation
  confirmationButton.addEventListener("click", function() {
    modalbg.style.display = "none";
});

  }

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
  
  // Bouton de fermeture de la modal
  closeButton.addEventListener("click", function() {
    modalbg.style.display = "none";
  });
}