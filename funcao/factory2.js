function cadastro( nome, preco){
    return{
        nome: nome,
        preco: preco
    }
}

console.log(cadastro('bola', 45))

function cadastro2( nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(cadastro2('bola', 45))