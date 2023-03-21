function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modalbg = document.querySelector(".bground");
const closeButton = document.getElementsByClassName("btn-close")[0];
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const location = document.querySelector('input[name="location"]:checked');
  const tos = document.getElementById("tos").checked;

  let isValid = true;

  if (firstname.length < 2) {
    document.getElementById("firstname").classList.add("error");
    document.getElementById("firstname-error").textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ Prénom.";
    isValid = false;
  } else {
    document.getElementById("firstname").classList.remove("error");
    document.getElementById("firstname-error").textContent = "";
  }

  if (lastname.length < 2) {
    document.getElementById("lastname").classList.add("error");
    document.getElementById("lastname-error").textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ Nom.";
    isValid = false;
  } else {
    document.getElementById("lastname").classList.remove("error");
    document.getElementById("lastname-error").textContent = "";
  }

  if (!isValidEmail(email)) {
    document.getElementById("email").classList.add("error");
    document.getElementById("email-error").textContent =
      "Veuillez entrer une adresse email valide.";
    isValid = false;
  } else {
    document.getElementById("email").classList.remove("error");
    document.getElementById("email-error").textContent = "";
  }

  if (birthdate === '') {
    document.getElementById("birthdate").classList.add("error");
    document.getElementById("birthdate-error").textContent =
      "Vous devez entrer votre date de naissance.";
    isValid = false;
  } else {
    document.getElementById("birthdate").classList.remove("error");
    document.getElementById("birthdate-error").textContent = "";
  }

  if (quantity < 0 || quantity > 99) {
    document.getElementById("quantity").classList.add("error");
    document.getElementById("quantity-error").textContent =
      "Veuillez entrer une valeur numérique pour le nombre de concours.";
    isValid = false;
  } else {
    document.getElementById("quantity").classList.remove("error");
    document.getElementById("quantity-error").textContent = "";
  }

  if (!location) {
    document.getElementById("location-error").textContent =
      "Vous devez choisir une option pour le tournoi.";
    isValid = false;
  } else {
    document.getElementById("location-error").textContent = "";
  }

  if (!tos) {
    document.getElementById("tos-error").textContent =
      "Vous devez cocher la case des conditions générales.";
    isValid = false;
  } else {
    document.getElementById("tos-error").textContent = "";
  }

  if (isValid) {
    form.submit();
  }
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

closeButton.addEventListener("click", function() {
  modalbg.style.display = "none";
});

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
