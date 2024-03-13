// //definindo objeto
// class Pessoa {
//   //objeto que queremos criar
//   constructor(pNome, pIdade) {
//     this.nome = pNome; // caracteristica para se apresentar um objeto
//     this.idade = pIdade; //this = esse objeto se chama tal
//   }
//   apresentarSe() {
//     // metodo= funçao criada
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //criando objetos do "tipo" Pessoa
// var pessoa1 = new Pessoa("Talda Dienifer", 52); //new Pessoa = pegando objetos pessoa e atribuir para uma nova pessoa
// var p2 = new Pessoa("Taldo Pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// console.log("-------------ABSTRAÇÃO----------------");
// //ABSTRAÇÃO : abstrair caracteristicas importantes e descartar irrelevantes

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Catioro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade}`
// );

// meuPet.alimentar();

// console.log("-------------HERANÇA----------------");
// //HERANÇA : herdar parte do codigo da super classe/ algo
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }
//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentar`);
//   }
//   emitirSom() {
//     console.log(`Barulho padão de animal!`);
//   }
// }
// class Catioro extends Animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }

//   emitirSom() {
//     console.log(`🐶AU AU AU🐶`);
//   }
// }
// const pet = new Animal("Carlos", 10, "Comida espacial");
// const meuCatioro = new Catioro("Rex,", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log("");
// meuCatioro.alimentar();
// meuCatioro.emitirSom();

// console.log("--------------ENCAPSULAMENTO-----------");
// //ENCAPSULAMENTO:  escrever algumas propriedades da classe para que elas nao possam ser modificadas
// class Petzinho {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   getNome() {
//     return this.nome;
//   }

//   setNome(novoNome) {
//     this.nome = novoNome;
//   }
// }

// const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

// console.log(novoPetzinho.getNome()); //"Bob"
// novoPetzinho.setNome("Rex");
// console.log(novoPetzinho.getNome()); //"Rex"

// console.log("----------------POLIMORFISMO---------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }

console.log("--------------------EXEMPLOS------------------");
//criando uma classe Retângulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  obterArea() {
    return this.comprimento * this.largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}
//Criando um objeto do "tipo" Retangulo
var ret1 = new Retangulo(10, 15);

function displayRet(retangulo) {
  console.table(retangulo);
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`área = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret1);
ret1.setComprimento(20);
displayRet(ret1);
ret1.setLargura(20);
displayRet(ret1);
