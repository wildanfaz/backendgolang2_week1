const matematika = 90
const bahasaIndonesia = 80
const bahasaInggris = 100
const ipa = 90

function hitungRataRataUN(nilai1,nilai2,nilai3,nilai4) {
     /*
    */
    const total = nilai1 + nilai2 + nilai3 + nilai4
    const average = total / 4
    
    if (typeof nilai1 != "number" || typeof nilai2 != "number" || typeof nilai3 != "number" || typeof nilai4 != "number") {
        return "Data harus number"
    } else if (nilai1 > 100 || nilai2 > 100 || nilai3 > 100 || nilai4 > 100) {
        return "Nilai tidak boleh lebih dari 100"
    } else if(average >= 90 && average <= 100) {
        return `Rata-rata = ${average}\nGrade = A`
    } else if (average >= 80 && average <= 89) {
        return `Rata-rata = ${average}\nGrade = B`
    } else if (average >= 70 && average <= 79) {
        return `Rata-rata = ${average}\nGrade = C`
    } else if (average >= 60 && average <= 69) {
        return `Rata-rata = ${average}\nGrade = D`
    } else if (average >= 0 && average <= 59){
        return `Rata-rata = ${average}\nGrade = E`
    }
}
const tes = hitungRataRataUN(matematika,bahasaIndonesia,bahasaInggris,ipa)
const tes2 = hitungRataRataUN(matematika,"80","Oke",100)
const tes3 = hitungRataRataUN(80,90,85,101)
console.log(tes)
console.log(tes2)
console.log(tes3)