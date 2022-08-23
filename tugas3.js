function printSegitigaTerbalik(num) {
    let hasil = ``
     
     if (isNaN(num)) {
        return "Data harus number"
     } else {
        for (let b = num ; b <= num && b > 0; b--) {
            let a = 1
          for (a ; a <= b ; a++) {
            hasil += `${a}`
          } hasil += `\n`
        } return hasil
     }
   }

   const printSegitiga = 6
   const bukanNumber = "delapan"
   console.log(printSegitigaTerbalik(printSegitiga))
   console.log(printSegitigaTerbalik(bukanNumber))