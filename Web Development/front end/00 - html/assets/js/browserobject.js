/* Pada JavaScript, browser dikenal sebagai window object. Di dalam objek window itu sendiri terdapat banyak 
properties dan method yang bisa digunakan, salah satu yang sudah kita ketahui adalah alert(). */


// mengakses method alert() pada window
window.alert("Hello Browser!")
 
// Kita juga bisa mengaksesnya seperti ini
alert("Hello Browser!")

//

const firstName = prompt("Nama awal anda ?")
const secondName = prompt("Nama kedua anda ?")
const thirdData = prompt("Negara anda ?")

const user = {
    name: {
        first: firstName,
        second: secondName,
    },
    optionData: thirdData
}

if(user.optionData === "Indonesia") {
    alert("Selamat datang " + user.name.first + " " + user.name.second + ".")
} else if (user.optionData === "Inggris") {
    alert("Welcome " + user.name.first + " " + user.name.second + ".")
} else if (user.optionData === "Sunda") {
    alert("Wilujeng Sumping " + user.name.first + " " + user.name.second + ".")
} else {
    alert("Senang bertemu dengan anda " + user.name.first + " " + user.name.second +".")
}
