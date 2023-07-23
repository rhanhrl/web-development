/* If Else statement dapat digambarkan seolah olah kita memberikan pertanyaan benar 
atau salah pada javascript, lalu memberikan perintah sesuai jawaban dari pertanyaan tersebut */



let firstData = "Jambu";
let secondData = "Strawberry"

if(firstData === "Jambu") {
    secondData = "Durian";
} else if (firstData ==="Anggur") {
    secondData = "Nanas";
} else if (firstData ==="Jeruk") {
    secondData = "Belimbing";
}

console.log(secondData);



let bilanganSatu = 13
if(bilanganSatu < 7) {
    console.log(bilanganSatu);
} else {
    console.log("Keterangan salah");
}