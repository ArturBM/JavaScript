function soBoaNoticia(nota) {
    if ( nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()            
seForVerdadeEuFalo(null)        //se for false,
seForVerdadeEuFalo(undefined)      //ele  
seForVerdadeEuFalo(NaN)            //nao
seForVerdadeEuFalo('')             //executa,
seForVerdadeEuFalo(0)             // como no exemplo
seForVerdadeEuFalo(-1)             
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})