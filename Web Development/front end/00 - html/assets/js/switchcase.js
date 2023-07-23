let language = "English";
let greeting = null;

switch (language) {
    case "Japan":
        greeting = "Arigatou!";
        break;
    case "English":
        greeting = "Good Morning!";
        break;
    case "Arab":
        greeting = "Ahlan Wa Sahlan!";
        break;
    default:
        greeting = "Selamat Pagi";
}

console.log(greeting);