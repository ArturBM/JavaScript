const peso1 = 1.0
const peso2 = Number('2.0')

console.log( peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))//saber se o numero é inteiero

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed() Numeros de casa
console.log(media.toString(2)) // toString() Para fazer um numero binario
console.log(typeof media)
console.log(typeof Number)

const rato = 'sempitoca'

console.log(typeof rato)

const ratonego = false
console.log(typeof ratonego)

const ratonegueba = 2
console.log(typeof ratonegueba)