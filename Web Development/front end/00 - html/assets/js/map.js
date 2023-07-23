/* Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map 
memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.*/

const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["Manchester", "England"],
    ["Mekkah", "Saudia Arabia"]
]);

console.log(capital.size);
console.log(capital.get("Manchester"));
capital.set("Athena", "Greece");
console.log(capital.get("Athena"));