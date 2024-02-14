const escola = "Artur"

console.log(escola.charAt(4))// mostra o indice
console.log(escola.charAt(0)) // mostra o indice
console.log(escola.charCodeAt(3)) // mostra o indice numa tabela universal
console.log(escola.indexOf('r')) //Mostra literalmente o indice que ocupa na string

console.log(escola.substring(1)) // vai mostrar do indice selencionado para frente
console.log(escola.substring (0, 3))

console.log('Escola '.concat(escola.concat("!")))  // junta elementos 
console.log('Escola ' + escola + "!")  // junta elementos 
console.log(escola.replace(2, 'e'))  // troca o indice selecionado por uma string

console.log('Ana,Maria,Pedro'.split(',')) //split é fazer uma cadeia de caracteres 

