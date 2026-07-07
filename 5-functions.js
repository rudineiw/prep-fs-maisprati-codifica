// função para somar dois números
function soma(numero1, numero2) {
    let soma = numero1 + numero2
    return soma
}

// função para calcular a média de duas notas
function media (nota1, nota2) {
    let media = (nota1 + nota2) / 2
    return media
}

let resultado = soma(5, 10)
//console.log(resultado)

let mediaAluno = media(7, 8)
//console.log(mediaAluno)


////////////////////////////////////////////////////////

// função para incrementar o valor de um objeto
function incrementar(ref) {
    ref.valor++
}

let contador =  { valor: 0 }
incrementar(contador)
//console.log(contador.valor) // Saída: 1 

// função para encontrar o maior número em um array
function encontrarMaiorNumero(array) {
    let maior = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

let numeros = [3, 7, 2, 9, 5]
let maiorNumero = encontrarMaiorNumero(numeros)
//console.log(`O maior número é: ${maiorNumero}`) // Saída: O maior número é: 9


// Criar uma função para somar os elementos de um array
function somarArray(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}

let numerosParaSomar = [1, 2, 3, 4, 5]
let resultadoSoma = somarArray(numerosParaSomar)
//console.log(`A soma dos elementos do array é: ${resultadoSoma}`) // Saída: A soma dos elementos do array é: 15