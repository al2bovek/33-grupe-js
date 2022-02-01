// Funcijos: grazina

// -  masyvo ilgi
function arrayIlgis(arr){
    return arr.length
}
const arrayIlgis1 = function (arr){
    return arr.length
}
const arrayIlgis2 = (arr) => {
    return arr.length
}
const arrayIlgis3 = (arr) => arr.length
console.log(arrayIlgis([1,2,3,4,5]));
console.log(arrayIlgis1([1,2,3,4,5]));
console.log(arrayIlgis2([1,2,3,4,5]));
console.log(arrayIlgis3([1,2,3,4,5]));

// -  texto ilgi
function stringIlgis (str){
    return str.length
}
const stringIlgis1 = function (str){
    return str.length
}
const stringIlgis2 = (str) => {
    return str.length
}
const stringIlgis3 = (str) => str.length

console.log(stringIlgis(`asdfgh`));
console.log(stringIlgis1(`asdfgh`));
console.log(stringIlgis2(`asdfgh`));
console.log(stringIlgis3(`asdfgh`));

// -  pirma teksto raide
function pirmaRaide(text){
    return text[0]
}
const pirmaRaide1 = function (text){
    return text[0]
}
const pirmaRaide2 = (text) => {
    return text[0]
}
const pirmaRaide3 = (text) => text[0]

console.log(pirmaRaide(`asdfg`));
console.log(pirmaRaide1(`asdfg`));
console.log(pirmaRaide2(`asdfg`));
console.log(pirmaRaide3(`asdfg`));

// - paskutine teksto raide
function paskutineRaide(text){
    return text.slice(-1)
}
const paskutineRaide1 = function(text){
    return text.slice(-1)
}
const paskutineRaide2 = (text)=>{
    return text.slice(-1)
}
const paskutineRaide3 = (text) => text.slice(-1)

console.log(paskutineRaide(`asdfgh`));
console.log(paskutineRaide1(`asdfgh`));
console.log(paskutineRaide2(`asdfgh`));
console.log(paskutineRaide3(`asdfgh`));

// - vidurine teksto raide
function middle(text){
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const middle1 =function (text){
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const middle2 = (text) => {
    if (text.length % 2 === 0){
        return `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}`
    }
    else{
    return text[Math.floor(text.length/2)];}
}
const middle3 = (text) => text.length % 2 === 0 ? `${text[(text.length/2)-1]}${text[Math.floor(text.length/2)]}` : text[Math.floor(text.length/2)];


console.log(middle(`asdfg`));
console.log(middle1(`asdfgh`));
console.log(middle2(`asdfg`));
console.log(middle3(`asdfgh`));


// - triju skaiciu vidurki
function average(a, b, c){
    return (a+b+c)/3
}
const average1 = function (a, b, c){
    return (a+b+c)/3
}
const average2 = (a, b, c) =>{
    return (a+b+c)/3
}
const average3 = (a, b, c) => (a+b+c)/3

console.log(average(3, 9, 27));
console.log(average1(3, 9, 27));
console.log(average2(3, 9, 27));
console.log(average3(3, 9, 27));

// - pasisveikinimo sakinysm kur duodamas tik vardas: " Sveiki, as esu Vardenis!"
function pasisveikinimas(vardas){
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas1 = function(vardas){
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas2 = (vardas) => {
    return `Sveiki, as esu ${vardas}!`
}
const pasisveikinimas3 = (vardas) => `Sveiki, as esu ${vardas}!`;

console.log(pasisveikinimas(`Vardenis`));
console.log(pasisveikinimas1(`Vardenis`));
console.log(pasisveikinimas2(`Vardenis`));
console.log(pasisveikinimas3(`Vardenis`));




