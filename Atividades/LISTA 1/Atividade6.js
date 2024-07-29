function jurosSimples(capital, juros, tempo){
    let Total = capital * juros * tempo
    return Total
}

function jurosCompostos(capital, juros,tempo){
    let Total = capital * ((1 + juros)**tempo)
    return Total
}


console.log(jurosSimples(1000,1,2))
console.log(jurosCompostos(1000,1,2))