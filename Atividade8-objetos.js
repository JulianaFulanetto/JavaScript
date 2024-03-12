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
    return 2024 - this.anoNasc 
  }
  apresentar() {
    console.log(
      `O aluno ${this.nome}, que esta matriculado no curso ${this.curso}, com o numero de registro do aluno ${this.ra}, e tem ${this.calcularIdade()} anos`
    );
  }
 
}
const aluno1 = new Aluno(234, "Robson", 2008, "Desenvolvimento de Sistemas");
aluno1.apresentar();
