let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : 
    {
        street : "Kulas Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874"
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org",
}

let dataku = {...data}
dataku.name = "Muhamad Wildan Faz"
dataku.email = "muhamadwildanfaz@gmail.com"
dataku.hobby = "Gaming"
console.log(dataku)

// bisa data / dataku
const {street, city} = data.address
console.log(`street : ${street}\ncity : ${city}`)