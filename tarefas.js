let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
     
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let totalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let totalcerveja = cervejaPP(duracao) * adultos;
    let totalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 *  criancas);

    resultado.innerHTML = `<p>${totalcarne / 1000} kg de Carnes</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalcerveja / 350)} latinha de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalbebidas / 2000)} garrafas de Bebidas</p>`

}



function carnePP(duracao) {
    if (duracao >= 6 ) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1000;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6){
        return 2000;
    } else {
        return 500;
    }
}