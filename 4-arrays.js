// =====================================================
// EXEMPLOS INICIAIS COM ARRAYS
// =====================================================

// Criamos um array vazio chamado listaCompras.
// Um array normalmente é usado para armazenar vários valores.
// let listaCompras = []

// Aqui adicionamos valores em posições numéricas do array.
// A posição 0 recebe "Pão"
// A posição 1 recebe "Refrigerante"
// listaCompras[0] = "Pão"
// listaCompras[1] = "Refrigerante"

// Aqui estamos usando uma chave de texto ("Frutas").
// Em JavaScript isso funciona, mas deixa de ser um uso "tradicional" de array.
// Nesse caso, o array passa a se comportar mais como um objeto.
// listaCompras['Frutas'] = "Laranja"

// Exibe no console o valor armazenado na chave "Frutas".
// console.table(listaCompras["Frutas"])

// =====================================================
// ARRAY COM "CATEGORIAS" INTERNAS
// =====================================================

// Criamos um array vazio chamado listaCoisas.
// let listaCoisas = []

// Criamos uma posição chamada "hardware" e guardamos nela um novo array.
// listaCoisas["hardware"] = Array()

// Adicionamos elementos dentro do array "hardware".
// listaCoisas["hardware"][0] = "Joystick"
// listaCoisas["hardware"][1] = "Headphone"

// Criamos uma posição chamada "Ferramentas" e guardamos nela outro array.
// listaCoisas["Ferramentas"] = Array()

// Esta linha está repetida e sobrescreve o mesmo array novamente.
// Não causa erro, mas é desnecessária.
// listaCoisas["Ferramentas"] = Array()

// Adicionamos "Furadeira" no índice 0 do array "Ferramentas".
// listaCoisas["Ferramentas"][0] = "Furadeira"

// Mostraria toda a estrutura no formato de tabela.
// console.table(listaCoisas)

// indexOf procura a posição de um valor dentro do array.
// Aqui ele procura "Headphone" dentro de listaCoisas["hardware"].
// Como "Headphone" está na posição 1, o resultado será 1.
// console.log(listaCoisas['hardware'].indexOf('Headphone'))

// =====================================================
// ARRAY DE LIVROS
// =====================================================

// Criamos um array com vários títulos de livros.
// let livros = ["Senhor dos Anéis", "O Hobbit", "Pequeno Príncipe", "Emma", "Dom Quixote", "Orgulho e Preconceito", "O Monge e o Executivo", "Quem é Você Alasca", "Como Fazer Amigos e Influenciar Pessoas", "Bíblia", "Código Limpo"]

// Exibe os livros em formato de tabela.
// console.table(livros)

// Estrutura do for:
// <inicialização> / <condição> / <passo ou iteração>
//
// let i = 0        -> começa no índice 0
// i <= livros.length - 1 -> continua até o último índice
// i++              -> incrementa 1 a cada repetição
//
// Em cada repetição, mostramos o livro da posição atual.
// for(let i = 0; i <= livros.length - 1; i++) {
//     console.log(livros[i])
// }

// push adiciona um novo elemento ao final do array.
// livros.push('Nárnia')
// console.table(livros)

// pop remove o último elemento do array.
// livros.pop()
// console.table(livros)

// =====================================================
// ORDENAÇÃO SIMPLES COM sort
// =====================================================

// Criamos um array de números.
// let numeros = [10, 20, 1, 5, 2, -1]

// sort ordena os elementos.
// Quando usamos (a, b) => a - b, o JavaScript entende
// que queremos ordenar em ordem crescente numericamente.
// Sem essa função, o sort poderia ordenar como texto.
// numeros.sort((a, b) => a - b)

// Exibe o array ordenado.
// console.log(numeros)

// =====================================================
// EXERCÍCIOS COM ARRAY
// =====================================================

/* Somar os elementos do Array */

// Variável acumuladora.
// Ela vai guardar a soma total dos números.
let soma = 0;

// Array que será usado nos exemplos abaixo.
let numeros = [10, 20, 1, 5, 2, -1];

// Inicializamos a variável maior com o primeiro valor do array.
// Fazemos isso para ter uma base de comparação.
let maior = numeros[0];

// Criamos um array vazio que armazenará os números em ordem inversa.
let reverso = [];

// -----------------------------------------------------
// 1) SOMAR TODOS OS VALORES DO ARRAY
// -----------------------------------------------------

// Percorremos o array do início ao fim.
for (let i = 0; i < numeros.length; i++) {
  // A cada volta do laço, pegamos o valor atual numeros[i]
  // e somamos com o valor já armazenado em soma.
  //
  // Exemplo:
  // soma = 0 + 10
  // soma = 10 + 20
  // soma = 30 + 1
  // ...
  soma += numeros[i];
}

// Mostraria o valor final da soma.
// console.log(soma)

// -----------------------------------------------------
// 2) ENCONTRAR O MAIOR VALOR DO ARRAY
// -----------------------------------------------------

// Percorremos todos os elementos do array.
for (let i = 0; i < numeros.length; i++) {
  // Se o número atual for maior que o valor guardado em "maior",
  // atualizamos a variável "maior".
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

// Mostraria o maior número encontrado.
// console.log(maior)

// -----------------------------------------------------
// 3) REVERTER UM ARRAY
// -----------------------------------------------------

// Começamos do último índice do array.
// numeros.length - 1 representa a última posição.
for (let i = numeros.length - 1; i >= 0; i--) {
  // Adicionamos cada elemento ao array "reverso".
  // Como estamos indo de trás para frente,
  // o novo array ficará invertido.
  reverso.push(numeros[i]);
}

// Mostraria o array invertido.
// console.log(reverso)

// -----------------------------------------------------
// 4) ORDENAR UM ARRAY EM ORDEM CRESCENTE
// -----------------------------------------------------

// let auxiliar será usado para fazer a troca de valores.
// Essa técnica é comum em algoritmos de ordenação.
let auxiliar = 0;

// Primeiro laço: escolhe um elemento do array.
for (let i = 0; i < numeros.length; i++) {
  // Segundo laço: compara esse elemento com todos os outros.
  for (let j = 0; j < numeros.length; j++) {
    // Se o valor da posição i for menor que o da posição j,
    // trocamos os dois de lugar.
    //
    // Isso faz com que os menores valores caminhem para o início do array.
    if (numeros[i] < numeros[j]) {
      // Guardamos temporariamente o valor de numeros[i].
      auxiliar = numeros[i];

      // Colocamos o valor de numeros[j] na posição i.
      numeros[i] = numeros[j];

      // Colocamos o valor que estava em numeros[i] na posição j.
      numeros[j] = auxiliar;
    }
  }
}

// Exibe o array já ordenado em ordem crescente.
console.log(numeros);