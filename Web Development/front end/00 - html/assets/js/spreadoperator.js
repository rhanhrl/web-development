/*Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object 
menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).*/

const user = ["Cokelat", 19, "Raihan", 20.4]
const others = ["Anggur", 20, "Herlambang", 21.1]

const allData = [...user, ...others]

console.log(...user);
console.log(...others);

console.log(allData);