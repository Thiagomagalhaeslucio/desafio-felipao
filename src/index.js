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

let heroi = "Theks";
let xp = 0;
let ranking = "";

while (xp <=1){
    xp = Math.floor(Math.random() * 13.000);
}

    if(xp <= 1.000){
        ranking = "Ferro"
    } else if(xp >= 1.001 && xp <= 2.000){
        ranking = "Bronze"
    } else if(xp >= 2.001 && xp <= 5.000){
        ranking = "Prata"
    } else if(xp >= 5.001 && xp<= 7.000){
        ranking= "Ouro"
    } else if(xp >= 7.001 && xp <= 8.000){
        ranking = "Platina"
    } else if(xp >= 8.001 && xp <= 9.000){
        ranking = "Ascendente"
    } else if(xp >= 9.001 && xp <= 10.000){
        ranking = "Imortal"
    } else {
        ranking = "Radiante"
    }

    
   console.log("o heroi " + heroi + " jogou sua md10 e está ranking " + ranking );
