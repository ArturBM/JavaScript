let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!!false)
console.log(!!true) //para saber se é verdadeiro ou falso

console.group('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.group('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.group(' pra finalizar')
console.log(!!('' || null || 0 || " ")) // mostra a verdadeira

let nome = ''
console.log(nome || 'Desconhecido') //mostra a verdadeira por ordem
nome = 'Lucas'
console.log(nome || 'Desconhecido') //mostra a verdadeira por ordem


let rato = ""

console.log(rato || 'sem pitoca'  )