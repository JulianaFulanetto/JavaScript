var paisA = 100003; //quantidade de habitantes
var paisB = 300004;
ano = 0; //ano zerado - a cada 1 ano vai subir %

while (paisA < paisB) {
  //por enquanto o pais A é menor que o pais B (queremos q ele se iguale ou fique maior)
  paisA += paisA * 0.03; //somar A+A para a populaçao atual somar adicionar a porcentagem
  paisB += paisB * 0.015;
  ano++; //cada ano
}
console.log(`país A ultrapassa ou iguala o B em ${ano}`); //os anos que precisarão para >= ao pais B ${ano}

console.log("----------------------------------");

//criar um "jogo da velha" que mostre as informações dentro da imagem
//abaixo. Inserir as informações de forma randomica. Informar ao final
//quem ganhou X ou O

// console.log(`___|___|___`);
// console.log(`___|___|___`);
// console.log(`   |   |   `);

//Estrutura do tabuleiro
// Estrutura do Tabuleiro
const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}
function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][0] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][0]} ganhou!`);
      return jogadorAtual;
    }
  }

  for (let i = 0; i < 3; i++) {
    // Verifica colunas
    if (
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[0][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[0][i]} ganhou!`);
      return jogadorAtual;
    }
  }

  if (
    // Verifica diagonais
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[0][0] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][0]} ganhou!`);
    return jogadorAtual;
  }

  if (
    // Verifica diagonais
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[0][2] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][2]} ganhou!`);
    return jogadorAtual;
  }

  if (!tabuleiro.some((linha) => linha.includes(" "))) {
    // Empate
    console.log(`O jogo empatou!`);
    return "Empate";
  }

  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual); // Jogada do jogador 1
  console.table(tabuleiro); // Exibir o tabuleiro atualizado
  vencedor = verificaVencedor(); // Verificar vencedor

  if (!vencedor) {
    jogar(jogadorAtual); // Se não houver vencedor, joga o jogador 2
    console.table(tabuleiro); // Exibir o tabuleiro atualizado
    vencedor = verificaVencedor(); // Verificar vencedor após jogada do jogador 2
  }
}