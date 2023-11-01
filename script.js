// Ambil elemen-elemen HTML dengan ID yang berbeda
const textContainer1 = document.getElementById("satu");
const textContainer2 = document.getElementById("dua");
const textContainer3 = document.getElementById("tiga");
const textContainer4 = document.getElementById("empat");
const textContainer5 = document.getElementById("lima");
const textContainer6 = document.getElementById("enam");
const textContainer7 = document.getElementById("tujuh");
const textContainer8 = document.getElementById("delapan");

// Inisialisasi nilai hue
let hue = 0;

// Atur interval untuk mengubah warna teks
setInterval(() => {
  // Perbarui nilai hue
  hue = (hue + 1) % 360;
  const color = `hsl(${hue}, 100%, 50%)`; // Buat warna HSL dengan hue yang berubah
  textContainer1.style.color = color; // Atur warna teks elemen pertama
  textContainer2.style.color = color; // Atur warna teks elemen dua
  textContainer3.style.color = color; // Atur warna teks elemen tiga
  textContainer4.style.color = color; // Atur warna teks elemen empat
  textContainer5.style.color = color; // Atur warna teks elemen lima
  textContainer6.style.color = color; // Atur warna teks elemen enam
  textContainer7.style.color = color; // Atur warna teks elemen tujuh
  textContainer8.style.color = color; // Atur warna teks elemen delapan
}, 50);
