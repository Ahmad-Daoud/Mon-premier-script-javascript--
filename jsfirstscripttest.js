let nombre = document.getElementById("nombrepassagers")
let count = 0

console.log(nombre)
console.log(count)
function ajouter() {
    count= count+1
    nombre.innerText = count
    console.log(nombre)
}