//ex.1- Criar array
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];

//ex.2- adicionando tangerina no final
frutas.push("Tangerina");
console.table(frutas);

//ex.3 adicionando no inicio
frutas.unshift("Goiaba");
console.table(frutas);

//ex.4 mostrar indice 5
console.log(frutas[5]);

//ex.5 excluir Uva
//frutas.splice(4, 1);
var posicao = frutas.indexOf("Uva");
console.log(posicao);
frutas.splice(posicao, 1);
console.table(frutas);

//ex.6
var copiaArray = frutas.slice(2, 5);
console.table(copiaArray);

//SEGUNDA PARTE ex.1
var numerosOriginais = [1, 2, 3, 4, 5];
console.table(numerosOriginais);
//ex.2
console.log("O terceiro elemento é o número " + numerosOriginais[2]);

var copia = numerosOriginais.slice();
console.table(copia);

copia[0] = numerosOriginais[0] * 2
copia[1] = numerosOriginais[1] * 2
copia[2] = numerosOriginais[2] * 2
copia[3] = numerosOriginais[3] * 2
copia[4] = numerosOriginais[4] * 2
console.table(copia)




