// loop atau biasa dikenal dengan perulangan

// for loop

const myArray = ["satu", "dua", "tiga", "empat"]
for(let check = 2; check < myArray.length; check++) {
    console.log(myArray[check]);
}


for(let i = 9; i < 20; i++) {
    console.log(i);
}


// for of loop

const dataArray = ["A", "B", "C", "D"]
for(const arrayItem of dataArray) {
    console.log(arrayItem)
}