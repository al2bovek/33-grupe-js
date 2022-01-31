console.log('testas');
//1. Palyginti du skaičius a ir b.
//Išvesti į konsolę, kuris didesnis arba jie lygūs.
function palyginti(a,b){
if (a > b){
  console.log(a+'>'+b);
} else if (a < b) {
  console.log(a+'<'+b);
} else {
  console.log(a+'='+b);
}
}
palyginti(5,5);

//2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10.
let skaiciai=[];
for (let i = 1; i <= 10; i++) {
  skaiciai ++;
  console.log(skaiciai);
}

//3. Naudojant ciklą,
//išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.
let skaiciai1 =[];
for (let i = 0; i <= 10; i++) {
  skaiciai1 = i++;
  console.log(skaiciai1);
}

//4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10.
//Išvesti juos konsolėje.
let skaiciai2 = [];
for (let i = 1; i < 10; i++) {
  skaiciai2 = Math.random() * 10;
  console.log(Math.ceil(skaiciai2));
  }
  
//5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10.
//Paskutinis atspausdintas skaičius turi būti 5.
let skaiciai3 = [];
while(skaiciai3 !== 5) {
    skaiciai3 = Math.ceil(Math.random() * 10);
    console.log(skaiciai3);
}

//6.Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30.
//Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos.
const amasyvas = [];
for (i = 1; i <= 30; i++) {
   amasyvas.push(i);
}
console.log(amasyvas);

function masyvas(start,end){
  masyvas=[];
  for (i=start; i<=end; i++){
  masyvas.push(i)
  }
  console.log(masyvas);{
    
  }
  
}
masyvas(10,30)





