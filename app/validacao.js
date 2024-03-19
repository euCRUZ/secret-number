function verficarValorValidoChute(chute) {
    // converte para inteiro
    const numero = +chute 

    // se não for número, exibe mensagem de erro
    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>GAME OVER</h2>
                <h3>O número secreto era ${numeroSecreto}</h3>
                <button onclick="window.location.reload()">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "black"
        } else {
            elementoChute.innerHTML += `<div>Valor inválido</div>`  
        }
    }

    if (chuteMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2">Parabéns, você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button onclick="window.location.reload()">Jogar Novamente</button>
        `
    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else  {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}