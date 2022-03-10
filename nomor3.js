//nomor 3
const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    //cek apakah parameter memenuhi atau tidak?
    if (typeof (nilaiAwal) == "number" && typeof (nilaiAkhir) == "number" && dataArray instanceof Array == true && dataArray.length >= 5) {
        if (nilaiAwal < nilaiAkhir) {
            const elementIsNumber = dataArray.every(function (index) {
                return typeof (index) == "number";
            })
            if (elementIsNumber) {
                let datafilter = []
                for (element of dataArray) {
                    if (element >= nilaiAwal && element <= nilaiAkhir) {
                        datafilter.push(element)
                    }
                }
                const filteredAndSort = datafilter.sort((a, b) => {
                    return a - b
                })
                if (filteredAndSort.length == 0) {
                    console.log("Nilai Tidak ditemukan");
                } else {
                    console.log(filteredAndSort);
                }
            } else {
                console.log("masukkan data type number di DataArray");
            }
        } else if (nilaiAwal > nilaiAkhir) {
            console.log("Nilai akhir harus lebih besar dari nilai awal");
        }
    } else if (typeof (nilaiAwal) != "number" || typeof (nilaiAkhir) != "number") { //nilai awal atau nilai akhir tidak bertype number
        console.log("Nilai Awal dan Nilai Akhir harus bertipe number ");
    } else if (dataArray instanceof Array == false) { //ketika dataArray bukan array
        console.log("data harus berupa array");
    } else if (dataArray.length < 5) { //ketika panjang dataArray kurang dari 5
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    }
}

SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]) //“Nilai tidak ditemukan”
SeleksiNilai(5, 20, ["viola", 2, 25, 4, 14, 17, 30, 8]) //"masukkan data type number di DataArray"
SeleksiNilai(5, 17, [2, 25, 4]) //“Jumlah angka dalam dataArray harus lebih dari 5”
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]) //“ Nilai akhir harus lebih besar dari nilai awal”
SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]) //[8, 14, 17]