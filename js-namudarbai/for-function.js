function ciklas(a,b) {
    let x=0
    for(i=a; i<=b; i++){
        x+=i
       }
       console.log(x) 
    }
    ciklas(0,100)

function revers(text) {
     let x=''
     for(let i=text.length-1; i>=0; i--){
         x+=text[i]
        }
     console.log(x)
    }   
    revers('text')

function ciklas(a,b,c) {
    let x=0
    for(let i=a; i<=b; i++){
    if(i%c===0){
        x++
        }
    }
    console.log(
        `Skaičių intervale tarp ${a} ir ${b},
besidalijančių be liekanos iš ${c} yra ${x} vienetai.`)
}    
ciklas(0,100,3)