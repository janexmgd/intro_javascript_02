//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) 
//beserta contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

// 1.concat() 
// digunakan untuk menggabungkan dua array atau lebih,yang dimana return sebuah array baru
// tanpa memodifikasi array yang lama

// const arr1 = ["mangga", "durian", "apel", "manggis"]
// const arr2 = ["pisang", "semangka"]
// const arr3 = ["salak", "kiwi"]
// const arr123 = arr1.concat(arr2, arr3)
// console.log(arr123);

//2.fill(value,start,end)
//digunakan untuk mengganti value yang ada di array dimulai dari start sampai end 
// onst arr1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// const arr2 = arr1.fill("Durian", 2, 3)
// console.log(arr2);c

// 3.pop()
// digunakan untuk menghilangkan elemen terakhir dari dalam array,dan mengembalikan
//nilai dari elemen tersebu.jika array kosong akan mengembalikan undefined dan array tidak diubah
// const arr1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// const arr2 = arr1.pop()
// console.log(arr2);

// 4.toLocalLowerCase() dan toLocalUpperCase
// mengubah string menjadi lowercase semua
// const greet = "SElamat PAgI VIoLAAaA"
// const greet1 = greet.toLocaleLowerCase()
// const greet2 = greet.toLocaleUpperCase()
// console.log(greet1);
// console.log(greet2);

// 5.math.max()
//memberikan nilai random diantara 0 dan 1
// const value = Math.random()
// console.log(value);

//6.unshift()
// menambahkan satu atau lebih elemen ke dalam array yang dimana fungsi ini mengembalikan
// nilai length dari array yang sudah diedit
// const arr1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// const arr2 = arr1.unshift("semangka")
// console.log(`panjang array = ${arr2}`);


// 7.every()
// mengecek semua data dalam array apakah memenuhi keadaan yang ditentukan jika iya maka return true
// jika tidak return false
// const dataArray = [1, 2, 3, 4, 6, 7, 8, 9, 5]
// const elementIsNumber = dataArray.every(function (index) {
//     return typeof (index) == "number";
// })
// console.log(elementIsNumber);

//8.shift()
// menghapus elemen pertama,fungsi ini mengubah array,dan memiliki nilai return==item yang dihapus
// const greet = ["selamat", "siang", "v", "i", "o", "L"];
// const arr3 = greet.shift()
// console.log(arr3);
// console.log(greet);

//9.Array.from()
// build in function yang punya nilai return sebuah array baru dari string

// const b = Array.from("1 234566677788")
// console.log(b);

//10.length
// punya nilai kembalian sebuah angka yang didapat dari menghitung element
// const salam = "selamat pagi viola"
// console.log(salam.length);

//push()
//menambahkan sebuah element ke array yang dimana posisi element tersebut dipaling akhirclear
// const b = [4, 5, 6, 4, 43, 32, 2]
// const c = b.push("push diakhir")
// console.log(b);
// console.log(c);