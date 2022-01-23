function empty(){
    return false;

}
console.log(empty());

a=[1,2,3]
b=[3,2,1]
function d(a,b) {
    c=a*b;
    return c
    }
console.log('1*2 = '+d(1,2))
console.log('3*2 = '+d(3,2))
console.log('1*3 = '+d(1,3))


function skaitmenuKiekisSkaiciuje(a) {
    if (typeof a !== "number") {
      return `Pateikta netinkamo tipo reiksme`;
    }
  
    {
      let x = 0;
      for (let i = 0; i < a.toString().length; i++) {
        x++;
      }
      {
        return x;
      }
    }
  }
  
  console.log(skaitmenuKiekisSkaiciuje(5));
  console.log(skaitmenuKiekisSkaiciuje(781));
  console.log(skaitmenuKiekisSkaiciuje(37060123456));
  console.log(skaitmenuKiekisSkaiciuje(true));
  console.log(skaitmenuKiekisSkaiciuje("asd"));
  console.log(skaitmenuKiekisSkaiciuje(NaN));


  function didziausiasSkaiciusSarase(a) {
    if (typeof a !== "object") {
      return `Pateikta netinkama tipo reiksme`;
    }
    if (a.length === 0) {
      return `Pateiktas sarasas negali buti tuscias`;
    }
    {
      x = 0;
      for (let i = 0; i < a.length; i++) {
        x = Math.max(a[i]);
      }
      {
        return x;
      }
    }
  }
  
  console.log(didziausiasSkaiciusSarase([1]));
  console.log(didziausiasSkaiciusSarase([1, 2, 3]));
  console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
  console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
  console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
  console.log(didziausiasSkaiciusSarase("pomidoras"));
  console.log(didziausiasSkaiciusSarase([]));

  function isrinktiRaides(tekstas, skaicius) {
    if (typeof tekstas !== "string") {
      return ` Pirmasis kintamasis yra netinkamo tipo`;
    }
    if (tekstas.length === 0 || tekstas.length > 100) {
      return `Pirmojo kintamojo reiksme yra netinkamo dydzio`;
    }
    if (typeof skaicius !== "number") {
      return "Antrasis kintamasis yra netinkamo tipo.";
    }
    if (skaicius === 0) {
      return `Antrasis kintamasis turi būti didesnis už nulį.`;
    }
    if (tekstas.length < skaicius) {
      return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`;
    }
  
    let kasAntra = "";
    for (let i = skaicius - 1; i < tekstas.length; i = i + skaicius) {
      const raide = tekstas[i];
      kasAntra = kasAntra + raide;
    }
    {
      return kasAntra;
    }
  }
  
  console.log(isrinktiRaides("abcdefg", 2));
  console.log(isrinktiRaides("abcdefghijkl", 3));
  console.log(isrinktiRaides("abc", 0));
  console.log(isrinktiRaides("abc", 4));
  console.log(isrinktiRaides(1561, 2));


  function dalyba(a, b) {
    if (b <= 0) {
      return `Prasome naudoti tik teigiamus skaicius`;
    }
  
    {
      c = a / b;
    }
    {
      return c;
    }
  }
  
  console.log(dalyba("labas", 5));
  console.log(dalyba(5, 12));
  console.log(dalyba(20, 0));
  console.log(dalyba(-20, 5));
  console.log(dalyba(15, 5));
  
  