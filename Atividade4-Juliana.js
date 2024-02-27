console.log("---------ATIVIDADE 1--------------")
var matriz = [
  [5, 8, 4],
  [7, 2, 3],
  [6, 1, 9],
];
console.table(matriz);

console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log("");
console.log("----------ATIVIDADE 2--------------")

var usuario = ["Juliana", 16, "Vermelho", "Uva", "Major Prado", "Loki"];

console.log("Olá",usuario[0],"! Seja bem vindo ao nosso sistema.");
console.log("Você mora no endereço",usuario[4],"e tem um pet chamado",usuario[5], ".");
console.log("Sua idade é", usuario[1],  "e gosta muito da fruta", usuario[3], ".");
console.log("Sua cor favorita é", usuario[2],".");
