function nilai(a) {
    let a = 0;
    if(a >= 90){
        console.log("A")
    } else if(a >=80){
        console.log("B")
    } else if(a >= 70){
        console.log("C")
    } else if(a >= 60){
        console.log("D")
    } else {
        console.log("E")
    }

    return a;
}

let nilaiAkhir1 = nilai(75);
let nilaiAkhir2 = nilai(30);
console.log(nilaiAkhir1);
console.log(nilaiAkhir2);