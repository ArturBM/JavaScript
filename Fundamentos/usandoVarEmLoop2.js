const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//mesmo que com uma funcao dentro, continua imprimindo o valor 10