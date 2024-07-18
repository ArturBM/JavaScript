
function Triangulo(lado1, lado2,lado3){
    if(lado1 === lado2 && lado2 ===lado3 ){
        return "Esse triangulo é Equilatero"
    }
    else if(lado1 === lado2 || lado2 === lado3 || lado1=== lado3)
    {
        return "Esse triangulo é Isósceles"
    }
    else{
        return "Esse triangulo é Escaleno"
    }
    
}

console.log(Triangulo(1,2,3))
console.log(Triangulo(1,2,2))
console.log(Triangulo(2,2,2))
