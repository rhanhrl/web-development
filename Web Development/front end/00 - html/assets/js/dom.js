/* Dom atau document object model memberikan jalan untuk mengakses dan memanipulasi
konten pada dokumen. DOM merupakan API (application Programming Interface untuk html, xml, dan svg.*/

// Mendapatkan elemen 
/* Objek document merepresentasikan dokumen dari HTML atau keseluruhan halaman yang terlihat pada jendela browser.*/

// Terdapat beberapa method yang digunakan untuk mengakses koleksi elemen di dalamnya

const head = document.head;
const body = document.body;

// Namun jika ingin mengakses elemen secara spesifik, harus menggunakan method yang disediakan
/* 
1. getElementById() -> Mengembalikan elemen yang memiliki nilai id
2. getElementsByName() -> Mengembalikan banyak elemen (NodeList) yang memiliki attribute name
3. getElementsByClassName() -> Mengembalikan kumpulan yang memiliki class dalam bentuk HTMLCollection
4. getElementsByTagName() -> Mengembalikan banyak elemen berupa HTMLCollection
5. querySelector() -> Mengembalikan elemen pertama yang menerapkan class
6. querySelectorAll() -> Mengembalikan kumpulan Node beserta turunannya (NodeList) dengan class
*/

// Memanipulasi elemen 
/*disini akan mengubah konten, menambahkan atau mengubah nilai atribut */

let catImage = document.querySelector("#catImage")
catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg")

catImage.getAttribute("src")

// Memanipulasi konten elemen 
/* Konten pada elemen disimpan di dalam properti innerHTML (konten dalam bentuk HTML) 
atau innerText (konten dalam bentuk Teks). */

let caption = document.querySelector("#caption");
caption.innerHTML= '<em> Tiga anak kucing </em>'

// Membuat dan menambahkan elemen baru 
/* Dalam membuat elemen baru, DOM telah menyediakan method yang bernama createElement()*/

let newElement = document.createElement('p');
newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';

/* Agar elemen baru tampil pada jendela browser, kita perlu memasukkan elemen tersebut 
pada body dengan menggunakan fungsi appendChild(); */

document.body.appendChild(newElement);

// Menambahkan aksi (Event) pada elemen
/* Event bisa berupa interaksi dari pengguna seperti click, atau sekedar mengarahkan kursor pada elemen. 
Dengan menerapkan event handler, kita dapat menjalankan suatu fungsi tertentu ketika event terjadi pada elemen. 
Untuk menambahkan Event Handler pada elemen kita gunakan method, addEventListener() pada target element.*/

catImage.addEventListener('click', function(event) {
    document.querySelector('#count').innerText++;
});