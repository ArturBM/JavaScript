console.log(soma( 3, 4))

// function declaration 

function soma(x,y) {
    return x + y // posso chamar no inicio do codigo
}

// function expression 
const sub = function (x,y) {
    return x - y
}
console.log(sub(3,4))
//named function expression 
const mult = function mult(x,y) {
    return x* y //pouco usada, beneficio na hora de debugar
} 
console.log(mult(3,4))

