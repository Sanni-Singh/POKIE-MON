let api = "https://pokeapi.co/api/v2/pokemon/"
let box = document.querySelector('main')
let inputBox = document.querySelector('#inputBox')
let typeVal = document.querySelector('#typeVal')
let i = 1;
// async function apiHolder(){
//     let data = await fetch(api);
//     let res = await data.json();
//     console.log(res);
    
// }
// apiHolder()
let arr = [];
for(let k = 1; k < 100; k++){
    arr.push(`https://pokeapi.co/api/v2/pokemon/${k}`)
}
console.log(arr);

console.log();
async function displayPokkie(){
    for(let j = 0; j < 100; j++){
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let res = await data.json();
        let div = document.createElement('div');
        div.className="card";
        let p = document.createElement('p')
        p.innerText = res.id;
        div.appendChild(p);
        let img = document.createElement('img');
        img.setAttribute('src',res.sprites.front_default)
        div.appendChild(img)
        let h2 = document.createElement('h2');
        h2.innerText=res.name;
        div.appendChild(h2);
        let h6 = document.createElement('h6')
        h6.innerText = 'GRASS'
        div.appendChild(h6)
        box.appendChild(div)
        console.log(res);
        
        i++;
    }
}
function searchpoki(){
    let allcard = document.querySelectorAll('.card');
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
        let allcards = document.querySelectorAll('.card');

    }
}
window.addEventListener('load',displayPokkie)
inputBox.addEventListener('keyup',searchpoki)
typeVal.addEventListener('click',filterThePokkie)