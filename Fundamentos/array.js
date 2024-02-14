const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores [0], valores[3])
console.log(valores [4])

valores[4] = 10

console.log(valores)
console.log(valores.length) // quantidade de elementos que tem na array

valores.push({id: 3}, false, null, 'teste') // juntar valroes da array com outra coisa
console.log(valores)

console.log(valores.pop()) //deletar ultimo indice
delete valores [0] //deletar indice selecionado
console.log(valores)

console.log(typeof valores) 