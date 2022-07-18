/* VARIAVEIS NESCESSARIAS */
let miniGame = document.getElementById('MiniGame');
let button = document.getElementById('buttonGame');
let resultado = document.querySelector(".box__result");
let valorAdivinha = gerarNumeroAleatorio(10);

input.focus();

function limparInput(){
    input.value = "";
    input.focus();
}

// FUNÇÃO PARA GERAL UM NUMERO ALEATORIO
function gerarNumeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo + 1)
}
// FUNÇÃO PARA VERIFICAR O NUMERO DIGITADO COM NUMERO ALEATORIO
function validar(valorAdivinha) {
    const acerto = `
    <div class="sucess">
        <p>Você Acertou, o numero era ${valorAdivinha}!</p>
    </div>
    `;
    const errou = `
    <div class="error">
        <p>Você errou tente do novo!</p>
     </div>
    `;
    resultado.classList.remove('espaco');
    if (input.value == valorAdivinha) {
        resultado.innerHTML = acerto;
        button.disabled = true;
        button.classList.remove('form__button');
        button.classList.add('button__disable');
        modal__conteudo.innerHTML = `
            <div class="correcao__texto">
                <p>
                    Parabéns você acertou o número secreto!
                </p>
            </div>
            `;
        open.click();
        return true
    }
    else {
        resultado.innerHTML = errou;
    }
    limparInput();
}

function jogar() {
    let resultado = validar(valorAdivinha)
    if (resultado == true) {
        miniGame.insertAdjacentHTML('beforeend', `<button class="form__button" id="buttonRetry">Jogar novamente?<a id="retry"></a></button>`);
        let buttonRetry = document.getElementById('buttonRetry');
        buttonRetry.onclick = retry;
    }
}

function retry() {
    valorAdivinha = gerarNumeroAleatorio(10);
    button.classList.remove('button__disable');
    button.classList.add('form__button');
    miniGame.removeChild(miniGame.children[4]);
    resultado.removeChild(resultado.children[0]);
    resultado.classList.add('espaco');
    button.disabled = false;
    limparInput();
    close.onclick = ()=>{
        modal__conteudo.removeChild(modal__conteudo.children[0]);
        limparInput();
    }
    button.onclick = jogar;
}


button.onclick = jogar;