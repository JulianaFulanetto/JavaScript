var anoNascimento = 2007;

if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nasceu em de 2003!`);

//condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000) console.log(`A pessoa nasceu depois de 2000!`);
else console.log(`A pessoa nasceu antes de 2000`);

//condicional composto com if
const login = "admin"; //digitado pelo usuario
var senha = "123456"; //digitado pelo usuario

//---------------------------------------------//
const loginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados
//--------------------------------------------//

if (login == loginUser && senha == senhaUser)
  // && significa E -- || significa OU
  console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "Vermelho") console.log(`Pare`);
  else if (cor == "Amarelo") console.log(`Preste atenção`);
  else if (cor == "Verde") console.log(`Siga`);
  else
    console.log(
      `Você informou uma cor diferente de verde, amarelo ou Vermelho`
    );
}
sinaleiro("Vermelho");

//disvio condicional if com bloco de comandos

var idade = 18;

if (idade <= 18) {
  console.log("entrou em if...");
  idade++, console.log("Incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`terminei!`);

//desvio condicional if inline (ternário)
    //validação (algo == algo) ou (algo > algumacoisa)
    // ? (IF)
    //se for verdadeiro
    // : (ELSE)
    //se for falso
    //testeDeValidação == teste ? "Bla Bla" : ("Ble Ble")
var preco = 500;

var resultado = preco <= 100 ? "tá barato" : "Vish ta caro!!!";

if (preco <= 100) console.log(`Ta barato!`);
else console.log(`Vish ta caro!!!`);
