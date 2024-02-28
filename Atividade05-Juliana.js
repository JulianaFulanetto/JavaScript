//ex.1
function idade(ano) {
  return 2024 - ano;
}
console.log(`a pessoa tem ${idade(2008)}`);

//ex.2
function quantidade(combustivel) {
  return combustivel * 12;
}
console.log(`o carro de jorge pode andar ${quantidade(1, 12)} km`);

function quantidade(combustivel, km) {
  return combustivel * km;
}
console.log(`o carro de jorge pode andar ${quantidade(7, 12)} km`);

console.log("------------atividade 2------------");
//var idade = 18;
function votar(idade) {
  if (idade >= 16) console.log(`Você tem idade para votar!!`);
  else console.log(`Você não pode votar!!`);
}
votar(17);

console.log("-----------------------")
function votacao(idade){
    switch (true) {
        case idade < 16:
            console.log(`Você não pode Votar`)
            break;
            case idade >= 16 && idade < 18:
                console.log(`Você pode votar, mas não é obrigatorio`)
                break
            default:
            console.log(`Você pode votar`)
            break
    }
}
votacao(16)
