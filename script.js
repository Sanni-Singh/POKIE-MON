let api = "https://pokeapi.co/api/v2/pokemon/"
let box = document.querySelector('main')
let inputBox = document.querySelector('#inputBox')
let typeVal = document.querySelector('#typeVal')
let filterBtn = document.querySelector('#filterBtn')
let reset = document.querySelector('#reset')
let i = 1;
const bgc = {
    grass: "#02B816ef",
    fire: "#DC3307ef",
    water: "#4143BDef",
    bug: "#61A513ef",
    normal: "#D994C2ef",
    poison: "#84066Def",
    electric: "#e7c325ef",
    ground: "#DA8507ef",
    fairy: "#E164CAef",
    fighting: "#A22813ef",
    psychic: "#C03897ef",
    ice: "#5EE7D0ef",
    rock: "#BEB1B6ef",
    ghost: "#9498ABef",
    dragon: "#AF120Bef",
    dark: "#31372Bef"
};

let arr = [];
for(let k = 1; k < 150; k++){
    arr.push(`https://pokeapi.co/api/v2/pokemon/${k}`)
}
async function displayPokkie(arr){
    box.innerHTML="";
    for(let j = 0; j < arr.length; j++){
        let data = await fetch(arr[j]);
        let res = await data.json();
        
        let color= bgc[res.types[0].type.name];
        // console.log(bgc.${color});
       
        let div = `

            <div class="poke">
            <div class="outer">
            <div class="card" style="background-color:${color}">
                <p>#${res.id}</p>
                <img src="${res.sprites.front_default}" alt="">
                <h2>${res.name}</h2>
                <h6 class="type">${res.types[0].type.name}</h6>
            </div>
                 <div class="back-part" style="background-color:${color}">
                <p id="id">#${res.id}</p>
                <img src="${res.sprites.back_shiny}" alt="${res.name}"></img>
                <h2>${res.name}</h2>
                <h3>${res.abilities[0].ability.name}</h3>
            </div>
            </div>
            </div>
        `
        let item = document.querySelector('.card');
        
        // item.style.backgroundColor=color;
        box.innerHTML+= div;
    }
}
function searchpoki(){
    let allcard = document.querySelectorAll('.poke');
    let val = inputBox.value.toLowerCase();
    allcard.forEach((e)=>{
        let db = e.querySelector("h2").textContent;

        if(db.startsWith(val)){
            e.style.display="flex";
        }
        else{
            e.style.display="none";
        }
    })
}
function filterThePokkie(){
    if(typeVal.value === "" || typeVal.value === undefined){
        alert("plese select a type")
    }
    else {
        let allcards = document.querySelectorAll('.poke');
        allcards.forEach((ele)=>{
            console.log(ele);
            let cardtype=ele.querySelector('.type').innerText;
            if(cardtype.toLowerCase() === typeVal.value.toLowerCase()){
                ele.style.display="flex"
            }
            else{
                ele.style.display="none"

            }
        })
        
    }
    
    typeVal.value="";
}
window.addEventListener('load',()=>{
    
    displayPokkie(arr)
})
inputBox.addEventListener('keyup',searchpoki)
filterBtn.addEventListener('click',filterThePokkie)
reset.addEventListener('click',()=>{
    displayPokkie(arr)
})