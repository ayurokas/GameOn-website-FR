function editNav() {
  console.log("La fonction editNav a été appelée"); // Ajout d'un console log pour suivre l'exécution de la fonction
  // Récupère l'élément HTML avec l'ID "myTopnav"
  var x = document.getElementById("myTopnav");
  // Vérifie si l'élément a une classe "topnav"
  if (x.className === "topnav") {
    // Ajoute la classe "responsive" si elle n'est pas déjà présente
    x.className += " responsive";
  } else {
    // Retire la classe "responsive" si elle est déjà présente
    x.className = "topnav";
  }
}

// DOM Elements
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
if (isNaN(quantity.value) || quantity.value === "" || quantity.value < 0) {
  document.querySelector("#quantity-error").innerHTML = "Vous devez entrer une valeur numérique pour le nombre de concours.";
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
//utilise la propriété "checked" pour vérifier si la case à cocher associée aux termes et conditions est cochée ou non. 
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
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && !/[<>()[\]\\.,;:\s@"]/.test(email);
}

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
  
  // Fonction pour réinitialiser le formulaire après soumission réussie
  //fonction nommée "resetForm()", qui permet de réinitialiser le formulaire après une soumission réussie.
  function resetForm() {
  console.log("Réinitialisation du formulaire");
  var form = document.querySelector("#form");//sélectionne l'élément HTML correspondant au formulaire, en utilisant la méthode "querySelector"
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
    console.log("Affichage du message de confirmation");
    //récupérer l'élément HTML correspondant au message de confirmation en utilisant sa classe CSS
    var modalbg = document.querySelector(".bground");
    var form = document.querySelector("#form");
    var messageok = document.querySelector(".messageok");
    //appliquent des styles CSS pour masquer le formulaire et afficher le message de confirmation
    form.classList.add("hide-element");
    messageok.classList.remove("hide-element");
    messageok.classList.add("show");
    // Réinitialisation du formulaire
    resetForm();
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

  //* "trim" est utilisé pour supprimer les espaces blancs au début et à la fin de la valeur de la variable 