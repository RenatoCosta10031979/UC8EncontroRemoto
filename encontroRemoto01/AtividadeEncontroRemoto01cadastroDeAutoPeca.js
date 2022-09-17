


//1 - Se a peça possuir um peso superior a 100gramas, pode cadastrar.
//2 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 3, imprima uma mensagem informando não ter capacidade suficiente.
//3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

//Solução

//1) peso da peca
let peso = 25.34

if (peso < 100)
{
    console.log('O cadastro não poderá ser realizado. O peso da peça precisa ser igual ou maior que  100g ')
}else {
    console.log('O cadastro da peça fi realizado com sucesso!')
}

//2) tamanho da lista
let listaDePecas = ['Pistão', 'suspensão', 'virabrequim']

if (listaDePecas.length < 4)
{
    console.log(' O sistema identificou espaço disponível para Cadastros de peça automotivas.')
}else {
    console.log('Não há espaço disponível no sistema para realizar novo cadastro de peças automotivas.')
}

//3) caracteres do nome da peca
let nomePeca = 'suspensão'

if (nomePeca.length > 4)
{
    console.log(' A peça foi cadastrada com sucesso!')
} else if (nomePeca.length == 0){
    console.log('O sistema não permite realizar cadastro se o nome da peça estiver nulo ou vazio.')
}else {
    console.log('Atenção! O nome da peça precisa ter mais de quatro caracteres. Digite um nome válido.')
}

