let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let str2 = str.trim()
let str3 = str2.toLowerCase()
// spliter la phrase en un tableau et affichage du tableau  
let splitstr3 = str3.split(" ")
console.log(splitstr3)
//recuperation de de l'index de chaque élément
splitstr3.forEach(function (item, index, array) {
  console.log(index, item)
})

//affichage de BOB
let Bob = splitstr3[2]
console.log(Bob)