let xhr = new XMLHttpRequest();
xhr.open('GET','restaurant.json',true)
xhr.onload = () => {
    let section = document.querySelector("section")
    let jsonData = JSON.parse(xhr.responseText);
    for(let i = 0; i<jsonData.length; i++){
        let div = document.createElement("div");
        div.classList.add("cards");
        let img = document.createElement("img");
        img.setAttribute("src", jsonData[i].img_src);
        let h2 = document.createElement("h2");
        h2.innerText = jsonData[i].name;
        let p1 = document.createElement("p");
        p1.innerText = jsonData[i].spécialité;
        p1.classList.add("p1")
        let p2 = document.createElement("p");
        p2.innerText = jsonData[i].rating;
        p2.classList.add("p2")
        let button = document.createElement("button");

        let a = document.createElement("a");
        a.setAttribute("href", "details.html?id="+jsonData[i].id);
        a.innerText = "details";
        button.appendChild(a);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(button);
    section.appendChild(div);
    let option1 = document.createElement("option");
    option1.innerText = jsonData[i].spécialité;
    option1.value = jsonData[i].spécialité;
    option1.classList.add("x");
    specialite.appendChild(option1);
    // a.addEventListener( "click",  function() {
    //     // localStorage.setItem("id",jsonData[i].id);
    //     // console.log(jsonData[i].id);
    //     // window.location.href = "details.html?id=";
    // });
}
let options = document.querySelectorAll(".x");

for (let i = 0; i < options.length; i++) {
    for (let j = i + 1; j < options.length; j++) {
        if (options[i].value === options[j].value) {
            options[i].remove();
        }
    }
}
}
xhr.send();



let rating = document.getElementById("rating");
let specialite = document.getElementById("specialite");
function selectChange(){
    let specialitites = document.querySelectorAll(".p1");
    let rates = document.querySelectorAll(".p2");
    for(let i = 0; i < specialitites.length; i++){
        if (rating.value==="rating" && specialite.value==="specialite"){
            rates[i].parentElement.style.display="flex";
        }
        else if(rating.value==="rating" && specialite.value!=="specialite"){
            if(specialite.value===specialitites[i].innerText){
                specialitites[i].parentElement.style.display="flex";
            }
            else{
                specialitites[i].parentElement.style.display="none";
            }
        }
        else if(rating.value!=="rating" && specialite.value === "specialite"){
            if(rates[i].innerText > rating.value.slice(0,1) && rates[i].innerText < rating.value.slice(-1)){
                rates[i].parentElement.style.display="flex";
            }
            else{
                rates[i].parentElement.style.display="none";
            }
        }
        else if(rating.value!=="rating" && specialite.value!=="specialite"){
            if(rates[i].innerText > rating.value.slice(0,1) && rates[i].innerText < rating.value.slice(-1) && specialite.value === specialitites[i].innerText){
                rates[i].parentElement.style.display="flex";
                specialitites[i].parentElement.style.display="flex";
            }
            else{
                rates[i].parentElement.style.display="none";
                specialitites[i].parentElement.style.display="none";
            }
        }
    }
}  

function searchFunction() {
    let search = document.querySelector("input");
    let names = document.querySelectorAll("h2");
    for(let name of names){
        if(name.innerText.toUpperCase().includes(search.value.toUpperCase())){
            name.parentElement.style.display="flex";
        }
        else{
            name.parentElement.style.display="none";
        }
    }
}