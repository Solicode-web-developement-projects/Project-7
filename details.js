let para = new URLSearchParams(window.location.search);
let id = para.get("id");
console.log(id);
let nom = document.querySelector("h1");
let horaire = document.querySelectorAll(".horaire p span");
let contact = document.querySelectorAll(".contact p span");
let logo = document.querySelector("img");

let xhr = new XMLHttpRequest();
xhr.open("GET", "restaurant.json", true);
xhr.onload = () => {
  let arr = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  let arr2 = ["phone", "location", "website"];
  let jsonData = JSON.parse(xhr.responseText);
  nom.innerText = jsonData[id - 1].name;
  logo.setAttribute("src", jsonData[id - 1].img_src);
  for (let i = 0; i < horaire.length; i++) {
    horaire[i].innerText = jsonData[id - 1].horaires[arr[i]];
    if (i < 3) {
      contact[i].innerHTML = jsonData[id - 1][arr2[i]];
    }
  }
};
xhr.send();