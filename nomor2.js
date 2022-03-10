const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]
const searchName = (arr, query, limit, cb) => {
    const hasil = arr.filter(function (element) {
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1 //jika ada query muncul Notreturn -1
    })
    cb(limit, hasil)
}
const showName = (limit, hasil) => {
    let newArray = [];
    for (let element of hasil) {
        if (newArray.length >= limit) break;
        newArray.push(element)
    }
    if (newArray.length == 0) {
        console.log("data tidak ditemukan");
    } else {
        console.log(newArray);
    }
}

(searchName(name, "o", 9, showName));