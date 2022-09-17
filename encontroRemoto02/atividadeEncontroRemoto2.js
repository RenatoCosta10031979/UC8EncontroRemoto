// Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

// se o número for zero, escreva 'zero' e o número correspondente.
// se o número for par, escreva 'par' e o número correspondente.
// se o número for ímpar, escreva 'ímpar' e o número correspondente.


let alunosPresentes = 15

for (let alunos = 0; alunos <= alunosPresentes; alunos++){

    if (alunos == 0){
        console.log('zero ' + alunos)
    }else if (alunos % 2 == 0){
        console.log('par ' + alunos)
    } else {
        console.log('impar ' + alunos)
    }
}

let listaDeAlunos = ['a', 'b', 'c', 'd', 'e']

for (let contador = 0; contador < listaDeAlunos.length; contador++){

    if (contador == 0){
        console.log('zero ' + contador)
    }else if (contador % 2 == 0){
        console.log('par ' + contador )
    }else{
        console.log('impar ' + contador)
    }
}
