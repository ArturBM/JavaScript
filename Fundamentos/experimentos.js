let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma varialvel maluca: sem var e sem let
abc= 3 // nao faça isso !!!!!

//modulo.exports = { e: 456, f: false, g: 'teste}


