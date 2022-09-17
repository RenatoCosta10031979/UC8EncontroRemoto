//condicionais

//condicional simples
let semaforo1 = 'amarelo'

if (semaforo1 == 'verde')
{
    console.log('Permitido o carro transitar')
}

//condicional composta
let semaforo2 = 'vermelho'

if (semaforo2 == 'verde')
{
    console.log('Passagem autorizada')
}else{
    console.log('Verificar se o sinal está laranjado ou vermelho')
}

//condicional encadeada
let semaforo3 = 'vermelho'

if (semaforo3 == 'verde')
{
    console.log('Passagem autorizada')
}else if (semaforo3 == 'vermelho')
{
    console.log('Parada obrigatória')
}else
{
    console.log('Atenção!')
}

// = atribuir valor
// == comparar valor
// === comparar valor e tipo de dado
