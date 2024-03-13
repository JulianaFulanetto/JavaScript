// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino.
// A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, anoNasc, curso) {
    this.ra = ra;
    this.nome = nome;
    this.anoNasc = anoNasc;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.anoNasc;
  }
  apresentar() {
    console.log(
      `O aluno ${this.nome}, que esta matriculado no curso ${
        this.curso
      }, com o numero de registro do aluno ${
        this.ra
      }, e tem ${this.calcularIdade()} anos`
    );
  }
}
const aluno1 = new Aluno(234, "Robson", 2008, "Desenvolvimento de Sistemas");
aluno1.apresentar();

// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco() {
    return this.preco;
  }

  setPreco(novoPreco) {
    this.preco = novoPreco;
  }

  opcao() {
    console.log(
      `sabor = ${this.sabor}, preço = ${this.getPreco()}, tamanho = ${
        this.tamanho
      }`
    );
  }
}
const morango = new Sorvete("morango", 11, "G");
morango.opcao();

const chocolate = new Sorvete("chocolate", 6, "P");
chocolate.opcao();

const melancia = new Sorvete("melancia", 9, "M");
melancia.opcao();

morango.setPreco(10.51);
morango.opcao();

console.log("--------------------------");
// 1.Comparação de strings (sem case sensitive):
// Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais, ignorando o tamanho das letras (maiúsculas e minúsculas).
class comparando {
  constructor(string1, string2) {
    this.string1 = string1.toLowerCase();
    this.string2 = string2.toLowerCase();
}

  apresentando() {
    return this.string1 === this.string2;
  }
}
const comparacao = new comparando("Olá", "oi");
console.log(comparacao.apresentando());

// 2.Extrair números de uma string:
// Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas os números encontrados nela.
function extraNumeros(iString) {
  const numberRegex = /\d+/g;
  const numbers = iString.match(numberRegex);
  return numbers ? numbers.map(Number) : [];
}

// Exemplo de uso:
const iString = "Tenho 3 gatos e 2 cachorros.";
console.log(extraNumeros(iString)); // Saída: [3, 2]

// 3.Inverter a ordem das palavras em uma frase:
// Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a ordem das palavras invertida.
class InversorDeOrdemPalavras { // Esta classe encapsula a funcionalidade de inverter a ordem das palavras em uma frase.
  constructor(frase) {
    this.frase = frase;
  }

  inverterOrdem() { //inverterOrdem: Este método é responsável por dividir a frase em palavras, inverter a ordem das palavras e juntá-las de volta em uma nova frase.
    const palavras = this.frase.split(" ");
    const ordemInvertida = palavras.reverse(); // Isso inverte a ordem dos elementos no array de palavras. Agora, as palavras estão em ordem inversa.
    return ordemInvertida.join(" "); //Isso junta os elementos do array de palavras de volta em uma string, usando o espaço como separador. Isso nos dá uma nova string com a ordem das palavras invertida.
  }
}
const inversor = new InversorDeOrdemPalavras("todos somos seres mortais");
console.log(inversor.inverterOrdem()); // Saída: "alto late cachorro O"