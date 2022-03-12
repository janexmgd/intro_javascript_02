const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    //validasi nilaiAwal dan nilaiAkhir type number atau bukan
    if (typeof nilaiAwal == "number" && typeof nilaiAkhir == "number") {
        // validasi nilaiAwal < nilaiAkhir
        if (nilaiAwal < nilaiAkhir) {
            // validasi type dataArray Array atau bukan
            if (dataArray instanceof Array == true) {
                //validasi element dataArray lebih dari atau sama dengan 5
                if (dataArray.length >= 5) {
                    //elementIsNumber = return true jika semua type element di dataArray adalah number
                    const elementIsNumber = dataArray.every(function (index) {
                        return typeof (index) == "number"
                    })
                    // cek return elementIsNumber true atau false
                    if (elementIsNumber) {
                        //filtered memfilter tiap element dengan kondisi nilaiAwal<=element<=nilaiAkhir
                        const filtered = (element) => {
                            return element >= nilaiAwal && element <= nilaiAkhir
                        }
                        //filterdataArray = memfilter data array dengan kondisi filtered
                        const filterdataArray = dataArray.filter(filtered)
                        //filteredAndSort = mengurutkan filtereddataArray dari terkecil ke terbesar
                        const filteredAndSort = filterdataArray.sort((a, b) => {
                            return a - b
                        })
                        //cek apakah panjang array filteredAndSort > 0 atau tidak
                        if (filteredAndSort.length > 0) {
                            console.log(filteredAndSort);
                        } else {
                            console.log("Nilai tidak ditemukan");
                        }
                    } else {
                        console.log("Masukkan data type number di DataArray");
                    }
                } else {
                    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
                }
            } else {
                console.log("DataArray harus bertype Array");
            }
        } else {
            console.log("Nilai akhir harus lebih besar dari nilai awal");
        }
    } else {
        console.log("nilaiAwal dan nilaiAkhir harus bertype data number");
    }
}
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]) //“Nilai tidak ditemukan”
SeleksiNilai(5, 20, ["viola", 2, 25, 4, 14, 17, 30, 8]) //"masukkan data type number di DataArray"
SeleksiNilai(5, 17, [2, 25, 4]) //“Jumlah angka dalam dataArray harus lebih dari 5”
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]) //“ Nilai akhir harus lebih besar dari nilai awal”
SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]) //[8, 14, 17]
SeleksiNilai(5, "nilaiakhir", [2, 25, 4, 14, 17, 30, 8])