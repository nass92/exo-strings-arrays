let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let str2 = str.trim()
let str3 = str2.toLowerCase()
let splitstr3 = str3.split(" ")
splitstr3.forEach(function (item, index, array) {
  console.log(index, item)
})