//Laço de reoetição FOR
//escrever para o usuário "Prestar mais atenção nas aulas!"

//mostrando números pares
for (let i = 0; i < 1000; i += 2) {
  console.log(i);
}
console.log("-----------------------");
//mostrando números impares
for (let i = 1; i < 1000; i += 2) {
  console.log(i);
}
console.log("-----------------------");
//Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("----------------------------");
//Escreva todos os números pares entre 1 e 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("------------------------");
//Escreva com if
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("--------------------");

//Dado um vetor com números 5,6,7,8,14,9,7,2.
//Calcule e exiba a somatórica de seus elementos.
//FOR

//VAR = cria Variáveis global
//CONST = cria constante, não muda
//LET = cria variavel funcional dentro de um grupo de codigo
//tudo que esta dentro de uma chave é um grupo

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}
console.log(`A soma dos elementos do array é: ${somar}`);

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor

var numero = [5, 6, 8, 14, 0, 9, 2];

for (let i = 0; i < numero.length; i++) {
  numero[i] *= 3;
}
console.table(numero);

//Dada a matriz 2x3, escreverpara o usuário tosos os seus elementos
//com as respectivas posicoes da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`)
    
  }
}
