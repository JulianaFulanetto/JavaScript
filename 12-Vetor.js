const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

//Criando Variáveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];

console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("");
console.table(dinos); //cria tabela com os itens da array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//adicionando elementos ao vetor existente
dinos.push("Brontossauro", "Velociraptor"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //adiciona itens no inicio do array
console.table(dinos);

//alterando elementos com base no indice (posição)
dinos[3] = "Titanossauro";
console.table(dinos);

//obtendo um elemnto com base no indice
console.log("Primeira posição:", dinos[0]); //retorna um elemento especifico
console.log("Segunda posição:", dinos[1]);
console.log("item da posição 20:", dinos[20]); //retorna indefinido

//removendo elemento do vetor
dinos.pop(); //remove o ultimo elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elementodo vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1
console.table(dinos);

console.log("---------------Continuação da Aula----------------");
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Tricerátops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " está no índice " + posicao);

//criando copia de array vetor
var copia1 = dinos.slice(); //.slice() faz uma copia real do item de vetor
console.log("Veto copia 1");
console.table(copia1);

var copia2 = dinos.slice(1, 3); //.slice(1, 3) determino onde começa e onde termina a copia (numero -1 ex= 3-1= 2)
console.log("vetor copia2");
console.table(copia2);
