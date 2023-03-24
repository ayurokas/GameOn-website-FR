function editNav() {
  console.log("La fonction editNav a été appelée"); // Ajout d'un console log pour suivre l'exécution de la fonction
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// "DOM Elements" est utilisée pour sélectionner et stocker des éléments HTML spécifiques dans des variables
// Cela permet d'accéder facilement aux éléments du formulaire HTML à partir du code JavaScript.
const modalbg = document.querySelector(".bground"); //la boîte de dialogue modale affichée lorsque l'utilisateur clique sur le bouton "Je m'inscris" ou "Inscription".
const form = document.querySelector("#form");//formulaire dans la boîte de dialogue modale.
const modalBtn = document.querySelectorAll(".modal-btn");//boutons qui ouvrent la boîte de dialogue modale.
const formData = document.querySelectorAll(".formData");//les champs du formulaire.
const confirmationMessage = document.querySelector(".formok");//message de confirmation affiché lorsque le formulaire est soumis avec succès.
const confirmationButton = document.querySelector(".formok-close");//le bouton "Fermer" dans le message de confirmation.
const firstName = document.querySelector("#firstname");//le champ du formulaire pour le prénom.
const lastName = document.querySelector("#lastname");//le champ du formulaire pour le nom.
const email = document.querySelector("#email");//le champ du formulaire pour le mail.
const birthdate = document.querySelector("#birthdate");//le champ du formulaire pour la date d'anniversaire.
const quantity = document.querySelector("#quantity");//formulaire pour le nombre de concours.
const locationList = document.querySelectorAll(".locationlist input[type=radio]");//les boutons radio pour la sélection de la ville.
const tosCheckbox = document.querySelector("#tos");//case à cocher pour l'acceptation des conditions générales.
const newsCheckbox = document.querySelector("#news");//la case à cocher pour la réception de la newsletter.
const closeButton = document.querySelector(".btn-close");// le bouton "Fermer" dans la boîte de dialogue modale.

//fonction "validate()" est utilisée pour valider les données saisies par l'utilisateur dans le formulaire avant de le soumettre
//parcourt chaque champ du formulaire, vérifie si les données saisies sont valides 
//met à jour les messages d'erreur et les styles CSS correspondants en conséquence.
function validate() {
  console.log("La fonction validate a été appelée"); // Ajout d'un console log pour suivre l'exécution de la fonction
  let isValid = true; //variable stocke l'état de la validation du formulaire, qui est initialisée à "true" car le formulaire n'a pas encore été validé.

  // varifie si le champ du prénom est valide 
  //Si la longueur de la valeur du champ du prénom est inférieure à 2, 
  //cela signifie que le champ est vide ou que l'utilisateur a entré moins de 2 caractères. 
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
if (isNaN(quantity.value) || quantity.value < 0) {
  document.querySelector("#quantity-error").innerHTML = "Vous devez entrer une valeur numérique pour le nombre de concours.";
  isValid = false;
  quantity.classList.add("error-input");
} else {
  document.querySelector("#quantity-error").innerHTML = "";
  quantity.classList.remove("error-input");
}
//si l'utilisateur a sélectionné une ville dans le formulaire. Elle commence par initialiser une variable "locationChecked" à "false"
//lle utilise une boucle "for" pour parcourir tous les boutons radio associés aux villes dans le formulaire, 
//qui sont stockés dans la variable "locationList".
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
  document.querySelector(".errormsg").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  isValid = false;
  tosCheckbox.classList.add("error-input");
} else {
  document.querySelector(".errormsg").innerHTML = "";
  tosCheckbox.classList.remove("error-input");
}
console.log("La fonction validate a terminé son exécution avec isValid = " + isValid); // Ajout d'un console log pour suivre l'exécution de la fonction
  return isValid;
}

// Fonction pour valider le format de l'adresse électronique
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//utilise la méthode "addEventListener" pour écouter l'événement "submit"
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi du formulaire par défaut
  console.log("Le formulaire a été soumis"); // Ajout d'un console log pour suivre l'exécution de la fonction
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
  console.log("Réinitialisation du formulaire"); // Ajout d'un console log pour suivre l'exécution de la fonction
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
    console.log("Affichage du message de confirmation"); // Ajout d'un console log pour suivre l'exécution de la fonction
    var modalbg = document.querySelector(".bground");
    var form = document.querySelector("#form");
    var formok = document.querySelector(".formok");
  
    form.classList.add("hide-element");
    formok.classList.remove("hide-element");
    formok.classList.add("show");
  
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