let open = document.getElementById('buttonModal');
let modal__conteudo = document.getElementById('modal__conteudo');
let input = document.getElementById('inputGame');
modal__conteudo.innerHTML =`
    <div class="correcao__texto">
        <p>Bem-vindo ao jogo de Adivinha um Número,
           este um projeto simples que aprendi no curso da alura para
           aprender logica de programação, as regras é simples são elas:</p>
        <ul>
            <li>Digite um Valor de 1 a 10</li>
            <li>Não a quantidade de tentativas maxima</li>
        </ul>
    </div>
    `;

document.addEventListener('DOMContentLoaded', function () {
    open.click();
});

let close = document.getElementById('buttonCloseModal');

close.onclick = ()=>{
    modal__conteudo.removeChild(modal__conteudo.children[0]);
    input.focus();
}