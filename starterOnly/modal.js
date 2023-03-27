function editNav() {
  console.log("La fonction editNav a été appelée");
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// "DOM Elements" est utilisée pour sélectionner et stocker des éléments HTML spécifiques dans des variables
// Cela permet d'accéder facilement aux éléments du formulaire HTML/css à partir du code JavaScript.
const modalbg = document.querySelector(".bground"); 
const form = document.querySelector("#form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const confirmationMessage = document.querySelector(".messageok");
const confirmationButton = document.querySelector(".messageok-close");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationList = document.querySelectorAll(".locationlist input[type=radio]");
const tosCheckbox = document.querySelector("#tos");
const newsCheckbox = document.querySelector("#news");
const closeButton = document.querySelector(".btn-close");

//fonction "validate()" est utilisée pour valider les données saisies par l'utilisateur dans le formulaire avant de le soumettre
function validate() {
  console.log("La fonction validate a été appelée");
  let isValid = true; //variable stocke l'état de la validation du formulaire, qui est initialisée à "true" car le formulaire n'a pas encore été validé.

  // verifie si le champ du prénom est valide 
if (firstName.value.trim().length < 2) {
  document.querySelector("#firstname-error").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  isValid = false;
  firstName.classList.add("error-input");
} else {
  document.querySelector("#firstname-error").innerHTML = "";
  firstName.classList.remove("error-input");
}

// Validation du nom de famille
if (lastName.value.trim().length < 2) {
  document.querySelector("#lastname-error").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  isValid = false;
  lastName.classList.add("error-input");
} else {
  document.querySelector("#lastname-error").innerHTML = "";
  lastName.classList.remove("error-input");
}

// Validation de l'adresse électronique
if (!emailIsValid(email.value)) {
  document.querySelector("#email-error").innerHTML = "Veuillez entrer une adresse email valide.";
  isValid = false;
  email.classList.add("error-input");
} else {
  document.querySelector("#email-error").innerHTML = "";
  email.classList.remove("error-input");
}

// Validation de la date de naissance
if (!birthdate.value) {
  document.querySelector("#birthdate-error").innerHTML = "Vous devez entrer votre date de naissance.";
  isValid = false;
  birthdate.classList.add("error-input");
} else {
  document.querySelector("#birthdate-error").innerHTML = "";
  birthdate.classList.remove("error-input");
}

// Validation du nombre de concours
if (isNaN(quantity.value) || quantity.value === "" || quantity.value < 0 || quantity.value > 99) {
  document.querySelector("#quantity-error").innerHTML = "Vous devez entrer une valeur numérique entre 0 et 99 pour le nombre de concours.";
  isValid = false;
  quantity.classList.add("error-input");
} else {
  document.querySelector("#quantity-error").innerHTML = "";
  quantity.classList.remove("error-input");
}

// Validation de la sélection de la ville
let locationChecked = false;
for (let i = 0; i < locationList.length; i++) {//utilise une boucle "for" pour parcourir tous les boutons associés aux villes dans le formulaire, 
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
//vérifie si l'utilisateur a accepté les termes et conditions du formulaire
if (!tosCheckbox.checked) {
  document.querySelector("#tos-error").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  isValid = false;
  tosCheckbox.classList.add("error-input");
} else {
  document.querySelector("#tos-error").innerHTML = "";
  tosCheckbox.classList.remove("error-input");
}
console.log("La fonction validate a terminé son exécution avec isValid = " + isValid); // Ajout d'un console log pour suivre l'exécution de la fonction
  return isValid;
}

function emailIsValid(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

quantity.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
});

//utilise la méthode "addEventListener" pour écouter l'événement "submit"
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi du formulaire par défaut
  console.log("Le formulaire a été soumis");
  var isFormValid = validate(); // Vérifie la validité du formulaire
  console.log("Le formulaire est " + (isFormValid ? "valide" : "invalide")); // Ajout d'un console log pour suivre l'exécution de la fonction
  if (isFormValid) {
  showConfirmation(); // Affiche le message de confirmation
  resetForm(); // Réinitialise le formulaire
  }
  });
  
  //fonction nommée "resetForm()", qui permet de réinitialiser le formulaire après une soumission réussie.
  function resetForm() {
  console.log("Réinitialisation du formulaire");
  var form = document.querySelector("#form");
  form.reset(); // Réinitialise les champs du formulaire
  var errorMessages = document.querySelectorAll(".error-message");
  for (var i = 0; i < errorMessages.length; i++) {
  errorMessages[i].textContent = "";
  }
  var checkboxes = document.querySelectorAll(".checkbox-input");
  for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].checked = checkboxes[i].defaultChecked; // Rétablit les cases à cocher par défaut
  }
  }

  function showConfirmation() {
    console.log("Affichage du message de confirmation");
    var modalbg = document.querySelector(".bground");
    var form = document.querySelector("#form");
    var messageok = document.querySelector(".messageok");
    form.classList.add("hide-element");
    messageok.classList.remove("hide-element");
    messageok.classList.add("show");
    // Réinitialisation du formulaire
    resetForm();
    // Bouton de fermeture du message de confirmation
    confirmationButton.addEventListener("click", function() {
      // masquer le message de confirmation et réafficher le formulaire
      form.classList.remove("hide-element");
      messageok.classList.remove("show");
      messageok.classList.add("hide-element");
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
