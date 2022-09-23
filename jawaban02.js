function ganjilGenap() {
    let a = 0;
    if(a % 2 === 0){
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }

    return a;
}

let b = ganjilGenap(46);
console.log(b);