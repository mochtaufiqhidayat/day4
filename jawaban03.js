function Kabisat() {
    let a = 0;
    if(a % 4 === 0){
        console.log("Kabisat");
    } else {
        console.log("Bukan Kabisat")
    }
    return a;
}

let b = Kabisat(1900);
let c = Kabisat(2000);
let d = Kabisat(2001);
let e = Kabisat(2016);
console.log(b);
console.log(c);
console.log(d);
console.log(e);