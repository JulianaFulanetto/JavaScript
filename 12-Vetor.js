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

dinos.unshift("Tricerátop"); //adiciona itens no inicio do array
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
