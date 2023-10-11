//**O Que deve ser utilizado**

//-Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let herói = "Theks";
let xp = 11.000;
let ranking = "";

if (xp <= 1000){
    ranking = ferro;
}   
else
    if (xp >= 2.001 && 5.000)
   ranking = bronze;
else 
    if (xp >= 5.001 && 6.000)
   ranking = Prata;
   else 
   if (xp >= 6.001 && 7.000)
  ranking = ouro;
  else 
  if (xp >= 7.001 && 8.000)
 ranking = platina;
 else 
 if (xp >= 8.001 && 9.000)
ranking = Ascendente;
else 
    if (xp >= 9.001 && 10.000)
   ranking = Radiante;

   console.log("nome do herói: " + herói && "ranking " == xp);
