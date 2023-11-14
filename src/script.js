// criação dos dados do herói
let nomeHeroi = "Cavaleiro do Torrone";
let quantidadeXPHeroi = 1850;
let nivelDoHeroi;

// pegando 2% do xp dele
let doisPorCentoXpHeroi = (quantidadeXPHeroi/100)*2;
// console.log(doisPorCentoXpHeroi);

// simulando que ele está treinando ou fazendo missões
for(let i = 0; i < 5; i++){
    quantidadeXPHeroi += doisPorCentoXpHeroi;
    console.log("Treinando...");
}

// Identificando nível do Herói
if(quantidadeXPHeroi < 1000){
    nivelDoHeroi = "Ferro";
}else if(quantidadeXPHeroi >= 1001 && quantidadeXPHeroi <= 2000){
    nivelDoHeroi = "Bronze";
}else if(quantidadeXPHeroi >= 2001 && quantidadeXPHeroi <= 5000){
    nivelDoHeroi = "Prata";
}else if(quantidadeXPHeroi >= 5001 && quantidadeXPHeroi <= 7000){
    nivelDoHeroi = "Ouro";
}else if(quantidadeXPHeroi >= 7001 && quantidadeXPHeroi <= 8000){
    nivelDoHeroi = "Plantina";
}else if(quantidadeXPHeroi >= 8001 && quantidadeXPHeroi <= 9000){
    nivelDoHeroi = "Ascendente";
}else if(quantidadeXPHeroi >= 9001 && quantidadeXPHeroi <= 10000){
    nivelDoHeroi = "Imortal";
}else if(quantidadeXPHeroi >= 10001){
    nivelDoHeroi = "Radiante";
}else{
    nivelDoHeroi = "[ERRO] Impossível detectar seu nível de herói";
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelDoHeroi}`);
console.log(`Nível de XP: ${quantidadeXPHeroi}`);