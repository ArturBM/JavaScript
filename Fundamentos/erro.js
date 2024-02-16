function tratarErroELancar(erro){
   // trow new Error('...')
  // trow 10
  //trow true
  //trow 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }

  }


function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
} catch (e) {
    tratarErroELancar(e)
} finally{
    console.log('final')
}
}


const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)