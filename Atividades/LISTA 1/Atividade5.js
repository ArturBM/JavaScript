function ArrumaVirgula(num1 = 2, num2 = 4)
{
const resposta =  num1 + num2

const respostaformat =  resposta.toFixed(2).replace(".", ",")

return respostaformat
}

console.log(ArrumaVirgula())