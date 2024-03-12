//diagonal principal
var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4]
  ];
  console.table(matriz);
  for (let diag = 0; diag < matriz.length; diag++) {
    console.log(matriz[diag][diag])
  }
