function daugyba(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Error';
    }
    if (!isFinite(a) || !isFinite(b)){
        return 'Error';
    }

     let c=a*b;
        return c;
    }    

console.log(daugyba(2,3),'=',6)
console.log(daugyba("labas", "rytas"), "-->", "ERROR");
console.log(daugyba("labas", 5), "-->", "ERROR");
console.log(daugyba(5, "labas"), "-->", "ERROR");
console.log(daugyba(NaN, 8), "-->", "ERROR");
console.log(daugyba(8, NaN), "-->", "ERROR");
console.log(daugyba(Infinity, 8), "-->", "ERROR");
console.log(daugyba(8, Infinity), "-->", "ERROR");
console.log(daugyba(-Infinity, 8), "-->", "ERROR");
console.log(daugyba(8, -Infinity), "-->", "ERROR");
console.log(daugyba(true, -5), "-->", "ERROR");
console.log(daugyba(false, -5), "-->", "ERROR");
console.log(daugyba([], -5), "-->", "ERROR");
console.log(daugyba(daugyba, -5), "-->", "ERROR");
console.log(daugyba(-5, true), "-->", "ERROR");
console.log(daugyba(-5, false), "-->", "ERROR");
console.log(daugyba(-5, []), "-->", "ERROR");
console.log(daugyba(-5, daugyba), "-->", "ERROR");
console.log(daugyba(2, 4), "-->", 8);
console.log(daugyba(-2, 4), "-->", -8);
console.log(daugyba(-3.5, 1.25), "-->", -4.375);
console.log(daugyba(0, 1.25), "-->", 0);
console.log(daugyba(-884551.25, 0), "-->", 0);
console.log(daugyba(-0, 5), "-->", 0);
console.log(daugyba(-0, -5), "-->", 0);