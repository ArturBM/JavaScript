// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)

}
imprimirSoma(2, 3)
imprimirSoma(2)//nao funfa
imprimirSoma(2, 3, 4, 5 ,6) //pega os dois primeiros
imprimirSoma() //nao funfa

// funcao com retorno
function soma(a, b = 1){ 
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // somou com o valor de b
console.log(soma()) // n funfa

