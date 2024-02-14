const nome = 'Rebeca'
const concatenacao ='Olá' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressoes..

console.log( `1 + 1 = ${1 + 1}`)

const tamanhoPeça = 2
console.log('1 + 1 =', tamanhoPeça)   //jeito diferente de fazer isso

const up = texto => texto.toUpperCase() //para deixar todas as letras maiusculas
console.log(`Ei... ${up('cuidado')}!`)
