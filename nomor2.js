const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]
const nama = "denny"
const searchName = (arr, query, limit, cb) => {
    // cek apakah parameter arr bertype data array atau bukan
    if (arr instanceof Array == true) {
        if (typeof (query) == "string") {
            if (typeof limit == "number") {
                if (cb === showName) {
                    const hasil = arr.filter((element) => {
                        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1
                    })
                    cb(limit, hasil)
                } else {
                    console.log("parameter cb harus diisi dengan fungsi showName");
                }
            } else {
                console.log("parameter limit harus bertype data number");
            }
        } else {
            console.log("parameter query harus bertype data number");
        }
    } else {
        console.log("Parameter arr harus bertype array")
    }
}
const showName = (limit, hasil) => {
    if (hasil.length > 0) {
        console.log(hasil.slice(0, limit));
    } else {
        console.log("Data tidak ditemukan");
    }
}

(searchName(name, "an", 3, showName));
(searchName(nama, "an", 9, showName));
(searchName(name, "an", "9", showName));
(searchName(name, "an", 3, "showNamess"));