/* function merupakan potongan kecil kode yang tidak akan dieksekusi sebelum dipanggil */


function greeting () {
    console.log("Selamat Pagi")
}

greeting();

//

function greeting(name, language) {
    if(language === "Indonesia") {
        console.log("Selamat Pagi " + name + "!")
    } else if (language === "Inggris") {
        console.log("Good Morning " + name + "!")
    } else {
        console.log("Selamat hudang " + name + "!")
    }
}

greeting("Raihan", "Inggris");

//

let greetingMessage = greeting("Raihan", "inggris");
console.log(greetingMessage); 


function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)