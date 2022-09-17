//Faca um programa que receba a idade de uma pessoa em anos e
//imprima essa idade em: Meses, Dias, horas, Minutos

//Algoritmo para calcular idade em meses, dias, horas e minutos


//Entrada
let idade = 43;
console.log('A idade atual é: ' + idade + ' anos');

//Processamento
let idade = 43;
let MinhaIdadeEmMeses = idade * 12;
let MinhaIdadeEMDias = idade * 365;
let MinhaIdadeEmHoras = MinhaIdadeEmDias * 24;
let MinhaIdadeEmMinutos = MinhaIdadeEmHoras * 60;

//saida
console.log(MinhaIdadeEmMeses)
console.log(MinhaIdadeEMDias)
console.log(MinhaIdadeEmHoras)
console.log(MinhaIdadeEmMinutos)
