//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
let numeroParImpar = 7;

if(numeroParImpar % 2 === 0){ // Verifica se o resto da divisão por 2 é zero
    console.log('PAR!'); // Imprime "PAR!" se a condição for verdadeira
} else {
    console.log('ÍMPAR!'); // Imprime "ÍMPAR!" caso contrário
}
/////////////////////////////////////////////////////////////////

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
let idade = 25;

if (idade >= 0 && idade <= 12) {
    console.log("Criança"); // Idade entre 0 e 12 anos
} else if (idade > 12 && idade <= 18) {
    console.log("Adolescente"); // Idade entre 13 e 18 anos
} else if (idade > 18 && idade <= 60) {
    console.log("Adulto"); // Idade entre 19 e 60 anos
} else if (idade > 60) {
    console.log("Idoso"); // Idade acima de 60 anos
} else {
    console.log("Idade inválida!"); // Caso a idade seja negativa ou valor inválido
}
/////////////////////////////////////////////////////////////////

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
//const prompt = require('prompt-sync')(); // Necessário para receber entrada do usuário no Node.js
// Entrada de dados
let nota = Number(prompt("Digite a nota (0 a 10): ")); // Recebe a nota do usuário

if (nota < 0 || nota > 10) { // Verifica se a nota é menor que 0 ou maior que 10
    console.log("Nota inválida!"); 
} else if (nota >= 7) {
    console.log("Aprovado"); // Nota entre 7 e 10
} else if (nota >= 5) {
    console.log("Recuperação"); // Nota entre 5 e 6.9
} else {
    console.log("Reprovado"); // Nota entre 0 e 4.9
}
// foi evitado o uso de condições redundantes como nota >= 7 && nota <= 10, pois a primeira condição já garante que a nota é menor ou igual a 10, e a segunda condição já garante que a nota é maior ou igual a 7. O mesmo raciocínio se aplica para as outras condições.
/////////////////////////////////////////////////////////////////

//4. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
//const prompt = require('prompt-sync')();
// Entrada de dados
let peso = Number(prompt("Digite seu peso em Kg (ex: 72.8) "));
let altura = Number(prompt("Digite sua altura em metros (ex: 1.75): "));

if (peso <= 0 || altura <= 0) {
    console.log("Valores inválidos!");
} else {
    // Cálculo do IMC
    let imc = peso / (altura * altura);
    let categoria;
    // Classificação do IMC
    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }
    // Foi evitado de redundância nas condições: imc >= 18.5 && imc < 24.9 pois o else if já garante que o valor não entrou nas condições anteriores
    // Saída
    console.log("\nSeu IMC é:", imc.toFixed(2)); // toFixed(2) para mostrar o IMC com 2 casas decimais
    console.log("Categoria:", categoria);
}
/////////////////////////////////////////////////////////////////

//5. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
//const prompt = require('prompt-sync')(); // Necessário para receber entrada do usuário no Node.js
// Entrada de dados
let quantidade = Number(prompt("Digite a quantidade de maçãs compradas: "));
let preco;

if (quantidade < 0) {
    console.log("Quantidade inválida!");
} else if (quantidade < 12) {
    preco = 0.30; // Preço para menos de 12 maçãs
} else {
    preco = 0.25; // Preço para 12 ou mais maçãs
}
// Cálculo do valor total
let valorTotal = quantidade * preco;
// Saída
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`); // toFixed(2) para mostrar o valor com 2 casas decimais
/////////////////////////////////////////////////////////////////

//6. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
//const prompt = require('prompt-sync')(); // Necessário para receber entrada do usuário no Node.js
// Entrada de dados
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
// Verificação de valores
if (valor1 === valor2) {
    console.log("Os valores são iguais! Informe valores diferentes.");
} else if (valor1 < valor2) {
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
}
/////////////////////////////////////////////////////////////////

//7. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
/////////////////////////////////////////////////////////////////

//8. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
//const prompt = require('prompt-sync')(); // Necessário para receber entrada do usuário no Node.js
// Entrada de dados
let numero = Number(prompt("Digite um número inteiro: "));
for (let i = 1; i <= 10; i++) {
    console.log(i +': '+ numero);
}
/////////////////////////////////////////////////////////////////

//9. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
//const prompt = require('prompt-sync')();
let soma = 0;
// Loop para solicitar 5 números
for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `));
    soma += numero;
}
// Resultado
console.log("\nSoma:", soma);
/////////////////////////////////////////////////////////////////

//10. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
//const prompt = require('prompt-sync')();
// Entrada de dados
let tabuada = Number(prompt("Tabuada do nº: "));
// Loop para exibir a tabuada de 1 a 10
for (let i = 0; i <= 10; i++) {
    console.log(`${tabuada} × ${i} =`, tabuada * i);
}
/////////////////////////////////////////////////////////////////

//11. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require('prompt-sync')();

let somar = 0;
let contador = 0;
// Entrada do primeiro número
let numeroDigitado = Number(prompt("Digite um número decimal (0 para cancelar): "));
// Ler números até que o usuário digite 0
while (numeroDigitado !== 0) {
    somar += numeroDigitado;
    contador++;
    // Entrada do próximo número
    numeroDigitado = Number(prompt("Digite outro número ou 0 para encerrar): "));
}
// Cálculo da média
if (contador > 0) {
    let media = somar / contador;
    console.log("\nMédia aritmética:", media.toFixed(2));
} else {
    console.log("\nNenhum número válido foi digitado.");
}
/////////////////////////////////////////////////////////////////