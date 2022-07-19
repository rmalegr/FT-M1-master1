'use strict'
//por ejemplo si ingresamos el numero binario 0001 1110

function BinarioADecimal(num) {
  // tu codigo aca
  let data = num.split("").reverse();
  let resultado = 0;
  for(let i = 0; i < data.length; i++) {
    resultado += (2 ** i) * data[i]
  }

  return resultado
}

function DecimalABinario(num) {
  // tu codigo aca
    var result = ""

  while(num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2)
  }

 return result;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}