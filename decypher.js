
function code(str) {

  let sol
    = "";
  let X = 17

  for (let i = 0; i < str.length; i++) {
    //définition de l'ASCII et de ses valeur
    let asciiNum = str[i].charCodeAt();

    // 65 dans le tableau ascii = A; et 77= N; 90 = Z
    if (asciiNum >= 65 && asciiNum <= 65) {
      sol
        += String.fromCharCode(asciiNum + X);
    } else if (asciiNum >= 82 && asciiNum <= 90) {
      sol
        += String.fromCharCode(asciiNum - X);
    } else if (asciiNum >= 66 && asciiNum <= 81) {
      sol
        += String.fromCharCode(asciiNum + 9);
    } else {
      sol
        += str[i];
    }
  }
  return sol
    ;
}
console.log(code("YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU"))


