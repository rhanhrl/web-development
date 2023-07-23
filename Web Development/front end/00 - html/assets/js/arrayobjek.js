/* array adalah tipe data yang dapat mengelompokkan nilai
yang lebih dari satu nilai dari tipe data lain yang ditempatkan
pada satu variabel
*/

let listData = ["permen", 42.2, 23, true, "lolipop"];

console.log(listData);
console.log(listData[0]);
console.log(listData[1]);
console.log(listData[2]);
console.log(listData[3]);
consoole.log(listData[4]);

console.log("Panjang dari list data adalah" + listData.length + ".");

/* objek sama seperti array yang dapat menampung banyak nilai
akan tetapi pedekatan nya menggunakan key-value
*/

let userData = {      
    firstName: "Raihan",
    secondName: "Herlambang",

    secondData: {
        age: "20",
        address: "Kota Bandung" 
    }
}

console.log("Nama saya " + userData.firstName + " " + userData.secondName);
console.log("Umur saya " + userData.secondData.age + " tahun");
console.log("Saya tinggal di " + userData.secondData.address);

// Destructuring object

const dataPertama = {
    awalan: "String",
    kedua: 12,
    ketiga: true
}

const {awalan, kedua, ketiga} = dataPertama;

console.log(awalan, kedua, ketiga);

// Destructuring assignment 

const profile = {
    data1: false,
    data2: "Raihan",
    data3: 123
}

let data1 = true;
let data2 = "Herlambang";

({data1, data2} = profile);

console.log(data1);
console.log(data2);

// Default values

const profile2 = {
    data4: true,
    data5: "Raihan",
    data6: 14.1
}

const {data4, data5, isMale = true} = profile2;

console.log(data4)
console.log(data5)
console.log(isMale)

// Assigning to Different local Variable Names 

const {data4: localData, data5: storageData, isMale: ekstrakData} = profile2;

console.log(localData);
console.log(storageData);
console.log(ekstrakData);

// Destructuring array

const favorites = ["Cokelat", 12, 12.3, true]
const [food, integer, float, boolean] = favorites;
const [, , float2 ] = favorites;


console.log(food);
console.log(integer);
console.log(float);
console.log(boolean);
console.log(float2);

// Destructuring assignment 

let myFood = "Ice Cream";
let herFood = "Semangka";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);
