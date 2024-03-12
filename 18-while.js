// let contador = 0;

// while (contador < 5) {
//   contador++;
//   console.log(contador);
// }
// //while testa a condição antes de encontrar no laço de recepção.
// //Se a condição for inicialmente falsa, o laço não é executado nenhuma vez
// var x = 20;

// while (x > 10) {
//   console.log("Encontrei no laço while...");
//   x--;
// }
// console.log("Terminei!");

// //contagem regressiva
// let countdown = 5;

// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log("Lançamento!");

// //estourando o limite do cartão - versão while

// // let limite = 500;
// // let fatura = 0;

// while (fatura <= limite) {
//   let gasto = Math.random() * 100; //Math.random() cria valor aleatorio entre 0 e 1
//   fatura += gasto;
//   console.log(`Gastei R$ ${gasto.toFixed(2)}-----Fatura: R$ ${fatura.toFixed(2)}`);
// //toFixed(2) alterar o valor mostrado para o usuário em duas casas depois da virgula

//   fatura > limite && console.log(`Estourou o limite do cartão`);
// //&& faz somente um IF, sem else.
// }

// //Estourando o limite do cartão - versão while
// var limite = 500;
// var fatura = 0;

// do {
//     let gasto = Math.random() * 100;
//     fatura += gasto;
//     console.log(`Gastei R$ ${gasto.toFixed(2)}-----Fatura: R$ ${fatura.toFixed(2)}`);

//     fatura > limite && console.log(`Estourou o limite do cartão`);

// } while (fatura <= limite)

// console.log("--------------------------")
// jogo cara da cara e coroa - melhor de 3
// repetição - 3
// variavel cara ou coroa -> aleatoria - 50%
// placar - vitoria e derrotas

// var rodada = 1;
// var moeda = "";
// var escolhaJogador = "";
// var vitoria = 0;
// var derrota = 0;

// while (rodada <= 3)  { // 3= quantidade de rodadas (var)
//   moeda = Math.random() >= 0.5 ? "Cara" : "Coroa"; //tem 50% de chance de cair cara, caso n caia ira cair coroa
//   escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa"; //essa é a escolha do jogador 

//   if (escolhaJogador == moeda) { 
//     console.log(
//       `Parabens, você escolheu ${escolhaJogador} e caiu ${moeda}, você ganhou!` //primeiramente ira aparecer a escolha do jogador e qual moeda caiu(caso for vitoria)
//     );
//     vitoria++;
//   } else {
//     console.log(
//       `Que pena, você escolheu ${escolhaJogador} e caiu ${moeda}, você perdeu!`
//     );
//     derrota++; //tem que colocar esse codigo se não vai infinito
//   }
//   rodada++;
// }

console.log(`--------------------------------`);
console.log(`            PLACAR              `);
console.log(`--------------------------------`);
console.log(
  `${vitoria > derrota ? " você ganhou!! " : "      você perdeu!! "}`
);
console.log(`--------------------------------`);
