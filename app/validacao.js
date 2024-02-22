function verificaSeOChutePossuiUmvalorvalido(chute){
    const numero = +chute

    chuteForInvalido(numero)
}

function recarregarPagina(){
    location.reload();
}

function chuteForInvalido(numero) {
    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueoValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = 
        `
        <h2>Vocâ acertou !</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button class="jogarDenovo" onclick="recarregarPagina()">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function numeroForMaiorOuMenorQueoValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}