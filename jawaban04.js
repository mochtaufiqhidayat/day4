function rating(usia) {
    let usia = 0;
    if(usia >= 21){
        console.log("DEWASA");
    } else if(usia >= 13) {
        console.log("REMAJA");
    } else if(usia >= 9) {
        console.log("BIMBINGAN ORANG TUA");
    } else {
        console.log("SEMUA USIA");
    }
    return arguments;
}

let film1 = rating(15);
let film2 = rating(32)
console.log(film1);
console.log(film2);