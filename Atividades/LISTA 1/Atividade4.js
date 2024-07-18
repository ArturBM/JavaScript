function Divisor(dividendo, divisor){
    if(dividendo >= divisor)
    {
        return dividendo/divisor
    }
    else{
        return "Imposivel Operar"
    }
}

console.log(Divisor(1,2))
console.log(Divisor(2,2))